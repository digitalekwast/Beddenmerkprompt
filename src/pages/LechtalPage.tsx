import { Check, Truck, Package, Clock } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { ProductCard } from '../components/ProductCard';
import { FinalCTA } from '../components/FinalCTA';

export function LechtalPage() {
  const products = [
    {
      id: 'lechtal-boxspring-160x200',
      imageUrl: 'https://images.unsplash.com/photo-1645750646327-8c560ef5cb8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaG90ZWwlMjBiZWQlMjB3aGl0ZXxlbnwxfHx8fDE3NjE1ODg1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Lechtal Boxspring 160x200',
      collection: 'Lechtal',
      features: ['Direct leverbaar', '160x200 cm', 'Complete set'],
      inStock: true,
      availableColors: [
        { name: 'Light Grey', hex: '#D8D8D8' },
        { name: 'Warm Taupe', hex: '#C4B5A0' },
        { name: 'Deep Charcoal', hex: '#2C2C2C' },
      ],
    },
    {
      id: 'lechtal-boxspring-180x200',
      imageUrl: 'https://images.unsplash.com/photo-1721742734916-b5b824d3d310?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwc2FnZSUyMGdyZWVufGVufDF8fHx8MTc2MTU4ODU0OHww&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Lechtal Boxspring 180x200',
      collection: 'Lechtal',
      features: ['Direct leverbaar', '180x200 cm', 'Complete set'],
      inStock: true,
      availableColors: [
        { name: 'Light Grey', hex: '#D8D8D8' },
        { name: 'Warm Taupe', hex: '#C4B5A0' },
        { name: 'Deep Charcoal', hex: '#2C2C2C' },
      ],
    },
    {
      id: 'lechtal-boxspring-140x200',
      imageUrl: 'https://images.unsplash.com/photo-1681575437632-329719bc7f86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWQlMjBoZWFkYm9hcmQlMjBkZXRhaWx8ZW58MXx8fHwxNzYxNTg4NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Lechtal Boxspring 140x200',
      collection: 'Lechtal',
      features: ['Direct leverbaar', '140x200 cm', 'Complete set'],
      inStock: true,
      availableColors: [
        { name: 'Light Grey', hex: '#D8D8D8' },
        { name: 'Warm Taupe', hex: '#C4B5A0' },
        { name: 'Deep Charcoal', hex: '#2C2C2C' },
      ],
    },
  ];

  const benefits = [
    {
      icon: Truck,
      title: 'Snelle levering',
      description: 'Direct uit voorraad leverbaar binnen 1-2 weken',
    },
    {
      icon: Package,
      title: 'Complete sets',
      description: 'Alles inbegrepen: box, matras, topmatras en hoofdbord',
    },
    {
      icon: Clock,
      title: 'Geen wachttijd',
      description: 'Geen lange levertijden – snel slapen op je nieuwe bed',
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="COLLECTIE"
        title="Lechtal"
        description="Populaire boxsprings direct leverbaar. De Lechtal collectie combineert comfort met beschikbaarheid – perfect voor wie niet kan wachten. Standaard maten, direct uit voorraad."
      />

      {/* Benefits Section */}
      <section className="w-full bg-warm-white py-24">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-sage-green/10 mx-auto mb-6 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-sage-green" strokeWidth={2} />
                  </div>
                  <h3
                    className="text-deep-charcoal mb-2"
                    style={{ fontSize: '20px', fontWeight: 500, lineHeight: '28px' }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="text-deep-charcoal/70"
                    style={{ fontSize: '14px', fontWeight: 400, lineHeight: '22px' }}
                  >
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="w-full bg-sage-green/5 py-24">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-[0px_4px_24px_rgba(44,44,44,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1759176171789-0aa3f84d15ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtYXR0cmVzcyUyMGRldGFpbHxlbnwxfHx8fDE3NjE1ODI0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mattress detail"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
            <div>
              <h2
                className="text-deep-charcoal mb-6"
                style={{ fontSize: '36px', fontWeight: 700, lineHeight: '44px' }}
              >
                Wat zit er inbegrepen?
              </h2>
              <div className="flex flex-col gap-4 mb-8">
                {[
                  'Boxspring onderbox met pocketvering',
                  'Premium pocketvering matras naar keuze',
                  'Luxe topmatras voor extra comfort',
                  'Hoofdbord in neutrale stof',
                  'Degelijke houten poten (15cm)',
                  'Gratis thuisbezorgd en gemonteerd',
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-sage-green flex-shrink-0 mt-1" strokeWidth={2.5} />
                    <span
                      className="text-deep-charcoal"
                      style={{ fontSize: '16px', fontWeight: 400, lineHeight: '28px' }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <p
                className="text-deep-charcoal/70"
                style={{ fontSize: '14px', fontWeight: 400, lineHeight: '22px' }}
              >
                Let op: Bij Lechtal zijn aanpassingen beperkt mogelijk. Voor volledig op maat bekijk de Valkeveen collectie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full bg-warm-white py-24">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-deep-charcoal mb-4"
              style={{ fontSize: '36px', fontWeight: 700, lineHeight: '44px' }}
            >
              Direct leverbaar
            </h2>
            <p
              className="text-deep-charcoal/70 max-w-[600px] mx-auto"
              style={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}
            >
              Kies je maat en bestel vandaag nog – binnen 1-2 weken in huis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-8 bg-warm-taupe/10 rounded-2xl text-center">
            <p
              className="text-deep-charcoal/80"
              style={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}
            >
              Andere maat nodig? Neem contact op voor beschikbaarheid en levertijden.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
