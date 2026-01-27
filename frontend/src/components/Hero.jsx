import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../mock';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                  {personalInfo.yearsOfExperience} Years of Excellence
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-blue-600">
                {personalInfo.title}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                {personalInfo.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-6 text-lg rounded-lg transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-2xl flex items-center justify-center">
                <div className="text-white text-8xl font-bold">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-8 -right-8 w-80 h-80 bg-blue-200 rounded-2xl"></div>
              <div className="absolute -z-20 -top-8 -left-8 w-80 h-80 bg-slate-200 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;