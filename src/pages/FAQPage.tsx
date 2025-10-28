import { PageHeader } from '../components/PageHeader';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: { category: string; items: FAQItem[] }[] = [
    {
      category: 'Algemeen',
      items: [
        {
          question: 'Wat is het verschil tussen Bommel & Bach en Auping?',
          answer: 'Bommel & Bach biedt vergelijkbare kwaliteit als Auping, maar voor een eerlijkere prijs. We gebruiken dezelfde premium materialen zoals pocketvering en hoogwaardige stoffen, maar werken efficiënter door directe verkoop en geen dure marketing. Het resultaat: een bed van €6.000 kwaliteit voor €2.500-€4.000.',
        },
        {
          question: 'Voor wie zijn Bommel & Bach bedden geschikt?',
          answer: 'Onze bedden zijn vooral populair bij hotels, bed & breakfasts, vakantieparken en meubelzaken. Maar ook particulieren die waarde hechten aan kwaliteit en een eerlijke prijs kiezen steeds vaker voor Bommel & Bach.',
        },
        {
          question: 'Wat is de levertijd?',
          answer: 'Voor de Valkeveen collectie (maatwerk) rekenen we 6-8 weken. De Lechtal collectie is vaak direct uit voorraad leverbaar binnen 2 weken. Voor grote projectorders (hotels, etc.) stemmen we de planning af op jouw wensen.',
        },
        {
          question: 'Kan ik het bed eerst proberen?',
          answer: 'Ja! We hebben meer dan 20 dealers verspreid door Nederland waar je onze bedden kunt proefliggen. Gebruik de dealerlocator op onze website om een dealer bij jou in de buurt te vinden.',
        },
      ],
    },
    {
      category: 'Producten & Kwaliteit',
      items: [
        {
          question: 'Welke materialen worden gebruikt?',
          answer: 'We gebruiken alleen premium materialen: pocketvering met tot 1000 veren per matras, HR-schuim toplagen, massief houten frames, en 200+ hoogwaardige meubelstoffen met minimaal 50.000 wrijftoeren (Martindale). Alle materialen zijn Europees en voldoen aan de hoogste kwaliteitsnormen.',
        },
        {
          question: 'Hoe hard of zacht zijn de matrassen?',
          answer: 'We bieden verschillende hardheden: Zacht (voor zij-slapers), Medium (voor de meeste mensen), en Stevig (voor buik-slapers of zwaardere personen). In de Valkeveen collectie kun je zelfs kiezen voor verschillende hardheden links en rechts.',
        },
        {
          question: 'Zijn de bedden geschikt voor mensen met een allergie?',
          answer: 'Ja, al onze matrassen zijn anti-allergeen behandeld en hebben ademende tikken die stofmijt en bacteriegroei tegengaan. De materialen zijn vrij van schadelijke stoffen en voldoen aan OEKO-TEX normen.',
        },
        {
          question: 'Wat is het verschil tussen een boxspring en een hotelbed?',
          answer: 'Een boxspring heeft een geveerde onderbak (box met veren), terwijl een hotelbed een vaste onderbak heeft. Boxsprings voelen over het algemeen zachter en luxueuzer, hotelbedden zijn steviger en vaak geschikter voor intensief gebruik (hotels, B&B\'s).',
        },
      ],
    },
    {
      category: 'Bestellen & Betalen',
      items: [
        {
          question: 'Hoe kan ik bestellen?',
          answer: 'Voor particulieren: via een van onze dealers. Voor zakelijke klanten: neem direct contact op via [email protected] of bel 0522-236040. We maken graag een offerte op maat voor je project.',
        },
        {
          question: 'Welke betaalmethoden accepteren jullie?',
          answer: 'We accepteren iDEAL, bankoverschrijving, en voor zakelijke klanten bieden we ook betaling op rekening aan (na goedkeuring). Voor grote orders zijn afbetalingsregelingen mogelijk.',
        },
        {
          question: 'Kan ik een offerte aanvragen?',
          answer: 'Ja, neem contact met ons op via het contactformulier of bel ons. Voor projecten en zakelijke klanten maken we graag een vrijblijvende offerte op maat, inclusief levertijd en eventuele kortingen bij afname.',
        },
      ],
    },
    {
      category: 'Levering & Montage',
      items: [
        {
          question: 'Wat zijn de verzendkosten?',
          answer: 'Gratis bezorging in Nederland vanaf €2.500. Voor België en Duitsland rekenen we €150 verzendkosten. Voor grote projectorders kunnen we de verzendkosten op aanvraag in de offerte verwerken.',
        },
        {
          question: 'Wordt het bed thuis gemonteerd?',
          answer: 'Ja, wij leveren inclusief montage. Onze bezorgers plaatsen het bed op de gewenste plek en nemen het verpakkingsmateriaal mee. Voor hotels en projecten bieden we ook volledige inrichting aan.',
        },
        {
          question: 'Kan ik mijn oude bed laten meenemen?',
          answer: 'Ja, tegen een kleine vergoeding (€50) nemen we je oude bed mee. Dit geldt alleen voor particuliere leveringen in Nederland.',
        },
      ],
    },
    {
      category: 'Garantie & Retour',
      items: [
        {
          question: 'Hoeveel garantie krijg ik?',
          answer: '5 jaar garantie op alle boxsprings en hotelbedden. Dit dekt materiaal- en constructiefouten. De garantie geldt voor normaal gebruik en is overdraagbaar bij verkoop.',
        },
        {
          question: 'Kan ik het bed retourneren?',
          answer: 'Voor particulieren: 14 dagen retourrecht conform de wet. Let op: bij maatwerk (Valkeveen collectie) geldt dit alleen bij productiefouten. Voor zakelijke klanten gelden andere voorwaarden, afhankelijk van de overeenkomst.',
        },
        {
          question: 'Wat als er iets kapot gaat?',
          answer: 'Neem contact met ons op via [email protected]. We lossen garantiezaken binnen 2 werkdagen op, door reparatie, vervanging of een andere passende oplossing. Klanttevredenheid staat bij ons voorop.',
        },
      ],
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="HULP NODIG?"
        title="Veelgestelde vragen"
        description="Vind snel antwoord op de meest gestelde vragen over onze bedden, levering, garantie en meer. Staat je vraag er niet bij? Neem gerust contact met ons op."
      />

      {/* FAQ Section */}
      <section className="w-full bg-warm-white py-24">
        <div className="max-w-[900px] mx-auto px-16 md:px-16 sm:px-6">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              {/* Category Header */}
              <h2
                className="text-deep-charcoal mb-8 pb-4 border-b border-warm-taupe/20"
                style={{ fontSize: '28px', fontWeight: 600, lineHeight: '36px' }}
              >
                {category.category}
              </h2>

              {/* FAQ Items */}
              <div className="space-y-4">
                {category.items.map((faq, itemIndex) => {
                  const globalIndex = categoryIndex * 100 + itemIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={itemIndex}
                      className="bg-warm-white border border-warm-taupe/10 rounded-xl overflow-hidden hover:border-warm-taupe/30 transition-all duration-200"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-8 py-6 flex items-start justify-between gap-6 text-left"
                      >
                        <span
                          className="text-deep-charcoal"
                          style={{ fontSize: '17px', fontWeight: 500, lineHeight: '26px' }}
                        >
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-warm-taupe flex-shrink-0 transition-transform duration-200 mt-1 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-8 pb-6">
                          <p
                            className="text-deep-charcoal/70"
                            style={{ fontSize: '16px', lineHeight: '26px' }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full bg-sage-green/5 py-20">
        <div className="max-w-[800px] mx-auto px-16 md:px-16 sm:px-6 text-center">
          <h2
            className="text-deep-charcoal mb-4"
            style={{ fontSize: '32px', fontWeight: 600, lineHeight: '40px' }}
          >
            Vraag niet beantwoord?
          </h2>
          <p
            className="text-deep-charcoal/70 mb-8"
            style={{ fontSize: '17px', lineHeight: '28px' }}
          >
            Ons team staat klaar om je te helpen. Neem vrijblijvend contact met ons op.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:[email protected]"
              className="h-14 px-10 bg-warm-taupe text-deep-charcoal rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-[#B8A890] hover:shadow-md hover:translate-y-[-1px]"
              style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.3px' }}
            >
              Stuur een e-mail
            </a>
            <a
              href="tel:0522236040"
              className="h-14 px-10 bg-deep-charcoal text-warm-white rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-deep-charcoal/90 hover:shadow-md hover:translate-y-[-1px]"
              style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.3px' }}
            >
              Bel ons: 0522-236040
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
