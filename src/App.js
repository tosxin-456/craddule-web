import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import BuildCTA from './components/buildCTA.js';
import Footer from './components/footer.js';
import Navbar from './components/navbar.js'
import Subscribe from './components/subscribe.js';
import Home from './pages/home.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Features from './pages/features.js';
import Pricing from './pages/pricing.js';
import Index from './pages/index.js';
import Countdown from './pages/countdown.js';
import N404 from './pages/404.js';
import { clarity } from 'react-microsoft-clarity';

function App() {
  clarity.init('ookmohtxc5');
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/:referralCode?' Component={Home} />
          <Route path='/waiting/:referralCode?' Component={Countdown} />
          <Route path='/about/:referralCode?' Component={About} />
          <Route path='/contact/:referralCode?' Component={Contact} />
          <Route path='/features/:referralCode?' Component={Features} />
          <Route path='/pricing/:referralCode?' Component={Pricing} />
          <Route path='/404/:referralCode?' Component={N404} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
