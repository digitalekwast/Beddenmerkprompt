import { PageHeader } from '../components/PageHeader';
import { Truck, Clock, Package, Check, MapPin } from 'lucide-react';

export function LeveringPage() {
  const deliverySteps = [
    {
      icon: Package,
      title: 'Productie',
      description: 'Je bed wordt met zorg geproduceerd volgens jouw specificaties',
      duration: 'Week 1-6',
    },
    {
      icon: Clock,
      title: 'Kwaliteitscontrole',
      description: 'Uitgebreide controle op kwaliteit en afwerking',
      duration: 'Week 6',
    },
    {
      icon: Truck,
      title: 'Transport',
      description: 'Veilig en zorgvuldig transport naar jouw locatie',
      duration: 'Week 7',
    },
    {
      icon: MapPin,
      title: 'Montage',
      description: 'Professionele montage en afvoer van verpakkingsmateriaal',
      duration: 'Week 7-8',
    },
  ];

  const deliveryOptions = [
    {
      title: 'Standaard levering & montage',
      price: 'Gratis vanaf €2.500',
      features: [
        'Levering op afgesproken datum',
        'Montage door professionals',
        'Plaatsing op gewenste locatie',
        'Afvoer verpakkingsmateriaal',
        'Binnen Nederland',
      ],
      recommended: true,
    },
    {
      title: 'Projectlevering',
      price: 'Op aanvraag',
      features: [
        'Levering meerdere bedden',
        'Flexibele planning',
        'Dedicated projectmanager',
        'Installation op locatie',
        'Geschikt voor hotels & B&B\'s',
      ],
      recommended: false,
    },
    {
      title: 'Internationale levering',
      price: 'Vanaf €150',
      features: [
        'Levering in België & Duitsland',
        'Export documentatie',
        'Douane afhandeling',
        'Tracking & updates',
        'Binnen 3-4 weken',
      ],
      recommended: false,
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="SERVICE"
        title="Levering & montage"
        description="Van productie tot plaatsing in jouw slaapkamer. Ontdek hoe we zorgen voor een zorgeloze levering en professionele montage van je nieuwe bed."
      />

      {/* Hero Image */}
      <section className="w-full bg-warm-white py-16">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="rounded-xl overflow-hidden shadow-[0px_8px_24px_rgba(44,44,44,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1760662052295-f84068499a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHRydWNrJTIwc2VydmljZXxlbnwxfHx8fDE3NjE1MTg4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Delivery service"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="w-full bg-sage-green/5 py-24">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-deep-charcoal mb-4"
              style={{ fontSize: '36px', fontWeight: 600, lineHeight: '44px' }}
            >
              Het leverproces
            </h2>
            <p
              className="text-deep-charcoal/70 max-w-[700px] mx-auto"
              style={{ fontSize: '17px', lineHeight: '28px' }}
            >
              Van bestelling tot perfect gemonteerd bed in 7-8 weken
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {deliverySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connecting Line */}
                  {index < deliverySteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-0.5 bg-warm-taupe/20" />
                  )}

                  <div className="bg-warm-white p-8 rounded-xl border border-warm-taupe/10 relative">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-full bg-sage-green/10 flex items-center justify-center mb-6 mx-auto">
                      <Icon className="w-8 h-8 text-sage-green" />
                    </div>

                    {/* Duration Badge */}
                    <div
                      className="inline-block px-3 py-1 bg-warm-taupe/10 rounded-full mb-4"
                      style={{ fontSize: '12px', fontWeight: 500, color: '#8B9B8E' }}
                    >
                      {step.duration}
                    </div>

                    {/* Title */}
                    <h3
                      className="text-deep-charcoal mb-2 text-center"
                      style={{ fontSize: '18px', fontWeight: 600, lineHeight: '26px' }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-deep-charcoal/70 text-center"
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

      {/* Delivery Options */}
      <section className="w-full bg-warm-white py-24">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-deep-charcoal mb-4"
              style={{ fontSize: '36px', fontWeight: 600, lineHeight: '44px' }}
            >
              Leveropties
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryOptions.map((option, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-xl border-2 ${
                  option.recommended
                    ? 'border-sage-green bg-sage-green/5'
                    : 'border-warm-taupe/10 bg-warm-white'
                } hover:shadow-[0px_8px_24px_rgba(44,44,44,0.08)] transition-all duration-300`}
              >
                {option.recommended && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-sage-green text-warm-white rounded-full"
                    style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.5px' }}
                  >
                    MEEST GEKOZEN
                  </div>
                )}

                <h3
                  className="text-deep-charcoal mb-2"
                  style={{ fontSize: '24px', fontWeight: 600, lineHeight: '32px' }}
                >
                  {option.title}
                </h3>
                <p
                  className="text-sage-green mb-8"
                  style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px' }}
                >
                  {option.price}
                </p>

                <ul className="space-y-4">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage-green flex-shrink-0 mt-0.5" />
                      <span
                        className="text-deep-charcoal/80"
                        style={{ fontSize: '15px', lineHeight: '24px' }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="w-full bg-sage-green/5 py-20">
        <div className="max-w-[900px] mx-auto px-16 md:px-16 sm:px-6">
          <h2
            className="text-deep-charcoal mb-12 text-center"
            style={{ fontSize: '32px', fontWeight: 600, lineHeight: '40px' }}
          >
            Belangrijke informatie
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-warm-white p-8 rounded-xl border border-warm-taupe/10">
              <h3
                className="text-deep-charcoal mb-4"
                style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px' }}
              >
                Voor de levering
              </h3>
              <ul className="space-y-3 text-deep-charcoal/70" style={{ fontSize: '15px', lineHeight: '24px' }}>
                <li>• Controleer of het bed door deuren en trappen past</li>
                <li>• Zorg voor vrije toegang tot de slaapkamer</li>
                <li>• Ruim je oude bed op (of vraag ons om het mee te nemen)</li>
                <li>• Wees thuis op de afgesproken dag en tijd</li>
              </ul>
            </div>

            <div className="bg-warm-white p-8 rounded-xl border border-warm-taupe/10">
              <h3
                className="text-deep-charcoal mb-4"
                style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px' }}
              >
                Na de montage
              </h3>
              <ul className="space-y-3 text-deep-charcoal/70" style={{ fontSize: '15px', lineHeight: '24px' }}>
                <li>• Laat het bed 24 uur 'uitademen' voor gebruik</li>
                <li>• Check of alles goed vastzit</li>
                <li>• Controleer het bed op beschadigingen</li>
                <li>• Meld eventuele problemen binnen 48 uur</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
