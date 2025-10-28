import { PageHeader } from '../components/PageHeader';
import { Shield, Check, FileText, AlertCircle } from 'lucide-react';

export function GarantiePage() {
  const guaranteeItems = [
    {
      title: 'Constructiefouten',
      description: 'Gebreken aan het frame, de poten of andere structurele onderdelen',
      covered: true,
    },
    {
      title: 'Veringproblemen',
      description: 'Doorgezakte of defecte veren in matras of box',
      covered: true,
    },
    {
      title: 'Naadbreuk',
      description: 'Losse naden of scheuren in de bekleding bij normaal gebruik',
      covered: true,
    },
    {
      title: 'Materiaalfouten',
      description: 'Defecten in schuim, textiel of andere materialen',
      covered: true,
    },
    {
      title: 'Normale slijtage',
      description: 'Verkleuringen, pilling of verstopping door gebruik',
      covered: false,
    },
    {
      title: 'Vlekken & schade',
      description: 'Vlekken, scheuren of beschadigingen door gebruik',
      covered: false,
    },
    {
      title: 'Verkeerd gebruik',
      description: 'Schade door verkeerd gebruik of aanpassing',
      covered: false,
    },
    {
      title: 'Comfort voorkeuren',
      description: 'Wijziging van hardheid of comfort voorkeuren',
      covered: false,
    },
  ];

  const claimSteps = [
    {
      number: '1',
      title: 'Neem contact op',
      description: 'Mail ons op [email protected] met je ordernummer en foto\'s van het probleem',
    },
    {
      number: '2',
      title: 'Beoordeling',
      description: 'Ons team beoordeelt de claim binnen 2 werkdagen',
    },
    {
      number: '3',
      title: 'Oplossing',
      description: 'We bieden een passende oplossing: reparatie, vervanging of credit',
    },
    {
      number: '4',
      title: 'Afhandeling',
      description: 'Snelle uitvoering van de oplossing, vaak binnen 1-2 weken',
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="ZEKERHEID"
        title="5 jaar garantie"
        description="Koop met vertrouwen. Al onze boxsprings en hotelbedden komen met 5 jaar garantie op materiaal- en constructiefouten. Geen verrassingen, alleen zekerheid."
      />

      {/* Hero Image */}
      <section className="w-full bg-warm-white py-16">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="rounded-xl overflow-hidden shadow-[0px_8px_24px_rgba(44,44,44,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJyYW50eSUyMGd1YXJhbnRlZSUyMGNlcnRpZmljYXRlfGVufDF8fHx8MTc2MTU5MDI4NHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Guarantee certificate"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Guarantee Overview */}
      <section className="w-full bg-sage-green/5 py-24">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-warm-white p-8 rounded-xl border border-warm-taupe/10 text-center">
              <div className="w-16 h-16 rounded-full bg-sage-green/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-sage-green" />
              </div>
              <h3
                className="text-deep-charcoal mb-3"
                style={{ fontSize: '24px', fontWeight: 600, lineHeight: '32px' }}
              >
                5 jaar garantie
              </h3>
              <p
                className="text-deep-charcoal/70"
                style={{ fontSize: '15px', lineHeight: '24px' }}
              >
                Volledige dekking op materiaal- en constructiefouten
              </p>
            </div>

            <div className="bg-warm-white p-8 rounded-xl border border-warm-taupe/10 text-center">
              <div className="w-16 h-16 rounded-full bg-sage-green/10 flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-sage-green" />
              </div>
              <h3
                className="text-deep-charcoal mb-3"
                style={{ fontSize: '24px', fontWeight: 600, lineHeight: '32px' }}
              >
                Overdraagbaar
              </h3>
              <p
                className="text-deep-charcoal/70"
                style={{ fontSize: '15px', lineHeight: '24px' }}
              >
                Garantie blijft geldig bij verkoop of overdracht
              </p>
            </div>

            <div className="bg-warm-white p-8 rounded-xl border border-warm-taupe/10 text-center">
              <div className="w-16 h-16 rounded-full bg-sage-green/10 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-sage-green" />
              </div>
              <h3
                className="text-deep-charcoal mb-3"
                style={{ fontSize: '24px', fontWeight: 600, lineHeight: '32px' }}
              >
                Snelle afhandeling
              </h3>
              <p
                className="text-deep-charcoal/70"
                style={{ fontSize: '15px', lineHeight: '24px' }}
              >
                Claims binnen 2 werkdagen beoordeeld en opgelost
              </p>
            </div>
          </div>

          {/* What's Covered */}
          <div className="max-w-[900px] mx-auto">
            <h2
              className="text-deep-charcoal mb-12 text-center"
              style={{ fontSize: '36px', fontWeight: 600, lineHeight: '44px' }}
            >
              Wat valt onder de garantie?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {guaranteeItems.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border ${
                    item.covered
                      ? 'bg-sage-green/5 border-sage-green/20'
                      : 'bg-warm-white border-warm-taupe/10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {item.covered ? (
                      <Check className="w-6 h-6 text-sage-green flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-6 h-6 text-warm-taupe flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <h3
                        className="text-deep-charcoal mb-2"
                        style={{ fontSize: '17px', fontWeight: 600, lineHeight: '24px' }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-deep-charcoal/70"
                        style={{ fontSize: '14px', lineHeight: '22px' }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Claim Process */}
      <section className="w-full bg-warm-white py-24">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-deep-charcoal mb-4"
              style={{ fontSize: '36px', fontWeight: 600, lineHeight: '44px' }}
            >
              Garantieclaim indienen
            </h2>
            <p
              className="text-deep-charcoal/70 max-w-[700px] mx-auto"
              style={{ fontSize: '17px', lineHeight: '28px' }}
            >
              Een defect? Zo eenvoudig dien je een garantieclaim in
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {claimSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < claimSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-warm-taupe/20" />
                )}

                <div className="text-center relative">
                  {/* Number Circle */}
                  <div
                    className="w-24 h-24 rounded-full bg-sage-green text-warm-white flex items-center justify-center mx-auto mb-6 relative z-10"
                    style={{ fontSize: '32px', fontWeight: 700 }}
                  >
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-deep-charcoal mb-3"
                    style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px' }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-deep-charcoal/70"
                    style={{ fontSize: '15px', lineHeight: '24px' }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="w-full bg-sage-green/5 py-20">
        <div className="max-w-[900px] mx-auto px-16 md:px-16 sm:px-6">
          <h2
            className="text-deep-charcoal mb-8"
            style={{ fontSize: '32px', fontWeight: 600, lineHeight: '40px' }}
          >
            Garantievoorwaarden
          </h2>

          <div className="space-y-6 text-deep-charcoal/70" style={{ fontSize: '15px', lineHeight: '26px' }}>
            <div>
              <h3
                className="text-deep-charcoal mb-3"
                style={{ fontSize: '18px', fontWeight: 600, lineHeight: '26px' }}
              >
                Algemeen
              </h3>
              <p>
                De garantie gaat in op de leverdatum en geldt voor 5 jaar. De garantie dekt alleen materiaal- en constructiefouten bij normaal gebruik. Bewaar je aankoopbewijs als garantiebewijs.
              </p>
            </div>

            <div>
              <h3
                className="text-deep-charcoal mb-3"
                style={{ fontSize: '18px', fontWeight: 600, lineHeight: '26px' }}
              >
                Normaal gebruik
              </h3>
              <p>
                Onder normaal gebruik verstaan we: gebruik als bed volgens de gebruiksaanwijzing, op een vlakke en stabiele ondergrond, zonder overbelasting of verkeerd gebruik. De garantie geldt niet voor commercieel gebruik tenzij anders overeengekomen.
              </p>
            </div>

            <div>
              <h3
                className="text-deep-charcoal mb-3"
                style={{ fontSize: '18px', fontWeight: 600, lineHeight: '26px' }}
              >
                Garantie-oplossing
              </h3>
              <p>
                Bij een gegronde garantieclaim kiezen wij voor de meest passende oplossing: reparatie ter plaatse, vervanging van het defecte onderdeel, vervanging van het gehele product, of een creditnota. De keuze is aan ons, maar staat altijd in verhouding tot het probleem.
              </p>
            </div>

            <div>
              <h3
                className="text-deep-charcoal mb-3"
                style={{ fontSize: '18px', fontWeight: 600, lineHeight: '26px' }}
              >
                Uitsluiting
              </h3>
              <p>
                De garantie vervalt bij: schade door ongelukken of onjuist gebruik, wijzigingen of reparaties door derden, normale slijtage, vlekken of verkleuring, en gebreken die bij levering niet zijn gemeld.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
