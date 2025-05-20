import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Features from './pages/features.js';
import Pricing from './pages/pricing.js';
import Countdown from './pages/countdown.js';
import N404 from './pages/404.js';
import PrivacyPolicy from './pages/privacy.js';
import { clarity } from 'react-microsoft-clarity';

function App() {
  clarity.init('ookmohtxc5');
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Fixed route structure - exact paths first, then parameterized routes */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/waiting" element={<Countdown />} />
          <Route path="/404" element={<N404 />} />

          {/* Routes with optional referral codes */}
          <Route path="/about/:referralCode" element={<About />} />
          <Route path="/contact/:referralCode" element={<Contact />} />
          <Route path="/features/:referralCode" element={<Features />} />
          <Route path="/pricing/:referralCode" element={<Pricing />} />
          <Route path="/waiting/:referralCode" element={<Countdown />} />
          <Route path="/privacy/:referralCode" element={<PrivacyPolicy />} />
          <Route path="/404/:referralCode" element={<N404 />} />

          {/* Home routes - root path with optional referral code */}
          <Route path="/:referralCode" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;