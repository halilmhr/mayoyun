import React from 'react';
import type { Grade } from '../types';

interface GradeSelectorProps {
  onSelectGrade: (grade: Grade) => void;
}

const GradeButton: React.FC<{ grade: Grade; onClick: () => void; className: string; label: string; }> = ({ grade, onClick, className, label }) => (
    <button
        onClick={onClick}
        className={`w-full md:w-64 h-64 rounded-xl text-white font-bold text-4xl flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-opacity-50 ${className}`}
    >
        <span className="text-8xl mb-2">{grade}</span>
        {label}
    </button>
);

const GradeSelector: React.FC<GradeSelectorProps> = ({ onSelectGrade }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-700 mb-8">Sınıfını Seç</h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8">
        <GradeButton 
            grade={3} 
            onClick={() => onSelectGrade(3)} 
            className="bg-gradient-to-br from-green-400 to-cyan-500 focus:ring-cyan-300" 
            label="Sınıf"
        />
        <GradeButton 
            grade={4} 
            onClick={() => onSelectGrade(4)} 
            className="bg-gradient-to-br from-teal-400 to-blue-500 focus:ring-blue-300" 
            label="Sınıf"
        />
        <GradeButton 
            grade={5} 
            onClick={() => onSelectGrade(5)} 
            className="bg-gradient-to-br from-orange-400 to-red-500 focus:ring-red-300" 
            label="Sınıf"
        />
      </div>
    </div>
  );
};

export default GradeSelector;