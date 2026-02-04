'use client';

import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'João Silva',
    rating: 5,
    text: 'Excelente serviço! Profissionais muito qualificados e ambiente agradável. O melhor corte que já fiz!',
    service: 'Corte + Barba',
    image: '/images/reviews/customer1.png'
  },
  {
    id: 2,
    name: 'Carlos Santos',
    rating: 5,
    text: 'Barbearia tradicional de verdade. A toalha quente e o atendimento fazem toda a diferença.',
    service: 'Barbearia Completa',
    image: '/images/reviews/customer2.png'
  },
  {
    id: 3,
    name: 'Pedro Oliveira',
    rating: 5,
    text: 'Ambiente sofisticado, atendimento premium e resultado impecável. Recomendo!',
    service: 'Pacote Premium',
    image: '/images/reviews/customer3.png'
  },
  {
    id: 4,
    name: 'Lucas Costa',
    rating: 5,
    text: 'Atenção aos detalhes é incrível. Saí de lá renovado e muito satisfeito.',
    service: 'Corte de Cabelo',
    image: '/images/reviews/customer1.png'
  },
  {
    id: 5,
    name: 'Marcos Ferreira',
    rating: 5,
    text: 'Tradição e qualidade em cada detalhe. O melhor barbeiro de Florianópolis!',
    service: 'Combo Especial',
    image: '/images/reviews/customer2.png'
  },
  {
    id: 6,
    name: 'Rafael Almeida',
    rating: 5,
    text: 'Serviço impecável, produtos de alta qualidade e atendimento excepcional.',
    service: 'Barba',
    image: '/images/reviews/customer3.png'
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-gold-500 fill-gold-500' : 'text-gray-600'}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-charcoal-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-vintage text-gold-500 mb-4">
            Depoimentos
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre nossa experiência premium
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-charcoal-800/50 border border-gold-600/20 rounded-lg p-8 relative">
            <Quote size={48} className="text-gold-600/20 absolute top-4 right-4" />
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Customer Image */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gold-600/30">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-3">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                
                <blockquote className="text-xl text-gray-300 mb-4 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                
                <div>
                  <cite className="text-gold-400 font-semibold not-italic">
                    {testimonials[currentIndex].name}
                  </cite>
                  <span className="text-gray-500 ml-2">
                    • {testimonials[currentIndex].service}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gold-600/20 hover:bg-gold-600/30 text-gold-400 p-2 rounded-full transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gold-600/20 hover:bg-gold-600/30 text-gold-400 p-2 rounded-full transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center space-x-2 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-gold-500 w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Grid of All Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-charcoal-800/30 border border-gold-600/10 rounded-lg p-6 hover:border-gold-600/30 transition-all cursor-pointer"
              onClick={() => goToTestimonial(index)}
            >
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gold-600/30 mr-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-gold-400 font-semibold">{testimonial.name}</h4>
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mb-2 line-clamp-3">
                "{testimonial.text}"
              </p>
              
              <span className="text-xs text-gray-500">{testimonial.service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
