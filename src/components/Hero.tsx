import { ChevronDown, ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  imageUrl: string;
}

export function Hero({ imageUrl }: HeroProps) {
  return (
    <section className="relative w-full min-h-[700px] max-h-[1000px] h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt="Premium bed in beautiful room"
          className="w-full h-full object-cover object-center-right"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(44, 44, 44, 0) 0%, rgba(44, 44, 44, 0.3) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="ml-40 md:ml-40 sm:ml-6 max-w-[600px] px-6">
          <div className="flex flex-col gap-6">
            {/* Eyebrow */}
            <p
              className="text-warm-white/90 uppercase tracking-[1px]"
              style={{ fontSize: '14px', lineHeight: '16px', fontWeight: 400, letterSpacing: '1px' }}
            >
              NEDERLANDS VAKMANSCHAP SINDS 2019
            </p>

            {/* Headline - BOLD */}
            <h1
              className="text-warm-white max-w-[560px]"
              style={{
                fontSize: '64px',
                lineHeight: '72px',
                fontWeight: 700,
                letterSpacing: '-0.01em',
              }}
            >
              Premium bedden zonder de premium prijs
            </h1>

            {/* Subheadline */}
            <p
              className="text-warm-white/85 max-w-[520px]"
              style={{
                fontSize: '18px',
                lineHeight: '30px',
                fontWeight: 400,
              }}
            >
              Kwaliteit vergelijkbaar met Auping, voor €2.500-€4.000. Ontdek eerlijke luxe.
            </p>

            {/* Button Group */}
            <div className="flex gap-4 mt-6">
              <Link
                to="/collecties/valkeveen"
                className="h-12 px-8 bg-warm-white text-deep-charcoal rounded-lg flex items-center justify-center gap-2 transition-all duration-200 hover:bg-warm-white/90 hover:shadow-md hover:scale-[1.02]"
                style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.3px' }}
              >
                Ontdek collecties
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/verkooppunten"
                className="h-12 px-8 border-2 border-warm-white text-warm-white rounded-lg flex items-center justify-center gap-2 transition-all duration-200 hover:bg-warm-white hover:text-deep-charcoal"
                style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.3px' }}
              >
                Vind dealer
                <MapPin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ChevronDown 
          className="w-6 h-6 text-warm-white/60 animate-bounce" 
          style={{ animation: 'bounce 2s infinite' }}
        />
      </div>
    </section>
  );
}
