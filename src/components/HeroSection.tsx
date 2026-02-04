'use client';

import { useState } from 'react';
import { Clock, User } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import RevealOnScroll from '@/components/RevealOnScroll';
import InteractiveForm from '@/components/InteractiveForm';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black-950 via-black-900 to-charcoal-900 pt-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="/images/capa/hero-banner.jpg"
          alt="Premium Barbershop"
          className="w-full h-full object-cover opacity-25"
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black-950/90 via-black-900/80 to-charcoal-900/70"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <RevealOnScroll delay={200}>
              <h1 className="text-5xl lg:text-6xl font-vintage text-gold-500 leading-tight">
                Estilo e
                <span className="block text-gold-600">Tradição</span>
              </h1>
            </RevealOnScroll>
            
            <RevealOnScroll delay={400}>
              <p className="text-xl text-gray-300 leading-relaxed">
                Experimente o melhor em cuidados masculinos. Cortes precisos, 
                barbearia tradicional e um atendimento premium que você merece.
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll delay={600}>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center space-x-3 text-gold-400 animate-float">
                  <Clock size={20} />
                  <span>Horários Flexíveis</span>
                </div>
                <div className="flex items-center space-x-3 text-gold-400 animate-float" style={{ animationDelay: '400ms' }}>
                  <User size={20} />
                  <span>Profissionais Experientes</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right side - Booking Form */}
          <RevealOnScroll delay={800}>
            <InteractiveForm />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
