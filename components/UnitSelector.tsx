import React from 'react';
import type { Unit } from '../types';
import { GRADE_3_UNITS } from '../constants';

interface UnitSelectorProps {
  onSelectUnit: (unit: Unit) => void;
  onBack: () => void;
}

const UnitSelector: React.FC<UnitSelectorProps> = ({ onSelectUnit, onBack }) => {
  const units = GRADE_3_UNITS;

  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="text-blue-600 hover:text-blue-800 font-semibold transition-colors mr-4 p-2 rounded-full hover:bg-blue-100">
          &larr; Geri
        </button>
        <h2 className="text-3xl font-bold text-gray-700">
          3. Sınıf Üniteleri
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {units.map((unit) => (
          <button
            key={unit.id}
            onClick={() => onSelectUnit(unit)}
            className={`${unit.color} text-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center`}
          >
            <span className="text-5xl mb-3">{unit.emoji}</span>
            <span className="text-xl font-semibold">{unit.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default UnitSelector;
