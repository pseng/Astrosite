import React, { useState } from 'react';

const icons = {
  PreStructural: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
      <circle cx="12" cy="12" r="6" strokeWidth="1.5" />
    </svg>
  ),
  UniStructural: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
      <line x1="8" y1="12" x2="16" y2="12" strokeWidth="1.5" />
    </svg>
  ),
  MultiStructural: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
      <line x1="6" y1="12" x2="18" y2="12" strokeWidth="1.5" />
      <line x1="6" y1="8" x2="18" y2="8" strokeWidth="1.5" />
      <line x1="6" y1="16" x2="18" y2="16" strokeWidth="1.5" />
    </svg>
  ),
  Relational: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
      <circle cx="8" cy="8" r="2" strokeWidth="1.5" />
      <circle cx="16" cy="8" r="2" strokeWidth="1.5" />
      <circle cx="8" cy="16" r="2" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="2" strokeWidth="1.5" />
      <line x1="8" y1="8" x2="16" y2="16" strokeWidth="1.5" />
      <line x1="16" y1="8" x2="8" y2="16" strokeWidth="1.5" />
    </svg>
  ),
  ExtendedAbstract: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
      <circle cx="6" cy="12" r="2" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2" strokeWidth="1.5" />
      <circle cx="18" cy="12" r="2" strokeWidth="1.5" />
      <path d="M18 12 C18 8, 22 8, 22 12" strokeWidth="1.5" />
      <line x1="8" y1="12" x2="10" y2="12" strokeWidth="1.5" />
      <line x1="14" y1="12" x2="16" y2="12" strokeWidth="1.5" />
    </svg>
  )
};

const stages = [
  {
    title: "Pre-Structural",
    icon: icons.PreStructural,
    description: "I don't really know anything about this.",
    details: "At this stage, learning is minimal or non-existent. The learner may have scattered, unconnected information without any real understanding.",
    color: "bg-indigo-100 hover:bg-indigo-200",
    textColor: "text-gray-800"
  },
  {
    title: "Uni-Structural",
    icon: icons.UniStructural,
    description: "I know one thing about this.",
    details: "Basic understanding of one aspect of the topic. The learner can identify, name, or follow simple procedures.",
    color: "bg-indigo-200 hover:bg-indigo-300",
    textColor: "text-gray-800"
  },
  {
    title: "Multi-Structural",
    icon: icons.MultiStructural,
    description: "I know three or more things but I'm not sure when or why to use it.",
    details: "Understanding of several aspects of the topic, but they are treated independently. The learner can enumerate, describe, list, and combine.",
    color: "bg-indigo-300 hover:bg-indigo-400",
    textColor: "text-gray-800"
  },
  {
    title: "Relational",
    icon: icons.Relational,
    description: "I can do this and I know when and why I should use this.",
    details: "Understanding of how different aspects of the topic relate to each other. The learner can compare, contrast, explain causes, analyze, and integrate.",
    color: "bg-indigo-400 hover:bg-indigo-500",
    textColor: "text-white"
  },
  {
    title: "Extended Abstract",
    icon: icons.ExtendedAbstract,
    description: "I am able to model or teach this to others. I can even use what I know in other contexts.",
    details: "Deep understanding that extends beyond the immediate topic. The learner can theorize, generalize, hypothesize, and reflect.",
    color: "bg-indigo-500 hover:bg-indigo-600",
    textColor: "text-white"
  }
];

const LearningStages = () => {
  const [activeStage, setActiveStage] = useState(null);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Learning Stages</h2>
      <div className="grid gap-4">
        {stages.map((stage, index) => {
          const IconComponent = stage.icon;
          return (
            <div
              key={stage.title}
              className={`group ${stage.color} rounded-lg p-4 transition-transform transition-colors duration-700 ease-in-out transform hover:scale-105 cursor-pointer shadow-sm hover:shadow-md`}
              onMouseEnter={() => setActiveStage(index)}
              onMouseLeave={() => setActiveStage(null)}
            >
              <div className="flex items-start space-x-4">
                <div className="transition-all duration-700 ease-in-out group-hover:scale-110 text-indigo-600">
                  <IconComponent />
                </div>
                <div className="flex-1">
                  <h3 className={`font-bold text-lg mb-2 transition-all duration-700 ease-in-out group-hover:translate-x-2 ${stage.textColor || 'text-white'}`}>
                    {stage.title}
                  </h3>
                  <p className={`${stage.textColor || 'text-white'} opacity-90 transition-all duration-700 ease-in-out group-hover:translate-x-2`}>
                    {stage.description}
                  </p>
                  <div 
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${
                      activeStage === index ? 'max-h-32 opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className={`text-sm ${stage.textColor || 'text-white'} opacity-80`}>
                      {stage.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-sm text-gray-500 mt-4 text-center">
        Hover over each stage to learn more details
      </p>
    </div>
  );
};

export default LearningStages;