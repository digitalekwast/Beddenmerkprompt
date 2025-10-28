import { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Mail } from 'lucide-react';

interface Dealer {
  name: string;
  city: string;
  address: string;
  email: string;
}

interface DealerContactModalProps {
  dealer: Dealer;
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  productInterest: string;
  budget: string;
  timePreference: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function DealerContactModal({ dealer, isOpen, onClose }: DealerContactModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    productInterest: '',
    budget: '',
    timePreference: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const totalSteps = 4;

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted for dealer:', dealer.name, formData);
    setIsSubmitted(true);
  };

  const resetModal = () => {
    setCurrentStep(1);
    setIsSubmitted(false);
    setFormData({
      productInterest: '',
      budget: '',
      timePreference: '',
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    onClose();
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.productInterest !== '';
      case 2:
        return formData.budget !== '' && formData.timePreference !== '';
      case 3:
        return formData.name !== '' && formData.email !== '' && formData.phone !== '';
      case 4:
        return true;
      default:
        return false;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-deep-charcoal/60 backdrop-blur-sm"
        onClick={resetModal}
      />

      {/* Modal */}
      <div className="relative w-full max-w-[600px] max-h-[90vh] overflow-y-auto bg-warm-white rounded-2xl shadow-2xl mx-4">
        {/* Close Button */}
        <button
          onClick={resetModal}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-deep-charcoal/10 hover:bg-deep-charcoal/20 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-deep-charcoal" strokeWidth={2} />
        </button>

        {isSubmitted ? (
          // Success State
          <div className="p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-sage-green rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-warm-white" strokeWidth={3} />
            </div>
            <h2
              className="text-deep-charcoal mb-4"
              style={{ fontSize: '28px', fontWeight: 700, lineHeight: '36px' }}
            >
              Aanvraag verstuurd!
            </h2>
            <p
              className="text-deep-charcoal/70 mb-6"
              style={{ fontSize: '16px', lineHeight: '26px' }}
            >
              {dealer.name} neemt binnen 1 werkdag contact met je op om een afspraak in te plannen.
            </p>
            <div className="p-4 bg-sage-green/10 rounded-xl border border-sage-green/20 mb-6">
              <p
                className="text-deep-charcoal/80"
                style={{ fontSize: '14px', lineHeight: '22px' }}
              >
                Je ontvangt een bevestigingsmail op{' '}
                <span className="font-medium">{formData.email}</span>
              </p>
            </div>
            <button
              onClick={resetModal}
              className="h-12 px-8 bg-sage-green text-warm-white rounded-xl transition-all duration-200 hover:bg-sage-green/90"
              style={{ fontWeight: 500, fontSize: '15px' }}
            >
              Sluiten
            </button>
          </div>
        ) : (
          // Form Steps
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="mb-6">
              <p
                className="text-sage-green uppercase mb-2"
                style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px' }}
              >
                CONTACT OPNEMEN
              </p>
              <h2
                className="text-deep-charcoal mb-2"
                style={{ fontSize: '24px', fontWeight: 700, lineHeight: '32px' }}
              >
                {dealer.name}
              </h2>
              <p
                className="text-deep-charcoal/60"
                style={{ fontSize: '14px', lineHeight: '20px' }}
              >
                {dealer.address}, {dealer.city}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span
                  className="text-deep-charcoal/60"
                  style={{ fontSize: '13px', fontWeight: 500 }}
                >
                  Stap {currentStep} van {totalSteps}
                </span>
                <span
                  className="text-sage-green"
                  style={{ fontSize: '13px', fontWeight: 500 }}
                >
                  {Math.round((currentStep / totalSteps) * 100)}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-warm-taupe/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-sage-green transition-all duration-500"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {/* Step Content */}
            <div className="mb-6">
              {/* Step 1: Product Interest */}
              {currentStep === 1 && (
                <div>
                  <h3
                    className="text-deep-charcoal mb-2"
                    style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px' }}
                  >
                    Waar ben je in geïnteresseerd?
                  </h3>
                  <p
                    className="text-deep-charcoal/70 mb-6"
                    style={{ fontSize: '14px', lineHeight: '22px' }}
                  >
                    Selecteer wat je het meest aanspreekt
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { value: 'boxspring', label: 'Boxspring set', desc: 'Complete set met matras' },
                      { value: 'hotelbed', label: 'Hotelbed set', desc: 'Voor hospitality' },
                      { value: 'matras', label: 'Losse matras', desc: 'Alleen matras' },
                      { value: 'meerdere', label: 'Meerdere producten', desc: 'Combinatie' },
                      { value: 'advies', label: 'Advies nodig', desc: 'Ik wil eerst advies' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => updateFormData('productInterest', option.value)}
                        className={`p-4 rounded-xl border-2 text-left transition-all duration-200 hover:border-sage-green/50 ${
                          formData.productInterest === option.value
                            ? 'border-sage-green bg-sage-green/5'
                            : 'border-warm-taupe/20'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4
                              className="text-deep-charcoal mb-0.5"
                              style={{ fontSize: '16px', fontWeight: 600 }}
                            >
                              {option.label}
                            </h4>
                            <p
                              className="text-deep-charcoal/60"
                              style={{ fontSize: '13px', lineHeight: '20px' }}
                            >
                              {option.desc}
                            </p>
                          </div>
                          {formData.productInterest === option.value && (
                            <div className="w-5 h-5 rounded-full bg-sage-green flex items-center justify-center ml-2 flex-shrink-0">
                              <Check className="w-3 h-3 text-warm-white" strokeWidth={3} />
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Budget & Time Preference */}
              {currentStep === 2 && (
                <div>
                  <h3
                    className="text-deep-charcoal mb-6"
                    style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px' }}
                  >
                    Budget en timing
                  </h3>

                  <div className="mb-6">
                    <label
                      className="text-deep-charcoal mb-3 block"
                      style={{ fontSize: '15px', fontWeight: 600 }}
                    >
                      Budget indicatie
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { value: 'tot-2000', label: 'Tot €2.000' },
                        { value: '2000-3000', label: '€2.000 - €3.000' },
                        { value: '3000-4000', label: '€3.000 - €4.000' },
                        { value: 'boven-4000', label: 'Boven €4.000' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => updateFormData('budget', option.value)}
                          className={`p-3 rounded-lg border-2 text-center transition-all duration-200 ${
                            formData.budget === option.value
                              ? 'border-sage-green bg-sage-green/5'
                              : 'border-warm-taupe/20 hover:border-sage-green/30'
                          }`}
                        >
                          <span
                            className="text-deep-charcoal"
                            style={{ fontSize: '14px', fontWeight: 500 }}
                          >
                            {option.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      className="text-deep-charcoal mb-3 block"
                      style={{ fontSize: '15px', fontWeight: 600 }}
                    >
                      Wanneer wil je langskomen?
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        { value: 'deze-week', label: 'Deze week' },
                        { value: 'volgende-week', label: 'Volgende week' },
                        { value: 'binnen-2-weken', label: 'Binnen 2 weken' },
                        { value: 'nog-onbekend', label: 'Nog onbekend' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => updateFormData('timePreference', option.value)}
                          className={`p-3 rounded-lg border-2 text-center transition-all duration-200 ${
                            formData.timePreference === option.value
                              ? 'border-sage-green bg-sage-green/5'
                              : 'border-warm-taupe/20 hover:border-sage-green/30'
                          }`}
                        >
                          <span
                            className="text-deep-charcoal"
                            style={{ fontSize: '14px', fontWeight: 500 }}
                          >
                            {option.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Info */}
              {currentStep === 3 && (
                <div>
                  <h3
                    className="text-deep-charcoal mb-2"
                    style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px' }}
                  >
                    Je contactgegevens
                  </h3>
                  <p
                    className="text-deep-charcoal/70 mb-6"
                    style={{ fontSize: '14px', lineHeight: '22px' }}
                  >
                    Zo kan {dealer.name} contact met je opnemen
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label
                        className="text-deep-charcoal mb-2 block"
                        style={{ fontSize: '14px', fontWeight: 500 }}
                      >
                        Naam *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateFormData('name', e.target.value)}
                        placeholder="Je volledige naam"
                        className="w-full h-12 px-4 rounded-lg border-2 border-warm-taupe/20 bg-warm-white focus:outline-none focus:border-sage-green transition-colors"
                        style={{ fontSize: '15px' }}
                      />
                    </div>
                    <div>
                      <label
                        className="text-deep-charcoal mb-2 block"
                        style={{ fontSize: '14px', fontWeight: 500 }}
                      >
                        E-mailadres *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        placeholder="jouw@email.nl"
                        className="w-full h-12 px-4 rounded-lg border-2 border-warm-taupe/20 bg-warm-white focus:outline-none focus:border-sage-green transition-colors"
                        style={{ fontSize: '15px' }}
                      />
                    </div>
                    <div>
                      <label
                        className="text-deep-charcoal mb-2 block"
                        style={{ fontSize: '14px', fontWeight: 500 }}
                      >
                        Telefoonnummer *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                        placeholder="06 12345678"
                        className="w-full h-12 px-4 rounded-lg border-2 border-warm-taupe/20 bg-warm-white focus:outline-none focus:border-sage-green transition-colors"
                        style={{ fontSize: '15px' }}
                      />
                    </div>
                    <div>
                      <label
                        className="text-deep-charcoal mb-2 block"
                        style={{ fontSize: '14px', fontWeight: 500 }}
                      >
                        Bericht (optioneel)
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => updateFormData('message', e.target.value)}
                        placeholder="Heb je specifieke vragen of wensen?"
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border-2 border-warm-taupe/20 bg-warm-white focus:outline-none focus:border-sage-green transition-colors resize-none"
                        style={{ fontSize: '15px', lineHeight: '24px' }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Review */}
              {currentStep === 4 && (
                <div>
                  <h3
                    className="text-deep-charcoal mb-2"
                    style={{ fontSize: '20px', fontWeight: 600, lineHeight: '28px' }}
                  >
                    Controleer je gegevens
                  </h3>
                  <p
                    className="text-deep-charcoal/70 mb-6"
                    style={{ fontSize: '14px', lineHeight: '22px' }}
                  >
                    Klopt alles? Dan kun je je aanvraag versturen.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-warm-white rounded-xl border border-warm-taupe/20">
                      <p
                        className="text-deep-charcoal/60 mb-1"
                        style={{ fontSize: '12px', fontWeight: 500 }}
                      >
                        INTERESSE
                      </p>
                      <p
                        className="text-deep-charcoal"
                        style={{ fontSize: '15px', fontWeight: 500 }}
                      >
                        {formData.productInterest === 'boxspring' && 'Boxspring set'}
                        {formData.productInterest === 'hotelbed' && 'Hotelbed set'}
                        {formData.productInterest === 'matras' && 'Losse matras'}
                        {formData.productInterest === 'meerdere' && 'Meerdere producten'}
                        {formData.productInterest === 'advies' && 'Advies nodig'}
                      </p>
                    </div>
                    <div className="p-4 bg-warm-white rounded-xl border border-warm-taupe/20">
                      <p
                        className="text-deep-charcoal/60 mb-1"
                        style={{ fontSize: '12px', fontWeight: 500 }}
                      >
                        BUDGET & TIMING
                      </p>
                      <p
                        className="text-deep-charcoal"
                        style={{ fontSize: '15px', fontWeight: 500 }}
                      >
                        Budget:{' '}
                        {formData.budget === 'tot-2000' && 'Tot €2.000'}
                        {formData.budget === '2000-3000' && '€2.000 - €3.000'}
                        {formData.budget === '3000-4000' && '€3.000 - €4.000'}
                        {formData.budget === 'boven-4000' && 'Boven €4.000'}
                      </p>
                      <p
                        className="text-deep-charcoal mt-1"
                        style={{ fontSize: '15px', fontWeight: 500 }}
                      >
                        Bezoek:{' '}
                        {formData.timePreference === 'deze-week' && 'Deze week'}
                        {formData.timePreference === 'volgende-week' && 'Volgende week'}
                        {formData.timePreference === 'binnen-2-weken' && 'Binnen 2 weken'}
                        {formData.timePreference === 'nog-onbekend' && 'Nog onbekend'}
                      </p>
                    </div>
                    <div className="p-4 bg-warm-white rounded-xl border border-warm-taupe/20">
                      <p
                        className="text-deep-charcoal/60 mb-1"
                        style={{ fontSize: '12px', fontWeight: 500 }}
                      >
                        CONTACT
                      </p>
                      <p
                        className="text-deep-charcoal"
                        style={{ fontSize: '15px', fontWeight: 500 }}
                      >
                        {formData.name}
                      </p>
                      <p
                        className="text-deep-charcoal/70"
                        style={{ fontSize: '14px', lineHeight: '20px' }}
                      >
                        {formData.email}
                        <br />
                        {formData.phone}
                      </p>
                      {formData.message && (
                        <p
                          className="text-deep-charcoal/70 mt-2 pt-2 border-t border-warm-taupe/10"
                          style={{ fontSize: '14px', lineHeight: '20px' }}
                        >
                          {formData.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              {currentStep > 1 && (
                <button
                  onClick={prevStep}
                  className="flex-1 h-12 px-6 bg-warm-white border-2 border-warm-taupe/30 text-deep-charcoal rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:border-warm-taupe/50"
                  style={{ fontWeight: 500, fontSize: '15px' }}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Terug
                </button>
              )}

              {currentStep < totalSteps ? (
                <button
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className={`flex-1 h-12 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 ${
                    isStepValid()
                      ? 'bg-sage-green text-warm-white hover:bg-sage-green/90'
                      : 'bg-warm-taupe/20 text-deep-charcoal/40 cursor-not-allowed'
                  }`}
                  style={{ fontWeight: 500, fontSize: '15px' }}
                >
                  Volgende
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex-1 h-12 px-6 bg-sage-green text-warm-white rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:bg-sage-green/90"
                  style={{ fontWeight: 500, fontSize: '15px' }}
                >
                  Verstuur aanvraag
                  <Mail className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
