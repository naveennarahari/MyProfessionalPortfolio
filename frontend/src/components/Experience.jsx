import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Building2, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { experiences } from '../mock';

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getTypeColor = (type) => {
    const colors = {
      'Leadership': 'bg-blue-100 text-blue-700',
      'Technical Leadership': 'bg-indigo-100 text-indigo-700',
      'Technical': 'bg-slate-100 text-slate-700'
    };
    return colors[type] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 mt-6 max-w-3xl mx-auto">
            A proven track record of delivering mission-critical platforms and leading high-performing teams
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className="mb-12 relative">
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

              {/* Content — always left-align text inside the card regardless of timeline side */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-slate-100 rounded-xl bg-white text-left">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-1">
                          {exp.role}
                        </h3>
                        <div className="flex items-center text-slate-600 mb-2">
                          <Building2 className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-slate-500 text-sm">
                          <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>{exp.duration}</span>
                          <span className="mx-2">•</span>
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <Badge className={`${getTypeColor(exp.type)} ml-4 flex-shrink-0`}>
                        {exp.type}
                      </Badge>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 mb-4">
                    {exp.description}
                  </p>

                  {/* Expandable highlights */}
                  {expandedId === exp.id && (
                    <div className="mt-4 space-y-3">
                      <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-sm text-slate-600 text-left">
                            <span className="text-blue-600 mr-2 mt-1 flex-shrink-0">▸</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4">
                        <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-slate-300">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Toggle button */}
                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="mt-4 flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200"
                  >
                    {expandedId === exp.id ? (
                      <><ChevronUp className="h-4 w-4 mr-1" />Show Less</>
                    ) : (
                      <><ChevronDown className="h-4 w-4 mr-1" />Show More</>
                    )}
                  </button>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
