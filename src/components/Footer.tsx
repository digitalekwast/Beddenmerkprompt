import { Instagram, Facebook, Linkedin, Mail, ArrowRight, Gift, Bed, MapPin, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter signup:', email);
    setEmail('');
  };

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
    <footer className="w-full bg-deep-charcoal overflow-hidden">
      {/* Hero Newsletter Section - Award Winning */}
      <div className="relative w-full">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-[0.08]">
          <img
            src="https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwbWluaW1hbHxlbnwxfHx8fDE3NjE2MDE2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(139, 155, 142, 0.03) 0%, rgba(44, 44, 44, 0) 100%)'
          }}
        />

        {/* Content */}
        <div className="relative max-w-[1200px] mx-auto px-6 md:px-16 py-16 md:py-24">
          <div className="max-w-[700px] mx-auto text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-sage-green/30 bg-sage-green/5">
              <Sparkles className="w-3.5 h-3.5 text-sage-green" />
              <span
                className="text-sage-green uppercase"
                style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '1.5px' }}
              >
                Exclusief voor B2B Partners
              </span>
            </div>

            {/* Impactful Heading */}
            <h2
              className="text-warm-white mb-6"
              style={{ 
                fontSize: 'clamp(32px, 5vw, 48px)', 
                fontWeight: 700, 
                lineHeight: 'clamp(40px, 6vw, 56px)', 
                letterSpacing: '-0.02em' 
              }}
            >
              Blijf op de hoogte van innovaties
            </h2>

            {/* Subtext */}
            <p
              className="text-warm-white/70 mb-8"
              style={{ fontSize: '17px', fontWeight: 400, lineHeight: '28px' }}
            >
              Ontvang als eerste nieuws over nieuwe collecties, exclusieve B2B aanbiedingen en vakinhoudelijke updates.
            </p>

            {/* Premium Email Form */}
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-3 max-w-[560px] mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-white/40" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jouw@bedrijf.nl"
                    required
                    className="w-full h-14 pl-12 pr-4 bg-warm-white/[0.08] backdrop-blur-sm border border-warm-white/20 rounded-xl text-warm-white placeholder:text-warm-white/40 focus:outline-none focus:border-sage-green focus:bg-warm-white/[0.12] transition-all duration-300"
                    style={{ fontSize: '15px', fontWeight: 400 }}
                  />
                </div>
                <button
                  type="submit"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="h-14 px-8 bg-sage-green text-warm-white rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:bg-sage-green/90 hover:shadow-[0px_8px_32px_rgba(139,155,142,0.25)] hover:scale-[1.02] group relative overflow-hidden"
                  style={{ fontWeight: 600, fontSize: '15px' }}
                >
                  <span className="relative z-10">Inschrijven</span>
                  <ArrowRight className={`w-5 h-5 relative z-10 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                  
                  {/* Shine effect */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-warm-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                    style={{ width: '100%' }}
                  />
                </button>
              </div>
            </form>

            {/* Premium USP Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[600px] mx-auto">
              {[
                { icon: Gift, text: 'Exclusieve B2B deals' },
                { icon: Bed, text: 'Product innovaties' },
                { icon: CheckCircle2, text: 'Vakinhoudelijk advies' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-warm-white/[0.03] border border-warm-white/[0.08] hover:border-warm-white/20 hover:bg-warm-white/[0.06] transition-all duration-300"
                >
                  <item.icon className="w-5 h-5 text-sage-green" />
                  <span className="text-warm-white/70 text-center" style={{ fontSize: '13px', fontWeight: 500 }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sage-green/30 to-transparent" />
      </div>

      {/* Main Content Grid - Premium Layout */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* Brand Statement - Takes More Space */}
          <div className="lg:col-span-5">
            {/* Logo with Premium Styling */}
            <div className="mb-8">
              <Link to="/" className="inline-block group">
                <span
                  className="text-warm-white transition-colors duration-300 group-hover:text-sage-green"
                  style={{ fontSize: '40px', lineHeight: '40px', fontWeight: 700, letterSpacing: '-0.02em' }}
                >
                  Bommel & Bach
                </span>
              </Link>
              
              {/* Accent Line */}
              <div className="mt-3 w-16 h-[3px] bg-gradient-to-r from-sage-green to-sage-green/30 rounded-full" />
            </div>

            {/* Brand Statement */}
            <h3
              className="text-warm-white/90 mb-6"
              style={{ fontSize: '20px', fontWeight: 600, lineHeight: '32px', letterSpacing: '-0.01em' }}
            >
              Nederlands vakmanschap.
              <br />
              Premium bedden voor professionals.
            </h3>

            <p
              className="text-warm-white/60 mb-8 max-w-[420px]"
              style={{ fontSize: '15px', fontWeight: 400, lineHeight: '26px' }}
            >
              Sinds 2010 leveren wij hoogwaardige slaapoplossingen aan hotels, beddenspecialisten en recreatiebedrijven in heel Nederland.
            </p>

            {/* Contact Cards */}
            <div className="space-y-3 mb-8">
              <a
                href="mailto:[email protected]"
                className="flex items-center gap-3 p-4 rounded-xl bg-warm-white/[0.04] border border-warm-white/[0.08] hover:border-sage-green/40 hover:bg-warm-white/[0.06] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-sage-green/10 flex items-center justify-center group-hover:bg-sage-green/20 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-sage-green" />
                </div>
                <div>
                  <p className="text-warm-white/50 uppercase" style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '1px' }}>
                    Email
                  </p>
                  <p className="text-warm-white" style={{ fontSize: '15px', fontWeight: 500 }}>
                    [email protected]
                  </p>
                </div>
              </a>

              <a
                href="tel:0522236040"
                className="flex items-center gap-3 p-4 rounded-xl bg-warm-white/[0.04] border border-warm-white/[0.08] hover:border-sage-green/40 hover:bg-warm-white/[0.06] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-sage-green/10 flex items-center justify-center group-hover:bg-sage-green/20 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-sage-green" />
                </div>
                <div>
                  <p className="text-warm-white/50 uppercase" style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '1px' }}>
                    Telefoon
                  </p>
                  <p className="text-warm-white" style={{ fontSize: '15px', fontWeight: 500 }}>
                    0522-236040
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-warm-white/[0.04] border border-warm-white/[0.08]">
                <div className="w-10 h-10 rounded-lg bg-sage-green/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-sage-green" />
                </div>
                <div>
                  <p className="text-warm-white/50 uppercase" style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '1px' }}>
                    Showroom
                  </p>
                  <p className="text-warm-white" style={{ fontSize: '15px', fontWeight: 500 }}>
                    Steenwijk, Nederland
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media - Premium Design */}
            <div>
              <p
                className="text-warm-white/50 uppercase mb-4"
                style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1.2px' }}
              >
                Volg ons
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-warm-white/[0.04] border border-warm-white/[0.08] flex items-center justify-center text-warm-white/70 hover:text-sage-green hover:border-sage-green/40 hover:bg-warm-white/[0.08] transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links - Compact Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
              {linkGroups.map((group, index) => (
                <div key={index}>
                  <h4
                    className="text-warm-white uppercase mb-6 pb-3 border-b border-warm-white/10"
                    style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px' }}
                  >
                    {group.heading}
                  </h4>
                  <ul className="space-y-3">
                    {group.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.href}
                          className="text-warm-white/60 hover:text-sage-green transition-all duration-200 inline-flex items-center gap-2 group"
                          style={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}
                        >
                          <span className="w-0 h-[2px] bg-sage-green group-hover:w-3 transition-all duration-300 rounded-full" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar - Ultra Clean */}
        <div className="pt-8 border-t border-warm-white/[0.08]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p
              className="text-warm-white/40"
              style={{ fontSize: '13px', fontWeight: 400 }}
            >
              © 2025 Bommel & Bach. Alle rechten voorbehouden.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {['Privacy Policy', 'Algemene Voorwaarden', 'Cookies'].map((item, index) => (
                <Link
                  key={index}
                  to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-warm-white/40 hover:text-warm-white/70 transition-colors duration-200 relative group"
                  style={{ fontSize: '13px', fontWeight: 400 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-sage-green group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
