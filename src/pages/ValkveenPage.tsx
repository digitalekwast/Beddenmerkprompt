import { Check } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { ProductCard } from '../components/ProductCard';
import { ShowroomAppointment } from '../components/ShowroomAppointment';
import { FinalCTA } from '../components/FinalCTA';

export function ValkveenPage() {
  const products = [
    {
      id: 'valkeveen-boxspring-luxe',
      imageUrl: 'https://images.unsplash.com/photo-1683576221425-d711598dbfda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBib3hzcHJpbmclMjBiZWQlMjBuZXV0cmFsfGVufDF8fHx8MTc2MTU4ODU0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Valkeveen Boxspring Luxe',
      collection: 'Valkeveen',
      features: ['Configureerbaar', 'Premium afwerking', '200+ stoffen'],
      inStock: false,
      availableColors: [
        { name: 'Warm Taupe', hex: '#C4B5A0' },
        { name: 'Sage Green', hex: '#8B9B8E' },
        { name: 'Deep Charcoal', hex: '#2C2C2C' },
        { name: 'Pearl White', hex: '#F8F6F3' },
        { name: 'Sand Beige', hex: '#D4C4B0' },
      ],
    },
    {
      id: 'valkeveen-boxspring-comfort',
      imageUrl: 'https://images.unsplash.com/photo-1722605916530-fcc5f96d325e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmVkcm9vbSUyMHRhdXBlJTIwdG9uZXN8ZW58MXx8fHwxNzYxNTg4NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Valkeveen Boxspring Comfort',
      collection: 'Valkeveen',
      features: ['Configureerbaar', 'Standaard afwerking', 'Eigen stof'],
      inStock: false,
      availableColors: [
        { name: 'Warm Taupe', hex: '#C4B5A0' },
        { name: 'Sage Green', hex: '#8B9B8E' },
        { name: 'Deep Charcoal', hex: '#2C2C2C' },
        { name: 'Pearl White', hex: '#F8F6F3' },
      ],
    },
    {
      id: 'valkeveen-boxspring-basis',
      imageUrl: 'https://images.unsplash.com/photo-1629908888659-cb04501cb4a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cGhvbHN0ZXJlZCUyMGJlZCUyMGx1eHVyeSUyMGZhYnJpY3xlbnwxfHx8fDE3NjE1ODg1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Valkeveen Boxspring Basis',
      collection: 'Valkeveen',
      features: ['Configureerbaar', 'Basis afwerking', 'Standaard stoffen'],
      inStock: false,
      availableColors: [
        { name: 'Warm Taupe', hex: '#C4B5A0' },
        { name: 'Deep Charcoal', hex: '#2C2C2C' },
        { name: 'Pearl White', hex: '#F8F6F3' },
      ],
    },
  ];

  const configurationSteps = [
    {
      step: 1,
      title: 'Kies je model',
      description: 'Luxe, Comfort of Basis – elk met eigen afwerkingsniveau',
    },
    {
      step: 2,
      title: 'Selecteer je maat',
      description: 'Van 120x200 tot 200x220 cm – alles is mogelijk',
    },
    {
      step: 3,
      title: 'Kies je stof',
      description: 'Meer dan 200 stoffen in verschillende kleuren en texturen',
    },
    {
      step: 4,
      title: 'Bepaal je comfort',
      description: 'Matras hardheid en topmatras opties naar wens',
    },
    {
      step: 5,
      title: 'Voeg details toe',
      description: 'Pootmodel, hoofdbord en extra opties',
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="EIGEN ONTWERP - COLLECTIE VALKEVEEN"
        title="Valkeveen"
        description="In 5 stappen naar jouw droomboxspring. Door ons ontworpen en gemaakt in Staphorst. De Valkeveen collectie biedt voor iedereen wat wils, variërend van eenvoud tot luxe. Volledig configureerbaar volgens jouw wensen."
      />

      {/* Configuration Process Section */}
      <section className="w-full bg-warm-white py-24">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-green/15 rounded-full mb-6">
              <span
                className="text-sage-green uppercase"
                style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px' }}
              >
                EIGEN ONTWERP - HELEMAAL NAAR JOUW WENS
              </span>
            </div>
            <h2
              className="text-deep-charcoal mb-4"
              style={{ fontSize: '36px', fontWeight: 700, lineHeight: '44px' }}
            >
              Configureer je eigen Valkeveen boxspring
            </h2>
            <p
              className="text-deep-charcoal/70 max-w-[600px] mx-auto"
              style={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}
            >
              In vijf eenvoudige stappen stel je jouw perfecte, door ons gemaakte boxspring samen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {configurationSteps.map((item) => (
              <div key={item.step} className="text-center">
                <div
                  className="w-12 h-12 rounded-full border-2 border-warm-taupe text-warm-taupe mx-auto mb-4 flex items-center justify-center"
                  style={{ fontSize: '20px', fontWeight: 700 }}
                >
                  {item.step}
                </div>
                <h3
                  className="text-deep-charcoal mb-2"
                  style={{ fontSize: '16px', fontWeight: 500, lineHeight: '24px' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-deep-charcoal/60"
                  style={{ fontSize: '14px', fontWeight: 400, lineHeight: '22px' }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-sage-green/5 py-24">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-deep-charcoal mb-6"
                style={{ fontSize: '36px', fontWeight: 700, lineHeight: '44px' }}
              >
                Waarom Valkeveen?
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  'Volledig configureerbaar volgens jouw wensen',
                  'Keuze uit meer dan 200 exclusieve stoffen',
                  'Nederlands kwaliteitsmerk',
                  'Levering binnen 6-8 weken',
                  'Premium kwaliteit tegen eerlijke prijs',
                  '10 jaar garantie op de constructie',
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
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-[0px_4px_24px_rgba(44,44,44,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1758546407134-42b017d5f011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjBzd2F0Y2hlcyUyMHRleHR1cmV8ZW58MXx8fHwxNzYxNTgyNDQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Fabric swatches"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
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
              Kies je basismodel
            </h2>
            <p
              className="text-deep-charcoal/70 max-w-[600px] mx-auto"
              style={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}
            >
              Elk model is volledig aan te passen naar jouw wensen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Showroom Appointment */}
      <ShowroomAppointment />

      <FinalCTA />
    </>
  );
}