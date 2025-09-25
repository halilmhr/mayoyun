import React, { useState } from 'react';
import type { Grade, Topic, Unit } from './types';
import GradeSelector from './components/GradeSelector';
import UnitSelector from './components/UnitSelector';
import TopicList from './components/TopicList';
import QuizGame from './components/QuizGame';
import { BrainIcon } from './components/icons/BrainIcon';
import { GRADE_4_TOPICS, GRADE_5_TOPICS } from './constants';

type GameState = 'selecting_grade' | 'selecting_unit' | 'selecting_topic' | 'playing';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('selecting_grade');
  const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const handleGradeSelect = (grade: Grade) => {
    setSelectedGrade(grade);
    if (grade === 3) {
      setGameState('selecting_unit');
    } else {
      setGameState('selecting_topic');
    }
  };

  const handleUnitSelect = (unit: Unit) => {
    setSelectedUnit(unit);
    setGameState('selecting_topic');
  };

  const handleTopicSelect = (topic: Topic) => {
    setSelectedTopic(topic);
    setGameState('playing');
  };

  const handleBackToTopics = () => {
    setGameState('selecting_topic');
    setSelectedTopic(null);
  };
  
  const handleBackToUnits = () => {
    setGameState('selecting_unit');
    setSelectedUnit(null);
    setSelectedTopic(null);
  }

  const handleBackToGrades = () => {
    setGameState('selecting_grade');
    setSelectedGrade(null);
    setSelectedUnit(null);
    setSelectedTopic(null);
  };
  
  const getTopics = () => {
    if (selectedGrade === 3 && selectedUnit) {
      return selectedUnit.topics;
    }
    if (selectedGrade === 4) {
      return GRADE_4_TOPICS;
    }
    if (selectedGrade === 5) {
      return GRADE_5_TOPICS;
    }
    return [];
  };

  const renderContent = () => {
    switch (gameState) {
      case 'selecting_grade':
        return <GradeSelector onSelectGrade={handleGradeSelect} />;
      
      case 'selecting_unit':
        return <UnitSelector onSelectUnit={handleUnitSelect} onBack={handleBackToGrades} />;

      case 'selecting_topic':
        const topics = getTopics();
        const title = selectedGrade === 3 && selectedUnit
          ? selectedUnit.name
          : `${selectedGrade}. Sınıf Konuları`;
        const onBack = selectedGrade === 3 ? handleBackToUnits : handleBackToGrades;
        return <TopicList title={title} topics={topics} onSelectTopic={handleTopicSelect} onBack={onBack} />;
      
      case 'playing':
        return <QuizGame grade={selectedGrade!} topic={selectedTopic!} onGameEnd={handleBackToTopics} />;
      
      default:
        return <GradeSelector onSelectGrade={handleGradeSelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex flex-col items-center justify-center p-4 font-sans">
      <header className="mb-8 text-center">
        <div className="flex items-center justify-center gap-4">
          <BrainIcon className="h-16 w-16 text-indigo-500" />
          <h1 className="text-5xl font-bold text-gray-800 tracking-tight">
            Matematik Macerası
          </h1>
        </div>
        <p className="text-gray-600 mt-2 text-lg">Eğlenerek Öğrenmeye Hazır mısın?</p>
      </header>
      <main className="w-full max-w-4xl bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-10 border border-gray-200">
        {renderContent()}
      </main>
      <footer className="mt-8 text-sm text-gray-500">
        <p>&copy; 2024 Math Adventure Quiz. AI by Gemini.</p>
      </footer>
    </div>
  );
};

export default App;