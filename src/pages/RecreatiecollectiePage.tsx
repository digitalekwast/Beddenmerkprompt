import { Check, Building2, Shield, Cog } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { ProductCard } from '../components/ProductCard';
import { FinalCTA } from '../components/FinalCTA';

export function RecreatiecollectiePage() {
  const products = [
    {
      id: 'recreatie-hotelbed-comfort',
      imageUrl: 'https://images.unsplash.com/photo-1645750646327-8c560ef5cb8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaG90ZWwlMjBiZWQlMjB3aGl0ZXxlbnwxfHx8fDE3NjE1ODg1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Recreatie Hotelbed Comfort',
      collection: 'Recreatie',
      features: ['Hospitality proof', 'Duurzaam', 'Standaard maten'],
      inStock: true,
      availableColors: [
        { name: 'Hotel White', hex: '#FFFFFF' },
        { name: 'Light Grey', hex: '#D8D8D8' },
        { name: 'Charcoal', hex: '#2C2C2C' },
      ],
    },
    {
      id: 'recreatie-hotelbed-luxe',
      imageUrl: 'https://images.unsplash.com/photo-1683576221425-d711598dbfda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBib3hzcHJpbmclMjBiZWQlMjBuZXV0cmFsfGVufDF8fHx8MTc2MTU4ODU0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Recreatie Hotelbed Luxe',
      collection: 'Recreatie',
      features: ['Hospitality proof', 'Premium matras', 'Lange levensduur'],
      inStock: true,
      availableColors: [
        { name: 'Hotel White', hex: '#FFFFFF' },
        { name: 'Light Grey', hex: '#D8D8D8' },
        { name: 'Charcoal', hex: '#2C2C2C' },
      ],
    },
    {
      id: 'recreatie-hotelbed-basis',
      imageUrl: 'https://images.unsplash.com/photo-1629908888659-cb04501cb4a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cGhvbHN0ZXJlZCUyMGJlZCUyMGx1eHVyeSUyMGZhYnJpY3xlbnwxfHx8fDE3NjE1ODg1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Recreatie Hotelbed Basis',
      collection: 'Recreatie',
      features: ['Hospitality proof', 'Basis comfort', 'Volume korting'],
      inStock: true,
      availableColors: [
        { name: 'Hotel White', hex: '#FFFFFF' },
        { name: 'Light Grey', hex: '#D8D8D8' },
      ],
    },
  ];

  const b2bBenefits = [
    {
      icon: Building2,
      title: 'Hospitality expertise',
      description: 'Jarenlange ervaring in de hotel- en recreatiesector',
    },
    {
      icon: Shield,
      title: 'Duurzaam & robuust',
      description: 'Bestand tegen intensief gebruik en dagelijks onderhoud',
    },
    {
      icon: Cog,
      title: 'Maatwerk service',
      description: 'Projectprijzen, branded opties en op-maat oplossingen',
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="B2B COLLECTIE"
        title="Recreatie"
        description="Speciaal ontwikkeld voor hotels, B&B's en de recreatiebranche. Duurzame bedden die bestand zijn tegen intensief gebruik, tegen een eerlijke B2B prijs."
      />

      {/* B2B Benefits */}
      <section className="w-full bg-warm-white py-24">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {b2bBenefits.map((benefit, index) => {
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

      {/* Features Grid */}
      <section className="w-full bg-sage-green/5 py-24">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-deep-charcoal mb-4"
              style={{ fontSize: '36px', fontWeight: 700, lineHeight: '44px' }}
            >
              Waarom Recreatie collectie?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            <div>
              <h3
                className="text-deep-charcoal mb-4"
                style={{ fontSize: '20px', fontWeight: 500, lineHeight: '28px' }}
              >
                Voor zakelijke klanten
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  'Volume kortingen bij grotere aantallen',
                  'Projectprijzen op aanvraag',
                  'Dedicated account manager',
                  'Flexibele betalingsopties',
                  'Service na verkoop',
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-sage-green flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span
                      className="text-deep-charcoal/80"
                      style={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3
                className="text-deep-charcoal mb-4"
                style={{ fontSize: '20px', fontWeight: 500, lineHeight: '28px' }}
              >
                Technische specificaties
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  'Zware kwaliteit pocketvering voor lange levensduur',
                  'Afneembare, wasbare hoezen (optioneel)',
                  'Brandvertragend conform B1 norm',
                  'Hypoallergeen en stofmijt werend',
                  '5 jaar garantie op constructie',
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-sage-green flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span
                      className="text-deep-charcoal/80"
                      style={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B CTA Banner */}
      <section className="w-full bg-deep-charcoal py-24">
        <div className="max-w-[800px] mx-auto px-16 md:px-16 sm:px-6 text-center">
          <h2
            className="text-warm-white mb-6"
            style={{ fontSize: '36px', fontWeight: 700, lineHeight: '44px' }}
          >
            Offerte op maat?
          </h2>
          <p
            className="text-warm-white/85 mb-8"
            style={{ fontSize: '18px', fontWeight: 400, lineHeight: '30px' }}
          >
            Neem contact op met ons B2B team voor een vrijblijvende offerte. Bij grotere aantallen bieden we aantrekkelijke volumekortingen.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="h-12 px-8 bg-warm-taupe text-deep-charcoal rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-[#B8A890]"
              style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.3px' }}
            >
              Offerte aanvragen
            </a>
            <button
              className="h-12 px-8 border-2 border-warm-white text-warm-white rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-warm-white hover:text-deep-charcoal"
              style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.3px' }}
            >
              Login zakelijk
            </button>
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
              Onze hotelbedden
            </h2>
            <p
              className="text-deep-charcoal/70 max-w-[600px] mx-auto"
              style={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}
            >
              Direct leverbaar uit voorraad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
