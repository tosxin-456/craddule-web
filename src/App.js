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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/waiting' Component={Countdown}/>
          <Route path='/home' Component={Home}/>
          <Route path='/about' Component={About}/>
          <Route path='/contact' Component={Contact}/>
          <Route path='/features' Component={Features}/>
          <Route path='/pricing' Component={Pricing}/>
          <Route path='/404' Component={N404}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
