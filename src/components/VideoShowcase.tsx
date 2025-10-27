import { Play } from 'lucide-react';
import { useState } from 'react';

interface VideoShowcaseProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl?: string; // YouTube embed URL of direct video URL
  eyebrow?: string;
}

export function VideoShowcase({
  title,
  description,
  thumbnailUrl,
  videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
  eyebrow,
}: VideoShowcaseProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-warm-white py-32">
      <div className="max-w-[1400px] mx-auto px-16 md:px-16 sm:px-6">
        <div className="text-center mb-12">
          {eyebrow && (
            <div
              className="text-sage-green uppercase mb-4"
              style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '2px' }}
            >
              {eyebrow}
            </div>
          )}
          <h2
            className="text-deep-charcoal mb-6"
            style={{ fontSize: '48px', fontWeight: 700, lineHeight: '56px' }}
          >
            {title}
          </h2>
          <p
            className="text-deep-charcoal/70 max-w-[700px] mx-auto"
            style={{ fontSize: '18px', fontWeight: 400, lineHeight: '30px' }}
          >
            {description}
          </p>
        </div>

        {/* Video Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-[0px_12px_48px_rgba(44,44,44,0.15)] group">
          {!isPlaying ? (
            <>
              {/* Thumbnail */}
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <img
                  src={thumbnailUrl}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/60 via-deep-charcoal/20 to-transparent" />
                
                {/* Play Button */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group/play"
                  aria-label="Video afspelen"
                >
                  <div className="w-24 h-24 rounded-full bg-warm-white/95 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover/play:scale-110 group-hover/play:bg-sage-green group-hover/play:shadow-2xl">
                    <Play 
                      className="w-10 h-10 text-sage-green group-hover/play:text-warm-white transition-colors ml-1" 
                      strokeWidth={2}
                      fill="currentColor"
                    />
                  </div>
                </button>

                {/* Bottom Label */}
                <div className="absolute bottom-8 left-8 right-8">
                  <p
                    className="text-warm-white"
                    style={{ fontSize: '24px', fontWeight: 600, lineHeight: '32px' }}
                  >
                    Bekijk onze video
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Video iFrame */}
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <iframe
                  src={`${videoUrl}?autoplay=1`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p
            className="text-deep-charcoal/60"
            style={{ fontSize: '15px', fontWeight: 400, lineHeight: '24px' }}
          >
            Ontdek hoe we met passie en vakmanschap elk bed met de hand maken in Staphorst
          </p>
        </div>
      </div>
    </section>
  );
}
