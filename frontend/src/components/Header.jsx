import React from 'react';
import { socialLinks } from '../data/mock';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/90 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-light tracking-tight text-[#1A1A1A] hover:opacity-70 transition-opacity duration-200"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          ahmed.
        </a>

        {/* Social Links */}
        <nav className="flex items-center gap-5">
          {socialLinks.map((link) => {
            const isInternal = link.url.startsWith('/');
            return (
              <a
                key={link.name}
                href={link.url}
                target={isInternal ? undefined : "_blank"}
                rel={isInternal ? undefined : "noopener noreferrer"}
                className="text-sm text-[#6B7280] hover:text-[#1A1A1A] transition-colors duration-200 tracking-wide"
                style={{ fontFamily: "'Inter', sans-serif" }}
                title={link.label}
              >
                {link.name}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
