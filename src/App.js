import React from 'react';
import { motion } from 'framer-motion';
import Stack from './Stack';
import VideoBackground from './components/VideoBackground';
import './components/VideoBackground.css';
import './index.css';
import "./Stack.css";
import "./App.css";
import "./components/VideoBackground.css";

const screenshots = [
  { src: "/Screenshot 1.png", alt: "Picking Dashboard" },
  { src: "/Screenshot 2.png", alt: "Main Menu" },
  { src: "/Screenshot 3.png", alt: "About Us" },
  { src: "/Screenshot 4.png", alt: "Parking Dashboard" },
  { src: "/Screenshot 5.png", alt: "Customer Support" },
];

function App() {
  return (
    <div className="main-landing">
      <VideoBackground />
      <div className="content-wrapper">
        <header className="header" style={{
          position: 'fixed',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          maxWidth: '800px',
          textAlign: 'center',
          zIndex: 10,
          padding: '10px 0 20px'
        }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 style={{
              fontSize: '56px',
              fontWeight: '900',
              fontFamily: 'Valorant',
              marginBottom: '10px',
              color: '#1a237e',
              letterSpacing: '2px'
            }}>PickASpot</h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              style={{
                color: '#fff',
                fontSize: '20px',
                lineHeight: '1.6',
                marginBottom: '30px'
              }}
            >
              Find the perfect parking spot while using our intelligent desktop application
            </motion.p>
            <motion.a href="https://drive.google.com/file/d/12u0VZ5Dsc7K10iope0LZ6wrcUMRjpvZM/view?usp=sharing" 
              className="download-btn" 
              target="_blank" 
              rel="noopener noreferrer" 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              style={{
                display: 'inline-block',
                padding: '12px 30px',
                backgroundColor: '#4CAF50',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '6px',
                fontSize: '18px',
                fontWeight: '600',
                transition: 'transform 0.2s ease'
              }}
              whileHover={{ transform: 'scale(1.05)' }}
            >
              Download
            </motion.a>
          </motion.div>
        </header>
        <div className="screenshots-container" style={{
          width: '900px',
          position: 'absolute',
          right: '10%',
          top: '60%',
          transform: 'translateY(-50%)',
          maxWidth: '1000px',
          zIndex: 1
        }}>
          <Stack direction="horizontal" gap={24} wrap randomRotation={true} cardDimensions={{ width: 400, height: 400 }} animationConfig={{ stiffness: 200, damping: 20 }}>
            {screenshots.map((shot, idx) => (
              <div key={idx} className="screenshot-card" style={{
                width: '100%',
                height: '100%',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#222'
              }}>
                <img src={shot.src} alt={shot.alt} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                <div style={{
                  marginTop: '8px',
                  fontWeight: '500',
                  color: '#fff',
                  textAlign: 'center'
                }}>{shot.alt}</div>
              </div>
            ))}
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default App;