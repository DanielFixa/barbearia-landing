'use client';

import { MapPin, Clock, Phone, Navigation, Car } from 'lucide-react';

export default function LocationSection() {
  const handleDirections = () => {
    // Abre o Google Maps com directions para o endereço
    window.open('https://maps.google.com/maps?q=Rua+Padre+Antonio+Eising,+Brusque,+SC&z=15');
  };

  const handleCall = () => {
    window.open('tel:+554799999999');
  };

  return (
    <section id="location" className="py-20 bg-black-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-vintage text-gold-500 mb-4">
            Localização
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos localizados no centro de Brusque com fácil acesso e estacionamento
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Container */}
          <div className="bg-charcoal-800/50 border border-gold-600/20 rounded-lg overflow-hidden h-96 lg:h-full min-h-[400px] relative">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-49.1%2C-27.05%2C-49.0%2C-26.95&amp;layer=mapnik&amp;marker=-26.98765432109876%2C-49.06543210987654"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              className="w-full h-full"
              title="Localização Premium Barbershop - Brusque"
            />
            <div className="absolute top-4 right-4 bg-black-950/80 backdrop-blur-sm rounded-lg p-2">
              <button
                onClick={handleDirections}
                className="bg-gold-600 hover:bg-gold-700 text-black-950 px-4 py-2 rounded-md text-sm font-semibold transition-colors flex items-center space-x-2"
              >
                <Navigation size={16} />
                <span>Ver no Google Maps</span>
              </button>
            </div>
          </div>

          {/* Location Information */}
          <div className="space-y-8">
            {/* Address Card */}
            <div className="bg-charcoal-800/50 border border-gold-600/20 rounded-lg p-6">
              <h3 className="text-2xl font-vintage text-gold-500 mb-4">
                Endereço
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-gold-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      Rua Padre Antonio Eising, 123 - Centro<br />
                      Brusque, SC - 88900-000
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Car size={20} className="text-gold-400 flex-shrink-0" />
                  <p className="text-gray-300">
                    Estacionamento disponível na rua
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-charcoal-800/50 border border-gold-600/20 rounded-lg p-6">
              <h3 className="text-2xl font-vintage text-gold-500 mb-4">
                Horário de Funcionamento
              </h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Clock size={20} className="text-gold-400 flex-shrink-0" />
                  <div className="text-gray-300">
                    <div className="flex justify-between">
                      <span>Segunda - Sexta</span>
                      <span className="text-gold-400">09:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado</span>
                      <span className="text-gold-400">08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo</span>
                      <span className="text-gray-500">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-charcoal-800/50 border border-gold-600/20 rounded-lg p-6">
              <h3 className="text-2xl font-vintage text-gold-500 mb-4">
                Contato
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-gold-400 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">+55 47 9999-9999</p>
                    <button
                      onClick={handleCall}
                      className="text-gold-400 hover:text-gold-300 text-sm transition-colors"
                    >
                      Clique para ligar
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gold-400 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-300">
                    WhatsApp: +55 47 9999-9999
                  </p>
                </div>
              </div>
            </div>

            {/* Transportation Tips */}
            <div className="bg-gold-600/10 border border-gold-600/20 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gold-400 mb-3">
                Como Chegar
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start space-x-2">
                  <div className="w-1 h-1 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Ônibus: Linhas 101, 202, 303 - ponto em frente</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1 h-1 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Carro: Estacionamento gratuito nas proximidades</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1 h-1 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Táxi/Uber: fácil acesso e reconhecimento</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
