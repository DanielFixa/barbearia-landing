'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar um horário na barbearia.');
    window.open(`https://wa.me/554799999999?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-24 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 z-50 animate-bounce-slow animate-glow"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
}
