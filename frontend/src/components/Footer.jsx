import React from 'react';
import { personalInfo } from '../mock';
import { Linkedin, Mail, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{personalInfo.name}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Engineering Manager specializing in building scalable, compliant platforms for investment banking technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['about', 'experience', 'projects', 'skills', 'contact'].map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-slate-400 hover:text-white transition-colors duration-200 text-sm capitalize">
                    {id}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                <Mail className="h-4 w-4 mr-2" />
                <span>Email</span>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                <Phone className="h-4 w-4 mr-2" />
                <span>Phone</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                <Linkedin className="h-4 w-4 mr-2" />
                <span>LinkedIn</span>
              </a>
              <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                <Twitter className="h-4 w-4 mr-2" />
                <span>X (Twitter)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
