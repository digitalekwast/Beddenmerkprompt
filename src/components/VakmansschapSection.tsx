interface VakmansschapSectionProps {
  imageUrl: string;
}

export function VakmansschapSection({ imageUrl }: VakmansschapSectionProps) {
  const stats = [
    { number: '20+', label: 'dealers' },
    { number: '6', label: 'jaar ervaring' },
    { number: '3', label: 'collecties' },
  ];

  return (
    <section className="w-full bg-deep-charcoal py-16 md:py-16 sm:py-12">
      <div className="max-w-[1440px] mx-auto px-16 md:px-16 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-20 items-center">
          {/* Image Column */}
          <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
            <img
              src={imageUrl}
              alt="Vakmanschap detail"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* Content Column */}
          <div className="py-16 px-12 md:py-16 md:px-12 sm:py-8 sm:px-0">
            {/* Eyebrow */}
            <p
              className="text-warm-taupe uppercase mb-6"
              style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '1.5px', lineHeight: '12px' }}
            >
              Vakmanschap
            </p>

            {/* Heading */}
            <h2
              className="text-warm-white mb-6"
              style={{ fontSize: '36px', fontWeight: 700, lineHeight: '44px' }}
            >
              Ambacht zonder de premium prijskaart
            </h2>

            {/* Body */}
            <p
              className="text-warm-white/85 mb-8"
              style={{ fontSize: '16px', fontWeight: 400, lineHeight: '28px' }}
            >
              Iedere Bommel & Bach boxspring wordt met precisie vervaardigd. We werken met
              efficiënte partners, houden onze organisatie lean, en investeren in kwaliteit – niet
              in dure marketing. Zo leveren we Auping-niveau voor een eerlijke prijs.
            </p>

            {/* Stats Row - Bigger numbers */}
            <div className="flex gap-14 flex-wrap">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div
                    className="text-warm-taupe"
                    style={{ fontSize: '56px', fontWeight: 700, lineHeight: '64px' }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-warm-white/70 mt-2"
                    style={{ fontSize: '14px', fontWeight: 400, lineHeight: '14px' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
