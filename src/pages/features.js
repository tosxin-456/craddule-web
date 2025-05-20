import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactGA from "react-ga4";

// Import components
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import BuildCTA from '../components/buildCTA';
import Subscribe from '../components/subscribe';

// Import feature icons
import Accelera from '../assets/images/accelera.svg';
import Hub from '../assets/images/clouse.svg';
import Builder from '../assets/images/timebuiled.svg';
import Chat from '../assets/images/chat.svg';
import KPI from '../assets/images/tracking.svg';
import Graphs from '../assets/images/set.svg';

// Import styles
import '../input.css';

const Features = () => {
  ReactGA.initialize("G-125ZTWLY25");
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
    title: "Features"
  });

  const navigate = useNavigate();
  const { referralCode } = useParams();

  useEffect(() => {
    if (referralCode) {
      localStorage.setItem('referralCode', referralCode);
    }
  }, [referralCode]);

  // Feature data with animation directions
  const features = [
    {
      img: Accelera,
      title: "Accelera8",
      desc: "Save time and launch your product just in time to infiltrate the market with no compromises on our service or your product quality.",
      // animation: "translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100" // Slide up
    },
    {
      img: Hub,
      title: "Craddule Hub",
      desc: "Store, categorize, and access your project documentation effortlessly. No more frantic searches for that crucial file—organize, access, and collaborate with ease.",
      // animation: "translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" // Slide left
    },
    {
      img: Builder,
      title: "Timeline Builder",
      desc: "Schedule, assign, and track tasks seamlessly, ensuring that your project stays on course and deadlines are met with ease. Say goodbye to missed timelines and hello to streamlined productivity.",
      // animation: "-translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100" // Slide down
    },
    {
      img: Chat,
      title: "Chat",
      desc: "Our communication tool keeps everyone on the same page. No more communication gaps—just smooth, transparent, and effective team communication.",
      // animation: "-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" // Slide right
    },
    {
      img: KPI,
      title: "KPI",
      desc: "Tracking your progress has never been made easier, see your performance indicators displayed as graphs for easy understanding.",
      // animation: "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100" // Scale up
    },
    {
      img: Graphs,
      title: "Graphs",
      desc: "Set, monitor, and manage your budgets effectively for different project stages. Stay within your financial boundaries while maximizing the impact of your resources.",
      // animation: "scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100" // Scale down
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Powerful Features</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Tools designed to streamline your startup journey from concept to launch
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-100 rounded-full transform scale-110 group-hover:scale-125 transition-transform duration-300 -z-10"></div>
                      <img
                        src={feature.img}
                        alt={feature.title}
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className={`text-gray-600 text-center transition-all duration-500 ${feature.animation}`}>
                    {feature.desc}
                  </p>
                </div>
                <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto wow animate__fadeInRight px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">How Our Features Benefit You</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 wow animate__fadeInleft md:grid-cols-2 gap-8">
            {[
              {
                title: "Streamlined Workflow",
                desc: "Our integrated tools work seamlessly together to eliminate friction in your development process",
                // animation: "translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" // Slide left
              },
              {
                title: "Time Efficiency",
                desc: "Automate repetitive tasks and focus on what matters most - building your product",
                // animation: "-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" // Slide right
              },
              {
                title: "Data-Driven Decisions",
                desc: "Comprehensive analytics and reporting help you make informed business choices",
                // animation: "translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100" // Slide up
              },
              {
                title: "Scalable Solutions",
                desc: "Our platform grows with your business, from MVP to enterprise-level operations",
                // animation: "-translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100" // Slide down
              }
            ].map((benefit, index) => (
              <div key={index} className="flex p-6 bg-white rounded-lg shadow-sm group hover:shadow-md transition-all duration-300">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-blue-600">{benefit.title}</h3>
                  <p className={`text-gray-700 transition-all duration-500 ${benefit.animation}`}>{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <BuildCTA />

      {/* Subscribe Section */}
      {/* <Subscribe /> */}

      <Footer />
    </div>
  );
};

export default Features;