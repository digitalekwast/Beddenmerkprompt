import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const linkGroups = [
    {
      heading: 'Producten',
      links: [
        { label: 'Boxspring sets', href: '/boxsprings' },
        { label: 'Hotelbed sets', href: '/hotelbedden' },
        { label: 'Hoofdborden', href: '/hoofdborden' },
        { label: 'Boxen', href: '/boxen' },
        { label: 'Matrassen', href: '/matrassen' },
        { label: 'Topmatrassen', href: '/topmatrassen' },
      ],
    },
    {
      heading: 'Bedrijf',
      links: [
        { label: 'Over Bommel & Bach', href: '/over-ons' },
        { label: 'Vakmanschap', href: '/over-ons#vakmanschap' },
        { label: 'Showroom', href: '/contact#showroom' },
        { label: 'Verkooppunten', href: '/verkooppunten' },
        { label: 'Word dealer', href: '/contact#dealer' },
      ],
    },
    {
      heading: 'Service',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'Veelgestelde vragen', href: '/faq' },
        { label: 'Levering & montage', href: '/levering' },
        { label: 'Garantie', href: '/garantie' },
        { label: 'Retouren', href: '/retouren' },
      ],
    },
  ];

  return (
    <footer className="w-full bg-deep-charcoal pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mb-12">
          {/* Brand Column (1.5x width) */}
          <div className="md:col-span-2">
            {/* Logo */}
            <div className="mb-6">
              <Link to="/">
                <span
                  className="text-warm-white"
                  style={{ fontSize: '32px', lineHeight: '32px', fontWeight: 700 }}
                >
                  Bommel & Bach
                </span>
              </Link>
            </div>

            {/* Tagline */}
            <p
              className="text-warm-white/70 mb-4"
              style={{ fontSize: '14px', fontWeight: 400, lineHeight: '22px' }}
            >
              Nederlands merk. Eerlijke luxe.
            </p>

            {/* Contact */}
            <div
              className="text-warm-white/60"
              style={{ fontSize: '14px', fontWeight: 400, lineHeight: '24px' }}
            >
              <p>[email protected]</p>
              <p>0522-236040</p>
            </div>
          </div>

          {/* Link Groups */}
          {linkGroups.map((group, index) => (
            <div key={index}>
              <h4
                className="text-warm-white uppercase mb-4"
                style={{ fontSize: '14px', fontWeight: 500, letterSpacing: '0.5px', lineHeight: '14px' }}
              >
                {group.heading}
              </h4>
              <ul className="flex flex-col">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-warm-white/70 hover:text-warm-taupe transition-colors duration-200"
                      style={{ fontSize: '14px', fontWeight: 400, lineHeight: '32px' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Column */}
          <div>
            <h4
              className="text-warm-white uppercase mb-4"
              style={{ fontSize: '14px', fontWeight: 500, letterSpacing: '0.5px', lineHeight: '14px' }}
            >
              Volg ons
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-white/70 hover:text-warm-taupe transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-white/70 hover:text-warm-taupe transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-white/70 hover:text-warm-taupe transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-warm-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-warm-white/50"
            style={{ fontSize: '12px', fontWeight: 400, lineHeight: '12px' }}
          >
            © 2025 Bommel & Bach. Alle rechten voorbehouden.
          </p>

          <div className="flex gap-6">
            {['Privacy Policy', 'Algemene Voorwaarden', 'Cookies'].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-warm-white/50 hover:text-warm-white/70 transition-colors duration-200"
                style={{ fontSize: '12px', fontWeight: 400, lineHeight: '12px' }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}