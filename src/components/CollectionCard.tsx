import { Check, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CollectionCardProps {
  imageUrl: string;
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

export function CollectionCard({
  imageUrl,
  eyebrow,
  title,
  description,
  features,
  ctaText,
  ctaHref,
}: CollectionCardProps) {
  return (
    <div className="bg-warm-white rounded-lg overflow-hidden shadow-[0px_2px_16px_rgba(44,44,44,0.04)] transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0px_8px_32px_rgba(44,44,44,0.08)] group">
      {/* Image */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Eyebrow */}
        <p
          className="text-sage-green uppercase mb-2"
          style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '1px', lineHeight: '12px' }}
        >
          {eyebrow}
        </p>

        {/* Title */}
        <h3
          className="text-deep-charcoal mb-3"
          style={{ fontSize: '24px', fontWeight: 500, lineHeight: '24px' }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-deep-charcoal/70 mb-4 line-clamp-2"
          style={{ fontSize: '14px', fontWeight: 400, lineHeight: '22px' }}
        >
          {description}
        </p>

        {/* Features */}
        <div className="flex flex-col gap-2 mb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <Check className="w-3 h-3 text-sage-green flex-shrink-0" strokeWidth={3} />
              <span
                className="text-deep-charcoal"
                style={{ fontSize: '14px', fontWeight: 400, lineHeight: '24px' }}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-2 pt-2 border-t border-warm-taupe/10">
          <Link
            to="/offerte-aanvraag"
            className="h-12 px-5 bg-sage-green text-warm-white rounded-lg inline-flex items-center justify-center gap-2 transition-all duration-200 hover:bg-sage-green/90"
            style={{ fontSize: '15px', fontWeight: 500 }}
          >
            <FileText className="w-4 h-4" />
            Plan showroom bezoek
          </Link>
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center gap-2 text-sage-green hover:text-sage-green/80 transition-colors duration-200 py-2"
            style={{ fontSize: '14px', fontWeight: 500 }}
          >
            {ctaText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
