import { MapPin, Phone, Mail, Clock, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { useState } from 'react';

export function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    contactReason: '',
    businessType: '',
    preferredContact: '',
    urgency: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.contactReason !== '';
      case 2:
        return formData.businessType !== '';
      case 3:
        return formData.preferredContact !== '';
      case 4:
        return formData.urgency !== '';
      case 5:
        return formData.name !== '' && formData.email !== '';
      default:
        return false;
    }
  };

  const totalSteps = 5;
  const progressPercentage = (currentStep / totalSteps) * 100;

  if (isSubmitted) {
    return (
      <>
        <PageHeader
          eyebrow="BEDANKT"
          title="We hebben je bericht ontvangen"
          description="We nemen binnen 1 werkdag contact met je op."
        />
        <section className="w-full bg-warm-white py-12 md:py-20">
          <div className="max-w-[680px] mx-auto px-6 md:px-16 text-center">
            <div className="mb-8">
              <CheckCircle className="w-16 h-16 md:w-20 md:h-20 text-sage-green mx-auto" strokeWidth={1.5} />
            </div>
            <h2
              className="text-deep-charcoal mb-4"
              style={{ fontSize: 'clamp(28px, 6vw, 36px)', fontWeight: 600, lineHeight: 'clamp(34px, 7vw, 44px)' }}
            >
              Je bericht is verstuurd!
            </h2>
            <p
              className="text-deep-charcoal/70 mb-8"
              style={{ fontSize: '16px', lineHeight: '26px' }}
            >
              We hebben je contactaanvraag ontvangen en gaan er zo snel mogelijk mee aan de slag. Afhankelijk van je wensen nemen we binnen 1 werkdag contact met je op.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/"
                className="h-14 px-8 bg-sage-green text-warm-white rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:bg-sage-green/90"
                style={{ fontWeight: 500, fontSize: '16px' }}
              >
                Terug naar home
              </a>
              <a
                href="/collecties/valkeveen"
                className="h-14 px-8 border-2 border-deep-charcoal text-deep-charcoal rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:bg-deep-charcoal hover:text-warm-white"
                style={{ fontWeight: 500, fontSize: '16px' }}
              >
                Bekijk collecties
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        title="Hoe kunnen we je helpen?"
        description="Beantwoord een paar vragen zodat we je optimaal kunnen helpen."
      />

      <section className="w-full bg-warm-white py-8 md:py-12">
        <div className="max-w-[800px] mx-auto px-6 md:px-16">
          {/* Progress Bar */}
          <div className="mb-8 md:mb-12">
            <div className="flex justify-between items-center mb-3">
              <span
                className="text-deep-charcoal/60"
                style={{ fontSize: '14px', fontWeight: 500 }}
              >
                Stap {currentStep} van {totalSteps}
              </span>
              <span
                className="text-deep-charcoal/60"
                style={{ fontSize: '14px', fontWeight: 500 }}
              >
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <div className="w-full h-2 bg-warm-taupe/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-sage-green transition-all duration-300 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Question Steps */}
          <div className="min-h-[400px] md:min-h-[450px]">
            {/* Step 1: Contact Reason */}
            {currentStep === 1 && (
              <div>
                <h2
                  className="text-deep-charcoal mb-3"
                  style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 600, lineHeight: 'clamp(30px, 6vw, 40px)' }}
                >
                  Waarom neem je contact op?
                </h2>
                <p
                  className="text-deep-charcoal/70 mb-8"
                  style={{ fontSize: '16px', lineHeight: '26px' }}
                >
                  Kies de optie die het beste bij je vraag past.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {[
                    { value: 'showroom', label: 'Showroom bezoek plannen', desc: 'Plan een afspraak' },
                    { value: 'product', label: 'Vraag over product', desc: 'Advies over bedden' },
                    { value: 'b2b', label: 'Zakelijke samenwerking', desc: 'Hotels & dealers' },
                    { value: 'order', label: 'Vraag over bestelling', desc: 'Levering & montage' },
                    { value: 'dealer', label: 'Word dealer', desc: 'Verkoop onze bedden' },
                    { value: 'other', label: 'Anders', desc: 'Overige vragen' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateFormData('contactReason', option.value)}
                      className={`p-5 md:p-6 rounded-xl border-2 transition-all duration-200 text-left ${
                        formData.contactReason === option.value
                          ? 'border-sage-green bg-sage-green/5'
                          : 'border-warm-taupe/20 hover:border-sage-green/50 bg-warm-white'
                      }`}
                    >
                      <div
                        className="text-deep-charcoal mb-1"
                        style={{ fontSize: '16px', fontWeight: 600, lineHeight: '24px' }}
                      >
                        {option.label}
                      </div>
                      <div
                        className="text-deep-charcoal/60"
                        style={{ fontSize: '14px', lineHeight: '20px' }}
                      >
                        {option.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Business Type */}
            {currentStep === 2 && (
              <div>
                <h2
                  className="text-deep-charcoal mb-3"
                  style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 600, lineHeight: 'clamp(30px, 6vw, 40px)' }}
                >
                  Voor welk type klant is dit?
                </h2>
                <p
                  className="text-deep-charcoal/70 mb-8"
                  style={{ fontSize: '16px', lineHeight: '26px' }}
                >
                  We stemmen ons advies hierop af.
                </p>
                <div className="grid grid-cols-1 gap-3 md:gap-4">
                  {[
                    { value: 'private', label: 'Particulier', desc: 'Voor thuis gebruik', icon: '🏠' },
                    { value: 'hotel', label: 'Hotel', desc: 'Bedden voor hotel/B&B', icon: '🏨' },
                    { value: 'recreation', label: 'Recreatie', desc: 'Camping/vakantiepark', icon: '🏕️' },
                    { value: 'dealer', label: 'Dealer', desc: 'Ik verkoop bedden', icon: '🏪' },
                    { value: 'other-b2b', label: 'Anders zakelijk', desc: 'Zorginstelling, etc.', icon: '🏢' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateFormData('businessType', option.value)}
                      className={`p-5 md:p-6 rounded-xl border-2 transition-all duration-200 text-left flex items-start gap-4 ${
                        formData.businessType === option.value
                          ? 'border-sage-green bg-sage-green/5'
                          : 'border-warm-taupe/20 hover:border-sage-green/50 bg-warm-white'
                      }`}
                    >
                      <div className="text-3xl flex-shrink-0">{option.icon}</div>
                      <div className="flex-1">
                        <div
                          className="text-deep-charcoal mb-1"
                          style={{ fontSize: '16px', fontWeight: 600, lineHeight: '24px' }}
                        >
                          {option.label}
                        </div>
                        <div
                          className="text-deep-charcoal/60"
                          style={{ fontSize: '14px', lineHeight: '20px' }}
                        >
                          {option.desc}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Preferred Contact Method */}
            {currentStep === 3 && (
              <div>
                <h2
                  className="text-deep-charcoal mb-3"
                  style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 600, lineHeight: 'clamp(30px, 6vw, 40px)' }}
                >
                  Hoe wil je dat we contact opnemen?
                </h2>
                <p
                  className="text-deep-charcoal/70 mb-8"
                  style={{ fontSize: '16px', lineHeight: '26px' }}
                >
                  Kies je voorkeursmethode voor contact.
                </p>
                <div className="grid grid-cols-1 gap-3 md:gap-4">
                  {[
                    { value: 'email', label: 'E-mail', desc: 'We sturen een uitgebreide e-mail', icon: '✉️' },
                    { value: 'phone', label: 'Telefonisch', desc: 'We bellen je op', icon: '📞' },
                    { value: 'whatsapp', label: 'WhatsApp', desc: 'We sturen een WhatsApp bericht', icon: '💬' },
                    { value: 'no-preference', label: 'Geen voorkeur', desc: 'Wat het beste uitkomt', icon: '👍' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateFormData('preferredContact', option.value)}
                      className={`p-5 md:p-6 rounded-xl border-2 transition-all duration-200 text-left flex items-start gap-4 ${
                        formData.preferredContact === option.value
                          ? 'border-sage-green bg-sage-green/5'
                          : 'border-warm-taupe/20 hover:border-sage-green/50 bg-warm-white'
                      }`}
                    >
                      <div className="text-3xl flex-shrink-0">{option.icon}</div>
                      <div className="flex-1">
                        <div
                          className="text-deep-charcoal mb-1"
                          style={{ fontSize: '16px', fontWeight: 600, lineHeight: '24px' }}
                        >
                          {option.label}
                        </div>
                        <div
                          className="text-deep-charcoal/60"
                          style={{ fontSize: '14px', lineHeight: '20px' }}
                        >
                          {option.desc}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Urgency */}
            {currentStep === 4 && (
              <div>
                <h2
                  className="text-deep-charcoal mb-3"
                  style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 600, lineHeight: 'clamp(30px, 6vw, 40px)' }}
                >
                  Hoe snel wil je geholpen worden?
                </h2>
                <p
                  className="text-deep-charcoal/70 mb-8"
                  style={{ fontSize: '16px', lineHeight: '26px' }}
                >
                  Dit helpt ons je vraag goed te prioriteren.
                </p>
                <div className="grid grid-cols-1 gap-3 md:gap-4">
                  {[
                    { value: 'urgent', label: 'Zo snel mogelijk', desc: 'Binnen 1 werkdag', icon: '⚡' },
                    { value: 'few-days', label: 'Deze week', desc: 'Binnen een paar dagen', icon: '📅' },
                    { value: 'flexible', label: 'Geen haast', desc: 'Binnen een week is prima', icon: '🕐' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateFormData('urgency', option.value)}
                      className={`p-5 md:p-6 rounded-xl border-2 transition-all duration-200 text-left flex items-start gap-4 ${
                        formData.urgency === option.value
                          ? 'border-sage-green bg-sage-green/5'
                          : 'border-warm-taupe/20 hover:border-sage-green/50 bg-warm-white'
                      }`}
                    >
                      <div className="text-3xl flex-shrink-0">{option.icon}</div>
                      <div className="flex-1">
                        <div
                          className="text-deep-charcoal mb-1"
                          style={{ fontSize: '16px', fontWeight: 600, lineHeight: '24px' }}
                        >
                          {option.label}
                        </div>
                        <div
                          className="text-deep-charcoal/60"
                          style={{ fontSize: '14px', lineHeight: '20px' }}
                        >
                          {option.desc}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Contact Details */}
            {currentStep === 5 && (
              <div>
                <h2
                  className="text-deep-charcoal mb-3"
                  style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 600, lineHeight: 'clamp(30px, 6vw, 40px)' }}
                >
                  Je contactgegevens
                </h2>
                <p
                  className="text-deep-charcoal/70 mb-8"
                  style={{ fontSize: '16px', lineHeight: '26px' }}
                >
                  Zodat we contact met je kunnen opnemen.
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
                      Telefoonnummer {formData.preferredContact === 'phone' || formData.preferredContact === 'whatsapp' ? '*' : '(optioneel)'}
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
                      Je vraag of bericht (optioneel)
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => updateFormData('message', e.target.value)}
                      placeholder="Vertel ons meer over je vraag..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border-2 border-warm-taupe/20 focus:border-sage-green focus:outline-none transition-colors resize-none"
                      style={{ fontSize: '16px' }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8 md:mt-12">
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="h-14 px-8 border-2 border-deep-charcoal text-deep-charcoal rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:bg-deep-charcoal hover:text-warm-white"
                style={{ fontWeight: 500, fontSize: '16px' }}
              >
                <ArrowLeft className="w-5 h-5" />
                Vorige
              </button>
            )}
            {currentStep < totalSteps ? (
              <button
                onClick={handleNext}
                disabled={!isStepValid()}
                className={`flex-1 h-14 px-8 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 ${
                  isStepValid()
                    ? 'bg-sage-green text-warm-white hover:bg-sage-green/90'
                    : 'bg-warm-taupe/30 text-deep-charcoal/40 cursor-not-allowed'
                }`}
                style={{ fontWeight: 500, fontSize: '16px' }}
              >
                Volgende
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!isStepValid()}
                className={`flex-1 h-14 px-8 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 ${
                  isStepValid()
                    ? 'bg-sage-green text-warm-white hover:bg-sage-green/90'
                    : 'bg-warm-taupe/30 text-deep-charcoal/40 cursor-not-allowed'
                }`}
                style={{ fontWeight: 500, fontSize: '16px' }}
              >
                Verstuur aanvraag
                <CheckCircle className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="w-full bg-sage-green/5 py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="text-center mb-10 md:mb-12">
            <h2
              className="text-deep-charcoal mb-3"
              style={{ fontSize: 'clamp(28px, 6vw, 36px)', fontWeight: 700, lineHeight: 'clamp(34px, 7vw, 44px)' }}
            >
              Of neem direct contact op
            </h2>
            <p
              className="text-deep-charcoal/70"
              style={{ fontSize: '16px', lineHeight: '26px' }}
            >
              Bel of mail ons gerust voor directe vragen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Address */}
            <div className="bg-warm-white p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-sage-green/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-sage-green" strokeWidth={2} />
              </div>
              <h3
                className="text-deep-charcoal mb-2"
                style={{ fontSize: '16px', fontWeight: 600, lineHeight: '24px' }}
              >
                Bezoekadres
              </h3>
              <p
                className="text-deep-charcoal/70"
                style={{ fontSize: '14px', fontWeight: 400, lineHeight: '22px' }}
              >
                Industrieweg 12<br />
                8131 WP Staphorst
              </p>
            </div>

            {/* Phone */}
            <div className="bg-warm-white p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-sage-green/10 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-sage-green" strokeWidth={2} />
              </div>
              <h3
                className="text-deep-charcoal mb-2"
                style={{ fontSize: '16px', fontWeight: 600, lineHeight: '24px' }}
              >
                Telefoon
              </h3>
              <a
                href="tel:0522236040"
                className="text-deep-charcoal/70 hover:text-sage-green transition-colors"
                style={{ fontSize: '14px', fontWeight: 400, lineHeight: '22px' }}
              >
                0522-236040
              </a>
            </div>

            {/* Email */}
            <div className="bg-warm-white p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-sage-green/10 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-sage-green" strokeWidth={2} />
              </div>
              <h3
                className="text-deep-charcoal mb-2"
                style={{ fontSize: '16px', fontWeight: 600, lineHeight: '24px' }}
              >
                E-mail
              </h3>
              <a
                href="mailto:[email protected]"
                className="text-deep-charcoal/70 hover:text-sage-green transition-colors block"
                style={{ fontSize: '14px', fontWeight: 400, lineHeight: '22px' }}
              >
                [email protected]
              </a>
            </div>

            {/* Opening Hours */}
            <div className="bg-warm-white p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-sage-green/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-sage-green" strokeWidth={2} />
              </div>
              <h3
                className="text-deep-charcoal mb-2"
                style={{ fontSize: '16px', fontWeight: 600, lineHeight: '24px' }}
              >
                Openingstijden
              </h3>
              <div
                className="text-deep-charcoal/70"
                style={{ fontSize: '14px', fontWeight: 400, lineHeight: '22px' }}
              >
                <p>Ma-Vr: 9:00-17:30</p>
                <p>Za: 10:00-16:00</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-warm-white rounded-xl text-center">
            <p
              className="text-deep-charcoal/80"
              style={{ fontSize: '14px', fontWeight: 400, lineHeight: '22px' }}
            >
              💡 <strong>Tip:</strong> Voor een showroombezoek maken we graag een afspraak. Zo kunnen we voldoende tijd voor je vrijmaken.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
