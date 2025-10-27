import { Star } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      stars: 5,
      text: 'Prachtige boxspring van topkwaliteit. Het configureren was overzichtelijk en het eindresultaat overtreft onze verwachtingen. Aanrader!',
      author: 'Mark & Linda',
      location: 'Utrecht',
    },
    {
      stars: 5,
      text: 'Eindelijk een premium bed voor een eerlijke prijs. Vergelijkbaar met Auping maar veel voordeliger. Fantastisch comfort.',
      author: 'Sophie van Dam',
      location: 'Amsterdam',
    },
    {
      stars: 5,
      text: 'Uitstekende service en kwaliteit. De showroom bezoek was zeer professioneel. Blij met onze keuze!',
      author: 'Robert Jansen',
      location: 'Rotterdam',
    },
  ];

  return (
    <section className="w-full bg-warm-white py-16">
      <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-deep-charcoal mb-4"
            style={{ fontSize: '48px', fontWeight: 700, lineHeight: '56px' }}
          >
            Klantervaringen
          </h2>
          <p
            className="text-deep-charcoal/70 max-w-[600px] mx-auto"
            style={{ fontSize: '17px', lineHeight: '28px' }}
          >
            Ontdek waarom hotels, meubelzaken en vakantieparken voor Bommel & Bach kiezen
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-sage-green/4 p-8 rounded-xl"
            >
              {/* Stars - Sage Green CRITICAL */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-sage-green fill-sage-green"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p
                className="text-deep-charcoal/80 mb-5"
                style={{ fontSize: '16px', lineHeight: '26px' }}
              >
                "{review.text}"
              </p>

              {/* Author */}
              <p
                className="text-deep-charcoal mb-1"
                style={{ fontSize: '14px', fontWeight: 500 }}
              >
                {review.author}
              </p>
              <p
                className="text-deep-charcoal/50"
                style={{ fontSize: '12px' }}
              >
                {review.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
