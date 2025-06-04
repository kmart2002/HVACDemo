import { useState } from 'react';
import { motion } from 'framer-motion';
import { CircleCheck, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Get in Touch
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Have questions or ready to schedule service? We're here to help with all your HVAC needs.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Our Location</h3>
                    <p className="text-gray-600">123 Cooling Ave, Heatville, CA 90210</p>
                    <p className="text-gray-600 mt-1">Serving all of Southern California</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Phone Numbers</h3>
                    <p className="text-gray-600">Main Office: <a href="tel:1-800-COOL-AIR" className="text-blue-600 hover:text-blue-800">1-800-COOL-AIR</a></p>
                    <p className="text-gray-600 mt-1">Emergency Service: <a href="tel:1-888-HVAC-911" className="text-blue-600 hover:text-blue-800">1-888-HVAC-911</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Email Addresses</h3>
                    <p className="text-gray-600">General Inquiries: <a href="mailto:info@coolairhvac.com" className="text-blue-600 hover:text-blue-800">info@coolairhvac.com</a></p>
                    <p className="text-gray-600 mt-1">Customer Support: <a href="mailto:support@coolairhvac.com" className="text-blue-600 hover:text-blue-800">support@coolairhvac.com</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed (Emergency Service Available)</p>
                    <p className="text-gray-600 mt-2 font-medium">24/7 Emergency Service Available</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Service Areas
                </h3>
                <p className="text-gray-600 mb-4">
                  We proudly serve the following areas in Southern California:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {["Los Angeles", "San Diego", "Orange County", "Riverside", 
                    "San Bernardino", "Ventura", "Santa Barbara", "Palm Springs"].map((area, index) => (
                    <div key={index} className="bg-gray-50 rounded px-3 py-2 text-gray-700">
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Send Us a Message
              </h2>
              
              {formStatus === 'success' ? (
                <div className="bg-green-50 border border-green-100 rounded-lg p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <CircleCheck size={48} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting CoolAir HVAC. One of our representatives will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Needed</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="ac-repair">AC Repair</option>
                        <option value="ac-installation">AC Installation</option>
                        <option value="heating-repair">Heating Repair</option>
                        <option value="heating-installation">Heating Installation</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="indoor-air-quality">Indoor Air Quality</option>
                        <option value="other">Other (Please Specify)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Please describe what you need help with..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium flex justify-center items-center transition-colors ${
                      formStatus === 'submitting' ? 'bg-blue-400 cursor-not-allowed' : 'hover:bg-blue-700'
                    }`}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    We'll get back to you as soon as possible, usually within 24 hours.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Find Our Office
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our main office for consultations or to discuss your HVAC needs in person. We're conveniently located in central Southern California.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            {/* This would typically be an interactive map using Leaflet or Google Maps */}
            <div className="bg-gray-200 h-[400px] rounded flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-3 text-blue-600" />
                <p className="text-gray-700 font-medium">
                  Map would be displayed here using Leaflet or Google Maps
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services, scheduling, and policies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How quickly can you respond to service calls?",
                answer: "For standard service calls, we typically schedule appointments within 24-48 hours. For emergencies, we offer same-day service and our technicians are available 24/7 for urgent situations."
              },
              {
                question: "Do you offer warranties on your work?",
                answer: "Yes, all our repairs come with a 90-day labor warranty. New installations include manufacturer warranties on equipment (typically 5-10 years) plus our 2-year labor warranty."
              },
              {
                question: "How often should I schedule HVAC maintenance?",
                answer: "We recommend maintenance twice a year: once in spring for your cooling system and once in fall for your heating system. Regular maintenance extends equipment life and prevents costly breakdowns."
              },
              {
                question: "Do you offer financing options?",
                answer: "Yes, we offer several financing options for system replacements and major repairs, including 0% interest for qualifying customers and low monthly payment plans."
              },
              {
                question: "Are your technicians licensed and insured?",
                answer: "Absolutely. All our technicians are fully licensed, bonded, insured, and undergo rigorous background checks. They also receive ongoing training to stay current with the latest HVAC technologies."
              },
              {
                question: "What areas do you service?",
                answer: "We service all of Southern California, including Los Angeles, San Diego, Orange County, Riverside, San Bernardino, Ventura, Santa Barbara, and Palm Springs."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Call Section */}
      <section className="bg-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                HVAC Emergency?
              </h2>
              <p className="text-red-100">
                Our emergency team is available 24/7 for urgent heating and cooling issues.
              </p>
            </div>
            <a 
              href="tel:1-888-HVAC-911" 
              className="bg-white text-red-600 hover:bg-red-50 font-semibold px-6 py-3 rounded-lg flex items-center transition-colors"
            >
              <Phone className="mr-2" size={20} />
              Call Emergency Line
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
