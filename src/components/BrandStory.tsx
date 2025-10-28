import { Award, Lightbulb, Ruler, Heart } from 'lucide-react';

export function BrandStory() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Eigen ontwerpen',
      description: 'Elk bed is door ons zelf ontworpen en tot in detail uitgewerkt',
    },
    {
      icon: Ruler,
      title: 'Kwaliteitscontrole',
      description: 'Strikte controle en persoonlijke inspectie van elk product',
    },
    {
      icon: Heart,
      title: 'Nederlands vakmanschap',
      description: 'Geproduceerd volgens Nederlandse kwaliteitsstandaarden',
    },
    {
      icon: Award,
      title: 'Eerlijke prijzen',
      description: 'Premium kwaliteit zonder tussenhandel, direct van ontwerper',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-sage-green/5 via-warm-white to-warm-taupe/5 py-16 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        {/* Header met emphasis op eigen merk */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-2 bg-sage-green rounded-full mb-4 md:mb-6">
            <span
              className="text-warm-white uppercase"
              style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '1.5px' }}
            >
              100% EIGEN MERK
            </span>
          </div>
          <h2
            className="text-deep-charcoal mb-4 md:mb-6 max-w-[800px] mx-auto px-4"
            style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 700, lineHeight: 'clamp(38px, 7vw, 56px)', letterSpacing: '-0.01em' }}
          >
            Wij ontwerpen elk bed zelf
          </h2>
          <p
            className="text-deep-charcoal/70 max-w-[700px] mx-auto px-4"
            style={{ fontSize: 'clamp(16px, 4vw, 20px)', fontWeight: 400, lineHeight: 'clamp(26px, 5vw, 32px)' }}
          >
            Bommel & Bach is geen doorverkoper. Elk bed is door ons bedacht, ontworpen en tot in detail uitgewerkt. Van de eerste schets tot de keuze van materialen en afwerking – dit is ons merk, dit zijn onze creaties.
          </p>
        </div>

        {/* Visual Story Grid - Groot en Premium */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-20">
          {/* Large Featured Image */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-[0px_8px_32px_rgba(44,44,44,0.12)] lg:row-span-2">
            <img
              src="https://images.unsplash.com/photo-1760939858984-5dc76f0ea34a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdHNtYW4lMjB3b3Jrc2hvcCUyMGZ1cm5pdHVyZSUyMG1ha2luZ3xlbnwxfHx8fDE3NjE1OTMxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Onze werkplaats in Staphorst"
              className="w-full h-full object-cover"
              style={{ aspectRatio: '3/4' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/70 via-deep-charcoal/20 to-transparent" />
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10">
              <p
                className="text-sage-green uppercase mb-2 md:mb-3"
                style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px' }}
              >
                ONS ATELIER
              </p>
              <h3
                className="text-warm-white mb-2 md:mb-3"
                style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 700, lineHeight: 'clamp(30px, 6vw, 40px)' }}
              >
                Hier ontstaat elk ontwerp
              </h3>
              <p
                className="text-warm-white/90"
                style={{ fontSize: 'clamp(14px, 3vw, 16px)', fontWeight: 400, lineHeight: 'clamp(22px, 4vw, 26px)' }}
              >
                In Staphorst werken we met passie aan elk detail. Van eerste schets tot materiaalsamenstelling.
              </p>
            </div>
          </div>

          {/* Design Process Image */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-[0px_8px_32px_rgba(44,44,44,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1727522974614-b592018e49e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBza2V0Y2hpbmclMjBmdXJuaXR1cmUlMjBibHVlcHJpbnR8ZW58MXx8fHwxNzYxNTkzMTI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Ontwerpproces"
              className="w-full h-full object-cover"
              style={{ aspectRatio: '4/3' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/60 to-transparent" />
            <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8">
              <p
                className="text-warm-white"
                style={{ fontSize: 'clamp(16px, 3vw, 18px)', fontWeight: 600, lineHeight: 'clamp(24px, 4vw, 28px)' }}
              >
                Van schets tot werkelijkheid
              </p>
            </div>
          </div>

          {/* Materials Image */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-[0px_8px_32px_rgba(44,44,44,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1755224928593-352eeada6db6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYWJyaWMlMjB0ZXh0aWxlJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NjE1OTMxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Premium materialen"
              className="w-full h-full object-cover"
              style={{ aspectRatio: '4/3' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/60 to-transparent" />
            <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8">
              <p
                className="text-warm-white"
                style={{ fontSize: 'clamp(16px, 3vw, 18px)', fontWeight: 600, lineHeight: 'clamp(24px, 4vw, 28px)' }}
              >
                Keuze uit 200+ premium stoffen
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="p-6 md:p-8 bg-warm-white rounded-2xl shadow-[0px_4px_16px_rgba(44,44,44,0.06)] hover:shadow-[0px_8px_24px_rgba(44,44,44,0.1)] transition-all duration-300 hover:translate-y-[-4px]"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-sage-green to-sage-green/70 flex items-center justify-center mb-4 md:mb-6">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-warm-white" strokeWidth={2} />
                </div>
                <h4
                  className="text-deep-charcoal mb-2 md:mb-3"
                  style={{ fontSize: 'clamp(16px, 3vw, 18px)', fontWeight: 600, lineHeight: 'clamp(24px, 4vw, 26px)' }}
                >
                  {value.title}
                </h4>
                <p
                  className="text-deep-charcoal/70"
                  style={{ fontSize: 'clamp(14px, 3vw, 15px)', fontWeight: 400, lineHeight: 'clamp(22px, 4vw, 24px)' }}
                >
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
