import { Calendar, MapPin, Phone, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ShowroomAppointment() {
  const benefits = [
    'Proefliggen op alle modellen',
    'Persoonlijk advies van experts',
    'Kijkje in onze werkplaats',
    'Ontdek 200+ premium stoffen',
  ];

  return (
    <section className="w-full bg-gradient-to-br from-sage-green/10 via-warm-white to-warm-taupe/10 py-24">
      <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div
              className="text-sage-green uppercase mb-4"
              style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '2px' }}
            >
              BEZOEK ONZE SHOWROOM
            </div>
            <h2
              className="text-deep-charcoal mb-6"
              style={{ fontSize: '40px', fontWeight: 700, lineHeight: '48px' }}
            >
              Proefliggen is essentieel
            </h2>
            <p
              className="text-deep-charcoal/80 mb-8"
              style={{ fontSize: '18px', fontWeight: 400, lineHeight: '30px' }}
            >
              Een bed koop je niet online. Kom langs in Staphorst en ervaar zelf het comfort. 
              Je bent van harte welkom voor een vrijblijvend bezoek aan onze showroom en werkplaats.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sage-green/15 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-3 h-3 text-sage-green" strokeWidth={3} />
                  </div>
                  <span
                    className="text-deep-charcoal/80"
                    style={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}
                  >
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-8 p-6 bg-warm-white rounded-xl border border-sage-green/10">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sage-green flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <p
                    className="text-deep-charcoal"
                    style={{ fontSize: '16px', fontWeight: 500, lineHeight: '24px' }}
                  >
                    Industrieweg 12, 8131 WP Staphorst
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-sage-green flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <p
                    className="text-deep-charcoal"
                    style={{ fontSize: '16px', fontWeight: 400, lineHeight: '24px' }}
                  >
                    Ma-Vr: 9:00-17:30, Za: 10:00-16:00
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-sage-green flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <a
                    href="tel:0522-236040"
                    className="text-deep-charcoal hover:text-sage-green transition-colors"
                    style={{ fontSize: '16px', fontWeight: 400, lineHeight: '24px' }}
                  >
                    0522-236040
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex h-14 px-8 bg-sage-green text-warm-white rounded-xl items-center justify-center gap-3 transition-all duration-200 hover:bg-sage-green/90 hover:shadow-lg hover:translate-y-[-2px]"
                style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.3px' }}
              >
                <Calendar className="w-5 h-5" />
                Plan afspraak
              </Link>
              <a
                href="tel:0522-236040"
                className="inline-flex h-14 px-8 border-2 border-sage-green text-sage-green rounded-xl items-center justify-center gap-3 transition-all duration-200 hover:bg-sage-green hover:text-warm-white"
                style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.3px' }}
              >
                <Phone className="w-5 h-5" />
                Bel direct
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0px_8px_32px_rgba(44,44,44,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1760072513403-d70003481414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBzaG93cm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc2MTU4ODQ2OHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Bommel & Bach Showroom Staphorst"
              className="w-full h-full object-cover"
              style={{ aspectRatio: '4/3' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/40 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p
                className="text-warm-white"
                style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px' }}
              >
                Bezoek onze showroom in Staphorst
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
