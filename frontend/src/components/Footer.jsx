import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#FAFAFA]/90 backdrop-blur-sm border-t border-[#E5E7EB]">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Copyright */}
        <span 
          className="text-xs text-[#9CA3AF]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          © 2025{' '}
          <a 
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-[#6B7280] transition-colors duration-200"
          >
            {personalInfo.fullName}
          </a>
          , {personalInfo.nickname}
        </span>

        {/* Logo/Initials */}
        <span 
          className="text-sm text-[#6B7280] font-light italic"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          a/f
        </span>

        {/* Live Time */}
        <span 
          className="text-xs text-[#9CA3AF]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Ahmed Time: {formatTime(currentTime)}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
