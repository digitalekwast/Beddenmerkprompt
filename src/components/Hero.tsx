import { ChevronDown, ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  imageUrl: string;
}

export function Hero({ imageUrl }: HeroProps) {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[85vh] lg:min-h-[90vh] md:max-h-[1100px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt="Premium bed in beautiful room"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(44, 44, 44, 0.3) 0%, rgba(44, 44, 44, 0.1) 50%, rgba(44, 44, 44, 0.4) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative min-h-[600px] md:min-h-[85vh] lg:min-h-[90vh] md:max-h-[1100px] flex items-center">
        <div className="ml-6 md:ml-32 lg:ml-40 max-w-[680px] px-0 md:px-6 w-full">
          <div className="flex flex-col gap-5 md:gap-6">
            {/* Eyebrow - Met emphasis op EIGEN MERK */}
            <div className="flex flex-col gap-2 md:gap-3">
              <div className="inline-flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 self-start">
                <div className="px-3 md:px-4 py-1.5 md:py-2 bg-sage-green/90 backdrop-blur-sm rounded-full">
                  <span
                    className="text-warm-white uppercase"
                    style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '1.5px' }}
                  >
                    100% EIGEN MERK
                  </span>
                </div>
                <p
                  className="text-warm-white/90 uppercase hidden md:block"
                  style={{ fontSize: '13px', lineHeight: '16px', fontWeight: 500, letterSpacing: '1.5px' }}
                >
                  NEDERLANDS VAKMANSCHAP SINDS 2019
                </p>
              </div>
            </div>

            {/* Headline - BOLD */}
            <h1
              className="text-warm-white max-w-[600px]"
              style={{
                fontSize: 'clamp(32px, 7vw, 56px)',
                lineHeight: 'clamp(38px, 8vw, 64px)',
                fontWeight: 700,
                letterSpacing: '-0.01em',
              }}
            >
              Premium bedden zonder de premium prijs
            </h1>

            {/* Subheadline */}
            <p
              className="text-warm-white/85 max-w-[540px] pr-6 md:pr-0"
              style={{
                fontSize: 'clamp(15px, 3.5vw, 18px)',
                lineHeight: 'clamp(24px, 4.5vw, 30px)',
                fontWeight: 400,
              }}
            >
              Ontworpen in Nederland met oog voor detail. Kwaliteit vergelijkbaar met Auping, voor €2.500-€4.000.
            </p>

            {/* Button Group */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-2 md:mt-4 pr-6 md:pr-0">
              <Link
                to="/offerte-aanvraag"
                className="h-12 md:h-14 px-6 md:px-8 bg-sage-green text-warm-white rounded-lg flex items-center justify-center gap-2 transition-all duration-200 hover:bg-sage-green/90"
                style={{ fontWeight: 500, fontSize: '15px' }}
              >
                Plan showroom bezoek
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/collecties/valkeveen"
                className="h-12 md:h-14 px-6 md:px-8 bg-warm-white/90 text-deep-charcoal rounded-lg flex items-center justify-center gap-2 transition-all duration-200 hover:bg-warm-white"
                style={{ fontWeight: 500, fontSize: '15px' }}
              >
                Ontdek collecties
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ChevronDown className="w-6 h-6 text-warm-white/60 animate-bounce" />
      </div>
    </section>
  );
}
