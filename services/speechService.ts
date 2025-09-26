// Speech synthesis utility for text-to-speech functionality
export class SpeechService {
  private synth: SpeechSynthesis;
  private voices: SpeechSynthesisVoice[] = [];

  constructor() {
    this.synth = window.speechSynthesis;
    this.loadVoices();
  }

  private loadVoices() {
    this.voices = this.synth.getVoices();
    
    // If voices aren't loaded yet, wait for them
    if (this.voices.length === 0) {
      this.synth.addEventListener('voiceschanged', () => {
        this.voices = this.synth.getVoices();
      });
    }
  }

  private getTurkishVoice(): SpeechSynthesisVoice | null {
    // Try to find Turkish voice
    const turkishVoice = this.voices.find(voice => 
      voice.lang.startsWith('tr') || voice.name.toLowerCase().includes('turkish')
    );
    
    if (turkishVoice) return turkishVoice;
    
    // Fallback to any available voice
    return this.voices[0] || null;
  }

  speak(text: string): Promise<void> {
    return new Promise((resolve, reject) => {
      // Stop any ongoing speech
      this.synth.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      
      // Set voice
      const voice = this.getTurkishVoice();
      if (voice) {
        utterance.voice = voice;
      }
      
      // Configure speech settings for children
      utterance.rate = 0.9; // Slightly slower for better comprehension
      utterance.pitch = 1.2; // Higher pitch for children - more engaging
      utterance.volume = 1;

      utterance.onend = () => resolve();
      utterance.onerror = (error) => reject(error);

      this.synth.speak(utterance);
    });
  }

  stop() {
    this.synth.cancel();
  }

  isSupported(): boolean {
    return 'speechSynthesis' in window;
  }
}

export const speechService = new SpeechService();