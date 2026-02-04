'use client';

import { ShoppingBag, Star, Check } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Pomada Modeladora Premium',
    price: 'R$ 45',
    rating: 5,
    image: '/images/fotos_produtos/produto1.png',
    description: 'Fixação forte com brilho natural',
    features: ['Fixação extra forte', 'Brilho médio', 'Não resseca', 'Fácil aplicação']
  },
  {
    id: 2,
    name: 'Óleo para Barba Artesanal',
    price: 'R$ 35',
    rating: 5,
    image: '/images/fotos_produtos/produto2.png',
    description: 'Nutrição profunda para sua barba',
    features: ['Óleos essenciais', 'Hidratação', 'Crescimento', 'Aroma masculino']
  },
  {
    id: 3,
    name: 'Creme de Barbear Luxo',
    price: 'R$ 55',
    rating: 5,
    image: '/images/fotos_produtos/produto3.png',
    description: 'Proteção e maciez para a pele',
    features: ['Proteção UV', 'Aloe vera', 'Vitamina E', 'Sem álcool']
  },
  {
    id: 4,
    name: 'Shampoo Especializado',
    price: 'R$ 40',
    rating: 5,
    image: '/images/fotos_produtos/produto4.png',
    description: 'Limpeza profunda e tratamento',
    features: ['Sem sulfatos', 'Queratina', 'Volume', 'Brilho']
  },
  {
    id: 5,
    name: 'Bálsamo Pós-Barba',
    price: 'R$ 38',
    rating: 5,
    image: '/images/fotos_produtos/produto5.png',
    description: 'Alívio imediato e proteção',
    features: ['Ação calmante', 'Anti-inflamatório', 'Cicatrização', 'Frescor']
  },
  {
    id: 6,
    name: 'Kit Completo Barba',
    price: 'R$ 120',
    rating: 5,
    image: '/images/fotos_produtos/produto6.png',
    description: 'Tudo que sua barba precisa',
    features: ['5 produtos', 'Economia 20%', 'Presente perfeito', 'Embalagem luxo']
  },
  {
    id: 7,
    name: 'Tesoura Profissional',
    price: 'R$ 85',
    rating: 5,
    image: '/images/fotos_produtos/produto7.png',
    description: 'Precisão japonesa',
    features: ['Aço inox', 'Ergonômica', 'Afiada', 'Garantia vitalícia']
  },
  {
    id: 8,
    name: 'Navalha Tradicional',
    price: 'R$ 95',
    rating: 5,
    image: '/images/fotos_produtos/produto8.png',
    description: 'Barbearia clássica',
    features: ['Cromada', 'Balanceada', 'Lâminas inclusas', 'Estojos de couro']
  }
];

export default function ProductsSection() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={i < rating ? 'text-gold-500 fill-gold-500' : 'text-gray-600'}
      />
    ));
  };

  return (
    <section id="products" className="py-20 bg-charcoal-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-vintage text-gold-500 mb-4">
            Nossos Produtos
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Linha premium de produtos selecionados para cuidados masculinos completos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-charcoal-800/50 border border-gold-600/20 rounded-lg overflow-hidden hover:border-gold-600/40 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up hover:animate-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Image */}
              <div className="h-64 overflow-hidden bg-charcoal-700">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gold-400 flex-1">
                    {product.name}
                  </h3>
                  <span className="text-xl font-bold text-gold-500 ml-2 animate-pulse-gold">
                    {product.price}
                  </span>
                </div>
                
                <div className="flex items-center mb-3">
                  <div className="flex mr-2">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-500">
                    ({product.rating}.0)
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">
                  {product.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-400">
                      <Check size={12} className="text-gold-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gold-600 hover:bg-gold-700 text-black-950 py-2 rounded-md transition-colors font-medium flex items-center justify-center space-x-2 hover:animate-glow">
                  <ShoppingBag size={16} />
                  <span>Comprar</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gold-600/10 border border-gold-600/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-vintage text-gold-500 mb-4">
              Kit Barbeiro Profissional
            </h3>
            <p className="text-gray-300 mb-6">
              Kit completo com todos os produtos essenciais + 15% de desconto
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <span className="text-3xl font-bold text-gold-500">
                R$ 280
              </span>
              <span className="text-gray-500 line-through">
                R$ 330
              </span>
              <button className="bg-gold-600 hover:bg-gold-700 text-black-950 px-8 py-3 rounded-md font-semibold transition-all transform hover:scale-105 animate-pulse-gold hover:animate-glow">
                Comprar Kit Completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
