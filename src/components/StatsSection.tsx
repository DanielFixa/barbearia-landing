'use client';

import { Scissors, Users, Star, Award } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-black-950 via-charcoal-900 to-black-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-vintage text-gold-500 mb-4">
            Números que Falam
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Resultados que comprovam nossa excelência e dedicação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-charcoal-800/50 backdrop-blur-sm border border-gold-600/20 rounded-lg p-8 hover:border-gold-600/40 transition-all duration-300 hover:transform hover:scale-105 hover:animate-glow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gold-600/20 rounded-full flex items-center justify-center group-hover:animate-float">
                  <Scissors size={32} className="text-gold-500" />
                </div>
              </div>
              <div className="text-4xl font-bold text-gold-500 mb-2">
                <AnimatedCounter end={15000} suffix="+" />
              </div>
              <p className="text-gray-400">Cortes Realizados</p>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-charcoal-800/50 backdrop-blur-sm border border-gold-600/20 rounded-lg p-8 hover:border-gold-600/40 transition-all duration-300 hover:transform hover:scale-105 hover:animate-glow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gold-600/20 rounded-full flex items-center justify-center group-hover:animate-float" style={{ animationDelay: '200ms' }}>
                  <Users size={32} className="text-gold-500" />
                </div>
              </div>
              <div className="text-4xl font-bold text-gold-500 mb-2">
                <AnimatedCounter end={2500} suffix="+" />
              </div>
              <p className="text-gray-400">Clientes Satisfeitos</p>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-charcoal-800/50 backdrop-blur-sm border border-gold-600/20 rounded-lg p-8 hover:border-gold-600/40 transition-all duration-300 hover:transform hover:scale-105 hover:animate-glow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gold-600/20 rounded-full flex items-center justify-center group-hover:animate-float" style={{ animationDelay: '400ms' }}>
                  <Star size={32} className="text-gold-500" />
                </div>
              </div>
              <div className="text-4xl font-bold text-gold-500 mb-2">
                <AnimatedCounter end={4.9} suffix="" />
              </div>
              <p className="text-gray-400">Avaliação Média</p>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-charcoal-800/50 backdrop-blur-sm border border-gold-600/20 rounded-lg p-8 hover:border-gold-600/40 transition-all duration-300 hover:transform hover:scale-105 hover:animate-glow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gold-600/20 rounded-full flex items-center justify-center group-hover:animate-float" style={{ animationDelay: '600ms' }}>
                  <Award size={32} className="text-gold-500" />
                </div>
              </div>
              <div className="text-4xl font-bold text-gold-500 mb-2">
                <AnimatedCounter end={8} suffix="+" />
              </div>
              <p className="text-gray-400">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
