import React, { useState } from 'react';

const stages = [
  {
    title: "Pre-Structural",
    icon: "●",
    description: "I don't really know anything about this.",
    details: "At this stage, learning is minimal or non-existent. The learner may have scattered, unconnected information without any real understanding.",
    color: "bg-indigo-100 hover:bg-indigo-200"
  },
  {
    title: "Uni-Structural",
    icon: "▮",
    description: "I know one thing about this.",
    details: "Basic understanding of one aspect of the topic. The learner can identify, name, or follow simple procedures.",
    color: "bg-indigo-200 hover:bg-indigo-300"
  },
  {
    title: "Multi-Structural",
    icon: "▮▮▮",
    description: "I know three or more things but I'm not sure when or why to use it.",
    details: "Understanding of several aspects of the topic, but they are treated independently. The learner can enumerate, describe, list, and combine.",
    color: "bg-indigo-300 hover:bg-indigo-400"
  },
  {
    title: "Relational",
    icon: "▮▮▮",
    description: "I can do this and I know when and why I should use this.",
    details: "Understanding of how different aspects of the topic relate to each other. The learner can compare, contrast, explain causes, analyze, and integrate.",
    color: "bg-indigo-400 hover:bg-indigo-500"
  },
  {
    title: "Extended Abstract",
    icon: "▮▮▮↗",
    description: "I am able to model or teach this to others. I can even use what I know in other contexts.",
    details: "Deep understanding that extends beyond the immediate topic. The learner can theorize, generalize, hypothesize, and reflect.",
    color: "bg-indigo-500 hover:bg-indigo-600"
  }
];

const LearningStages = () => {
  const [activeStage, setActiveStage] = useState(null);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Learning Stages</h2>
      <div className="grid gap-4">
        {stages.map((stage, index) => (
          <div
            key={stage.title}
            className={`group ${stage.color} rounded-lg p-4 transition-transform transition-colors duration-700 ease-in-out transform hover:scale-105 cursor-pointer shadow-sm hover:shadow-md`}
            onMouseEnter={() => setActiveStage(index)}
            onMouseLeave={() => setActiveStage(null)}
          >
            <div className="flex items-start space-x-4">
              <div className="text-2xl font-mono mt-1 transition-all duration-700 ease-in-out group-hover:scale-110">
                {stage.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2 transition-all duration-700 ease-in-out group-hover:translate-x-2">
                  {stage.title}
                </h3>
                <p className="text-gray-700 transition-all duration-700 ease-in-out group-hover:translate-x-2">
                  {stage.description}
                </p>
                <div 
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    activeStage === index ? 'max-h-32 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 text-sm">
                    {stage.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-4 text-center">
        Hover over each stage to learn more details
      </p>
    </div>
  );
};

export default LearningStages;