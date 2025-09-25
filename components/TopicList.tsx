import React from 'react';
import type { Topic } from '../types';

interface TopicListProps {
  title: string;
  topics: Topic[];
  onSelectTopic: (topic: Topic) => void;
  onBack: () => void;
}

const TopicList: React.FC<TopicListProps> = ({ title, topics, onSelectTopic, onBack }) => {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="text-blue-600 hover:text-blue-800 font-semibold transition-colors mr-4 p-2 rounded-full hover:bg-blue-100">
          &larr; Geri
        </button>
        <h2 className="text-3xl font-bold text-gray-700">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => onSelectTopic(topic)}
            className={`${topic.color} text-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center`}
          >
            <span className="text-5xl mb-3">{topic.emoji}</span>
            <span className="text-xl font-semibold">{topic.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopicList;