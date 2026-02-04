'use client';

import { useState } from 'react';
import { Calendar, Clock, User, Phone as PhoneIcon, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}

export default function InteractiveForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        service: '',
        date: '',
        time: ''
      });
    }, 3000);
  };

  const isFormValid = formData.name && formData.phone && formData.service && formData.date && formData.time;

  if (isSubmitted) {
    return (
      <div className="bg-charcoal-800/50 backdrop-blur-sm border border-green-600/20 rounded-lg p-8 text-center animate-slide-up">
        <div className="flex justify-center mb-4">
          <CheckCircle size={48} className="text-green-500 animate-pulse" />
        </div>
        <h3 className="text-2xl font-vintage text-green-400 mb-4">
          Agendamento Confirmado!
        </h3>
        <p className="text-gray-300 mb-4">
          Entraremos em contato em breve para confirmar seu horário.
        </p>
        <div className="text-sm text-gray-400">
          {formData.name} • {formData.service} • {formData.date} às {formData.time}
        </div>
      </div>
    );
  }

  return (
    <div id="booking" className="bg-charcoal-800/50 backdrop-blur-sm border border-gold-600/20 rounded-lg p-8 animate-glow">
      <h2 className="text-3xl font-vintage text-gold-500 mb-6 text-center animate-pulse-gold">
        Agende seu Horário
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="group">
          <label className="block text-gray-300 mb-2 text-sm font-medium group-hover:text-gold-400 transition-colors">
            Nome Completo
          </label>
          <div className="relative">
            <User size={18} className="absolute left-3 top-3 text-gold-400 group-hover:scale-110 transition-transform" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full bg-charcoal-900/50 border border-gold-600/20 rounded-md pl-10 pr-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-600 focus:border-transparent transition-all group-hover:border-gold-600/40"
              placeholder="Seu nome"
            />
          </div>
        </div>

        <div className="group">
          <label className="block text-gray-300 mb-2 text-sm font-medium group-hover:text-gold-400 transition-colors">
            Telefone
          </label>
          <div className="relative">
            <PhoneIcon size={18} className="absolute left-3 top-3 text-gold-400 group-hover:scale-110 transition-transform" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full bg-charcoal-900/50 border border-gold-600/20 rounded-md pl-10 pr-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-600 focus:border-transparent transition-all group-hover:border-gold-600/40"
              placeholder="(47) 9999-9999"
            />
          </div>
        </div>

        <div className="group">
          <label className="block text-gray-300 mb-2 text-sm font-medium group-hover:text-gold-400 transition-colors">
            Serviço
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            required
            className="w-full bg-charcoal-900/50 border border-gold-600/20 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-600 focus:border-transparent transition-all group-hover:border-gold-600/40"
          >
            <option value="">Selecione um serviço</option>
            <option value="haircut">Corte de Cabelo - R$ 50</option>
            <option value="beard">Barba - R$ 30</option>
            <option value="shave">Barbearia Completa - R$ 70</option>
            <option value="combo">Corte + Barba - R$ 70</option>
            <option value="premium">Pacote Premium - R$ 120</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="group">
            <label className="block text-gray-300 mb-2 text-sm font-medium group-hover:text-gold-400 transition-colors">
              Data
            </label>
            <div className="relative">
              <Calendar size={18} className="absolute left-3 top-3 text-gold-400 group-hover:scale-110 transition-transform" />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full bg-charcoal-900/50 border border-gold-600/20 rounded-md pl-10 pr-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-600 focus:border-transparent transition-all group-hover:border-gold-600/40"
              />
            </div>
          </div>

          <div className="group">
            <label className="block text-gray-300 mb-2 text-sm font-medium group-hover:text-gold-400 transition-colors">
              Horário
            </label>
            <select
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
              className="w-full bg-charcoal-900/50 border border-gold-600/20 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-600 focus:border-transparent transition-all group-hover:border-gold-600/40"
            >
              <option value="">Horário</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className={`w-full py-3 rounded-md font-semibold transition-all transform flex items-center justify-center space-x-2 ${
            isFormValid && !isSubmitting
              ? 'bg-gold-600 hover:bg-gold-700 text-black-950 hover:scale-105 animate-pulse-gold hover:animate-glow'
              : 'bg-gray-700 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-black-950 border-t-transparent rounded-full animate-spin"></div>
              <span>Processando...</span>
            </>
          ) : (
            <>
              <Calendar size={20} />
              <span>Agendar Agora</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
