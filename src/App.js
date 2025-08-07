/*import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Star, Users, Award, BookOpen, TrendingUp, ChevronRight, Play, Check } from 'lucide-react';

const ShraddhaInstitute = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'programs', 'franchise', 'training', 'gallery', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
     
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg sticky top-0 z-50">
       
        <div className="bg-orange-700 py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span className="flex items-center"><Phone size={14} className="mr-1" /> +91-98 995 11 778</span>
              <span className="flex items-center"><Mail size={14} className="mr-1" /> info@shraddha-institute.com</span>
            </div>
            <div className="text-sm">Opening Time: 9:30am-5:30pm</div>
          </div>
        </div>

        
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <BookOpen className="text-orange-500" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold">SHRADDHA INSTITUTE</h1>
                <p className="text-xs opacity-90">ACADEMY</p>
              </div>
            </div>

           
            <nav className="hidden lg:flex space-x-8">
              {['HOME', 'ABOUT US', 'PROGRAMS', 'FRANCHISE', 'TRAINING', 'GALLERY', 'CONTACT US'].map((item, index) => {
                const sectionId = item.toLowerCase().replace(' us', '').replace(' ', '');
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className={`hover:text-orange-200 transition-colors font-medium ${
                      activeSection === sectionId ? 'text-orange-200 border-b-2 border-orange-200' : ''
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </nav>

          
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4">
              {['HOME', 'ABOUT US', 'PROGRAMS', 'FRANCHISE', 'TRAINING', 'GALLERY', 'CONTACT US'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' us', '').replace(' ', ''))}
                  className="block w-full text-left py-2 hover:text-orange-200 transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

     
      <section id="home" className="relative bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block p-2 bg-orange-100 rounded-full">
                <BookOpen className="text-orange-500" size={32} />
              </div>
              <h1 className="text-5xl font-bold text-gray-800 leading-tight">
                Start Your Own
                <span className="text-orange-500 block">Math Academy</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join Shraddha Institute's proven franchise system. Get comprehensive training in Abacus & Vedic Math, 
                complete business support, and start your journey as an education entrepreneur.
              </p>
              
              <div className="space-y-4 text-gray-700">
                <p>✓ Abacus Online & Offline Classes for Kids</p>
                <p>✓ Vedic Math Teacher Training Programs</p>
                <p>✓ Complete Franchise Support System</p>
                <p>✓ ISO 9001:2015 Certified Institute</p>
              </div>

              <div className="flex space-x-4">
                <button 
                  onClick={() => scrollToSection('franchise')}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center"
                >
                  Join Franchise <ChevronRight size={20} className="ml-2" />
                </button>
                <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center">
                  <Play size={20} className="mr-2" /> Watch Demo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-3xl p-8 relative overflow-hidden">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg">
                    <Users className="text-orange-500" size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Happy Student</h3>
                  <p className="text-gray-600">Building Future Mathematicians</p>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-300 rounded-full opacity-50"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-orange-200 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>

      
        <div className="bg-orange-100 py-12 mt-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-orange-600">500+</div>
                <div className="text-gray-600">Success Stories</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-orange-600">50+</div>
                <div className="text-gray-600">Expert Instructors</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-orange-600">1000+</div>
                <div className="text-gray-600">Active Students</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-orange-600">25+</div>
                <div className="text-gray-600">Franchise Centers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Shraddha Institute</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the revolution in mathematical education through innovative teaching methods and comprehensive franchise support.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">Why Choose Shraddha Institute?</h3>
              <p className="text-gray-600 leading-relaxed">
                With over a decade of experience in mathematical education, Shraddha Institute has pioneered 
                innovative teaching methodologies that make learning fun and effective. Our proven curriculum 
                combines traditional Vedic mathematics with modern abacus techniques.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">ISO 9001:2015 Certified</h4>
                    <p className="text-gray-600">Quality assured educational programs and training systems.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Proven Methodology</h4>
                    <p className="text-gray-600">Time-tested curriculum with outstanding student results.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Complete Support</h4>
                    <p className="text-gray-600">End-to-end franchise support from setup to operations.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-orange-50 p-6 rounded-xl text-center">
                <Award className="text-orange-500 mx-auto mb-4" size={40} />
                <h4 className="font-bold text-gray-800">Excellence Award</h4>
                <p className="text-gray-600 text-sm mt-2">Best Education Franchise 2024</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl text-center">
                <TrendingUp className="text-orange-500 mx-auto mb-4" size={40} />
                <h4 className="font-bold text-gray-800">Growth Rate</h4>
                <p className="text-gray-600 text-sm mt-2">300% YoY Expansion</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl text-center">
                <Users className="text-orange-500 mx-auto mb-4" size={40} />
                <h4 className="font-bold text-gray-800">Community</h4>
                <p className="text-gray-600 text-sm mt-2">50+ Franchise Partners</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl text-center">
                <Star className="text-orange-500 mx-auto mb-4" size={40} />
                <h4 className="font-bold text-gray-800">Rating</h4>
                <p className="text-gray-600 text-sm mt-2">4.9/5 Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section id="programs" className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mathematical education programs designed to enhance mental calculation abilities and boost confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Abacus Program</h3>
              <p className="text-gray-600 text-center mb-6">
                Mental math mastery through traditional abacus techniques. Suitable for ages 4-14 years.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><Check size={16} className="text-orange-500 mr-2" /> 8 Levels of Progressive Learning</li>
                <li className="flex items-center"><Check size={16} className="text-orange-500 mr-2" /> Online & Offline Classes</li>
                <li className="flex items-center"><Check size={16} className="text-orange-500 mr-2" /> Individual Attention</li>
                <li className="flex items-center"><Check size={16} className="text-orange-500 mr-2" /> International Competitions</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Vedic Math</h3>
              <p className="text-gray-600 text-center mb-6">
                Ancient Indian mathematical techniques for faster calculations and problem-solving.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><Check size={16} className="text-orange-500 mr-2" /> 16 Vedic Sutras</li>
                <li className="flex items-center"><Check size={16} className="text-orange-500 mr-2" /> Speed Calculation</li>
                <li className="flex items-center"><Check size={16} className="text-orange-500 mr-2" /> Competitive Exam Prep</li>
                <li className="flex items-center"><Check size={16} className="text-orange-500 mr-2" /> Age 8+ to Adults</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Teacher Training</h3>
              <p className="text-gray-600 text-center mb-6">
                Comprehensive certification program for aspiring abacus and vedic math instructors.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><Check size={16} className="text-orange-500 mr-2" /> 40-Hour Intensive Training</li>
                <li className="flex items-center"><Check size={16} className="text-orange-500 mr-2" /> Certification Provided</li>
                <li className="flex items-center"><Check size={16} className="text-orange-500 mr-2" /> Teaching Materials</li>
                <li className="flex items-center"><Check size={16} className="text-orange-500 mr-2" /> Ongoing Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    
      <section id="franchise" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Franchise Opportunity</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our growing network of successful education entrepreneurs and make a difference in your community.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-800">Why Partner With Us?</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Low Investment, High Returns</h4>
                  <p className="text-gray-600">Start your education business with minimal investment and proven profitability models.</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Complete Training & Support</h4>
                  <p className="text-gray-600">Comprehensive training programs, marketing support, and ongoing business guidance.</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Proven Curriculum</h4>
                  <p className="text-gray-600">Time-tested teaching materials and methodologies with excellent student outcomes.</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Brand Recognition</h4>
                  <p className="text-gray-600">Benefit from our established brand reputation and marketing expertise.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Franchise Package Includes</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-gray-700">Complete Teacher Training Certification</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-gray-700">Student Learning Materials & Books</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-gray-700">Marketing & Promotional Materials</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-gray-700">Online Learning Management System</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-gray-700">Business Setup & Operations Guide</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-gray-700">Ongoing Support & Updates</span>
                </div>
              </div>

              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold transition-colors mt-8"
              >
                Start Your Franchise Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      
      <section id="training" className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Teacher Training Program</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Become a certified instructor with our comprehensive training program designed to create expert educators.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-4">Foundation Training</h3>
              <p className="text-gray-600 text-center mb-4">
                Learn the fundamentals of abacus and vedic mathematics with hands-on practice sessions.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Abacus basics and techniques</li>
                <li>• Vedic math principles</li>
                <li>• Teaching methodology</li>
                <li>• Child psychology basics</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-4">Advanced Techniques</h3>
              <p className="text-gray-600 text-center mb-4">
                Master advanced concepts and learn effective classroom management strategies.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Complex calculations</li>
                <li>• Speed building techniques</li>
                <li>• Classroom management</li>
                <li>• Assessment methods</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-4">Certification & Support</h3>
              <p className="text-gray-600 text-center mb-4">
                Get certified and receive ongoing support to build your successful teaching career.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Official certification</li>
                <li>• Teaching materials</li>
                <li>• Marketing support</li>
                <li>• Continuous updates</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Ready to Transform Lives Through Math Education?</h3>
                <p className="text-orange-100 mb-6">
                  Join our next teacher training batch and become part of the mathematical education revolution. 
                  Limited seats available for each batch.
                </p>
                <div className="flex items-center space-x-4 text-orange-100">
                  <span>⏰ Next Batch: Starting Soon</span>
                  <span>👥 Limited to 20 participants</span>
                </div>
              </div>
              <div className="text-center">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-orange-500 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  Register for Training <ChevronRight size={20} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Witness the success stories of our students and franchise partners across the nation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-6 aspect-square flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Award className="text-orange-500" size={32} />
                  </div>
                  <h4 className="font-bold text-gray-800">Achievement {item}</h4>
                  <p className="text-gray-600 text-sm mt-2">Student Success Story</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section id="contact" className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your journey with Shraddha Institute? Contact us today for franchise opportunities and training programs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-800">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Phone Number</h4>
                    <p className="text-gray-600">+91-98 995 11 778</p>
                    <p className="text-gray-600">+91-22 1234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Email Address</h4>
                    <p className="text-gray-600">info@shraddha-institute.com</p>
                    <p className="text-gray-600">franchise@shraddha-institute.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Address</h4>
                    <p className="text-gray-600">D-5/22, L.G.F, ARDEE CITY,<br />SECTOR-52, GURGAON-122011</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors">
                    Download Franchise Brochure
                  </button>
                  <button className="w-full border-2 border-orange-500 text-orange-500 hover:bg-orange-50 py-3 rounded-lg font-semibold transition-colors">
                    Schedule Free Demo
                  </button>
                  <button className="w-full border-2 border-orange-500 text-orange-500 hover:bg-orange-50 py-3 rounded-lg font-semibold transition-colors">
                    Register for Training
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    placeholder="Your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Interest</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none">
                    <option value="">Select your interest</option>
                    <option value="franchise">Franchise Opportunity</option>
                    <option value="training">Teacher Training</option>
                    <option value="student">Student Admission</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    placeholder="Tell us more about your requirements"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <BookOpen className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">SHRADDHA INSTITUTE</h3>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Leading mathematical education franchise providing comprehensive training and support to aspiring educators.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
                  <span className="text-xs font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
                  <span className="text-xs font-bold">t</span>
                </div>
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
                  <span className="text-xs font-bold">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-orange-500 transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-orange-500 transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('programs')} className="hover:text-orange-500 transition-colors">Programs</button></li>
                <li><button onClick={() => scrollToSection('franchise')} className="hover:text-orange-500 transition-colors">Franchise</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li><span className="hover:text-orange-500 transition-colors cursor-pointer">Abacus Training</span></li>
                <li><span className="hover:text-orange-500 transition-colors cursor-pointer">Vedic Mathematics</span></li>
                <li><span className="hover:text-orange-500 transition-colors cursor-pointer">Teacher Training</span></li>
                <li><span className="hover:text-orange-500 transition-colors cursor-pointer">Online Classes</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><Phone size={16} className="mr-2" /> +91-98 995 11 778</li>
                <li className="flex items-center"><Mail size={16} className="mr-2" /> info@shraddha-institute.com</li>
                <li className="flex items-start"><MapPin size={16} className="mr-2 mt-1 flex-shrink-0" /> D-5/22, L.G.F, ARDEE CITY, SECTOR-52, GURGAON</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 Shraddha Institute. All rights reserved. | ISO 9001:2015 Certified</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShraddhaInstitute; */

import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Franchise from "./components/Franchise";
import Training from "./components/Training";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import FreeDemo from "./components/FreeDemo";
import Footer from "./components/Footer";
import Info from "./components/Info";
import 'aos/dist/aos.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
    
      <Programs />
      <Franchise />
      <Training />
      <Gallery />
      <ContactForm />
      <FreeDemo />
      <Footer />
    </div>
  );
}

export default App;
