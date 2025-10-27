import { PageHeader } from '../components/PageHeader';
import { Check, Users, Factory, Award } from 'lucide-react';
import { VakmansschapSection } from '../components/VakmansschapSection';
import { FinalCTA } from '../components/FinalCTA';

export function OverOnsPage() {
  const values = [
    {
      icon: Factory,
      title: '100% eigen merk',
      description: 'Elk bed is door ons zelf ontworpen en ontwikkeld. Van eerste schets tot eindproduct – alles gebeurt in-house in Staphorst.',
    },
    {
      icon: Award,
      title: 'Eigen productie',
      description: 'We produceren volledig zelf in onze eigen werkplaats. Dit geeft ons volledige controle over kwaliteit en levertijden.',
    },
    {
      icon: Users,
      title: 'Direct van maker',
      description: 'Geen tussenpersonen of doorverkopers. Je koopt rechtstreeks bij de mensen die je bed met passie en vakmanschap maken.',
    },
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Oprichting',
      description: 'Bommel & Bach wordt opgericht vanuit de gedachte: premium bedden moeten voor iedereen betaalbaar zijn.',
    },
    {
      year: '2020',
      title: 'Eerste collectie',
      description: 'Lancering van de Valkeveen collectie – configureerbare boxsprings met meer dan 200 stoffen.',
    },
    {
      year: '2021',
      title: 'Dealernetwerk',
      description: 'Uitbreiding met 15 dealers door heel Nederland. Klanten kunnen nu overal proefliggen.',
    },
    {
      year: '2023',
      title: 'B2B expansie',
      description: 'Start van de Recreatie collectie voor hotels en de hospitality sector.',
    },
    {
      year: '2025',
      title: 'Vandaag',
      description: 'Meer dan 20 dealers, 3 collecties en honderden tevreden klanten. De missie blijft hetzelfde: eerlijke luxe.',
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="100% EIGEN MERK - ONS VERHAAL"
        title="Over Bommel & Bach"
        description="Wij zijn geen doorverkoper. Elk bed dat je bij ons koopt, is door ons zelf bedacht, ontworpen en met de hand gemaakt in Staphorst. Dit is ons merk, dit zijn onze creaties."
      />

      {/* Mission Section */}
      <section className="w-full bg-warm-white py-24">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-deep-charcoal mb-6"
                style={{ fontSize: '36px', fontWeight: 700, lineHeight: '44px' }}
              >
                Onze missie
              </h2>
              <div className="space-y-4">
                <p
                  className="text-deep-charcoal/80"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '30px' }}
                >
                  Bij Bommel & Bach geloven we dat iedereen recht heeft op een goed bed. Niet voor €6.000, maar voor een eerlijke prijs tussen €2.500 en €4.000.
                </p>
                <p
                  className="text-deep-charcoal/80"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '30px' }}
                >
                  Hoe? Door slim te werken. Geen dure marketing, geen tussenpersonen, geen opgeblazen marges. Alleen vakmanschap, kwaliteit en eerlijkheid.
                </p>
                <p
                  className="text-deep-charcoal/80"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '30px' }}
                >
                  Het resultaat: een bed van Auping-niveau, maar dan voor bijna de helft van de prijs.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-[0px_4px_24px_rgba(44,44,44,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1694290651932-4cede0f0bb9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXRoZXJsYW5kcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjE1ODI0NDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Netherlands architecture"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-sage-green/5 py-24">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-deep-charcoal mb-4"
              style={{ fontSize: '36px', fontWeight: 700, lineHeight: '44px' }}
            >
              Waar wij voor staan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-sage-green/10 mx-auto mb-6 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-sage-green" strokeWidth={2} />
                  </div>
                  <h3
                    className="text-deep-charcoal mb-3"
                    style={{ fontSize: '20px', fontWeight: 500, lineHeight: '28px' }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-deep-charcoal/70"
                    style={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}
                  >
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Materials & Craftsmanship Section */}
      <section className="w-full bg-warm-white py-24" id="vakmanschap">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-deep-charcoal mb-4"
              style={{ fontSize: '36px', fontWeight: 700, lineHeight: '44px' }}
            >
              Vakmanschap & Materialen
            </h2>
            <p
              className="text-deep-charcoal/70 max-w-[700px] mx-auto"
              style={{ fontSize: '17px', lineHeight: '28px' }}
            >
              Elk bed dat we maken is het resultaat van jarenlange ervaring, zorgvuldig geselecteerde materialen en onaflatende aandacht voor detail
            </p>
          </div>

          {/* Grid with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Premium Fabrics */}
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-[0px_8px_24px_rgba(44,44,44,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1714926312026-26b673d24e35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjB0ZXh0aWxlJTIwZGV0YWlsfGVufDF8fHx8MTc2MTU5MDI4MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Premium fabrics"
                  className="w-full h-[320px] object-cover"
                />
              </div>
              <div>
                <h3
                  className="text-deep-charcoal mb-3"
                  style={{ fontSize: '24px', fontWeight: 600, lineHeight: '32px' }}
                >
                  Premium stoffen
                </h3>
                <p
                  className="text-deep-charcoal/70 mb-4"
                  style={{ fontSize: '16px', lineHeight: '26px' }}
                >
                  We werken met meer dan 200 hoogwaardige stoffen van gerenommeerde leveranciers. Van slijtvaste meubelstoffen tot luxe velvets – elk met een Martindale waarde van minimaal 50.000 wrijftoeren.
                </p>
                <ul className="space-y-2">
                  {['Duurzaam en kleurecht', 'Allergievriendelijk', 'Makkelijk te onderhouden', 'Europese kwaliteit'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-sage-green flex-shrink-0" />
                      <span
                        className="text-deep-charcoal/80"
                        style={{ fontSize: '15px', lineHeight: '24px' }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pocket Springs */}
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-[0px_8px_24px_rgba(44,44,44,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1678799021566-2e2a748e9dd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR0cmVzcyUyMHNwcmluZ3MlMjBjb2lsc3xlbnwxfHx8fDE3NjE1OTAyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Pocket springs"
                  className="w-full h-[320px] object-cover"
                />
              </div>
              <div>
                <h3
                  className="text-deep-charcoal mb-3"
                  style={{ fontSize: '24px', fontWeight: 600, lineHeight: '32px' }}
                >
                  Pocketvering technologie
                </h3>
                <p
                  className="text-deep-charcoal/70 mb-4"
                  style={{ fontSize: '16px', lineHeight: '26px' }}
                >
                  Elke veer zit in een eigen zak en reageert onafhankelijk op druk. Dit zorgt voor optimale ondersteuning en comfort, punt voor punt aangepast aan je lichaam.
                </p>
                <ul className="space-y-2">
                  {['Tot 1000 veren per matras', 'Individuele drukverdeling', 'Geen bewegingsoverdracht', 'Extra lange levensduur'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-sage-green flex-shrink-0" />
                      <span
                        className="text-deep-charcoal/80"
                        style={{ fontSize: '15px', lineHeight: '24px' }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Handcrafted */}
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-[0px_8px_24px_rgba(44,44,44,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1746737198844-b9c9f4189352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdHNtYW4lMjBzZXdpbmclMjB1cGhvbHN0ZXJ5fGVufDF8fHx8MTc2MTU5MDI4MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Handcrafted upholstery"
                  className="w-full h-[320px] object-cover"
                />
              </div>
              <div>
                <h3
                  className="text-deep-charcoal mb-3"
                  style={{ fontSize: '24px', fontWeight: 600, lineHeight: '32px' }}
                >
                  Handgemaakte bekleding
                </h3>
                <p
                  className="text-deep-charcoal/70 mb-4"
                  style={{ fontSize: '16px', lineHeight: '26px' }}
                >
                  Elk hoofdbord en elke box wordt met de hand bekleed door ervaren vakmensen. Dit ambacht garandeert een strakke afwerking zonder plooien of oneffenheden.
                </p>
                <ul className="space-y-2">
                  {['Strakke kapitonering', 'Perfecte naden', 'Vakkundige afwerking', 'Duurzame technieken'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-sage-green flex-shrink-0" />
                      <span
                        className="text-deep-charcoal/80"
                        style={{ fontSize: '15px', lineHeight: '24px' }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quality Control */}
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-[0px_8px_24px_rgba(44,44,44,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1758873263563-5ba4aa330799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY29udHJvbCUyMGluc3BlY3Rpb258ZW58MXx8fHwxNjE1NTk1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Quality control"
                  className="w-full h-[320px] object-cover"
                />
              </div>
              <div>
                <h3
                  className="text-deep-charcoal mb-3"
                  style={{ fontSize: '24px', fontWeight: 600, lineHeight: '32px' }}
                >
                  Strenge kwaliteitscontrole
                </h3>
                <p
                  className="text-deep-charcoal/70 mb-4"
                  style={{ fontSize: '16px', lineHeight: '26px' }}
                >
                  Voor elk bed de deur uitgaat, doorloopt het meerdere controlepunten. We controleren op kwaliteit, afwerking en functionaliteit – geen compromissen.
                </p>
                <ul className="space-y-2">
                  {['Materiaalinspectie', 'Controle op afwerking', 'Functionaliteitstest', '5 jaar garantie'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-sage-green flex-shrink-0" />
                      <span
                        className="text-deep-charcoal/80"
                        style={{ fontSize: '15px', lineHeight: '24px' }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="w-full bg-sage-green/5 py-24">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-deep-charcoal mb-4"
              style={{ fontSize: '36px', fontWeight: 600, lineHeight: '44px' }}
            >
              Technische specificaties
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Matras opbouw',
                items: ['7-zone pocketvering', 'HR-schuim toplaag', 'Ademende tijk', 'Anti-allergeen'],
              },
              {
                title: 'Box constructie',
                items: ['Massief houten frame', 'Bonnell vering of box', 'Verstevigde hoeken', 'Anti-slip onderzijde'],
              },
              {
                title: 'Hoofdbord',
                items: ['Stevig metalen frame', 'Meubelschuim vulling', 'Handmatige bekleding', 'Verstelbare hoogte'],
              },
            ].map((spec, index) => (
              <div
                key={index}
                className="bg-warm-white p-8 rounded-xl border border-warm-taupe/10"
              >
                <h3
                  className="text-deep-charcoal mb-6"
                  style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px' }}
                >
                  {spec.title}
                </h3>
                <ul className="space-y-3">
                  {spec.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage-green flex-shrink-0 mt-0.5" />
                      <span
                        className="text-deep-charcoal/80"
                        style={{ fontSize: '15px', lineHeight: '24px' }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full bg-warm-white py-24">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="text-center mb-16">
            <h2
              className="text-deep-charcoal mb-4"
              style={{ fontSize: '36px', fontWeight: 700, lineHeight: '44px' }}
            >
              Ons verhaal
            </h2>
            <p
              className="text-deep-charcoal/70 max-w-[600px] mx-auto"
              style={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}
            >
              Van startup tot gevestigd beddenme rk
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-sage-green/20 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'md:grid-flow-dense'
                  }`}
                >
                  <div className={index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12 md:col-start-2'}>
                    <div
                      className="text-warm-taupe mb-2"
                      style={{ fontSize: '24px', fontWeight: 700, lineHeight: '32px' }}
                    >
                      {item.year}
                    </div>
                    <h3
                      className="text-deep-charcoal mb-2"
                      style={{ fontSize: '20px', fontWeight: 500, lineHeight: '28px' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-deep-charcoal/70"
                      style={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}
                    >
                      {item.description}
                    </p>
                  </div>
                  <div className={index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'}>
                    {/* Dot on timeline */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-warm-taupe border-4 border-warm-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}