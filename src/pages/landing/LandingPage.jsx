import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight, Star, Check } from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation Component
  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MI</span>
            </div>
            <span className="font-bold text-lg text-blue-600 hidden sm:inline">MaintainIQ</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <Link to="/technician-dashboard" className="text-gray-600 hover:text-gray-900">Technician Dashboard</Link>
            <Link to="/user-dashboard" className="text-gray-600 hover:text-gray-900">User Dashboard</Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex gap-3">
            <button className="px-6 py-2 text-blue-600 font-semibold hover:text-blue-700">Sign Up</button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700">Login</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t">
            <a href="#home" className="block py-2 text-gray-600">Home</a>
            <a href="#features" className="block py-2 text-gray-600">Features</a>
            <Link to="/technician-dashboard" className="block py-2 text-gray-600">Technician Dashboard</Link>
            <Link to="/user-dashboard" className="block py-2 text-gray-600">User Dashboard</Link>
            <div className="flex gap-3 mt-4">
              <button className="flex-1 px-4 py-2 text-blue-600 font-semibold border border-blue-600 rounded-lg">Sign Up</button>
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold">Login</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  // Hero Section
  const HeroSection = () => (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 text-sm font-semibold mb-4">✨ AI-Powered Asset Intelligence</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Give Every Asset a <span className="text-blue-600 italic">Digital Identity</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Scan. Report. Diagnose. Maintain. AI-powered management for schools, hospitals, offices, and large-scale facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                Get Started Free
              </button>
              <button className="text-gray-700 px-8 py-3 font-semibold border border-gray-300 rounded-full hover:border-gray-400 transition">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop" 
                alt="AI Triage Feature" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <p className="text-blue-600 text-xs font-semibold mb-1">🎯 AI Triage</p>
              <p className="text-gray-900 font-semibold text-sm">Predictive Priority</p>
              <p className="text-gray-600 text-xs mt-1">Critical validation devices in motion</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-gray-200">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">15,000+</p>
            <p className="text-gray-600 text-sm mt-2">Assets Tracked</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">250+</p>
            <p className="text-gray-600 text-sm mt-2">Organizations</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">99%</p>
            <p className="text-gray-600 text-sm mt-2">System Uptime</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">24/7</p>
            <p className="text-gray-600 text-sm mt-2">Expert Support</p>
          </div>
        </div>
      </div>
    </section>
  );

  // Ecosystem Section
  const EcosystemSection = () => (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-gray-400 text-sm font-semibold tracking-wider mb-4">COMPREHENSIVE ECOSYSTEM</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">One platform, Infinite possibilities</h3>
        <p className="text-gray-600 mb-12 max-w-2xl">Explore our specialized modules designed for precision operations.</p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: '📋',
              title: 'Asset Management',
              desc: 'A powerful centralized database for high-value equipment with automated status tracking.'
            },
            {
              icon: '📈',
              title: 'Real-time Analytics',
              desc: 'Visualize downtime costs, technician efficiency, and lifecycle ROI through custom dashboards.'
            },
            {
              icon: '✓',
              title: 'Digital Audit Trails',
              desc: 'Chronological repair logs and inspection notes for every unit, accessible instantly via cloud sync.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition h-full">
              <p className="text-4xl mb-4">{item.icon}</p>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-600 text-sm sm:text-base mb-6">{item.desc}</p>
              <a href="#" className="text-blue-600 font-semibold text-sm sm:text-base flex items-center gap-2 hover:gap-3 transition">
                View Features <ChevronRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Testimonials Section
  const TestimonialsSection = () => (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">Trusted by Industry Leaders</h2>
        <p className="text-center text-gray-600 mb-12">Hear from those who are transforming their facilities with MaintainIQ.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              quote: "MaintainIQ transformed our hospital maintenance. We reduced response times by 40% in the first month.",
              author: "Dr. James Chen",
              role: "Facilities Manager, City Hospital",
              stars: 5
            },
            {
              quote: "The QR code scanning is a total game changer for our field technicians. Information is always at our fingertips.",
              author: "Sarah Miller",
              role: "Operations Lead, Metro Tech",
              stars: 5
            },
            {
              quote: "The AI triage feature helps us focus on what really matters. It's like adding an extra layer of oversight.",
              author: "Robert Lawson",
              role: "Estate Director, Ivy Schools",
              stars: 5
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 sm:p-8 shadow-md h-full">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={18} className="fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm sm:text-base italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.author}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Control Section
  const ControlSection = () => (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Universal Control, Simplified.</h2>
            <p className="text-gray-300 mb-8 md:mb-12 text-base sm:text-lg">Empower your decision-makers with holistic visibility. The Admin Panel centralizes every asset, technician, and report into a single high-performance interface.</p>

            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  title: 'Universal Asset Visibility',
                  desc: 'Track 10,000+ assets across multiple locations in one view.'
                },
                {
                  title: 'Custom Workflow Automation',
                  desc: 'Define logic-based triggers for maintenance cycles and alerts.'
                },
                {
                  title: 'Exportable Compliance Logs',
                  desc: 'Generate audit-ready reports in PDF or CSV with a single click.'
                }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-3 sm:gap-4">
                  <Check className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-sm sm:text-base">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1460925895917-adf4e20eca75?w=500&h=400&fit=crop"
              alt="Dashboard Preview"
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );

  // Reliability Section
  const ReliabilitySection = () => (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Engineered for Reliability</h2>
        <p className="text-gray-600 mb-12 text-base sm:text-lg max-w-3xl">MaintainIQ centralizes your operations with enterprise-grade features designed for modern infrastructure.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: '🔍',
              title: 'Universal Scanning',
              desc: 'Instant access to full repair history, manuals, and service logs with a single secure scan from any device.'
            },
            {
              icon: '🎯',
              title: 'Predictive Triage',
              desc: 'Our AI analyzes sensor data and reports to automatically categorize priority and suggest likely fixes.'
            },
            {
              icon: '⚙️',
              title: 'Smart Workflows',
              desc: 'Automated task routing from initial report to final resolution, ensuring zero bottlenecks in your team.'
            },
            {
              icon: '🛡️',
              title: 'Secure Audits',
              desc: 'Immutable logs for every inspection and repair. Maintain total compliance with zero manual paperwork.'
            },
            {
              icon: '🔐',
              title: 'Granular Access',
              desc: 'Define precise roles for admins, technicians, and external vendors to keep your data protected.'
            },
            {
              icon: '☁️',
              title: 'Cloud Scalability',
              desc: 'Global infrastructure that scales with your growth, from a single facility to international campus clusters.'
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-6 sm:p-8 hover:shadow-lg transition h-full">
              <p className="text-4xl mb-4">{feature.icon}</p>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 text-sm sm:text-base">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Footer
  const Footer = () => (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">MI</span>
              </div>
              <span className="font-bold text-white">MaintainIQ</span>
            </div>
            <p className="text-sm">The intelligence layer for your physical assets.</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-white transition">𝕏</a>
              <a href="#" className="hover:text-white transition">in</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Hero Overview</a></li>
              <li><a href="#" className="hover:text-white transition">Admin Tools</a></li>
              <li><a href="#" className="hover:text-white transition">Mobile App</a></li>
              <li><a href="#" className="hover:text-white transition">API Access</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">Partner Network</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Compliance</a></li>
              <li><a href="#" className="hover:text-white transition">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-sm text-center">
          <p>© 2024 MaintainIQ AI Platforms. Built for high reliability environments.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <EcosystemSection />
      <TestimonialsSection />
      <ControlSection />
      <ReliabilitySection />
      <Footer />
    </div>
  );
}
