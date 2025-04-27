
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CHARACTERS = "!@#$%^&*()_+-=[]{}|;:,.<>?/0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const FINAL_TEXT = "Paritosh.Dev";
const SCRAMBLE_DURATION = 3000; // 3 seconds total
const STEP_DURATION = 50; // 50ms per step

const LandingAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [text, setText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const getRandomChar = () => CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];

  const scrambleText = useCallback(() => {
    let startTime = Date.now();
    const initialText = Array(FINAL_TEXT.length).fill('').map(getRandomChar).join('');
    setText(initialText);

    const intervalId = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / SCRAMBLE_DURATION, 1);

      const newText = FINAL_TEXT.split('').map((targetChar, index) => {
        const shouldResolve = Math.random() < progress * 2;
        return shouldResolve ? targetChar : getRandomChar();
      }).join('');

      setText(newText);

      if (progress >= 1) {
        clearInterval(intervalId);
        setText(FINAL_TEXT);
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(onComplete, 500);
        }, 500);
      }
    }, STEP_DURATION);

    return () => clearInterval(intervalId);
  }, [onComplete]);

  useEffect(() => {
    scrambleText();
  }, [scrambleText]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#1A1F2C] to-[#121212] z-50"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-center"
          >
            <h1 
              className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold 
                         bg-clip-text text-transparent bg-gradient-to-r 
                         from-blue-400 via-purple-500 to-pink-500
                         shadow-lg tracking-wider
                         [text-shadow:_0_0_15px_rgba(148,0,255,0.3)]"
            >
              {text}
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LandingAnimation;
