import BuildCTA from '../components/buildCTA';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactGA from "react-ga4";

// Import optimized images
import InnovationIcon from '../assets/images/innovation.jpeg';
import InclusionIcon from '../assets/images/inclusion.jpeg';
import CollaborationIcon from '../assets/images/collaboration.jpeg';
import ExcellenceIcon from '../assets/images/excellence.jpeg';
import TeamImage from '../assets/images/who.jpeg';
import VisionImage from '../assets/images/vision.jpeg';





// Import components
import Navbar from '../components/navbar';
import Footer from '../components/footer';

// Import styles
import '../input.css';
import PageSlider from '../components/slider';

const About = () => {
  ReactGA.initialize("G-125ZTWLY25");
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
    title: "About Us"
  });

  const navigate = useNavigate();
  const [referralCode, setReferralCode] = useState('');

  // Refs for animation sections
  const storyRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const ctaRef = useRef(null);
  const considerationsRef = useRef(null);

  // Animation states
  const [animatedSections, setAnimatedSections] = useState({
    story: false,
    mission: false,
    values: false,
    cta: false,
    considerations: false
  });

  useEffect(() => {
    const storedReferralCode = localStorage.getItem('referralCode');
    if (storedReferralCode) {
      setReferralCode(storedReferralCode);
    }

    // Set up intersection observer for animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setAnimatedSections(prev => ({
            ...prev,
            [id]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (storyRef.current) observer.observe(storyRef.current);
    if (missionRef.current) observer.observe(missionRef.current);
    if (valuesRef.current) observer.observe(valuesRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    if (considerationsRef.current) observer.observe(considerationsRef.current);

    return () => {
      if (storyRef.current) observer.unobserve(storyRef.current);
      if (missionRef.current) observer.unobserve(missionRef.current);
      if (valuesRef.current) observer.unobserve(valuesRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
      if (considerationsRef.current) observer.unobserve(considerationsRef.current);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section with Animation */}
      <div className="relative bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-slideDown">About Craddule</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full animate-scaleIn"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fadeIn animate-delay-300">
              Your trusted partner in turning innovative ideas into successful businesses.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section with Animation */}
      <section id="story" ref={storyRef} className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`order-2 md:order-1 ${animatedSections.story ? 'animate-slideRight' : 'opacity-0'}`}>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">Your Launchpad to Success</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6 rounded-full"></div>
              <p className="text-gray-700 leading-relaxed">
                Craddule is your ultimate toolkit for turning ideas into reality. Whether you're starting fresh or scaling up, we've got the tools to streamline your journey effortlessly.
              </p>
              <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                Learn More
              </button>
            </div>
            <div className={`order-1 md:order-2 ${animatedSections.story ? 'animate-slideLeft' : 'opacity-0'}`}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-64 h-64 bg-blue-100 rounded-full opacity-50 -z-10 animate-pulse"></div>
                <img
                  src={TeamImage}
                  alt="Team at Craddule"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section with Animation */}
      <section id="mission" ref={missionRef} className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`relative ${animatedSections.mission ? 'animate-slideRight' : 'opacity-0'}`}>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-blue-100 rounded-full opacity-50 -z-10 animate-pulse"></div>
              <img
                src={VisionImage}
                alt="Our Vision"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className={`${animatedSections.mission ? 'animate-slideLeft' : 'opacity-0'}`}>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Purpose</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">Our Mission</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6 rounded-full"></div>
              <p className="text-gray-700 leading-relaxed">
                Our mission is simple: to help startups succeed. At Craddule, we believe that innovation and entrepreneurship are the driving forces of progress. We understand the unique challenges that new ventures face and offer tailored solutions to meet these challenges head-on. Whether it's refining your business model, securing funding, or crafting a go-to-market strategy, Craddule is here to guide you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <PageSlider/> */}

      {/* Our Values Section with Animation */}
      <section id="values" ref={valuesRef} className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 ${animatedSections.values ? 'animate-fadeIn' : 'opacity-0'}`}>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">What We Stand For</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">Our Values</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-700">At Craddule, we're passionate about these core principles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              { icon: InnovationIcon, title: "Innovation", description: "We embrace creativity and outside-the-box thinking." },
              { icon: InclusionIcon, title: "Inclusion", description: "We support diversity and equal opportunities for all." },
              { icon: CollaborationIcon, title: "Collaboration", description: "We believe that together, we can achieve more." },
              { icon: ExcellenceIcon, title: "Excellence", description: "We strive for exceptional results and continuous improvement." }
            ].map((value, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 
                ${animatedSections.values ? `animate-fadeInUp animate-delay-${index * 2}00` : 'opacity-0'}`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 hover:scale-110 transition-transform duration-300">
                    <img src={value.icon} alt={value.title} className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                </div>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Animation */}
      <div id="cta" ref={ctaRef} className={animatedSections.cta ? 'animate-fadeIn' : 'opacity-0'}>
        <BuildCTA />
      </div>

      {/* Additional Considerations with Animation */}
      {/* <section id="considerations" ref={considerationsRef} className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 ${animatedSections.considerations ? 'animate-fadeIn' : 'opacity-0'}`}>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Looking Forward</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">Additional Considerations</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 
              ${animatedSections.considerations ? 'animate-slideRight' : 'opacity-0'}`}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Features/Add-ons</h3>
              <p className="text-gray-700">Offer additional features or modules as add-ons for users who need specialized functionalities beyond their subscribed tier.</p>
            </div>
            <div className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 
              ${animatedSections.considerations ? 'animate-slideLeft' : 'opacity-0'}`}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Feedback-Driven Improvements</h3>
              <p className="text-gray-700">Feedback is only given by industry professionals.</p>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};



export default About;