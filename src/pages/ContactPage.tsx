import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'algemeen',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        title="Neem contact op"
        description="Vragen over onze bedden? Wil je een showroom bezoek plannen? Of ben je geïnteresseerd in een zakelijke samenwerking? We helpen je graag verder."
      />

      <section className="w-full bg-warm-white py-16">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2
                className="text-deep-charcoal mb-8"
                style={{ fontSize: '36px', fontWeight: 700, lineHeight: '44px' }}
              >
                Contactgegevens
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div>
                  <div className="flex items-start gap-4 mb-2">
                    <div className="w-12 h-12 rounded-full bg-sage-green/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-sage-green" strokeWidth={2} />
                    </div>
                    <div>
                      <h3
                        className="text-deep-charcoal mb-2"
                        style={{ fontSize: '16px', fontWeight: 500, lineHeight: '24px' }}
                      >
                        Bezoekadres
                      </h3>
                      <p
                        className="text-deep-charcoal/70"
                        style={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}
                      >
                        Industrieweg 12<br />
                        8131 WP Staphorst<br />
                        Nederland
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-start gap-4 mb-2">
                    <div className="w-12 h-12 rounded-full bg-sage-green/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-sage-green" strokeWidth={2} />
                    </div>
                    <div>
                      <h3
                        className="text-deep-charcoal mb-2"
                        style={{ fontSize: '16px', fontWeight: 500, lineHeight: '24px' }}
                      >
                        Telefoon
                      </h3>
                      <a
                        href="tel:0522236040"
                        className="text-deep-charcoal/70 hover:text-warm-taupe transition-colors"
                        style={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}
                      >
                        0522-236040
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-start gap-4 mb-2">
                    <div className="w-12 h-12 rounded-full bg-sage-green/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-sage-green" strokeWidth={2} />
                    </div>
                    <div>
                      <h3
                        className="text-deep-charcoal mb-2"
                        style={{ fontSize: '16px', fontWeight: 500, lineHeight: '24px' }}
                      >
                        E-mail
                      </h3>
                      <a
                        href="mailto:[email protected]"
                        className="text-deep-charcoal/70 hover:text-warm-taupe transition-colors"
                        style={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}
                      >
                        [email protected]
                      </a>
                      <br />
                      <a
                        href="mailto:[email protected]"
                        className="text-deep-charcoal/70 hover:text-warm-taupe transition-colors"
                        style={{ fontSize: '14px', fontWeight: 400, lineHeight: '22px' }}
                      >
                        B2B: [email protected]
                      </a>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div>
                  <div className="flex items-start gap-4 mb-2">
                    <div className="w-12 h-12 rounded-full bg-sage-green/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-sage-green" strokeWidth={2} />
                    </div>
                    <div>
                      <h3
                        className="text-deep-charcoal mb-2"
                        style={{ fontSize: '16px', fontWeight: 500, lineHeight: '24px' }}
                      >
                        Openingstijden showroom
                      </h3>
                      <div
                        className="text-deep-charcoal/70"
                        style={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}
                      >
                        <p>Maandag - Vrijdag: 9:00 - 17:30</p>
                        <p>Zaterdag: 10:00 - 16:00</p>
                        <p>Zondag: Gesloten</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="mt-8 p-6 bg-sage-green/10 rounded-lg">
                <p
                  className="text-deep-charcoal/80"
                  style={{ fontSize: '14px', fontWeight: 400, lineHeight: '22px' }}
                >
                  <strong>Let op:</strong> Voor een showroombezoek maken we graag een afspraak. Zo kunnen we voldoende tijd voor je vrijmaken en zorgen dat alle collecties beschikbaar zijn.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2
                className="text-deep-charcoal mb-8"
                style={{ fontSize: '36px', fontWeight: 700, lineHeight: '44px' }}
              >
                Stuur een bericht
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-deep-charcoal mb-2"
                    style={{ fontSize: '14px', fontWeight: 500 }}
                  >
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-12 px-4 border border-deep-charcoal/20 rounded-lg bg-warm-white focus:border-deep-charcoal focus:outline-none focus:ring-2 focus:ring-deep-charcoal/10 transition-all"
                    style={{ fontSize: '16px' }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-deep-charcoal mb-2"
                    style={{ fontSize: '14px', fontWeight: 500 }}
                  >
                    E-mailadres *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-12 px-4 border border-deep-charcoal/20 rounded-lg bg-warm-white focus:border-deep-charcoal focus:outline-none focus:ring-2 focus:ring-deep-charcoal/10 transition-all"
                    style={{ fontSize: '16px' }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-deep-charcoal mb-2"
                    style={{ fontSize: '14px', fontWeight: 500 }}
                  >
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-12 px-4 border border-deep-charcoal/20 rounded-lg bg-warm-white focus:border-deep-charcoal focus:outline-none focus:ring-2 focus:ring-deep-charcoal/10 transition-all"
                    style={{ fontSize: '16px' }}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-deep-charcoal mb-2"
                    style={{ fontSize: '14px', fontWeight: 500 }}
                  >
                    Onderwerp *
                  </label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full h-12 px-4 border border-deep-charcoal/20 rounded-lg bg-warm-white focus:border-deep-charcoal focus:outline-none focus:ring-2 focus:ring-deep-charcoal/10 transition-all"
                    style={{ fontSize: '16px' }}
                  >
                    <option value="algemeen">Algemene vraag</option>
                    <option value="showroom">Showroom bezoek plannen</option>
                    <option value="product">Vraag over product</option>
                    <option value="b2b">B2B / Zakelijke samenwerking</option>
                    <option value="dealer">Word dealer</option>
                    <option value="klacht">Klacht</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-deep-charcoal mb-2"
                    style={{ fontSize: '14px', fontWeight: 500 }}
                  >
                    Bericht *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-deep-charcoal/20 rounded-lg bg-warm-white focus:border-deep-charcoal focus:outline-none focus:ring-2 focus:ring-deep-charcoal/10 transition-all resize-y"
                    style={{ fontSize: '16px', lineHeight: '26px' }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full h-12 bg-warm-taupe text-deep-charcoal rounded-lg transition-all duration-200 hover:bg-[#B8A890]"
                  style={{ fontWeight: 500, fontSize: '16px', letterSpacing: '0.3px' }}
                >
                  Verstuur bericht
                </button>

                <p
                  className="text-deep-charcoal/60"
                  style={{ fontSize: '12px', fontWeight: 400, lineHeight: '18px' }}
                >
                  We streven ernaar om binnen 1 werkdag te reageren op je bericht.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="w-full bg-sage-green/5 py-24">
        <div className="max-w-[1200px] mx-auto px-16 md:px-16 sm:px-6">
          <div className="text-center mb-8">
            <h2
              className="text-deep-charcoal mb-4"
              style={{ fontSize: '36px', fontWeight: 700, lineHeight: '44px' }}
            >
              Vind ons
            </h2>
            <p
              className="text-deep-charcoal/70"
              style={{ fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}
            >
              Industrieweg 12, 8131 WP Staphorst
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-96 bg-[#E8E8E8] rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-sage-green mx-auto mb-4" strokeWidth={1.5} />
              <p
                className="text-deep-charcoal/60"
                style={{ fontSize: '16px', fontWeight: 400 }}
              >
                Kaart wordt hier geladen
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
