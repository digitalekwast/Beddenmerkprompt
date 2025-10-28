import { PageHeader } from '../components/PageHeader';
import { RotateCcw, Check, AlertTriangle, Calendar } from 'lucide-react';

export function RetourenPage() {
  const returnConditions = [
    {
      title: 'Standaard collectie',
      subtitle: 'Lechtal & Recreatie',
      icon: Check,
      color: 'sage-green',
      features: [
        '14 dagen retourrecht',
        'Ongebruikt en in originele staat',
        'In originele verpakking',
        'Retourkosten voor je rekening',
      ],
      note: 'Volledige terugbetaling minus verzendkosten',
    },
    {
      title: 'Maatwerk collectie',
      subtitle: 'Valkeveen',
      icon: AlertTriangle,
      color: 'warm-taupe',
      features: [
        'Geen retourrecht bij maatwerk',
        'Alleen bij productiefouten',
        'Beoordeling door specialist',
        'Reparatie of vervanging mogelijk',
      ],
      note: 'Maatwerk is speciaal voor jou gemaakt',
    },
  ];

  const returnSteps = [
    {
      number: '1',
      title: 'Contact opnemen',
      description: 'Mail binnen 14 dagen naar [email protected] met je ordernummer en reden voor retour',
      icon: RotateCcw,
    },
    {
      number: '2',
      title: 'Retour aanvragen',
      description: 'Wij beoordelen je aanvraag en sturen een retourlabel en instructies',
      icon: Check,
    },
    {
      number: '3',
      title: 'Terugsturen',
      description: 'Verpak het bed in originele verpakking en lever in bij het ophaaladres',
      icon: Calendar,
    },
    {
      number: '4',
      title: 'Terugbetaling',
      description: 'Na ontvangst en controle krijg je binnen 5-7 werkdagen je geld terug',
      icon: Check,
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="RETOURBELEID"
        title="Retourneren"
        description="Niet tevreden met je aankoop? Lees hier alles over ons retourbeleid, voorwaarden en het retourproces. We maken het je zo makkelijk mogelijk."
      />

      {/* Return Conditions */}
      <section className="w-full bg-warm-white py-24">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-deep-charcoal mb-4"
              style={{ fontSize: '36px', fontWeight: 600, lineHeight: '44px' }}
            >
              Retourvoorwaarden
            </h2>
            <p
              className="text-deep-charcoal/70 max-w-[700px] mx-auto"
              style={{ fontSize: '17px', lineHeight: '28px' }}
            >
              Het retourbeleid verschilt per collectie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {returnConditions.map((condition, index) => {
              const Icon = condition.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-xl border-2 border-warm-taupe/10 hover:border-warm-taupe/30 transition-all duration-300 hover:shadow-[0px_8px_24px_rgba(44,44,44,0.08)]"
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full bg-${condition.color}/10 flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 text-${condition.color}`} />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-deep-charcoal mb-1"
                    style={{ fontSize: '24px', fontWeight: 600, lineHeight: '32px' }}
                  >
                    {condition.title}
                  </h3>
                  <p
                    className="text-warm-taupe mb-6"
                    style={{ fontSize: '15px', fontWeight: 500, lineHeight: '24px' }}
                  >
                    {condition.subtitle}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {condition.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 text-${condition.color} flex-shrink-0 mt-0.5`} />
                        <span
                          className="text-deep-charcoal/80"
                          style={{ fontSize: '15px', lineHeight: '24px' }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Note */}
                  <div className={`p-4 rounded-lg bg-${condition.color}/5 border border-${condition.color}/20`}>
                    <p
                      className="text-deep-charcoal/70"
                      style={{ fontSize: '14px', lineHeight: '22px', fontStyle: 'italic' }}
                    >
                      {condition.note}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Return Process */}
      <section className="w-full bg-sage-green/5 py-24">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-deep-charcoal mb-4"
              style={{ fontSize: '36px', fontWeight: 600, lineHeight: '44px' }}
            >
              Retourproces
            </h2>
            <p
              className="text-deep-charcoal/70 max-w-[700px] mx-auto"
              style={{ fontSize: '17px', lineHeight: '28px' }}
            >
              Zo eenvoudig retourneer je je bestelling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {returnSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connecting Line */}
                  {index < returnSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-warm-taupe/20" />
                  )}

                  <div className="text-center relative">
                    {/* Number Circle */}
                    <div className="w-24 h-24 rounded-full bg-warm-taupe text-warm-white flex items-center justify-center mx-auto mb-6 relative z-10">
                      <Icon className="w-10 h-10" />
                    </div>

                    {/* Step Number */}
                    <div
                      className="inline-block px-3 py-1 bg-warm-taupe/10 rounded-full mb-3"
                      style={{ fontSize: '12px', fontWeight: 600, color: '#C4B5A0' }}
                    >
                      STAP {step.number}
                    </div>

                    {/* Title */}
                    <h3
                      className="text-deep-charcoal mb-3"
                      style={{ fontSize: '18px', fontWeight: 600, lineHeight: '26px' }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-deep-charcoal/70"
                      style={{ fontSize: '14px', lineHeight: '22px' }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="w-full bg-warm-white py-24">
        <div className="max-w-[900px] mx-auto px-16 md:px-16 sm:px-6">
          <h2
            className="text-deep-charcoal mb-12"
            style={{ fontSize: '32px', fontWeight: 600, lineHeight: '40px' }}
          >
            Belangrijke informatie
          </h2>

          <div className="space-y-8">
            <div className="p-8 rounded-xl bg-sage-green/5 border border-sage-green/20">
              <h3
                className="text-deep-charcoal mb-4 flex items-center gap-3"
                style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px' }}
              >
                <Check className="w-6 h-6 text-sage-green" />
                Wat moet je doen?
              </h3>
              <ul className="space-y-2 text-deep-charcoal/70 ml-9" style={{ fontSize: '15px', lineHeight: '26px' }}>
                <li>• Bewaar de originele verpakking tot je zeker weet dat je het bed wilt houden</li>
                <li>• Gebruik het bed niet intensief als je twijfelt over retour</li>
                <li>• Neem binnen 14 dagen contact op als je wilt retourneren</li>
                <li>• Zorg dat het bed schoon en onbeschadigd is</li>
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-warm-taupe/5 border border-warm-taupe/20">
              <h3
                className="text-deep-charcoal mb-4 flex items-center gap-3"
                style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px' }}
              >
                <AlertTriangle className="w-6 h-6 text-warm-taupe" />
                Wanneer kunnen we geen retour accepteren?
              </h3>
              <ul className="space-y-2 text-deep-charcoal/70 ml-9" style={{ fontSize: '15px', lineHeight: '26px' }}>
                <li>• Bij zichtbaar gebruik of beschadiging</li>
                <li>• Zonder originele verpakking</li>
                <li>• Bij maatwerk bestellingen (Valkeveen collectie)</li>
                <li>• Na 14 dagen na levering</li>
                <li>• Bij zakelijke aankopen (andere voorwaarden van toepassing)</li>
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-sage-green/5 border border-sage-green/20">
              <h3
                className="text-deep-charcoal mb-4"
                style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px' }}
              >
                Retourkosten
              </h3>
              <p className="text-deep-charcoal/70 mb-4" style={{ fontSize: '15px', lineHeight: '26px' }}>
                De kosten voor retourzending zijn voor rekening van de klant. Afhankelijk van de grootte en het gewicht van het product variëren de kosten tussen €50 en €150. We informeren je hierover voordat je de retour bevestigt.
              </p>
              <p className="text-deep-charcoal/70" style={{ fontSize: '15px', lineHeight: '26px' }}>
                Bij gebrekkige of verkeerd geleverde producten zijn de retourkosten uiteraard voor onze rekening.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full bg-sage-green/5 py-20">
        <div className="max-w-[800px] mx-auto px-16 md:px-16 sm:px-6 text-center">
          <h2
            className="text-deep-charcoal mb-4"
            style={{ fontSize: '32px', fontWeight: 600, lineHeight: '40px' }}
          >
            Vragen over retourneren?
          </h2>
          <p
            className="text-deep-charcoal/70 mb-8"
            style={{ fontSize: '17px', lineHeight: '28px' }}
          >
            Neem contact met ons op. We helpen je graag verder met je retour.
          </p>
          <a
            href="mailto:[email protected]"
            className="inline-flex h-14 px-10 bg-warm-taupe text-deep-charcoal rounded-xl items-center justify-center transition-all duration-200 hover:bg-[#B8A890] hover:shadow-md hover:translate-y-[-1px]"
            style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.3px' }}
          >
            Stuur een e-mail
          </a>
        </div>
      </section>
    </>
  );
}
