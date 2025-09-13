import React from 'react';
import './styles/App.css';
import Logo from './components/Logo';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Waitlist from './components/Waitlist';
import ScrollToTop from './components/ScrollToTop';
import ProgressBar from './components/ProgressBar';
import Notification from './components/Notification';
import DarkVeil from './components/DarkVeil';
import DynamicBottomBlur from './components/DynamicBottomBlur';
import useParallax from './hooks/useParallax';
import useNotification from './hooks/useNotification';

function App() {
  const { notification, showNotification, hideNotification } = useNotification();
  
  // Initialize parallax effect
  useParallax();

  return (
    <div className="App" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* DarkVeil Neural Background - Direct Render */}
      <DarkVeil
        hueShift={240}
        noiseIntensity={0.02}
        scanlineIntensity={0.1}
        speed={0.3}
        scanlineFrequency={0.002}
        warpAmount={0.5}
        resolutionScale={1.0}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none'
        }}
      />
      
      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Logo />
        <Hero showNotification={showNotification} />
        <About />
        <Features />
        <Waitlist showNotification={showNotification} />
        <ScrollToTop />
        <ProgressBar />
        {notification && (
          <Notification 
            message={notification.message} 
            type={notification.type}
            onClose={hideNotification}
          />
        )}
      </div>

      {/* Dynamic bottom blur overlay */}
      <DynamicBottomBlur />
    </div>
  );
}

export default App;
