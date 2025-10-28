import { useState } from 'react';
import { Check, ArrowRight, ArrowLeft, Send, MapPin, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FormData {
  productType: string;
  collection: string;
  size: string;
  budget: string;
  timeframe: string;
  usage: string;
  quantity: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  dealerChoice: string;
}

export function OfferteAanvraagPage() {
  // Updated: Added dealer selection step (step 8 of 9)
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    productType: '',
    collection: '',
    size: '',
    budget: '',
    timeframe: '',
    usage: '',
    quantity: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    dealerChoice: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 9;

  const dealers = [
    {
      value: 'showroom-staphorst',
      name: 'Bommel & Bach Showroom',
      location: 'Staphorst',
      address: 'Industrieweg 12, 8131 WP Staphorst',
      featured: true,
    },
    {
      value: 'amsterdam',
      name: 'Slaapcomfort Amsterdam',
      location: 'Amsterdam',
      address: 'Overtoom 245, 1054 HW Amsterdam',
    },
    {
      value: 'utrecht',
      name: 'Bed & Good Utrecht',
      location: 'Utrecht',
      address: 'Vleutenseweg 89, 3532 HD Utrecht',
    },
    {
      value: 'rotterdam',
      name: 'Slaapspecialist Rotterdam',
      location: 'Rotterdam',
      address: 'Bergselaan 123, 3037 EB Rotterdam',
    },
    {
      value: 'den-haag',
      name: 'Droombed Den Haag',
      location: 'Den Haag',
      address: 'Theresiastraat 78, 2593 AX Den Haag',
    },
    {
      value: 'eindhoven',
      name: 'Beddenspeciaalzaak Eindhoven',
      location: 'Eindhoven',
      address: 'Geldropseweg 234, 5611 SL Eindhoven',
    },
    {
      value: 'nog-niet-zeker',
      name: 'Nog niet zeker / Advies nodig',
      location: 'We helpen je graag de dichtstbijzijnde dealer te vinden',
      address: '',
    },
  ];

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.productType !== '';
      case 2:
        return formData.collection !== '';
      case 3:
        return formData.size !== '';
      case 4:
        return formData.budget !== '' && formData.timeframe !== '';
      case 5:
        return formData.usage !== '';
      case 6:
        return formData.quantity !== '';
      case 7:
        return formData.dealerChoice !== '';
      case 8:
        return formData.name !== '' && formData.email !== '' && formData.phone !== '';
      case 9:
        return true; // Stap 9 is informatief, geen validatie nodig
      default:
        return false;
    }
  };

  if (isSubmitted) {
    const selectedDealer = dealers.find(d => d.value === formData.dealerChoice);
    
    return (
      <div className="min-h-screen bg-warm-white pt-24 md:pt-32 pb-16">
        <div className="max-w-[600px] mx-auto px-6 md:px-16 text-center">
          <div className="w-20 h-20 bg-sage-green rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-10 h-10 text-warm-white" strokeWidth={3} />
          </div>
          <h1
            className="text-deep-charcoal mb-4"
            style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 700, lineHeight: 'clamp(38px, 7vw, 56px)' }}
          >
            Bedankt voor je aanmelding!
          </h1>
          <p
            className="text-deep-charcoal/70 mb-6"
            style={{ fontSize: 'clamp(16px, 4vw, 18px)', lineHeight: 'clamp(26px, 5vw, 30px)' }}
          >
            We hebben je showroom aanvraag goed ontvangen. Een van onze specialisten neemt binnen 1 werkdag contact met je op om een passend tijdstip af te spreken. We zorgen dat de bedden die je interesseren klaarstaan!
          </p>
          
          {selectedDealer && selectedDealer.value !== 'nog-niet-zeker' && (
            <div className="p-5 bg-warm-white rounded-xl border-2 border-sage-green/30 mb-6">
              <div className="flex items-start gap-3 text-left">
                <MapPin className="w-5 h-5 text-sage-green flex-shrink-0 mt-1" />
                <div>
                  <p
                    className="text-deep-charcoal/60 mb-1"
                    style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.5px' }}
                  >
                    JOUW GEKOZEN LOCATIE
                  </p>
                  <p
                    className="text-deep-charcoal mb-1"
                    style={{ fontSize: '17px', fontWeight: 600 }}
                  >
                    {selectedDealer.name}
                  </p>
                  {selectedDealer.address && (
                    <p
                      className="text-deep-charcoal/70"
                      style={{ fontSize: '14px', lineHeight: '20px' }}
                    >
                      {selectedDealer.address}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
          
          <div className="p-6 bg-sage-green/10 rounded-2xl border border-sage-green/20 mb-8">
            <p
              className="text-deep-charcoal"
              style={{ fontSize: '15px', lineHeight: '24px' }}
            >
              <strong>Let op:</strong> Check ook je spam folder voor ons antwoord. Je kunt ons altijd direct bereiken op{' '}
              <a href="tel:0522-236040" className="text-sage-green hover:underline">
                0522-236040
              </a>
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex h-14 px-8 bg-sage-green text-warm-white rounded-xl items-center justify-center gap-2 transition-all duration-200 hover:bg-sage-green/90"
            style={{ fontWeight: 500, fontSize: '16px' }}
          >
            Terug naar home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-white pt-24 md:pt-32 pb-16">
      <div className="max-w-[800px] mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p
            className="text-sage-green uppercase mb-3 md:mb-4"
            style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px' }}
          >
            VRIJBLIJVEND & OP MAAT
          </p>
          <h1
            className="text-deep-charcoal mb-4"
            style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 700, lineHeight: 'clamp(38px, 7vw, 56px)' }}
          >
            Plan je showroom bezoek
          </h1>
          <p
            className="text-deep-charcoal/70 max-w-[600px] mx-auto"
            style={{ fontSize: 'clamp(16px, 4vw, 18px)', lineHeight: 'clamp(26px, 5vw, 30px)' }}
          >
            Beantwoord een paar vragen zodat we je showroombezoek optimaal kunnen voorbereiden
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10 md:mb-12">
          <div className="flex justify-between items-center mb-3">
            <span
              className="text-deep-charcoal/60"
              style={{ fontSize: '14px', fontWeight: 500 }}
            >
              Stap {currentStep} van {totalSteps}
            </span>
            <span
              className="text-sage-green"
              style={{ fontSize: '14px', fontWeight: 500 }}
            >
              {Math.round((currentStep / totalSteps) * 100)}% compleet
            </span>
          </div>
          <div className="w-full h-2 bg-warm-taupe/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-sage-green transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-warm-white rounded-2xl border-2 border-warm-taupe/10 p-6 md:p-10 mb-8">
          {/* Step 1: Product Type */}
          {currentStep === 1 && (
            <div>
              <h2
                className="text-deep-charcoal mb-3"
                style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 600, lineHeight: 'clamp(30px, 6vw, 40px)' }}
              >
                Wat ben je op zoek naar?
              </h2>
              <p
                className="text-deep-charcoal/70 mb-8"
                style={{ fontSize: '16px', lineHeight: '26px' }}
              >
                Selecteer het type product waar je interesse in hebt
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { value: 'boxspring', label: 'Boxspring set', desc: 'Complete boxspring met matras' },
                  { value: 'hotelbed', label: 'Hotelbed set', desc: 'Voor hospitality & B&B' },
                  { value: 'matras', label: 'Losse matras', desc: 'Alleen een matras' },
                  { value: 'hoofdbord', label: 'Hoofdbord', desc: 'Stijlvol hoofdbord op maat' },
                  { value: 'meerdere', label: 'Meerdere producten', desc: 'Combinatie van producten' },
                  { value: 'anders', label: 'Iets anders', desc: 'Andere wens of vraag' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateFormData('productType', option.value)}
                    className={`p-5 rounded-xl border-2 text-left transition-all duration-200 hover:border-sage-green/50 hover:shadow-md ${
                      formData.productType === option.value
                        ? 'border-sage-green bg-sage-green/5'
                        : 'border-warm-taupe/20'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3
                          className="text-deep-charcoal mb-1"
                          style={{ fontSize: '17px', fontWeight: 600 }}
                        >
                          {option.label}
                        </h3>
                        <p
                          className="text-deep-charcoal/60"
                          style={{ fontSize: '14px', lineHeight: '22px' }}
                        >
                          {option.desc}
                        </p>
                      </div>
                      {formData.productType === option.value && (
                        <div className="w-6 h-6 rounded-full bg-sage-green flex items-center justify-center ml-3 flex-shrink-0">
                          <Check className="w-4 h-4 text-warm-white" strokeWidth={3} />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Collection */}
          {currentStep === 2 && (
            <div>
              <h2
                className="text-deep-charcoal mb-3"
                style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 600, lineHeight: 'clamp(30px, 6vw, 40px)' }}
              >
                Welke collectie spreekt je aan?
              </h2>
              <p
                className="text-deep-charcoal/70 mb-8"
                style={{ fontSize: '16px', lineHeight: '26px' }}
              >
                Elke collectie heeft een eigen karakter en prijsniveau
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    value: 'valkeveen',
                    label: 'Valkeveen',
                    desc: 'Volledig configureerbaar • Premium afwerking • 200+ stoffen',
                    price: '€2.500 - €4.000',
                  },
                  {
                    value: 'lechtal',
                    label: 'Lechtal',
                    desc: 'Direct leverbaar • Standaard maten • Populaire kleuren',
                    price: '€1.800 - €2.800',
                  },
                  {
                    value: 'recreatie',
                    label: 'Recreatie',
                    desc: 'Voor hotels & B&B • Duurzaam • Volume korting mogelijk',
                    price: 'Op aanvraag',
                  },
                  {
                    value: 'nog-niet-zeker',
                    label: 'Nog niet zeker',
                    desc: 'Ik wil graag advies over welke collectie bij mij past',
                    price: '',
                  },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateFormData('collection', option.value)}
                    className={`p-5 rounded-xl border-2 text-left transition-all duration-200 hover:border-sage-green/50 hover:shadow-md ${
                      formData.collection === option.value
                        ? 'border-sage-green bg-sage-green/5'
                        : 'border-warm-taupe/20'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3
                            className="text-deep-charcoal"
                            style={{ fontSize: '18px', fontWeight: 600 }}
                          >
                            {option.label}
                          </h3>
                          {option.price && (
                            <span
                              className="text-sage-green"
                              style={{ fontSize: '15px', fontWeight: 600 }}
                            >
                              {option.price}
                            </span>
                          )}
                        </div>
                        <p
                          className="text-deep-charcoal/60"
                          style={{ fontSize: '14px', lineHeight: '22px' }}
                        >
                          {option.desc}
                        </p>
                      </div>
                      {formData.collection === option.value && (
                        <div className="w-6 h-6 rounded-full bg-sage-green flex items-center justify-center ml-3 flex-shrink-0">
                          <Check className="w-4 h-4 text-warm-white" strokeWidth={3} />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Size */}
          {currentStep === 3 && (
            <div>
              <h2
                className="text-deep-charcoal mb-3"
                style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 600, lineHeight: 'clamp(30px, 6vw, 40px)' }}
              >
                Welke afmeting heb je nodig?
              </h2>
              <p
                className="text-deep-charcoal/70 mb-8"
                style={{ fontSize: '16px', lineHeight: '26px' }}
              >
                Selecteer de gewenste maat (maatwerk is ook mogelijk)
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {[
                  '90x200',
                  '120x200',
                  '140x200',
                  '160x200',
                  '180x200',
                  '200x200',
                  '200x220',
                  'Maatwerk',
                  'Meerdere maten',
                ].map((size) => (
                  <button
                    key={size}
                    onClick={() => updateFormData('size', size)}
                    className={`p-4 md:p-5 rounded-xl border-2 text-center transition-all duration-200 hover:border-sage-green/50 hover:shadow-md ${
                      formData.size === size
                        ? 'border-sage-green bg-sage-green/5'
                        : 'border-warm-taupe/20'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span
                        className="text-deep-charcoal"
                        style={{ fontSize: '17px', fontWeight: 600 }}
                      >
                        {size}
                      </span>
                      {formData.size === size && (
                        <div className="w-5 h-5 rounded-full bg-sage-green flex items-center justify-center">
                          <Check className="w-3 h-3 text-warm-white" strokeWidth={3} />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Budget & Timeframe */}
          {currentStep === 4 && (
            <div>
              <h2
                className="text-deep-charcoal mb-3"
                style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 600, lineHeight: 'clamp(30px, 6vw, 40px)' }}
              >
                Budget en timing
              </h2>
              <p
                className="text-deep-charcoal/70 mb-8"
                style={{ fontSize: '16px', lineHeight: '26px' }}
              >
                Dit helpt ons een passend aanbod te doen
              </p>

              <div className="mb-8">
                <label
                  className="text-deep-charcoal mb-4 block"
                  style={{ fontSize: '17px', fontWeight: 600 }}
                >
                  Wat is je budget indicatie?
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { value: 'tot-2000', label: 'Tot €2.000' },
                    { value: '2000-3000', label: '€2.000 - €3.000' },
                    { value: '3000-4000', label: '€3.000 - €4.000' },
                    { value: 'boven-4000', label: 'Boven €4.000' },
                    { value: 'geen-voorkeur', label: 'Geen voorkeur' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateFormData('budget', option.value)}
                      className={`p-4 rounded-xl border-2 text-center transition-all duration-200 hover:border-sage-green/50 ${
                        formData.budget === option.value
                          ? 'border-sage-green bg-sage-green/5'
                          : 'border-warm-taupe/20'
                      }`}
                    >
                      <span
                        className="text-deep-charcoal"
                        style={{ fontSize: '16px', fontWeight: 500 }}
                      >
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  className="text-deep-charcoal mb-4 block"
                  style={{ fontSize: '17px', fontWeight: 600 }}
                >
                  Gewenste levertijd
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { value: 'spoed', label: 'Zo snel mogelijk' },
                    { value: '2-4-weken', label: '2-4 weken' },
                    { value: '1-2-maanden', label: '1-2 maanden' },
                    { value: 'geen-haast', label: 'Geen haast' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateFormData('timeframe', option.value)}
                      className={`p-4 rounded-xl border-2 text-center transition-all duration-200 hover:border-sage-green/50 ${
                        formData.timeframe === option.value
                          ? 'border-sage-green bg-sage-green/5'
                          : 'border-warm-taupe/20'
                      }`}
                    >
                      <span
                        className="text-deep-charcoal"
                        style={{ fontSize: '16px', fontWeight: 500 }}
                      >
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Usage */}
          {currentStep === 5 && (
            <div>
              <h2
                className="text-deep-charcoal mb-3"
                style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 600, lineHeight: 'clamp(30px, 6vw, 40px)' }}
              >
                Waarvoor ga je het gebruiken?
              </h2>
              <p
                className="text-deep-charcoal/70 mb-8"
                style={{ fontSize: '16px', lineHeight: '26px' }}
              >
                Dit helpt ons het juiste advies te geven
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { value: 'prive-slaapkamer', label: 'Privé slaapkamer', desc: 'Voor dagelijks gebruik' },
                  { value: 'logeerkamer', label: 'Logeerkamer', desc: 'Af en toe gebruik' },
                  { value: 'hotel', label: 'Hotel/B&B', desc: 'Commercieel gebruik' },
                  { value: 'vakantiewoning', label: 'Vakantiewoning', desc: 'Recreatie verhuur' },
                  { value: 'project', label: 'Project (meerdere)', desc: 'Groter project' },
                  { value: 'anders', label: 'Anders', desc: 'Andere toepassing' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateFormData('usage', option.value)}
                    className={`p-5 rounded-xl border-2 text-left transition-all duration-200 hover:border-sage-green/50 hover:shadow-md ${
                      formData.usage === option.value
                        ? 'border-sage-green bg-sage-green/5'
                        : 'border-warm-taupe/20'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3
                          className="text-deep-charcoal mb-1"
                          style={{ fontSize: '17px', fontWeight: 600 }}
                        >
                          {option.label}
                        </h3>
                        <p
                          className="text-deep-charcoal/60"
                          style={{ fontSize: '14px', lineHeight: '22px' }}
                        >
                          {option.desc}
                        </p>
                      </div>
                      {formData.usage === option.value && (
                        <div className="w-6 h-6 rounded-full bg-sage-green flex items-center justify-center ml-3 flex-shrink-0">
                          <Check className="w-4 h-4 text-warm-white" strokeWidth={3} />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Quantity */}
          {currentStep === 6 && (
            <div>
              <h2
                className="text-deep-charcoal mb-3"
                style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 600, lineHeight: 'clamp(30px, 6vw, 40px)' }}
              >
                Hoeveel producten heb je nodig?
              </h2>
              <p
                className="text-deep-charcoal/70 mb-8"
                style={{ fontSize: '16px', lineHeight: '26px' }}
              >
                Dit helpt ons om de beste prijs te berekenen
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { value: '1', label: '1 product', desc: 'Voor eigen gebruik' },
                  { value: '2', label: '2 producten', desc: 'Voor meerdere kamers' },
                  { value: '3-5', label: '3-5 producten', desc: 'Klein project' },
                  { value: '6-10', label: '6-10 producten', desc: 'Medium project' },
                  { value: '10+', label: '10+ producten', desc: 'Groot project - volumekorting' },
                  { value: 'nog-onbekend', label: 'Nog onbekend', desc: 'Ik wil eerst advies' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateFormData('quantity', option.value)}
                    className={`p-5 rounded-xl border-2 text-left transition-all duration-200 hover:border-sage-green/50 hover:shadow-md ${
                      formData.quantity === option.value
                        ? 'border-sage-green bg-sage-green/5'
                        : 'border-warm-taupe/20'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3
                          className="text-deep-charcoal mb-1"
                          style={{ fontSize: '17px', fontWeight: 600 }}
                        >
                          {option.label}
                        </h3>
                        <p
                          className="text-deep-charcoal/60"
                          style={{ fontSize: '14px', lineHeight: '22px' }}
                        >
                          {option.desc}
                        </p>
                      </div>
                      {formData.quantity === option.value && (
                        <div className="w-6 h-6 rounded-full bg-sage-green flex items-center justify-center ml-3 flex-shrink-0">
                          <Check className="w-4 h-4 text-warm-white" strokeWidth={3} />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 7: Dealer Selection */}
          {currentStep === 7 && (
            <div>
              <h2
                className="text-deep-charcoal mb-3"
                style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 600, lineHeight: 'clamp(30px, 6vw, 40px)' }}
              >
                Waar wil je het bed bekijken?
              </h2>
              <p
                className="text-deep-charcoal/70 mb-8"
                style={{ fontSize: '16px', lineHeight: '26px' }}
              >
                Kies de locatie waar je graag wilt proefliggen en advies wilt krijgen
              </p>
              <div className="grid grid-cols-1 gap-3">
                {dealers.map((dealer) => (
                  <button
                    key={dealer.value}
                    onClick={() => updateFormData('dealerChoice', dealer.value)}
                    className={`p-5 rounded-xl border-2 text-left transition-all duration-200 hover:border-sage-green/50 hover:shadow-md ${
                      formData.dealerChoice === dealer.value
                        ? 'border-sage-green bg-sage-green/5'
                        : 'border-warm-taupe/20'
                    } ${dealer.featured ? 'ring-2 ring-sage-green/20' : ''}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {dealer.featured ? (
                            <Building2 className="w-5 h-5 text-sage-green flex-shrink-0" />
                          ) : (
                            <MapPin className="w-4 h-4 text-sage-green flex-shrink-0" />
                          )}
                          <h3
                            className="text-deep-charcoal"
                            style={{ fontSize: '17px', fontWeight: 600 }}
                          >
                            {dealer.name}
                          </h3>
                          {dealer.featured && (
                            <span
                              className="px-2 py-0.5 bg-sage-green/15 text-sage-green rounded"
                              style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px' }}
                            >
                              HOOFDVESTIGING
                            </span>
                          )}
                        </div>
                        <p
                          className="text-deep-charcoal/70 mb-1"
                          style={{ fontSize: '15px', lineHeight: '22px' }}
                        >
                          {dealer.location}
                        </p>
                        {dealer.address && (
                          <p
                            className="text-deep-charcoal/50"
                            style={{ fontSize: '13px', lineHeight: '20px' }}
                          >
                            {dealer.address}
                          </p>
                        )}
                      </div>
                      {formData.dealerChoice === dealer.value && (
                        <div className="w-6 h-6 rounded-full bg-sage-green flex items-center justify-center ml-3 flex-shrink-0">
                          <Check className="w-4 h-4 text-warm-white" strokeWidth={3} />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-sage-green/10 rounded-xl border border-sage-green/20">
                <p
                  className="text-deep-charcoal/80"
                  style={{ fontSize: '14px', lineHeight: '22px' }}
                >
                  💡 <strong>Tip:</strong> Bij de hoofdvestiging in Staphorst vind je de volledige collectie en kun je direct advies krijgen van onze specialisten.
                </p>
              </div>
            </div>
          )}

          {/* Step 8: Contact Info */}
          {currentStep === 8 && (
            <div>
              <h2
                className="text-deep-charcoal mb-3"
                style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 600, lineHeight: 'clamp(30px, 6vw, 40px)' }}
              >
                Bijna klaar! Je contactgegevens
              </h2>
              <p
                className="text-deep-charcoal/70 mb-8"
                style={{ fontSize: '16px', lineHeight: '26px' }}
              >
                Waar mogen we de offerte naartoe sturen?
              </p>
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-deep-charcoal mb-2"
                    style={{ fontSize: '15px', fontWeight: 500 }}
                  >
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    placeholder="Voor- en achternaam"
                    className="w-full px-4 py-3 rounded-xl border-2 border-warm-taupe/20 focus:border-sage-green focus:outline-none transition-colors"
                    style={{ fontSize: '16px' }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-deep-charcoal mb-2"
                    style={{ fontSize: '15px', fontWeight: 500 }}
                  >
                    E-mailadres *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    placeholder="[email protected]"
                    className="w-full px-4 py-3 rounded-xl border-2 border-warm-taupe/20 focus:border-sage-green focus:outline-none transition-colors"
                    style={{ fontSize: '16px' }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-deep-charcoal mb-2"
                    style={{ fontSize: '15px', fontWeight: 500 }}
                  >
                    Telefoonnummer *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    placeholder="06 12345678"
                    className="w-full px-4 py-3 rounded-xl border-2 border-warm-taupe/20 focus:border-sage-green focus:outline-none transition-colors"
                    style={{ fontSize: '16px' }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-deep-charcoal mb-2"
                    style={{ fontSize: '15px', fontWeight: 500 }}
                  >
                    Extra toelichting (optioneel)
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => updateFormData('message', e.target.value)}
                    placeholder="Vertel ons meer over je wensen..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-warm-taupe/20 focus:border-sage-green focus:outline-none transition-colors resize-none"
                    style={{ fontSize: '16px' }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 9: Collection Overview */}
          {currentStep === 9 && (
            <div>
              <h2
                className="text-deep-charcoal mb-3"
                style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 600, lineHeight: 'clamp(30px, 6vw, 40px)' }}
              >
                Ontdek onze collecties
              </h2>
              <p
                className="text-deep-charcoal/70 mb-8"
                style={{ fontSize: '16px', lineHeight: '26px' }}
              >
                Bekijk alvast wat we te bieden hebben terwijl we je offerte voorbereiden
              </p>

              <div className="grid grid-cols-1 gap-4 mb-6">
                {/* Valkeveen */}
                <a
                  href="/collecties/valkeveen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-xl border-2 border-warm-taupe/20 hover:border-sage-green hover:bg-sage-green/5 transition-all duration-200 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3
                        className="text-deep-charcoal mb-1"
                        style={{ fontSize: '20px', fontWeight: 600 }}
                      >
                        Valkeveen Collectie
                      </h3>
                      <p
                        className="text-sage-green"
                        style={{ fontSize: '15px', fontWeight: 500 }}
                      >
                        €2.500 - €4.000
                      </p>
                    </div>
                  </div>
                  <p
                    className="text-deep-charcoal/70 mb-4"
                    style={{ fontSize: '15px', lineHeight: '24px' }}
                  >
                    Volledig configureerbaar • Premium afwerking • 200+ stoffen • Verstelbaar hoofdbord
                  </p>
                  <div className="flex items-center gap-2 text-sage-green group-hover:translate-x-1 transition-transform">
                    <span style={{ fontSize: '14px', fontWeight: 500 }}>Bekijk collectie</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>

                {/* Lechtal */}
                <a
                  href="/collecties/lechtal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-xl border-2 border-warm-taupe/20 hover:border-sage-green hover:bg-sage-green/5 transition-all duration-200 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3
                        className="text-deep-charcoal mb-1"
                        style={{ fontSize: '20px', fontWeight: 600 }}
                      >
                        Lechtal Collectie
                      </h3>
                      <p
                        className="text-sage-green"
                        style={{ fontSize: '15px', fontWeight: 500 }}
                      >
                        €1.800 - €2.800
                      </p>
                    </div>
                  </div>
                  <p
                    className="text-deep-charcoal/70 mb-4"
                    style={{ fontSize: '15px', lineHeight: '24px' }}
                  >
                    Direct leverbaar • Standaard maten • Populaire kleuren • Snelle levering
                  </p>
                  <div className="flex items-center gap-2 text-sage-green group-hover:translate-x-1 transition-transform">
                    <span style={{ fontSize: '14px', fontWeight: 500 }}>Bekijk collectie</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>

                {/* Recreatie */}
                <a
                  href="/collecties/recreatie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-xl border-2 border-warm-taupe/20 hover:border-sage-green hover:bg-sage-green/5 transition-all duration-200 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3
                        className="text-deep-charcoal mb-1"
                        style={{ fontSize: '20px', fontWeight: 600 }}
                      >
                        Recreatie Collectie
                      </h3>
                      <p
                        className="text-sage-green"
                        style={{ fontSize: '15px', fontWeight: 500 }}
                      >
                        Op aanvraag
                      </p>
                    </div>
                  </div>
                  <p
                    className="text-deep-charcoal/70 mb-4"
                    style={{ fontSize: '15px', lineHeight: '24px' }}
                  >
                    Voor hotels & B&B • Duurzaam • Volumekorting mogelijk • Commercieel gebruik
                  </p>
                  <div className="flex items-center gap-2 text-sage-green group-hover:translate-x-1 transition-transform">
                    <span style={{ fontSize: '14px', fontWeight: 500 }}>Bekijk collectie</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              </div>

              <div className="p-4 bg-sage-green/10 rounded-xl border border-sage-green/20 text-center">
                <p
                  className="text-deep-charcoal/80"
                  style={{ fontSize: '14px', lineHeight: '22px' }}
                >
                  💡 <strong>Tip:</strong> Je kunt deze pagina's in een nieuw tabblad openen om te vergelijken
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`h-14 px-8 rounded-xl border-2 flex items-center justify-center gap-2 transition-all duration-200 ${
              currentStep === 1
                ? 'border-warm-taupe/20 text-deep-charcoal/30 cursor-not-allowed'
                : 'border-deep-charcoal text-deep-charcoal hover:bg-deep-charcoal hover:text-warm-white'
            }`}
            style={{ fontWeight: 500, fontSize: '16px' }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden md:inline">Vorige</span>
          </button>

          {currentStep < totalSteps ? (
            <button
              onClick={nextStep}
              disabled={!isStepValid()}
              className={`h-14 px-8 md:px-10 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 ${
                isStepValid()
                  ? 'bg-sage-green text-warm-white hover:bg-sage-green/90 hover:shadow-lg'
                  : 'bg-warm-taupe/30 text-deep-charcoal/40 cursor-not-allowed'
              }`}
              style={{ fontWeight: 500, fontSize: '16px' }}
            >
              Volgende stap
              <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isStepValid()}
              className={`h-14 px-8 md:px-10 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 ${
                isStepValid()
                  ? 'bg-sage-green text-warm-white hover:bg-sage-green/90 hover:shadow-lg'
                  : 'bg-warm-taupe/30 text-deep-charcoal/40 cursor-not-allowed'
              }`}
              style={{ fontWeight: 500, fontSize: '16px' }}
            >
              <Send className="w-5 h-5" />
              Verstuur aanvraag
            </button>
          )}
        </div>

        {/* Help Text */}
        <div className="mt-8 p-4 bg-sage-green/5 rounded-xl border border-sage-green/20 text-center">
          <p
            className="text-deep-charcoal/70"
            style={{ fontSize: '14px', lineHeight: '22px' }}
          >
            Vragen? Bel ons direct op{' '}
            <a href="tel:0522-236040" className="text-sage-green hover:underline font-medium">
              0522-236040
            </a>{' '}
            of mail naar{' '}
            <a href="mailto:[email protected]" className="text-sage-green hover:underline font-medium">
              [email protected]
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
