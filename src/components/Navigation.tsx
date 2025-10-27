import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Boxspring sets', href: '/boxsprings' },
    { label: 'Hotelbed sets', href: '/hotelbedden' },
    { label: 'Collecties', href: '/collecties/valkeveen' },
    { label: 'Verkooppunten', href: '/verkooppunten' },
    { label: 'Over ons', href: '/over-ons' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300 ${
          isScrolled
            ? 'bg-warm-white/80 backdrop-blur-[10px] border-b border-[#E8E8E8] shadow-[0px_2px_8px_rgba(44,44,44,0.04)]'
            : 'bg-warm-white/80 backdrop-blur-[10px]'
        }`}
      >
        <div className="px-16 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-[32px] leading-[32px] tracking-[-0.01em]" style={{ fontWeight: 700 }}>
                Bommel & Bach
              </span>
            </Link>
          </div>

          {/* Center Menu */}
          <div className="flex items-center gap-12">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="relative text-[15px] leading-[15px] tracking-[0.3px] py-2 text-deep-charcoal hover:text-warm-taupe transition-colors duration-200 group"
                style={{ fontWeight: 500 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-warm-taupe transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/verkooppunten"
            className="h-11 px-6 bg-warm-taupe text-deep-charcoal rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-[#B8A890] hover:shadow-md hover:translate-y-[-1px]"
            style={{ fontWeight: 500, fontSize: '15px', letterSpacing: '0.3px' }}
          >
            Plan showroom bezoek
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden bg-warm-white border-b border-[#E8E8E8] shadow-[0px_2px_8px_rgba(44,44,44,0.04)]">
        <div className="px-6 h-16 flex items-center justify-between">
          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-6 h-6 flex flex-col justify-center gap-[6px]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-deep-charcoal" />
            ) : (
              <>
                <span className="w-6 h-[2px] bg-deep-charcoal" />
                <span className="w-6 h-[2px] bg-deep-charcoal" />
                <span className="w-6 h-[2px] bg-deep-charcoal" />
              </>
            )}
          </button>

          {/* Logo */}
          <Link to="/" className="text-[20px] leading-[20px]" style={{ fontWeight: 700 }}>
            Bommel & Bach
          </Link>

          {/* Spacer for balance */}
          <div className="w-6" />
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-warm-white pt-20 pb-10 px-6 h-[100vh]">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-[24px] leading-[48px]"
                  style={{ fontWeight: 500 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/verkooppunten"
                className="mt-4 h-12 bg-warm-taupe text-deep-charcoal rounded-xl flex items-center justify-center"
                style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.3px' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Plan showroom bezoek
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}