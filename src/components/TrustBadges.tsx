import { Shield, Truck, Award, Clock } from 'lucide-react';

interface TrustBadge {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export function TrustBadges() {
  const badges: TrustBadge[] = [
    {
      icon: Shield,
      title: 'Veilig betalen',
      description: 'Betaal veilig via iDEAL, bankoverschrijving of op rekening',
    },
    {
      icon: Truck,
      title: 'Gratis levering',
      description: 'Gratis bezorging vanaf €2.500 in Nederland',
    },
    {
      icon: Award,
      title: '5 jaar garantie',
      description: 'Op alle boxsprings en hotelbedden',
    },
    {
      icon: Clock,
      title: 'Snelle levertijd',
      description: 'Standaard 4-6 weken levertijd',
    },
  ];

  return (
    <section className="w-full bg-warm-white py-16 border-y border-warm-taupe/10">
      <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-sage-green/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-sage-green" />
                </div>

                {/* Title */}
                <h3
                  className="text-deep-charcoal mb-2"
                  style={{ fontSize: '15px', fontWeight: 600, lineHeight: '20px' }}
                >
                  {badge.title}
                </h3>

                {/* Description */}
                <p
                  className="text-deep-charcoal/60"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
