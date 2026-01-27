import React from 'react';
import { Card } from './ui/card';
import { Briefcase, Users, Activity, Shield } from 'lucide-react';
import { personalInfo, keyMetrics } from '../mock';

const iconMap = {
  briefcase: Briefcase,
  users: Users,
  activity: Activity,
  shield: Shield
};

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Summary */}
        <div className="mb-16">
          <p className="text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto text-center">
            {personalInfo.summary}
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {keyMetrics.map((metric, index) => {
            const IconComponent = iconMap[metric.icon];
            return (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow duration-300 border-2 border-slate-100 rounded-xl">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  {metric.label}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Value Proposition */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
            Transforming Tech Debt into Competitive Advantage
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Strategic Leadership</h4>
              <p className="text-slate-600">Leading cross-functional teams to deliver mission-critical platforms</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Regulatory Ready</h4>
              <p className="text-slate-600">Building audit-ready systems that withstand scrutiny</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Technical Excellence</h4>
              <p className="text-slate-600">Architecting scalable solutions for complex financial systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;