"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Brands", href: "#brands" },
    { name: "Channels", href: "#channels" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-white font-black text-2xl tracking-tighter uppercase">
          Assassins <span className="text-red-600">Army</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-white hover:text-shadow-glow transition-all"
            >
              {link.name}
            </a>
          ))}
          <a href="https://www.youtube.com/@AssassinsARMY" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-red-700 transition-colors">
            Join Us
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#121212] border-b border-white/10 flex flex-col items-center py-6 gap-6 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold uppercase tracking-wider text-gray-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
