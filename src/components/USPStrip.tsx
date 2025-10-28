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
      label: 'Kwaliteitscontrole',
      description: 'Persoonlijk geïnspecteerd volgens strikte eisen',
    },
    {
      icon: Award,
      label: 'Premium kwaliteit',
      description: 'Vergelijkbaar met topmerken als Auping',
    },
    {
      icon: Tag,
      label: 'Eerlijke prijs',
      description: 'Direct van ontwerper, geen tussenhandel',
    },
  ];

  return (
    <section className="w-full bg-warm-white py-12 md:py-16 border-b border-warm-taupe/20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            return (
              <div key={index} className="text-center">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-sage-green/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-sage-green" />
                  </div>
                </div>

                {/* Label */}
                <h3
                  className="text-deep-charcoal mb-2"
                  style={{ fontSize: '15px', fontWeight: 600, lineHeight: '22px' }}
                >
                  {usp.label}
                </h3>

                {/* Description */}
                <p
                  className="text-deep-charcoal/70 max-w-[240px] mx-auto"
                  style={{ fontSize: '14px', fontWeight: 400, lineHeight: '21px' }}
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
