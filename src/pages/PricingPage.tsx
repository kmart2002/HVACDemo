import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { CircleAlert, Check, Info } from 'lucide-react';

const PricingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Transparent Pricing, Exceptional Value
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Our straightforward pricing ensures you know exactly what you're paying for. No hidden fees, no surprises—just honest service at competitive rates.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Our Service Categories
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose from our range of services designed to meet all your HVAC needs, from routine maintenance to complete system installations.
            </p>
          </div>

          {/* AC Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Air Conditioning Services
            </h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Starting Price
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { 
                      service: "AC Tune-Up & Inspection", 
                      description: "Comprehensive inspection and tune-up to ensure optimal performance and efficiency.",
                      price: "$89" 
                    },
                    { 
                      service: "AC Repair", 
                      description: "Diagnostic and repair service for all makes and models of air conditioners.",
                      price: "$129" 
                    },
                    { 
                      service: "AC Installation", 
                      description: "Professional installation of new air conditioning systems, including removal of old unit.",
                      price: "$2,500" 
                    },
                    { 
                      service: "Duct Cleaning", 
                      description: "Thorough cleaning of your ductwork to improve air quality and system efficiency.",
                      price: "$349" 
                    },
                    { 
                      service: "Refrigerant Recharge", 
                      description: "Testing and recharging your AC's refrigerant to proper levels.",
                      price: "$150" 
                    }
                  ].map((item, index) => (
                    <motion.tr 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.service}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 max-w-md">
                        {item.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-medium">
                        {item.price}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Heating Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Heating Services
            </h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Starting Price
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { 
                      service: "Furnace Tune-Up", 
                      description: "Seasonal maintenance to ensure your furnace runs safely and efficiently.",
                      price: "$99" 
                    },
                    { 
                      service: "Heating Repair", 
                      description: "Diagnostic and repair service for furnaces, heat pumps, and other heating systems.",
                      price: "$139" 
                    },
                    { 
                      service: "Furnace Installation", 
                      description: "Professional installation of new heating systems with proper sizing and setup.",
                      price: "$2,800" 
                    },
                    { 
                      service: "Heat Pump Service", 
                      description: "Specialized maintenance and repair for heat pump systems.",
                      price: "$119" 
                    },
                    { 
                      service: "Thermostat Installation", 
                      description: "Installation and programming of programmable or smart thermostats.",
                      price: "$125" 
                    }
                  ].map((item, index) => (
                    <motion.tr 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.service}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 max-w-md">
                        {item.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-medium">
                        {item.price}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Maintenance Plans
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Save money and prevent costly repairs with our affordable maintenance plans. Regular maintenance extends equipment life and ensures peak efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Plan",
                price: "$149",
                period: "per year",
                description: "Essential maintenance for single system homes",
                features: [
                  "Annual AC tune-up",
                  "Annual heating system tune-up",
                  "Filter replacement (standard filters)",
                  "15% discount on repairs",
                  "Priority scheduling"
                ],
                cta: "Get Started"
              },
              {
                name: "Premium Plan",
                price: "$249",
                period: "per year",
                description: "Complete coverage for optimal performance",
                features: [
                  "Bi-annual AC and heating tune-ups",
                  "Filter replacement (premium filters)",
                  "20% discount on repairs",
                  "Priority emergency service",
                  "Free service calls",
                  "Annual duct inspection"
                ],
                highlighted: true,
                cta: "Best Value"
              },
              {
                name: "Ultimate Plan",
                price: "$349",
                period: "per year",
                description: "Comprehensive protection and premium service",
                features: [
                  "Quarterly system check-ups",
                  "All Premium Plan features",
                  "25% discount on repairs",
                  "Free thermostat programming",
                  "Annual duct cleaning",
                  "Extended parts warranty",
                  "Indoor air quality assessment"
                ],
                cta: "Go Ultimate"
              }
            ].map((plan, index) => (
              <motion.div 
                key={index}
                className={`rounded-lg overflow-hidden shadow-lg ${plan.highlighted ? "ring-2 ring-blue-500 relative" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {plan.highlighted && (
                  <div className="bg-blue-500 text-white py-1 text-center text-sm font-medium">
                    MOST POPULAR
                  </div>
                )}
                <div className={`p-6 ${plan.highlighted ? "bg-white" : "bg-white"}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <NavLink
                    to="/contact"
                    className={`block text-center py-3 px-4 rounded-lg font-medium transition-colors ${plan.highlighted 
                      ? "bg-blue-600 text-white hover:bg-blue-700" 
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
                  >
                    {plan.cta}
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Info size={24} className="text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Important Information About Our Pricing</h3>
                <div className="text-gray-600 space-y-2">
                  <p>Prices listed are starting prices and may vary based on the specific requirements of your home or system. A detailed quote will be provided after an in-person assessment.</p>
                  <p>Emergency and after-hours services may incur additional charges. We offer financing options for larger installations and replacements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Flexible Financing Options
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get the HVAC system you need with payment plans that fit your budget. We offer several financing options with approved credit.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">0% Interest</h3>
                <p className="text-gray-600 mb-3">For 18 months on qualifying systems. No down payment required.</p>
                <div className="text-sm text-gray-500">*Subject to credit approval</div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Low Monthly Payments</h3>
                <p className="text-gray-600 mb-3">Payments as low as $99/month for qualified customers with longer terms available.</p>
                <div className="text-sm text-gray-500">*Based on approved credit and system cost</div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Special Offers</h3>
                <p className="text-gray-600 mb-3">Ask about our seasonal rebates and utility company incentives for energy-efficient upgrades.</p>
                <NavLink to="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
                  Contact us for details
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Ready to schedule service?</h2>
              <p className="text-blue-100 max-w-xl">
                Contact us today for a free quote or to schedule your next HVAC service appointment.
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

export default PricingPage;
