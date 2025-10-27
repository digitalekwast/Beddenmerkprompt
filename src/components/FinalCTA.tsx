import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';

export function FinalCTA() {
  return (
    <section id="contact" className="w-full bg-deep-charcoal py-20 md:py-20 sm:py-12">
      <div className="max-w-[680px] mx-auto px-16 md:px-16 sm:px-6 text-center">
        {/* Heading */}
        <h2
          className="text-warm-white mb-6"
          style={{ fontSize: '48px', fontWeight: 700, lineHeight: '56px' }}
        >
          Klaar om te proefliggen?
        </h2>

        {/* Description */}
        <p
          className="text-warm-white/85 mb-12"
          style={{ fontSize: '18px', fontWeight: 400, lineHeight: '30px' }}
        >
          Bezoek onze showroom in Staphorst of vind een dealer bij jou in de buurt.
        </p>

        {/* Button Group */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="h-12 px-8 bg-warm-taupe text-deep-charcoal rounded-lg flex items-center justify-center gap-2 transition-all duration-200 hover:bg-[#B8A890] hover:shadow-lg hover:scale-[1.02]"
            style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.3px' }}
          >
            Plan showroom bezoek
            <Calendar className="w-5 h-5" />
          </Link>
          <Link
            to="/verkooppunten"
            className="h-12 px-8 border-2 border-warm-white text-warm-white rounded-lg flex items-center justify-center gap-2 transition-all duration-200 hover:bg-warm-white hover:text-deep-charcoal"
            style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.3px' }}
          >
            Vind dealer
            <MapPin className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
