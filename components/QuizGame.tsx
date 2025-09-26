import React, { useState, useEffect, useCallback, useRef } from 'react';
import type { Grade, Topic, Question } from '../types';
import { generateQuizQuestions, generateTopicExplanation } from '../services/geminiService';
import { speechService } from '../services/speechService';
import { StarIcon } from './icons/StarIcon';

// Let TypeScript know about MathJax on the window object
declare global {
  interface Window {
    MathJax: {
      typesetPromise: () => Promise<void>;
    };
    webkitAudioContext: typeof AudioContext;
  }
}


interface QuizGameProps {
  grade: Grade;
  topic: Topic;
  onGameEnd: () => void;
}

const QuizGame: React.FC<QuizGameProps> = ({ grade, topic, onGameEnd }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [explanation, setExplanation] = useState<string>('');
  const [gamePhase, setGamePhase] = useState<'explanation' | 'quiz'>('explanation');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const playSound = useCallback((type: 'correct' | 'incorrect' | 'end') => {
    try {
      if (!audioContextRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          audioContextRef.current = new AudioContext();
        }
      }
      const audioContext = audioContextRef.current;
      if (!audioContext) return;
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }

      const now = audioContext.currentTime;

      if (type === 'end') {
        const freqs = [440, 659, 880];
        freqs.forEach((freq, i) => {
          const osc = audioContext.createOscillator();
          const gain = audioContext.createGain();
          osc.connect(gain);
          gain.connect(audioContext.destination);
          
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + i * 0.15);
          
          gain.gain.setValueAtTime(0.15, now + i * 0.15);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.15 + 0.2);

          osc.start(now + i * 0.15);
          osc.stop(now + i * 0.15 + 0.2);
        });
        return;
      }
      
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.type = 'triangle';
      gainNode.gain.setValueAtTime(0.15, now);
      
      if (type === 'correct') {
        oscillator.frequency.setValueAtTime(800, now);
        oscillator.frequency.linearRampToValueAtTime(1200, now + 0.1);
      } else { // incorrect
        oscillator.frequency.setValueAtTime(300, now);
        oscillator.frequency.linearRampToValueAtTime(150, now + 0.15);
      }
      
      oscillator.start(now);
      oscillator.stop(now + 0.15);

    } catch (e) {
      console.error("Could not play sound:", e);
    }
  }, []);

  const fetchExplanationAndQuestions = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      // First get explanation
      const topicExplanation = await generateTopicExplanation(grade, topic.name);
      setExplanation(topicExplanation);
      
      // Then get questions
      const fetchedQuestions = await generateQuizQuestions(grade, topic.name);
      setQuestions(fetchedQuestions);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bilinmeyen bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  }, [grade, topic.name]);

  useEffect(() => {
    fetchExplanationAndQuestions();
  }, [fetchExplanationAndQuestions]);

  useEffect(() => {
    if (window.MathJax && !loading && questions.length > 0) {
      window.MathJax.typesetPromise?.();
    }
  }, [currentQuestionIndex, questions, loading]);
  
  useEffect(() => {
    if (currentQuestionIndex >= questions.length && questions.length > 0 && !loading) {
      playSound('end');
    }
  }, [currentQuestionIndex, questions.length, loading, playSound]);


  const handleAnswerSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);
    if (option === questions[currentQuestionIndex].correctAnswer) {
      setScore(prevScore => prevScore + 1);
      playSound('correct');
    } else {
      playSound('incorrect');
    }
  };
  
  const resetForRetry = () => {
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setGamePhase('explanation');
    fetchExplanationAndQuestions();
  };

  const handleStartQuiz = () => {
    speechService.stop();
    setIsSpeaking(false);
    setGamePhase('quiz');
  };

  const handleSpeak = async () => {
    if (isSpeaking) {
      speechService.stop();
      setIsSpeaking(false);
    } else {
      try {
        setIsSpeaking(true);
        await speechService.speak(explanation);
        setIsSpeaking(false);
      } catch (error) {
        console.error('Speech error:', error);
        setIsSpeaking(false);
      }
    }
  };


  const handleNextQuestion = () => {
    setIsAnswered(false);
    setSelectedAnswer(null);
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

  const getButtonClass = (option: string) => {
    if (!isAnswered) {
      return 'bg-white hover:bg-blue-100 text-blue-800 border-blue-300';
    }
    const isCorrect = option === questions[currentQuestionIndex].correctAnswer;
    const isSelected = option === selectedAnswer;

    if (isCorrect) return 'bg-green-500 border-green-600 text-white';
    if (isSelected) return 'bg-red-500 border-red-600 text-white';
    return 'bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed';
  };

  if (loading) {
    return (
      <div className="text-center p-8">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mx-auto"></div>
        <h3 className="text-2xl font-semibold text-gray-700 mt-6">İçerik Hazırlanıyor...</h3>
        <p className="text-gray-500">Yapay zeka senin için konu anlatımı ve soruları hazırlıyor!</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 bg-red-50 rounded-lg">
        <h3 className="text-2xl font-semibold text-red-700 mb-4">Oops! Bir Hata Oluştu</h3>
        <p className="text-red-600 mb-6">{error}</p>
        <button onClick={onGameEnd} className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600 transition-colors">
          Geri Dön
        </button>
      </div>
    );
  }
  
  if(questions.length === 0){
      return (
          <div className="text-center p-8">
              <h3 className="text-2xl font-semibold text-gray-700">İçerik yüklenemedi.</h3>
              <button onClick={onGameEnd} className="mt-4 bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors">
                  Konu Seçimine Geri Dön
              </button>
          </div>
      );
  }

  // Explanation phase
  if (gamePhase === 'explanation') {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{topic.name}</h2>
          <p className="text-gray-600">{grade}. Sınıf Matematik</p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              🧠 Konu Anlatımı
            </h3>
            {speechService.isSupported() && (
              <button
                onClick={handleSpeak}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isSpeaking 
                    ? 'bg-red-500 hover:bg-red-600 text-white' 
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                {isSpeaking ? '🔇 Durdur' : '🔊 Sesli Anlat'}
              </button>
            )}
          </div>
          
          <div className="bg-white rounded-lg p-4 text-gray-700 leading-relaxed">
            {explanation.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-3 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleStartQuiz}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            🎯 Teste Başla
          </button>
          <p className="text-gray-500 mt-2 text-sm">
            Konu anlatımını dinledikten sonra teste başlayabilirsin!
          </p>
        </div>
      </div>
    );
  }

  if (currentQuestionIndex >= questions.length) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="text-center animate-fade-in p-8">
        <h3 className="text-4xl font-bold text-gray-800 mb-4">Test Bitti!</h3>
        <div className="flex justify-center items-center text-6xl font-bold my-6 text-amber-500">
            {[...Array(score)].map((_, i) => <StarIcon key={`gold-${i}`} className="w-16 h-16 text-yellow-400" />)}
            {[...Array(questions.length - score)].map((_, i) => <StarIcon key={`gray-${i}`} className="w-16 h-16 text-gray-300" />)}
        </div>
        <p className="text-2xl text-gray-700 mb-2">
          Skorun: <span className="font-bold">{score} / {questions.length}</span>
        </p>
         <p className="text-lg text-gray-600 mb-8">Başarı Oranın: %{percentage}</p>
        <div className="flex justify-center gap-4">
          <button onClick={resetForRetry} className="bg-blue-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors">
            Tekrar Oyna
          </button>
          <button onClick={onGameEnd} className="bg-gray-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-600 transition-colors">
            Başka Konu Seç
          </button>
        </div>
      </div>
    );
  }
  
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="animate-fade-in">
        <div className="mb-6 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-700">{topic.emoji} {topic.name}</h2>
            <div className="text-lg font-semibold text-gray-600 bg-gray-100 px-4 py-1 rounded-full">
                Soru: {currentQuestionIndex + 1} / {questions.length}
            </div>
        </div>
      <div className="bg-gray-50 p-6 rounded-lg mb-6 shadow-inner">
        <p className="text-2xl font-medium text-gray-800 text-center">{currentQuestion.question}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(option)}
            disabled={isAnswered}
            className={`w-full p-4 rounded-lg border-2 text-lg font-semibold transition-all duration-200 transform ${getButtonClass(option)} ${isAnswered ? '' : 'hover:scale-105'}`}
          >
            {option}
          </button>
        ))}
      </div>
        {isAnswered && (
            <div className="mt-6 text-center">
                 <button onClick={handleNextQuestion} className="w-full md:w-auto bg-indigo-500 text-white font-bold py-3 px-12 rounded-lg hover:bg-indigo-600 transition-colors shadow-lg animate-bounce">
                    {currentQuestionIndex === questions.length - 1 ? 'Sonuçları Gör' : 'Sonraki Soru'}
                </button>
            </div>
        )}
    </div>
  );
};

export default QuizGame;