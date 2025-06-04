import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Award, Check, Clock, Shield, Star, ThumbsUp, Hammer } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094480465-4e6c25fb4a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Keep Your Home Comfortable All Year Round
            </motion.h1>
            <motion.p 
              className="text-xl mb-8" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Professional heating and cooling solutions from the most trusted HVAC experts in the region. 100% satisfaction guaranteed.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <NavLink to="/contact" className="bg-white text-blue-700 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg text-center transition-colors">
                Schedule Service
              </NavLink>
              <NavLink to="/pricing" className="bg-transparent border-2 border-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg text-center transition-colors">
                View Pricing
              </NavLink>
            </motion.div>
            <div className="mt-10 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm">From 500+ happy customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our Professional Services</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              From routine maintenance to emergency repairs, our certified technicians are ready to provide the highest quality service for your home or business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Air Conditioning",
                description: "Installation, repair, and maintenance services for all AC brands and models.",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              },
              {
                title: "Heating Systems",
                description: "Expert service for furnaces, heat pumps, and all heating system types.",
                image: "https://images.unsplash.com/photo-1603807008857-ad66b70431aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80"
              },
              {
                title: "Indoor Air Quality",
                description: "Solutions for cleaner, healthier air including filtration and purification systems.",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <NavLink to="/pricing" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                    Learn more 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Why Choose CoolAir HVAC</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We've built our reputation on reliability, expertise, and customer satisfaction. Here's why homeowners trust us with their comfort.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Licensed & Certified",
                description: "Our technicians are fully licensed, insured, and certified to industry standards.",
                icon: <Award className="text-blue-600" size={24} />
              },
              {
                title: "100% Satisfaction",
                description: "We're not happy until you're happy, backed by our satisfaction guarantee.",
                icon: <ThumbsUp className="text-blue-600" size={24} />
              },
              {
                title: "24/7 Emergency Service",
                description: "HVAC emergencies don't wait, and neither do we. Available day or night.",
                icon: <Clock className="text-blue-600" size={24} />
              },
              {
                title: "Transparent Pricing",
                description: "Upfront, honest pricing with no hidden fees or surprise charges.",
                icon: <Shield className="text-blue-600" size={24} />
              },
              {
                title: "Experience & Expertise",
                description: "With over 25 years of experience, we've seen and solved it all.",
                icon: <Hammer className="text-blue-600" size={24} />
              },
              {
                title: "Energy Efficiency",
                description: "Solutions that not only improve comfort but reduce your energy bills.",
                icon: <Check className="text-blue-600" size={24} />
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>What Our Customers Say</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Los Angeles, CA",
                quote: "The team at CoolAir was professional, punctual, and solved our AC issues quickly. Highly recommended!",
                image: "https://randomuser.me/api/portraits/women/12.jpg",
                rating: 5
              },
              {
                name: "Michael Chen",
                location: "San Diego, CA",
                quote: "We've been using their maintenance plan for 3 years now. Our system runs perfectly and we've avoided any major repairs.",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                rating: 5
              },
              {
                name: "Jennifer Garcia",
                location: "Riverside, CA",
                quote: "Called with an emergency on a Sunday evening and they were at our house within an hour. Great service when you need it most!",
                image: "https://randomuser.me/api/portraits/women/23.jpg",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Ready for expert HVAC service?</h2>
              <p className="text-blue-100 max-w-xl">
                Contact us today to schedule a service appointment or to learn more about how we can improve your home's comfort.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink to="/contact" className="bg-white text-blue-700 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg text-center transition-colors">
                Contact Us
              </NavLink>
              <a href="tel:1-800-COOL-AIR" className="bg-transparent border-2 border-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg text-center transition-colors">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
