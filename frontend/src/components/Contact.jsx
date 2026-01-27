import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../mock';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);
      
      if (response.data.success) {
        setStatus({
          type: 'success',
          message: response.data.message
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      
      let errorMessage = 'Failed to send message. Please try again later.';
      
      if (error.response?.data?.detail) {
        errorMessage = error.response.data.detail;
      } else if (error.message) {
        errorMessage = `Network error: ${error.message}`;
      }
      
      setStatus({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 mt-6 max-w-3xl mx-auto">
            Interested in board/advisory opportunities or senior leadership roles? Let's connect.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            <Card className="p-6 border-2 border-slate-100 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a href={`mailto:${personalInfo.email}`} className="flex items-start group hover:bg-blue-50 p-3 rounded-lg transition-colors duration-200">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-200">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Email</div>
                    <div className="text-sm text-slate-600">{personalInfo.email}</div>
                  </div>
                </a>

                <a href={`tel:${personalInfo.phone}`} className="flex items-start group hover:bg-blue-50 p-3 rounded-lg transition-colors duration-200">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-200">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Phone</div>
                    <div className="text-sm text-slate-600">{personalInfo.phone}</div>
                  </div>
                </a>

                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-start group hover:bg-blue-50 p-3 rounded-lg transition-colors duration-200">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-200">
                    <Linkedin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">LinkedIn</div>
                    <div className="text-sm text-slate-600">Connect on LinkedIn</div>
                  </div>
                </a>

                <div className="flex items-start p-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Location</div>
                    <div className="text-sm text-slate-600">{personalInfo.location}</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-slate-50 border-2 border-blue-100 rounded-xl">
              <h4 className="font-semibold text-slate-900 mb-3">Open to Opportunities</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Board/Advisory Roles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Senior Leadership Positions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Pre-IPO Fintech Consulting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Tech Governance & Compliance</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <Card className="p-8 border-2 border-slate-100 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-semibold text-slate-900 mb-2 block">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-slate-900 mb-2 block">
                      Your Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-sm font-semibold text-slate-900 mb-2 block">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Regarding..."
                    className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-semibold text-slate-900 mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={6}
                    className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg resize-none"
                  />
                </div>

                {status.message && (
                  <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    <div className="flex items-center">
                      {status.type === 'success' && <CheckCircle2 className="h-5 w-5 mr-2" />}
                      <span>{status.message}</span>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;