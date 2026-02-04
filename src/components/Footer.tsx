'use client';

import { Phone, MapPin, Clock, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black-950 border-t border-gold-600/20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-vintage text-gold-500 mb-4">Premium Barbershop</h3>
            <p className="text-gray-400 mb-4">
              Experiência premium em cuidados masculinos. Tradição e qualidade em cada corte.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/554899999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-vintage text-gold-500 mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} className="text-gold-400" />
                <span>+55 47 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={18} className="text-gold-400" />
                <span>Brusque, SC</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Clock size={18} className="text-gold-400" />
                <div>
                  <div>Seg-Sex: 9h-20h</div>
                  <div>Sáb: 8h-18h</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-vintage text-gold-500 mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-gold-400 transition-colors"
              >
                Nossos Serviços
              </button>
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-gold-400 transition-colors"
              >
                Nossos Produtos
              </button>
              <button 
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-gold-400 transition-colors"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-gold-400 transition-colors"
              >
                Como Chegar
              </button>
              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-gold-400 transition-colors"
              >
                Agendar Horário
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gold-600/20 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; 2024 Premium Barbershop. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
