'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import ProductsSection from '@/components/ProductsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';
import StickyFooter from '@/components/StickyFooter';
import WhatsAppButton from '@/components/WhatsAppButton';
import ParallaxBackground from '@/components/ParallaxBackground';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  return (
    <div className="bg-black-950 text-gray-300 relative min-h-screen">
      <LoadingScreen />
      <ParallaxBackground />
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProductsSection />
      <TestimonialsSection />
      <LocationSection />
      <Footer />
      <StickyFooter />
      <WhatsAppButton />
    </div>
  );
}
