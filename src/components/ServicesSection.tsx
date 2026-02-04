'use client';

import { Scissors, User, Sparkles, Package } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Corte de Cabelo',
    description: 'Corte masculino tradicional ou moderno com técnica precisa e acabamento perfeito.',
    price: 'R$ 50',
    duration: '30 min',
    icon: Scissors,
    image: '/images/cortes/corte1.jpg',
    features: ['Lavagem', 'Corte profissional', 'Acabamento']
  },
  {
    id: 2,
    title: 'Barba',
    description: 'Alinhamento e modelagem da barba com produtos de alta qualidade.',
    price: 'R$ 30',
    duration: '20 min',
    icon: User,
    image: '/images/cortes/corte2.jpg',
    features: ['Alinhamento', 'Modelagem', 'Hidratação']
  },
  {
    id: 3,
    title: 'Barbearia Completa',
    description: 'Toalha quente, navalha tradicional e tratamento completo para a pele.',
    price: 'R$ 70',
    duration: '45 min',
    icon: Sparkles,
    image: '/images/cortes/corte3.jpg',
    features: ['Toalha quente', 'Navalha', 'Tratamento pós-barba']
  },
  {
    id: 4,
    title: 'Pacote Premium',
    description: 'Experiência completa com corte, barba, massagem e tratamento exclusivo.',
    price: 'R$ 120',
    duration: '90 min',
    icon: Package,
    image: '/images/cortes/corte4.jpg',
    features: ['Corte + Barba', 'Massagem', 'Máscara facial', 'Bebida premium']
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-black-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-vintage text-gold-500 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Oferecemos tratamentos exclusivos com produtos premium e técnicas tradicionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-charcoal-800/50 border border-gold-600/20 rounded-lg overflow-hidden hover:border-gold-600/40 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up hover:animate-glow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Service Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gold-600/20 rounded-full mb-4 mx-auto animate-float">
                    <Icon size={32} className="text-gold-500" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gold-400 mb-3 text-center">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-center text-sm">
                    {service.description}
                  </p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-gold-500 animate-pulse-gold">
                      {service.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      {service.duration}
                    </span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-1 h-1 bg-gold-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-gold-600/20 hover:bg-gold-600/30 text-gold-400 py-2 rounded-md transition-colors font-medium hover:animate-glow"
                  >
                    Agendar
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-charcoal-800/30 border border-gold-600/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-vintage text-gold-500 mb-4">
              Combo Especial
            </h3>
            <p className="text-gray-300 mb-6">
              Corte + Barba por apenas <span className="text-gold-500 font-bold text-xl">R$ 70</span>
            </p>
            <button
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gold-600 hover:bg-gold-700 text-black-950 px-8 py-3 rounded-md font-semibold transition-all transform hover:scale-105"
            >
              Agendar Combo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
