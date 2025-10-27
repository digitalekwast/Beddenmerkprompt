import { Link } from 'react-router-dom';
import { useState } from 'react';

interface ProductCardProps {
  id: string;
  imageUrl: string;
  name: string;
  collection: string;
  features: string[];
  inStock?: boolean;
  availableColors?: { name: string; hex: string }[];
}

export function ProductCard({
  id,
  imageUrl,
  name,
  collection,
  features,
  inStock = false,
  availableColors,
}: ProductCardProps) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  return (
    <Link
      to={`/product/${id}`}
      className="bg-warm-white rounded-lg overflow-hidden shadow-[0px_2px_16px_rgba(44,44,44,0.04)] transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0px_8px_32px_rgba(44,44,44,0.08)] group block"
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {inStock && (
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-sage-green/95 backdrop-blur-sm rounded">
            <span
              className="text-warm-white uppercase"
              style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '1px' }}
            >
              Direct leverbaar
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Collection */}
        <p
          className="text-sage-green uppercase mb-2"
          style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '1px', lineHeight: '12px' }}
        >
          {collection}
        </p>

        {/* Name */}
        <h3
          className="text-deep-charcoal mb-4"
          style={{ fontSize: '24px', fontWeight: 500, lineHeight: '32px' }}
        >
          {name}
        </h3>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-sage-green/8 rounded text-deep-charcoal/70"
              style={{ fontSize: '13px', fontWeight: 400 }}
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Color Options */}
        {availableColors && availableColors.length > 0 && (
          <div className="pt-4 border-t border-warm-taupe/20">
            <p
              className="text-deep-charcoal/60 mb-3"
              style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.5px' }}
            >
              BESCHIKBAAR IN {availableColors.length} KLEUREN
            </p>
            <div className="flex gap-2">
              {availableColors.map((color, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedColorIndex(index);
                  }}
                  className="group/color relative"
                  title={color.name}
                >
                  <div
                    className={`w-8 h-8 rounded-full transition-all duration-200 ${
                      selectedColorIndex === index
                        ? 'ring-2 ring-sage-green ring-offset-2'
                        : 'hover:ring-2 hover:ring-warm-taupe/40 hover:ring-offset-2'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-6 pt-4 border-t border-warm-taupe/20">
          <span
            className="text-sage-green group-hover:text-sage-green/80 transition-colors inline-flex items-center gap-2"
            style={{ fontSize: '14px', fontWeight: 500, letterSpacing: '0.3px' }}
          >
            Bekijk details
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
