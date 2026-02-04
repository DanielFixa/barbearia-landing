import { Phone } from 'lucide-react';

export default function StickyFooter() {
  const handleCall = () => {
    window.open('tel:+554799999999');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black-950/95 backdrop-blur-sm border-t border-gold-600/20 z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Phone size={20} className="text-gold-400" />
            <span className="text-gold-400 font-semibold">+55 47 9999-9999</span>
          </div>
          <button
            onClick={handleCall}
            className="bg-gold-600 hover:bg-gold-700 text-black-950 px-6 py-2 rounded-md font-semibold transition-all transform hover:scale-105 flex items-center space-x-2"
          >
            <Phone size={16} />
            <span>Ligar para Agendar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
