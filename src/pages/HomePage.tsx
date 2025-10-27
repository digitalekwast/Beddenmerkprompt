import { Hero } from '../components/Hero';
import { USPStrip } from '../components/USPStrip';
import { BrandStory } from '../components/BrandStory';
import { CraftsmanshipGallery } from '../components/CraftsmanshipGallery';
import { InteractiveConfigurator } from '../components/InteractiveConfigurator';
import { ProductCategories } from '../components/ProductCategories';
import { FeaturedCollection } from '../components/FeaturedCollection';
import { VakmansschapSection } from '../components/VakmansschapSection';
import { CollectiesOverview } from '../components/CollectiesOverview';
import { Testimonials } from '../components/Testimonials';
import { SocialProof } from '../components/SocialProof';
import { FinalCTA } from '../components/FinalCTA';

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero imageUrl="https://images.unsplash.com/photo-1693907587800-702409d6c8fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBiZWRyb29tJTIwbmF0dXJhbCUyMGxpZ2h0fGVufDF8fHx8MTc2MTQ5NTAxNXww&ixlib=rb-4.1.0&q=80&w=1080" />

      {/* USP Strip - 4 USPs including "Eigen ontwerpen" */}
      <USPStrip />

      {/* Brand Story - NEW: Benadrukt eigen merk met visuele rijkdom */}
      <BrandStory />

      {/* Interactive Configurator Tool */}
      <InteractiveConfigurator />

      {/* Product Categories */}
      <ProductCategories />

      {/* Featured Collection - Valkeveen */}
      <FeaturedCollection
        imageUrl="https://images.unsplash.com/photo-1683576221425-d711598dbfda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBib3hzcHJpbmclMjBiZWQlMjBuZXV0cmFsfGVufDF8fHx8MTc2MTU4ODU0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
        eyebrow="COLLECTIE"
        title="Valkeveen"
        description="In 5 stappen naar jouw droomboxspring. De Valkeveen collectie biedt voor iedereen wat wils, variërend van eenvoud tot luxe."
        features={[
          'Zelf samenstellen',
          'Luxe tot eenvoud',
          'Keuze uit 200+ stoffen',
          'Levering 6-8 weken',
        ]}
        ctaText="Bekijk collectie"
        ctaHref="/collecties/valkeveen"
        imageOnRight={false}
      />

      {/* Craftsmanship Gallery - NEW: Premium foto gallery met veel visuele rijkdom */}
      <CraftsmanshipGallery />

      {/* Vakmanschap Section */}
      <VakmansschapSection imageUrl="https://images.unsplash.com/photo-1758264672363-2123237ea366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdHNtYW5zaGlwJTIwc2V3aW5nJTIwZGV0YWlsfGVufDF8fHx8MTc2MTU4MjEzNnww&ixlib=rb-4.1.0&q=80&w=1080" />

      {/* Featured Collection - Lechtal */}
      <FeaturedCollection
        imageUrl="https://images.unsplash.com/photo-1721742734916-b5b824d3d310?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwc2FnZSUyMGdyZWVufGVufDF8fHx8MTc2MTU4ODU0OHww&ixlib=rb-4.1.0&q=80&w=1080"
        eyebrow="COLLECTIE"
        title="Lechtal"
        description="Populaire boxsprings direct leverbaar. De Lechtal collectie combineert comfort met beschikbaarheid – perfect voor wie niet kan wachten."
        features={[
          'Complete sets',
          'Voorraad leverbaar',
          'Standaard maten',
          'Snelle levering binnen 2 weken',
        ]}
        ctaText="Bekijk collectie"
        ctaHref="/collecties/lechtal"
        imageOnRight={true}
      />

      {/* Collecties Overview */}
      <CollectiesOverview
        valkveenImage="https://images.unsplash.com/photo-1683576221425-d711598dbfda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBib3hzcHJpbmclMjBiZWQlMjBuZXV0cmFsfGVufDF8fHx8MTc2MTU4ODU0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
        lechtalImage="https://images.unsplash.com/photo-1721742734916-b5b824d3d310?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwc2FnZSUyMGdyZWVufGVufDF8fHx8MTc2MTU4ODU0OHww&ixlib=rb-4.1.0&q=80&w=1080"
        recreatieImage="https://images.unsplash.com/photo-1645750646327-8c560ef5cb8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaG90ZWwlMjBiZWQlMjB3aGl0ZXxlbnwxfHx8fDE3NjE1ODg1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      {/* Testimonials */}
      <Testimonials />

      {/* Social Proof */}
      <SocialProof />

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}
