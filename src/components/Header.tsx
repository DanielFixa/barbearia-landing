'use client';

import { useState } from 'react';
import { Phone, MapPin, Instagram, MessageCircle, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-black-950/95 backdrop-blur-sm z-50 border-b border-gold-600/20">
      {/* Top bar */}
      <div className="bg-gold-600/10 border-b border-gold-600/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4 text-gold-400">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+55 47 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} />
                <span>Brusque, SC</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://wa.me/554799999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 transition-colors"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gold-600/20 rounded-full flex items-center justify-center animate-float">
              <img
                src="/images/logo/logo.png"
                alt="Premium Barbershop Logo"
                className="w-8 h-8 object-contain"
                loading="eager"
              />
            </div>
            <div className="text-2xl font-vintage text-gold-500 tracking-wider">
              BARBER
              <span className="text-gold-600">SHOP</span>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-gold-400 transition-colors font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-gold-400 transition-colors font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-gray-300 hover:text-gold-400 transition-colors font-medium"
            >
              Produtos
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-300 hover:text-gold-400 transition-colors font-medium"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('location')}
              className="text-gray-300 hover:text-gold-400 transition-colors font-medium"
            >
              Localização
            </button>
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-gold-600 hover:bg-gold-700 text-black-950 px-6 py-2 rounded-md font-semibold transition-colors"
            >
              Agendar
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gold-400"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gold-600/20 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-gold-400 transition-colors font-medium text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-gold-400 transition-colors font-medium text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-gray-300 hover:text-gold-400 transition-colors font-medium text-left"
              >
                Produtos
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-300 hover:text-gold-400 transition-colors font-medium text-left"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="text-gray-300 hover:text-gold-400 transition-colors font-medium text-left"
              >
                Localização
              </button>
              <button 
                onClick={() => scrollToSection('booking')}
                className="bg-gold-600 hover:bg-gold-700 text-black-950 px-6 py-2 rounded-md font-semibold transition-colors w-full"
              >
                Agendar
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
