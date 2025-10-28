interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function PageHeader({ eyebrow, title, description, centered = false }: PageHeaderProps) {
  return (
    <div className={`pt-24 md:pt-32 pb-12 md:pb-16 ${centered ? 'text-center' : ''}`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        {eyebrow && (
          <p
            className="text-sage-green uppercase mb-3 md:mb-4"
            style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', fontWeight: 500, letterSpacing: '1.5px', lineHeight: '12px' }}
          >
            {eyebrow}
          </p>
        )}
        
        <h1
          className="text-deep-charcoal mb-4 md:mb-6"
          style={{ fontSize: 'clamp(36px, 8vw, 64px)', fontWeight: 700, lineHeight: 'clamp(42px, 9vw, 72px)', letterSpacing: '-0.01em' }}
        >
          {title}
        </h1>
        
        {description && (
          <p
            className={`text-deep-charcoal/80 max-w-[680px] ${centered ? 'mx-auto' : ''}`}
            style={{ fontSize: 'clamp(16px, 4vw, 18px)', fontWeight: 400, lineHeight: 'clamp(26px, 5vw, 30px)' }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
