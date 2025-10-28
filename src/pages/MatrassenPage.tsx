import { PageHeader } from '../components/PageHeader';
import { MatrasConfigurator } from '../components/MatrasConfigurator';
import { ProductCard } from '../components/ProductCard';
import { ShowroomAppointment } from '../components/ShowroomAppointment';

export function MatrassenPage() {
  const matrassen = [
    {
      id: 'matras-pocketvering',
      name: 'Premium Pocketvering',
      collection: 'VALKEVEEN',
      imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800',
      features: ['1000+ pocketveren', 'Optimale ventilatie', '25 jaar garantie'],
      inStock: true,
    },
    {
      id: 'matras-koudschuim',
      name: 'Comfort Koudschuim',
      collection: 'VALKEVEEN',
      imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800',
      features: ['HR50 koudschuim', 'Hypoallergeen', '7 comfort zones'],
      inStock: true,
    },
    {
      id: 'matras-traagschuim',
      name: 'Visco Comfort',
      collection: 'LECHTAL',
      imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800',
      features: ['NASA traagschuim', 'Drukverdelend', 'Temperature gevoelig'],
      inStock: false,
    },
    {
      id: 'matras-latex',
      name: 'Natuurlijk Latex',
      collection: 'LECHTAL',
      imageUrl: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800',
      features: ['100% natuurlatex', 'Anti-allergisch', 'Milieuvriendelijk'],
      inStock: true,
    },
    {
      id: 'matras-hybride',
      name: 'Hybrid Comfort',
      collection: 'RECREATIE',
      imageUrl: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800',
      features: ['Vering + schuim', 'Beste van beide', 'Luxe afwerking'],
      inStock: true,
    },
    {
      id: 'matras-extra-stevig',
      name: 'Extra Stevig',
      collection: 'RECREATIE',
      imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800',
      features: ['Extra stevig', 'Voor zwaarder gewicht', 'Optimale rugsteun'],
      inStock: false,
    },
  ];

  return (
    <div className="min-h-screen bg-warm-white">
      <PageHeader
        title="Premium Matrassen"
        subtitle="Eigen ontworpen voor perfect slaapcomfort"
        imageUrl="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200"
        centered={true}
      />

      {/* Intro Section - Benadruk eigen ontwerpen */}
      <section className="w-full py-16">
        <div className="max-w-[1000px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-green/15 rounded-full mb-6">
              <span
                className="text-sage-green uppercase"
                style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px' }}
              >
                100% EIGEN ONTWERPEN
              </span>
            </div>
            <h2
              className="text-deep-charcoal mb-4"
              style={{ fontSize: '32px', fontWeight: 700, lineHeight: '40px' }}
            >
              Matrassen door ons ontworpen en gemaakt
            </h2>
            <p
              className="text-deep-charcoal/70 max-w-[700px] mx-auto"
              style={{ fontSize: '18px', lineHeight: '30px' }}
            >
              Elk matras is door ons zelf ontwikkeld en volgens onze specificaties vervaardigd. Of je nu een losse matras zoekt of een matras voor je boxspring, wij hebben de
              perfecte oplossing. Allemaal gemaakt met Nederlands vakmanschap en premium materialen.
            </p>
          </div>
        </div>
      </section>

      {/* Matras Configurator */}
      <MatrasConfigurator />

      {/* Matrassen Grid */}
      <section className="w-full py-16">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="mb-12 text-center">
            <h2
              className="text-deep-charcoal mb-3"
              style={{ fontSize: '32px', fontWeight: 700, lineHeight: '40px' }}
            >
              Onze matras collectie
            </h2>
            <p
              className="text-deep-charcoal/70"
              style={{ fontSize: '16px', lineHeight: '26px' }}
            >
              Van koudschuim tot pocketvering – kwaliteit voor iedere slaapvoorkeur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {matrassen.map((matras) => (
              <ProductCard
                key={matras.id}
                id={matras.id}
                imageUrl={matras.imageUrl}
                name={matras.name}
                collection={matras.collection}
                features={matras.features}
                inStock={matras.inStock}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full py-16 bg-warm-white">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '10 jaar garantie',
                description: 'Alle matrassen komen met uitgebreide fabrieksgarantie',
              },
              {
                title: 'Proefslapen',
                description: '100 nachten proberen in de vertrouwde omgeving van je eigen slaapkamer',
              },
              {
                title: 'Maatwerk mogelijk',
                description: 'Speciale maten? Wij maken elke gewenste afmeting',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-warm-white border-2 border-gray-100 rounded-2xl p-8 hover:border-sage-green/30 transition-all duration-300"
              >
                <h3
                  className="text-deep-charcoal mb-3"
                  style={{ fontSize: '20px', fontWeight: 600 }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-deep-charcoal/70"
                  style={{ fontSize: '16px', lineHeight: '26px' }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom Appointment */}
      <ShowroomAppointment />
    </div>
  );
}
