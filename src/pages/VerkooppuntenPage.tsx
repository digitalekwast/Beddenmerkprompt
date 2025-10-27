import { MapPin, Phone, Clock, ExternalLink, TrendingUp, Users, Award, Building2, Heart, Sparkles } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';

export function VerkooppuntenPage() {
  const dealers = [
    {
      name: 'Bommel & Bach Showroom',
      type: 'Hoofdvestiging',
      address: 'Industrieweg 12',
      city: '8131 WP Staphorst',
      phone: '0522-236040',
      email: '[email protected]',
      hours: 'Ma-Vr: 9:00-17:30, Za: 10:00-16:00',
      featured: true,
    },
    {
      name: 'Slaapcomfort Amsterdam',
      type: 'Dealer',
      address: 'Overtoom 245',
      city: '1054 HW Amsterdam',
      phone: '020-1234567',
      email: '[email protected]',
      hours: 'Ma-Za: 10:00-18:00',
    },
    {
      name: 'Bed & Good Utrecht',
      type: 'Dealer',
      address: 'Vleutenseweg 89',
      city: '3532 HD Utrecht',
      phone: '030-7654321',
      email: '[email protected]',
      hours: 'Di-Za: 10:00-17:00',
    },
    {
      name: 'Slaapspecialist Rotterdam',
      type: 'Dealer',
      address: 'Bergselaan 123',
      city: '3037 EB Rotterdam',
      phone: '010-9876543',
      email: '[email protected]',
      hours: 'Ma-Za: 9:30-17:30',
    },
    {
      name: 'Droombed Den Haag',
      type: 'Dealer',
      address: 'Theresiastraat 78',
      city: '2593 AX Den Haag',
      phone: '070-3456789',
      email: '[email protected]',
      hours: 'Di-Za: 10:00-18:00',
    },
    {
      name: 'Beddenspeciaalzaak Eindhoven',
      type: 'Dealer',
      address: 'Geldropseweg 234',
      city: '5611 SL Eindhoven',
      phone: '040-2345678',
      email: '[email protected]',
      hours: 'Ma-Za: 10:00-17:30',
    },
  ];

  const franchiseBenefits = [
    {
      icon: TrendingUp,
      title: 'Groeiend merk',
      description: 'Profiteer van de stijgende vraag naar premium bedden tegen eerlijke prijzen',
    },
    {
      icon: Users,
      title: 'Persoonlijke begeleiding',
      description: 'Dedicated support team dat je helpt bij elk aspect van je onderneming',
    },
    {
      icon: Award,
      title: 'Exclusief gebiedsrecht',
      description: 'Bescherming van jouw verkoopregio zonder interne concurrentie',
    },
    {
      icon: Building2,
      title: 'Complete formule',
      description: 'Turnkey showroom concept met marketing, training en operationele support',
    },
  ];

  const franchiseUSPs = [
    'Uniek Nederlands premium merk met sterke positionering',
    'Bewezen bedrijfsmodel met aantrekkelijke marges',
    'Exclusieve collecties die nergens anders verkrijgbaar zijn',
    'Uitgebreide training en continue ondersteuning',
    'Marketing ondersteuning (online & offline)',
    'Toegang tot B2B netwerk (hotels, dealers)',
  ];

  return (
    <>
      <PageHeader
        eyebrow="VERKOOPPUNTEN"
        title="Vind een dealer bij jou in de buurt"
        description="Proefliggen is essentieel bij de keuze voor een nieuw bed. Bezoek één van onze dealers en ervaar zelf het comfort van Bommel & Bach."
      />

      {/* Showroom Highlight */}
      <section className="w-full bg-sage-green/5 py-16">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="text-sage-green uppercase mb-4"
                style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '1.5px' }}
              >
                Hoofdvestiging
              </div>
              <h2
                className="text-deep-charcoal mb-4"
                style={{ fontSize: '36px', fontWeight: 700, lineHeight: '44px' }}
              >
                Bezoek onze showroom in Staphorst
              </h2>
              <p
                className="text-deep-charcoal/80 mb-6"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: '30px' }}
              >
                In onze showroom zie je alle collecties en kun je direct proefliggen. Ook neem je een kijkje in onze werkplaats waar alle bedden met de hand worden gemaakt.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sage-green flex-shrink-0 mt-1" strokeWidth={2} />
                  <div>
                    <div
                      className="text-deep-charcoal"
                      style={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}
                    >
                      Industrieweg 12, 8131 WP Staphorst
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-sage-green flex-shrink-0 mt-1" strokeWidth={2} />
                  <div>
                    <div
                      className="text-deep-charcoal"
                      style={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}
                    >
                      0522-236040
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-sage-green flex-shrink-0 mt-1" strokeWidth={2} />
                  <div>
                    <div
                      className="text-deep-charcoal"
                      style={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}
                    >
                      Ma-Vr: 9:00-17:30, Za: 10:00-16:00
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="/contact"
                className="inline-flex h-12 px-8 bg-warm-taupe text-deep-charcoal rounded-xl items-center justify-center transition-all duration-200 hover:bg-[#B8A890] hover:shadow-md hover:translate-y-[-1px]"
                style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.3px' }}
              >
                Plan showroom bezoek
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-[0px_4px_24px_rgba(44,44,44,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1760072513403-d70003481414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBzaG93cm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc2MTU4ODQ2OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Showroom Staphorst"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dealers Grid */}
      <section className="w-full bg-warm-white py-24">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-deep-charcoal mb-4"
              style={{ fontSize: '36px', fontWeight: 700, lineHeight: '44px' }}
            >
              Onze dealers
            </h2>
            <p
              className="text-deep-charcoal/70 max-w-[600px] mx-auto"
              style={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}
            >
              Meer dan 20 dealers door heel Nederland
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dealers.map((dealer, index) => (
              <div
                key={index}
                className="p-6 bg-warm-white rounded-xl border border-warm-taupe/20 hover:shadow-[0px_4px_16px_rgba(44,44,44,0.08)] transition-all duration-200 hover:border-warm-taupe/40"
              >
                <div className="mb-4">
                  <div
                    className="text-sage-green uppercase mb-2"
                    style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '1px' }}
                  >
                    {dealer.type}
                  </div>
                  <h3
                    className="text-deep-charcoal"
                    style={{ fontSize: '20px', fontWeight: 500, lineHeight: '28px' }}
                  >
                    {dealer.name}
                  </h3>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-sage-green flex-shrink-0 mt-1" strokeWidth={2} />
                    <div>
                      <div
                        className="text-deep-charcoal/80"
                        style={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}
                      >
                        {dealer.address}
                      </div>
                      <div
                        className="text-deep-charcoal/80"
                        style={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}
                      >
                        {dealer.city}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Phone className="w-4 h-4 text-sage-green flex-shrink-0 mt-1" strokeWidth={2} />
                    <a
                      href={`tel:${dealer.phone}`}
                      className="text-deep-charcoal/80 hover:text-warm-taupe transition-colors"
                      style={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}
                    >
                      {dealer.phone}
                    </a>
                  </div>

                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-sage-green flex-shrink-0 mt-1" strokeWidth={2} />
                    <div
                      className="text-deep-charcoal/80"
                      style={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}
                    >
                      {dealer.hours}
                    </div>
                  </div>
                </div>

                <a
                  href={`mailto:${dealer.email}`}
                  className="inline-flex items-center gap-2 text-sage-green hover:text-warm-taupe transition-colors"
                  style={{ fontSize: '14px', fontWeight: 500 }}
                >
                  Contact opnemen
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Section - Premium & Overtuigend */}
      <section className="w-full bg-gradient-to-br from-sage-green/10 via-warm-white to-warm-taupe/10 py-32">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-green/15 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-sage-green" />
              <span
                className="text-sage-green uppercase"
                style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px' }}
              >
                Word onderdeel van ons verhaal
              </span>
            </div>
            <h2
              className="text-deep-charcoal mb-6"
              style={{ fontSize: '48px', fontWeight: 700, lineHeight: '56px' }}
            >
              Franchisemogelijkheden
            </h2>
            <p
              className="text-deep-charcoal/80 max-w-[700px] mx-auto"
              style={{ fontSize: '20px', fontWeight: 400, lineHeight: '32px' }}
            >
              Ben je een ondernemende slaapspecialist met passie voor kwaliteit? Sluit je aan bij Bommel & Bach en word franchise partner in jouw regio.
            </p>
          </div>

          {/* Image + Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-[0px_8px_32px_rgba(44,44,44,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1758599543157-bc1a94fec33c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc2MTU3MjcxMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Partnership"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/50 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p
                  className="text-warm-white"
                  style={{ fontSize: '18px', fontWeight: 500, lineHeight: '28px' }}
                >
                  "We zoeken partners die net als wij geloven in eerlijke prijzen, ambachtelijke kwaliteit en persoonlijke service."
                </p>
              </div>
            </div>

            <div>
              <h3
                className="text-deep-charcoal mb-6"
                style={{ fontSize: '28px', fontWeight: 600, lineHeight: '36px' }}
              >
                Waarom franchisen bij Bommel & Bach?
              </h3>
              <div className="flex flex-col gap-4">
                {franchiseUSPs.map((usp, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sage-green/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="w-3.5 h-3.5 text-sage-green" strokeWidth={2.5} />
                    </div>
                    <span
                      className="text-deep-charcoal/80"
                      style={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}
                    >
                      {usp}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {franchiseBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-warm-white rounded-2xl shadow-[0px_4px_16px_rgba(44,44,44,0.06)] hover:shadow-[0px_8px_24px_rgba(44,44,44,0.1)] transition-all duration-300 hover:translate-y-[-4px]"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sage-green/20 to-warm-taupe/20 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-sage-green" strokeWidth={2} />
                  </div>
                  <h4
                    className="text-deep-charcoal mb-3"
                    style={{ fontSize: '18px', fontWeight: 600, lineHeight: '26px' }}
                  >
                    {benefit.title}
                  </h4>
                  <p
                    className="text-deep-charcoal/70"
                    style={{ fontSize: '15px', fontWeight: 400, lineHeight: '24px' }}
                  >
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center p-12 bg-gradient-to-br from-deep-charcoal to-deep-charcoal/90 rounded-2xl">
            <h3
              className="text-warm-white mb-4"
              style={{ fontSize: '32px', fontWeight: 700, lineHeight: '40px' }}
            >
              Klaar voor de volgende stap?
            </h3>
            <p
              className="text-warm-white/90 mb-8 max-w-[600px] mx-auto"
              style={{ fontSize: '17px', fontWeight: 400, lineHeight: '28px' }}
            >
              Neem vrijblijvend contact op en ontdek wat Bommel & Bach franchise voor jou kan betekenen. We bespreken graag de mogelijkheden in jouw regio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex h-14 px-10 bg-warm-taupe text-deep-charcoal rounded-xl items-center justify-center transition-all duration-200 hover:bg-[#B8A890] hover:shadow-lg hover:translate-y-[-2px]"
                style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.3px' }}
              >
                Vraag informatie aan
              </a>
              <a
                href="tel:0522-236040"
                className="inline-flex h-14 px-10 border-2 border-warm-white text-warm-white rounded-xl items-center justify-center transition-all duration-200 hover:bg-warm-white hover:text-deep-charcoal"
                style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.3px' }}
              >
                Bel ons direct
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Become Dealer CTA */}
      <section className="w-full bg-warm-white py-24">
        <div className="max-w-[800px] mx-auto px-16 md:px-16 sm:px-6 text-center">
          <h2
            className="text-deep-charcoal mb-6"
            style={{ fontSize: '36px', fontWeight: 700, lineHeight: '44px' }}
          >
            Geïnteresseerd in dealer partnerschap?
          </h2>
          <p
            className="text-deep-charcoal/80 mb-8"
            style={{ fontSize: '18px', fontWeight: 400, lineHeight: '30px' }}
          >
            We zijn ook op zoek naar dealers die onze passie voor kwaliteit en eerlijke prijzen delen. Een lichtere samenwerking waarbij je Bommel & Bach toevoegt aan je assortiment.
          </p>
          <a
            href="/contact"
            className="inline-flex h-12 px-8 bg-warm-taupe text-deep-charcoal rounded-xl items-center justify-center transition-all duration-200 hover:bg-[#B8A890] hover:shadow-md hover:translate-y-[-1px]"
            style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.3px' }}
          >
            Word dealer
          </a>
        </div>
      </section>
    </>
  );
}
