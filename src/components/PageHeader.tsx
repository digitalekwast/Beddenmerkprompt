interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function PageHeader({ eyebrow, title, description, centered = false }: PageHeaderProps) {
  return (
    <div className={`pt-32 pb-16 ${centered ? 'text-center' : ''}`}>
      <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
        {eyebrow && (
          <p
            className="text-sage-green uppercase mb-4"
            style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '1.5px', lineHeight: '12px' }}
          >
            {eyebrow}
          </p>
        )}
        
        <h1
          className="text-deep-charcoal mb-6"
          style={{ fontSize: '64px', fontWeight: 700, lineHeight: '72px', letterSpacing: '-0.01em' }}
        >
          {title}
        </h1>
        
        {description && (
          <p
            className="text-deep-charcoal/80 max-w-[680px]"
            style={{ fontSize: '18px', fontWeight: 400, lineHeight: '30px' }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
