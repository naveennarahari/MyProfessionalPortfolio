import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Folder, CheckCircle2, Calendar } from 'lucide-react';
import { projects } from '../mock';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Key Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 mt-6 max-w-3xl mx-auto">
            Architecting and delivering enterprise-scale solutions for mission-critical financial systems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <Card key={project.id} className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-slate-100 rounded-xl">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Left: Project Info */}
                <div className="md:col-span-1 space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Folder className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {project.name}
                      </h3>
                      <p className="text-sm text-slate-600">{project.client}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-slate-600">
                      <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{project.duration}</span>
                    </div>
                    <div>
                      <Badge variant="outline" className="text-xs">
                        {project.domain}
                      </Badge>
                    </div>
                    <div>
                      <Badge className="bg-blue-100 text-blue-700 text-xs">
                        {project.methodology}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Right: Description & Impact */}
                <div className="md:col-span-2 space-y-4">
                  <p className="text-slate-700 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact */}
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide mb-3">Key Impact:</h4>
                    <ul className="space-y-2">
                      {project.impact.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-600">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-slate-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;