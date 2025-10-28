import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export function SocialProof() {
  const stats = [
    { number: '20', label: 'dealers in Nederland' },
    { number: '6', label: 'jaar expertise' },
    { number: '3', label: 'unieke collecties' },
  ];

  return (
    <section 
      id="dealers" 
      className="w-full py-16" 
      style={{ backgroundColor: 'rgba(139, 155, 142, 0.08)' }}
    >
      <div className="max-w-[1000px] mx-auto px-16 md:px-16 sm:px-6 text-center">
        {/* Stats Row - Bigger numbers */}
        <div className="flex flex-col md:flex-row justify-center gap-20 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="text-deep-charcoal"
                style={{ fontSize: '72px', fontWeight: 700, lineHeight: '80px' }}
              >
                {stat.number}
              </div>
              <div
                className="text-deep-charcoal/70 mt-3"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '18px' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div 
          className="w-30 h-0.5 mx-auto mb-8"
          style={{ backgroundColor: 'rgba(139, 155, 142, 0.3)' }}
        />

        {/* Description */}
        <p
          className="text-deep-charcoal/70 mb-10"
          style={{ fontSize: '16px', lineHeight: '26px' }}
        >
          Een groeiend netwerk van dealers door heel Nederland
        </p>

        {/* CTA Button */}
        <Link
          to="/verkooppunten"
          className="inline-flex h-14 px-10 border-2 border-deep-charcoal text-deep-charcoal rounded-lg items-center justify-center gap-2 transition-all duration-200 hover:bg-deep-charcoal hover:text-warm-white hover:shadow-md"
          style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.3px' }}
        >
          Vind jouw dichtstbijzijnde dealer
          <MapPin className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
