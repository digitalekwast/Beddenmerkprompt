import { Link } from 'react-router-dom';

interface Category {
  name: string;
  href: string;
  imageUrl: string;
}

export function ProductCategories() {
  const categories: Category[] = [
    {
      name: 'Boxspring sets',
      href: '/boxsprings',
      imageUrl: 'https://images.unsplash.com/photo-1647779094427-c4368719bddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hzcHJpbmclMjBiZWQlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzYxNTg4NzcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Hotelbed sets',
      href: '/hotelbedden',
      imageUrl: 'https://images.unsplash.com/photo-1696352005425-002ae4c5dbdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJlZCUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjE1ODg3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Hoofdborden',
      href: '/boxsprings',
      imageUrl: 'https://images.unsplash.com/photo-1759709665127-17a3089f22ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWQlMjBoZWFkYm9hcmQlMjBpc29sYXRlZHxlbnwxfHx8fDE3NjE1ODg3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Boxen',
      href: '/boxsprings',
      imageUrl: 'https://images.unsplash.com/photo-1616621859311-19dff47afafc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWQlMjBiYXNlJTIwZm91bmRhdGlvbnxlbnwxfHx8fDE3NjE1ODg3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Matrassen',
      href: '/boxsprings',
      imageUrl: 'https://images.unsplash.com/photo-1693592398532-cb18d3b01d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR0cmVzcyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjE1ODg3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Topmatrassen',
      href: '/boxsprings',
      imageUrl: 'https://images.unsplash.com/photo-1759176170879-6bd7073ab4f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR0cmVzcyUyMHRvcHBlciUyMHdoaXRlfGVufDF8fHx8MTc2MTU4ODc3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Bedbodems',
      href: '/boxsprings',
      imageUrl: 'https://images.unsplash.com/photo-1599502452965-df0824971bb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWQlMjBzbGF0cyUyMHdvb2R8ZW58MXx8fHwxNzYxNTg4Nzc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section className="w-full bg-warm-white py-24">
      <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div
            className="text-sage-green uppercase mb-4"
            style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '2px' }}
          >
            AL ONZE PRODUCTEN ZIJN EIGEN ONTWERPEN
          </div>
          <h2
            className="text-deep-charcoal mb-4"
            style={{ fontSize: '36px', fontWeight: 700, lineHeight: '44px' }}
          >
            Ontdek onze collectie
          </h2>
          <p
            className="text-deep-charcoal/70 max-w-[600px] mx-auto"
            style={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}
          >
            Van boxsprings tot matrassen – elk product is door ons bedacht en ontwikkeld
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.href}
              className="group flex flex-col items-center text-center transition-all duration-300"
            >
              {/* Image Container */}
              <div className="w-full aspect-square mb-4 relative overflow-hidden rounded-xl bg-warm-white border border-warm-taupe/10 transition-all duration-300 group-hover:border-warm-taupe/30 group-hover:shadow-[0px_8px_24px_rgba(44,44,44,0.08)]">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Label */}
              <span
                className="text-deep-charcoal transition-colors duration-200 group-hover:text-warm-taupe"
                style={{ fontSize: '15px', fontWeight: 500, lineHeight: '24px' }}
              >
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
