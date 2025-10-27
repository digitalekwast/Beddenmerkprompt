import { CollectionCard } from './CollectionCard';

interface CollectiesOverviewProps {
  valkveenImage: string;
  lechtalImage: string;
  recreatieImage: string;
}

export function CollectiesOverview({ valkveenImage, lechtalImage, recreatieImage }: CollectiesOverviewProps) {
  const collections = [
    {
      imageUrl: valkveenImage,
      eyebrow: 'CONFIGUREERBAAR',
      title: 'Valkeveen',
      description: 'In 5 stappen naar jouw droomboxspring',
      features: [
        'Zelf samenstellen',
        'Luxe tot eenvoud',
        '200+ stoffen',
        '6-8 weken',
      ],
      ctaText: 'Bekijk producten',
      ctaHref: '/collecties/valkeveen',
    },
    {
      imageUrl: lechtalImage,
      eyebrow: 'DIRECT LEVERBAAR',
      title: 'Lechtal',
      description: 'Populaire boxsprings direct leverbaar',
      features: [
        'Complete sets',
        'Voorraad leverbaar',
        'Standaard maten',
        'Snelle levering',
      ],
      ctaText: 'Bekijk producten',
      ctaHref: '/collecties/lechtal',
    },
    {
      imageUrl: recreatieImage,
      eyebrow: 'HOSPITALITY',
      title: 'Recreatie',
      description: 'Voor hotels en recreatiebranche',
      features: [
        'Duurzaam',
        'Hospitality proof',
        'B2B service',
        'Op maat',
      ],
      ctaText: 'Bekijk producten',
      ctaHref: '/collecties/recreatie',
    },
  ];

  return (
    <section id="collecties" className="w-full bg-warm-white py-16 md:py-16 sm:py-12">
      <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-deep-charcoal"
            style={{ fontSize: '48px', fontWeight: 700, lineHeight: '56px' }}
          >
            Onze collecties
          </h2>
        </div>

        {/* Grid - Larger gaps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {collections.map((collection, index) => (
            <CollectionCard key={index} {...collection} />
          ))}
        </div>
      </div>
    </section>
  );
}