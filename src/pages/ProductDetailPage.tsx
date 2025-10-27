import { useParams, Link } from 'react-router-dom';
import { Check, ArrowLeft, Package, Truck, Shield, Heart, ChevronLeft, ChevronRight, RotateCw, ZoomIn } from 'lucide-react';
import { useState, useRef } from 'react';

export function ProductDetailPage() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('160x200');
  const [selectedHardness, setSelectedHardness] = useState('medium');
  const [selectedColor, setSelectedColor] = useState(0);

  // Mock product data with 360 view
  const product = {
    id: id || 'valkeveen-boxspring-luxe',
    name: 'Valkeveen Boxspring Luxe',
    collection: 'Valkeveen',
    images: [
      'https://images.unsplash.com/photo-1721738857280-f4e7c1c43f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYmVkcm9vbSUyMG5ldXRyYWwlMjB0b25lc3xlbnwxfHx8fDE3NjE1ODIxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1550926807-a6d0500b6502?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBib3hzcHJpbmclMjBiZWR8ZW58MXx8fHwxNzYxNTgyNDQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759176171789-0aa3f84d15ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtYXR0cmVzcyUyMGRldGFpbHxlbnwxfHx8fDE3NjE1ODI0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1758546407134-42b017d5f011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjBzd2F0Y2hlcyUyMHRleHR1cmV8ZW58MXx8fHwxNzYxNTgyNDQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1693907587800-702409d6c8fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBiZWRyb29tJTIwbmF0dXJhbCUyMGxpZ2h0fGVufDF8fHx8MTc2MTQ5NTAxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'De Valkeveen Boxspring Luxe is ons topmodel met de meest luxueuze afwerking. Volledig configureerbaar volgens jouw wensen, van stofkeuze tot comfort niveau. Met aandacht voor elk detail.',
    features: [
      'Premium pocketvering matras met 1200+ veren',
      'Luxe topmatras van hoogwaardige materialen',
      'Keuze uit meer dan 200 exclusieve stoffen',
      'Verstelbaar hoofdbord in hoogte en hoek',
      'Nederlands kwaliteitsmerk',
      '10 jaar garantie op constructie',
    ],
    specs: {
      'Totale hoogte': '65 cm (aanpasbaar)',
      'Boxhoogte': '25 cm',
      'Matrashoogte': '25 cm',
      'Topmatrashoogte': '10 cm',
      'Hoofdboordhoogte': '120 cm (verstelbaar)',
      'Poten': 'Hout, 15 cm (meerdere kleuren)',
      'Garantie': '10 jaar',
      'Levertijd': '6-8 weken',
    },
    availableColors: [
      { name: 'Warm Taupe', hex: '#C4B5A0' },
      { name: 'Sage Green', hex: '#8B9B8E' },
      { name: 'Deep Charcoal', hex: '#2C2C2C' },
      { name: 'Pearl White', hex: '#F8F6F3' },
      { name: 'Sand Beige', hex: '#D4C4B0' },
    ],
    inStock: false,
  };

  const [selectedImage, setSelectedImage] = useState(0);
  const [is360Mode, setIs360Mode] = useState(false);
  const [rotation, setRotation] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);

  const sizes = [
    { value: '120x200', label: '120 x 200 cm' },
    { value: '140x200', label: '140 x 200 cm' },
    { value: '160x200', label: '160 x 200 cm' },
    { value: '180x200', label: '180 x 200 cm' },
    { value: '200x200', label: '200 x 200 cm' },
  ];

  const hardnessOptions = [
    { value: 'soft', label: 'Zacht', description: 'Voor zijslapers' },
    { value: 'medium', label: 'Medium', description: 'Meest gekozen' },
    { value: 'firm', label: 'Stevig', description: 'Voor buikslapers' },
  ];

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (is360Mode) {
      isDragging.current = true;
      startX.current = e.clientX;
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current && is360Mode) {
      const delta = e.clientX - startX.current;
      setRotation((prev) => (prev + delta * 0.5) % 360);
      startX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Calculate which image to show based on rotation
  const rotationImageIndex = Math.floor(((rotation % 360) + 360) % 360 / (360 / product.images.length));

  return (
    <div className="min-h-screen bg-warm-white pt-20">
      {/* Breadcrumbs */}
      <div className="max-w-[1440px] mx-auto px-16 md:px-16 sm:px-6 pt-8">
        <div className="flex items-center gap-2 mb-8">
          <Link
            to="/"
            className="text-deep-charcoal/60 hover:text-warm-taupe transition-colors"
            style={{ fontSize: '14px' }}
          >
            Home
          </Link>
          <span className="text-deep-charcoal/40">/</span>
          <Link
            to="/collecties/valkeveen"
            className="text-deep-charcoal/60 hover:text-warm-taupe transition-colors"
            style={{ fontSize: '14px' }}
          >
            {product.collection}
          </Link>
          <span className="text-deep-charcoal/40">/</span>
          <span className="text-deep-charcoal" style={{ fontSize: '14px' }}>
            {product.name}
          </span>
        </div>
      </div>

      {/* Product Content */}
      <section className="w-full pb-24">
        <div className="max-w-[1440px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24">
            {/* Images - Left Side - Larger */}
            <div className="sticky top-24 self-start">
              {/* Main Image */}
              <div className="relative mb-6 rounded-2xl overflow-hidden bg-sage-green/5 group shadow-[0px_4px_24px_rgba(44,44,44,0.08)]">
                <div
                  className="relative cursor-pointer"
                  style={{ aspectRatio: '16/11' }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                >
                  <img
                    src={product.images[is360Mode ? rotationImageIndex : selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    draggable={false}
                  />
                  
                  {/* Image Navigation Arrows */}
                  {!is360Mode && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-warm-white/95 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-warm-white shadow-lg"
                      >
                        <ChevronLeft className="w-6 h-6 text-deep-charcoal" />
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-warm-white/95 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-warm-white shadow-lg"
                      >
                        <ChevronRight className="w-6 h-6 text-deep-charcoal" />
                      </button>
                    </>
                  )}

                  {/* 360 Mode Indicator */}
                  {is360Mode && (
                    <div className="absolute top-4 left-4 px-4 py-2 bg-deep-charcoal/90 backdrop-blur-sm rounded-lg">
                      <span className="text-warm-white uppercase" style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '1px' }}>
                        360° BEKIJKEN - Sleep om te draaien
                      </span>
                    </div>
                  )}

                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-deep-charcoal/80 backdrop-blur-sm rounded-lg">
                    <span className="text-warm-white" style={{ fontSize: '12px', fontWeight: 500 }}>
                      {is360Mode ? `${Math.round((rotation % 360 + 360) % 360)}°` : `${selectedImage + 1} / ${product.images.length}`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Thumbnail Gallery with 360 Toggle */}
              <div className="flex gap-3">
                {/* 360 View Button */}
                <button
                  onClick={() => setIs360Mode(!is360Mode)}
                  className={`flex-shrink-0 w-20 h-20 rounded-xl border-2 transition-all flex items-center justify-center ${
                    is360Mode
                      ? 'border-warm-taupe bg-warm-taupe/10'
                      : 'border-warm-taupe/30 hover:border-warm-taupe/60 bg-sage-green/5'
                  }`}
                >
                  <RotateCw className={`w-6 h-6 ${is360Mode ? 'text-warm-taupe' : 'text-deep-charcoal/60'}`} />
                </button>

                {/* Thumbnail Images */}
                <div className="flex-1 grid grid-cols-4 gap-3">
                  {product.images.slice(0, 4).map((image, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedImage(index);
                        setIs360Mode(false);
                      }}
                      className={`rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === index && !is360Mode
                          ? 'border-warm-taupe shadow-md'
                          : 'border-transparent hover:border-sage-green/40'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Info - Right Side */}
            <div>
              {/* Collection Badge */}
              <p
                className="text-sage-green uppercase mb-3"
                style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '1.5px' }}
              >
                {product.collection} Collectie
              </p>

              {/* Product Name */}
              <h1
                className="text-deep-charcoal mb-6"
                style={{ fontSize: '48px', fontWeight: 700, lineHeight: '56px' }}
              >
                {product.name}
              </h1>

              {/* Description */}
              <p
                className="text-deep-charcoal/80 mb-8 pb-8 border-b border-warm-taupe/20"
                style={{ fontSize: '17px', fontWeight: 400, lineHeight: '30px' }}
              >
                {product.description}
              </p>

              {/* Color Selection */}
              <div className="mb-8">
                <h3
                  className="text-deep-charcoal mb-4"
                  style={{ fontSize: '16px', fontWeight: 500, letterSpacing: '0.3px' }}
                >
                  Kies je kleur
                </h3>
                <div className="flex gap-3">
                  {product.availableColors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className="group/color relative"
                      title={color.name}
                    >
                      <div
                        className={`w-12 h-12 rounded-full transition-all duration-200 ${
                          selectedColor === index
                            ? 'ring-2 ring-sage-green ring-offset-2 ring-offset-warm-white scale-110'
                            : 'hover:ring-2 hover:ring-warm-taupe/40 hover:ring-offset-2 hover:ring-offset-warm-white hover:scale-105'
                        }`}
                        style={{ backgroundColor: color.hex }}
                      />
                      {selectedColor === index && (
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                          <span
                            className="text-deep-charcoal/70"
                            style={{ fontSize: '11px', fontWeight: 500 }}
                          >
                            {color.name}
                          </span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-8 mt-12">
                <h3
                  className="text-deep-charcoal mb-4"
                  style={{ fontSize: '16px', fontWeight: 500, letterSpacing: '0.3px' }}
                >
                  Kies je maat
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size.value}
                      onClick={() => setSelectedSize(size.value)}
                      className={`p-4 rounded-xl border-2 transition-all text-center ${
                        selectedSize === size.value
                          ? 'border-warm-taupe bg-warm-taupe/5 shadow-sm'
                          : 'border-warm-taupe/20 hover:border-warm-taupe/50 hover:bg-sage-green/5'
                      }`}
                    >
                      <div
                        className="text-deep-charcoal"
                        style={{ fontSize: '15px', fontWeight: 500 }}
                      >
                        {size.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Hardness Selection */}
              <div className="mb-10">
                <h3
                  className="text-deep-charcoal mb-4"
                  style={{ fontSize: '16px', fontWeight: 500, letterSpacing: '0.3px' }}
                >
                  Kies je hardheid
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {hardnessOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSelectedHardness(option.value)}
                      className={`p-4 rounded-xl border-2 transition-all text-center ${
                        selectedHardness === option.value
                          ? 'border-warm-taupe bg-warm-taupe/5 shadow-sm'
                          : 'border-warm-taupe/20 hover:border-warm-taupe/50 hover:bg-sage-green/5'
                      }`}
                    >
                      <div
                        className="text-deep-charcoal mb-1"
                        style={{ fontSize: '14px', fontWeight: 500 }}
                      >
                        {option.label}
                      </div>
                      <div
                        className="text-deep-charcoal/60"
                        style={{ fontSize: '11px', fontWeight: 400 }}
                      >
                        {option.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-4 mb-10 pb-10 border-b border-warm-taupe/20">
                <Link
                  to="/contact"
                  className="h-14 bg-warm-taupe text-deep-charcoal rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-[#B8A890] hover:shadow-lg hover:translate-y-[-2px]"
                  style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.3px' }}
                >
                  Configureer volledig
                </Link>
                <Link
                  to="/verkooppunten"
                  className="h-14 border-2 border-deep-charcoal text-deep-charcoal rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-deep-charcoal hover:text-warm-white"
                  style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.3px' }}
                >
                  Proefliggen bij dealer
                </Link>
              </div>

              {/* USPs */}
              <div className="grid grid-cols-2 gap-6 mb-10 pb-10 border-b border-warm-taupe/20">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sage-green/10 flex items-center justify-center flex-shrink-0">
                    <Package className="w-5 h-5 text-sage-green" strokeWidth={2} />
                  </div>
                  <div>
                    <div
                      className="text-deep-charcoal mb-0.5"
                      style={{ fontSize: '14px', fontWeight: 500 }}
                    >
                      Gratis bezorgen
                    </div>
                    <div
                      className="text-deep-charcoal/60"
                      style={{ fontSize: '12px', fontWeight: 400 }}
                    >
                      & monteren
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sage-green/10 flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5 text-sage-green" strokeWidth={2} />
                  </div>
                  <div>
                    <div
                      className="text-deep-charcoal mb-0.5"
                      style={{ fontSize: '14px', fontWeight: 500 }}
                    >
                      6-8 weken
                    </div>
                    <div
                      className="text-deep-charcoal/60"
                      style={{ fontSize: '12px', fontWeight: 400 }}
                    >
                      Levertijd
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sage-green/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-sage-green" strokeWidth={2} />
                  </div>
                  <div>
                    <div
                      className="text-deep-charcoal mb-0.5"
                      style={{ fontSize: '14px', fontWeight: 500 }}
                    >
                      10 jaar garantie
                    </div>
                    <div
                      className="text-deep-charcoal/60"
                      style={{ fontSize: '12px', fontWeight: 400 }}
                    >
                      Op constructie
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sage-green/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-sage-green" strokeWidth={2} />
                  </div>
                  <div>
                    <div
                      className="text-deep-charcoal mb-0.5"
                      style={{ fontSize: '14px', fontWeight: 500 }}
                    >
                      Handgemaakt
                    </div>
                    <div
                      className="text-deep-charcoal/60"
                      style={{ fontSize: '12px', fontWeight: 400 }}
                    >
                      In Nederland
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3
                  className="text-deep-charcoal mb-5"
                  style={{ fontSize: '18px', fontWeight: 500, letterSpacing: '0.3px' }}
                >
                  Kenmerken
                </h3>
                <div className="flex flex-col gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-sage-green flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span
                        className="text-deep-charcoal/80"
                        style={{ fontSize: '15px', fontWeight: 400, lineHeight: '24px' }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-32">
            <h2
              className="text-deep-charcoal mb-10"
              style={{ fontSize: '36px', fontWeight: 700, lineHeight: '44px' }}
            >
              Specificaties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-1">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between py-5 border-b border-warm-taupe/20">
                  <span
                    className="text-deep-charcoal/70"
                    style={{ fontSize: '16px', fontWeight: 400 }}
                  >
                    {key}
                  </span>
                  <span
                    className="text-deep-charcoal"
                    style={{ fontSize: '16px', fontWeight: 500 }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
