import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Code2, Users as UsersIcon, Briefcase } from 'lucide-react';
import { skills } from '../mock';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Leadership & Management',
      icon: UsersIcon,
      skills: skills.leadership,
      color: 'blue'
    },
    {
      title: 'Technical Expertise',
      icon: Code2,
      skills: skills.technical,
      color: 'indigo'
    },
    {
      title: 'Domain Knowledge',
      icon: Briefcase,
      skills: skills.domain,
      color: 'slate'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200',
      slate: 'bg-slate-100 text-slate-600 border-slate-200'
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 mt-6 max-w-3xl mx-auto">
            A comprehensive blend of leadership capabilities, technical proficiency, and deep domain expertise
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-slate-100 rounded-xl bg-white">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${getColorClasses(category.color)}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="mr-2 mb-2 text-xs border-slate-300 inline-block"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;