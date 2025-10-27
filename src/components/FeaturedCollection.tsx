import { Check, ArrowRight } from 'lucide-react';

interface FeaturedCollectionProps {
  imageUrl: string;
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  imageOnRight?: boolean;
}

export function FeaturedCollection({
  imageUrl,
  eyebrow,
  title,
  description,
  features,
  ctaText,
  ctaHref,
  imageOnRight = false,
}: FeaturedCollectionProps) {
  return (
    <section className="w-full bg-warm-white py-16 md:py-16 sm:py-12">
      <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${
            imageOnRight ? 'md:grid-flow-dense' : ''
          }`}
        >
          {/* Image Column */}
          <div className={imageOnRight ? 'md:col-start-2' : ''}>
            <div
              className="relative w-full rounded-2xl overflow-hidden shadow-[0px_4px_24px_rgba(44,44,44,0.08)]"
              style={{ aspectRatio: '4/5' }}
            >
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className={`max-w-[480px] ${imageOnRight ? 'md:col-start-1 md:row-start-1 md:ml-auto' : ''}`}>
            {/* Eyebrow */}
            <p
              className="text-sage-green uppercase mb-4"
              style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '1.5px', lineHeight: '12px' }}
            >
              {eyebrow}
            </p>

            {/* Title */}
            <h2
              className="text-deep-charcoal mb-6"
              style={{ fontSize: '48px', fontWeight: 700, lineHeight: '56px' }}
            >
              {title}
            </h2>

            {/* Description */}
            <p
              className="text-deep-charcoal/80 mb-6"
              style={{ fontSize: '18px', fontWeight: 400, lineHeight: '30px' }}
            >
              {description}
            </p>

            {/* Feature List - Sage Green checks */}
            <div className="flex flex-col gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-3 h-3 text-sage-green flex-shrink-0" strokeWidth={3} />
                  <span
                    className="text-deep-charcoal"
                    style={{ fontSize: '16px', fontWeight: 400, lineHeight: '28px' }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href={ctaHref}
              className="h-12 px-8 bg-warm-taupe text-deep-charcoal rounded-lg inline-flex items-center justify-center gap-2 transition-all duration-200 hover:bg-[#B8A890] hover:shadow-md hover:scale-[1.02]"
              style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.3px' }}
            >
              {ctaText}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
