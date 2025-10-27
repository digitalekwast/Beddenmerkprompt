import { Sparkles } from 'lucide-react';

export function CraftsmanshipGallery() {
  return (
    <section className="w-full bg-warm-white py-32">
      <div className="max-w-[1400px] mx-auto px-16 md:px-16 sm:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm-taupe/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-sage-green" />
            <span
              className="text-sage-green uppercase"
              style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px' }}
            >
              Nederlands vakmanschap
            </span>
          </div>
          <h2
            className="text-deep-charcoal mb-6"
            style={{ fontSize: '48px', fontWeight: 700, lineHeight: '56px' }}
          >
            In detail: ons vakwerk
          </h2>
          <p
            className="text-deep-charcoal/70 max-w-[700px] mx-auto"
            style={{ fontSize: '18px', fontWeight: 400, lineHeight: '30px' }}
          >
            Kwaliteit zit in de details. Zie hoe we met zorg en precisie elk bed met de hand maken.
          </p>
        </div>

        {/* Premium Photo Grid - Editorial Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Left Image */}
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-[0px_4px_24px_rgba(44,44,44,0.08)] group">
            <img
              src="https://images.unsplash.com/photo-1654511830326-63a577771a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGNyYWZ0aW5nJTIwcXVhbGl0eSUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NjE1OTMxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Handgemaakt vakmanschap"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ aspectRatio: '16/10' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/50 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p
                className="text-warm-white/90 mb-2"
                style={{ fontSize: '14px', fontWeight: 500, letterSpacing: '1px' }}
              >
                HANDWERK
              </p>
              <h3
                className="text-warm-white"
                style={{ fontSize: '28px', fontWeight: 700, lineHeight: '36px' }}
              >
                Met de hand gestikt en afgewerkt
              </h3>
            </div>
          </div>

          {/* Right Column - Stacked Images */}
          <div className="flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-[0px_4px_24px_rgba(44,44,44,0.08)] group">
              <img
                src="https://images.unsplash.com/photo-1759176171441-7afca44a5558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbWF0dHJlc3MlMjBtYXRlcmlhbHMlMjBsYXllcnN8ZW58MXx8fHwxNzYxNTkzMTI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Premium materialen in lagen"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ aspectRatio: '4/3' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p
                  className="text-warm-white"
                  style={{ fontSize: '16px', fontWeight: 600, lineHeight: '24px' }}
                >
                  Premium materialen
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-[0px_4px_24px_rgba(44,44,44,0.08)] group">
              <img
                src="https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsJTIwYmVkcm9vbSUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NjE1OTMxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Het eindresultaat in een modern interieur"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ aspectRatio: '4/3' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p
                  className="text-warm-white"
                  style={{ fontSize: '16px', fontWeight: 600, lineHeight: '24px' }}
                >
                  Het eindresultaat
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Full Width Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="relative rounded-2xl overflow-hidden shadow-[0px_4px_24px_rgba(44,44,44,0.08)] group">
            <img
              src="https://images.unsplash.com/photo-1755224928593-352eeada6db6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYWJyaWMlMjB0ZXh0aWxlJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NjE1OTMxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Exclusieve stoffen"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ aspectRatio: '16/9' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p
                className="text-warm-white/90 mb-1"
                style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '1px' }}
              >
                STOFFEN
              </p>
              <p
                className="text-warm-white"
                style={{ fontSize: '18px', fontWeight: 600, lineHeight: '26px' }}
              >
                200+ exclusieve stoffen van topkwaliteit
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-[0px_4px_24px_rgba(44,44,44,0.08)] bg-gradient-to-br from-sage-green/10 to-warm-taupe/10 p-12 flex flex-col justify-center">
            <div className="max-w-[400px]">
              <div
                className="text-sage-green uppercase mb-4"
                style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '2px' }}
              >
                ONZE BELOFTE
              </div>
              <h3
                className="text-deep-charcoal mb-6"
                style={{ fontSize: '32px', fontWeight: 700, lineHeight: '40px' }}
              >
                Kwaliteit die je kunt zien én voelen
              </h3>
              <p
                className="text-deep-charcoal/70 mb-8"
                style={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}
              >
                Elk bed dat we maken is uniek. Niet omdat we het moeten, maar omdat we van ons vak houden en trots zijn op wat we doen.
              </p>
              <a
                href="/over-ons"
                className="inline-flex h-12 px-8 bg-sage-green text-warm-white rounded-xl items-center justify-center transition-all duration-200 hover:bg-sage-green/90 hover:shadow-lg hover:translate-y-[-2px]"
                style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.3px' }}
              >
                Ons verhaal
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
