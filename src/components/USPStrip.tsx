import { CheckCircle, Award, Tag, Lightbulb } from 'lucide-react';

export function USPStrip() {
  const usps = [
    {
      icon: Lightbulb,
      label: 'Eigen ontwerpen',
      description: 'Elk bed is door ons zelf bedacht en ontwikkeld',
    },
    {
      icon: CheckCircle,
      label: 'Eigen productie',
      description: 'Handgemaakt in onze werkplaats in Staphorst',
    },
    {
      icon: Award,
      label: 'Premium kwaliteit',
      description: 'Vergelijkbaar met topmerken als Auping',
    },
    {
      icon: Tag,
      label: 'Eerlijke prijs',
      description: 'Direct van maker, geen tussenhandel',
    },
  ];

  return (
    <section className="w-full bg-warm-white py-16">
      <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            return (
              <div key={index} className="text-center">
                {/* Icon - Sage Green CRITICAL */}
                <div className="flex justify-center mb-6">
                  <Icon className="w-8 h-8 text-sage-green" strokeWidth={2} />
                </div>

                {/* Label */}
                <h3
                  className="text-deep-charcoal mb-3"
                  style={{ fontSize: '16px', fontWeight: 500, lineHeight: '24px' }}
                >
                  {usp.label}
                </h3>

                {/* Description */}
                <p
                  className="text-deep-charcoal/70 max-w-[280px] mx-auto"
                  style={{ fontSize: '14px', fontWeight: 400, lineHeight: '22px' }}
                >
                  {usp.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
