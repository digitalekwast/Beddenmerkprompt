import { PageHeader } from '../components/PageHeader';
import { ProductCard } from '../components/ProductCard';
import { ShowroomAppointment } from '../components/ShowroomAppointment';

export function BoxspringsPage() {
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
    {
      id: 'lechtal-boxspring-140x200',
      imageUrl: 'https://images.unsplash.com/photo-1681575437632-329719bc7f86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWQlMjBoZWFkYm9hcmQlMjBkZXRhaWx8ZW58MXx8fHwxNjE1ODg1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
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

  return (
    <>
      <PageHeader
        eyebrow="100% EIGEN ONTWERPEN"
        title="Boxspring sets"
        description="Ontdek onze eigen ontworpen boxspring sets. Van configureerbare luxe tot direct leverbare comfort – elk bed is door ons bedacht, ontworpen en tot in detail uitgewerkt in Staphorst."
        centered={true}
      />

      <section className="w-full bg-warm-white py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          {/* Filter bar (optional) */}
          <div className="mb-8 md:mb-12 pb-6 md:pb-8 border-b border-[#E8E8E8]">
            <div className="flex flex-wrap gap-2 md:gap-4">
              <button
                className="px-3 md:px-4 py-1.5 md:py-2 bg-deep-charcoal text-warm-white rounded-lg transition-all duration-200"
                style={{ fontSize: '13px', fontWeight: 500 }}
              >
                Alle boxsprings
              </button>
              <button
                className="px-3 md:px-4 py-1.5 md:py-2 border border-deep-charcoal text-deep-charcoal rounded-lg transition-all duration-200 hover:bg-deep-charcoal hover:text-warm-white"
                style={{ fontSize: '13px', fontWeight: 500 }}
              >
                Valkeveen
              </button>
              <button
                className="px-3 md:px-4 py-1.5 md:py-2 border border-deep-charcoal text-deep-charcoal rounded-lg transition-all duration-200 hover:bg-deep-charcoal hover:text-warm-white"
                style={{ fontSize: '13px', fontWeight: 500 }}
              >
                Lechtal
              </button>
              <button
                className="px-3 md:px-4 py-1.5 md:py-2 border border-deep-charcoal text-deep-charcoal rounded-lg transition-all duration-200 hover:bg-deep-charcoal hover:text-warm-white"
                style={{ fontSize: '13px', fontWeight: 500 }}
              >
                Direct leverbaar
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Showroom Appointment */}
      <ShowroomAppointment />
    </>
  );
}
