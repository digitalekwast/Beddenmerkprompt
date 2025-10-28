import { PageHeader } from '../components/PageHeader';
import { ProductCard } from '../components/ProductCard';

export function HotelbeddenPage() {
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
      id: 'lechtal-hotelbed-160x200',
      imageUrl: 'https://images.unsplash.com/photo-1721742734916-b5b824d3d310?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwc2FnZSUyMGdyZWVufGVufDF8fHx8MTc2MTU4ODU0OHww&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Lechtal Hotelbed 160x200',
      collection: 'Lechtal',
      features: ['Direct leverbaar', '160x200 cm', 'B2B prijs'],
      inStock: true,
      availableColors: [
        { name: 'Light Grey', hex: '#D8D8D8' },
        { name: 'Warm Taupe', hex: '#C4B5A0' },
        { name: 'Deep Charcoal', hex: '#2C2C2C' },
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
    {
      id: 'valkeveen-hotelbed-custom',
      imageUrl: 'https://images.unsplash.com/photo-1681575437632-329719bc7f86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWQlMjBoZWFkYm9hcmQlMjBkZXRhaWx8ZW58MXx8fHwxNjE1ODg1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Valkeveen Hotelbed Custom',
      collection: 'Valkeveen',
      features: ['Op maat', 'Branded opties', 'Project prijs'],
      inStock: false,
      availableColors: [
        { name: 'Warm Taupe', hex: '#C4B5A0' },
        { name: 'Sage Green', hex: '#8B9B8E' },
        { name: 'Deep Charcoal', hex: '#2C2C2C' },
        { name: 'Pearl White', hex: '#F8F6F3' },
      ],
    },
    {
      id: 'recreatie-hotelbed-twin',
      imageUrl: 'https://images.unsplash.com/photo-1722605916530-fcc5f96d325e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmVkcm9vbSUyMHRhdXBlJTIwdG9uZXN8ZW58MXx8fHwxNzYxNTg4NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Recreatie Hotelbed Twin',
      collection: 'Recreatie',
      features: ['Hospitality proof', '90x200 cm', 'Compact formaat'],
      inStock: true,
      availableColors: [
        { name: 'Hotel White', hex: '#FFFFFF' },
        { name: 'Light Grey', hex: '#D8D8D8' },
        { name: 'Charcoal', hex: '#2C2C2C' },
      ],
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="B2B PRODUCTEN"
        title="Hotelbed sets"
        description="Speciaal ontwikkeld voor de hospitality sector. Duurzame, comfortabele bedden die bestand zijn tegen intensief gebruik. Perfecte balans tussen kwaliteit en prijs voor hotels, B&B's en vakantiehuizen."
        centered={true}
      />

      <section className="w-full bg-warm-white py-16">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          {/* B2B Info Banner */}
          <div className="mb-12 p-8 bg-sage-green/10 rounded-2xl border border-sage-green/20">
            <div className="flex items-start gap-6">
              <div className="flex-1">
                <h3
                  className="text-deep-charcoal mb-2"
                  style={{ fontSize: '20px', fontWeight: 500, lineHeight: '28px' }}
                >
                  B2B Service voor zakelijke klanten
                </h3>
                <p
                  className="text-deep-charcoal/70 mb-4"
                  style={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}
                >
                  Login om gepersonaliseerde prijzen te bekijken. Volume kortingen beschikbaar. Offerte op maat? Neem contact op met ons B2B team.
                </p>
                <div className="flex gap-4">
                  <a
                    href="/contact"
                    className="px-6 py-3 bg-warm-taupe text-deep-charcoal rounded-lg transition-all duration-200 hover:bg-[#B8A890]"
                    style={{ fontSize: '14px', fontWeight: 500 }}
                  >
                    Offerte aanvragen
                  </a>
                  <button
                    className="px-6 py-3 border border-deep-charcoal text-deep-charcoal rounded-lg transition-all duration-200 hover:bg-deep-charcoal hover:text-warm-white"
                    style={{ fontSize: '14px', fontWeight: 500 }}
                  >
                    Login zakelijk
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
