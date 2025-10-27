import { useState } from 'react';
import { ArrowRight, Check, Star } from 'lucide-react';
import { Slider } from './ui/slider';

export function InteractiveConfigurator() {
  const [weight, setWeight] = useState([75]);
  const [age, setAge] = useState([40]);
  const [sleepPosition, setSleepPosition] = useState<'back' | 'side' | 'stomach'>('side');
  const [firmness, setFirmness] = useState('medium');
  const [size, setSize] = useState('160x200');
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = () => {
    setShowResults(true);
  };

  const firmnesses = ['Zacht', 'Medium-zacht', 'Medium', 'Medium-stevig', 'Stevig'];
  const sizes = [
    { label: 'Twee-persoons', size: '140 x 200 cm', value: '140x200' },
    { label: 'Queen size', size: '160 x 200 cm', value: '160x200' },
    { label: 'King size', size: '180 x 200 cm', value: '180x200' },
    { label: 'Super King', size: '200 x 200 cm', value: '200x200' },
  ];

  return (
    <section
      className="w-full py-16"
      style={{
        background: 'linear-gradient(180deg, rgba(139, 155, 142, 0.04) 0%, #FAF7F2 100%)',
      }}
    >
      <div className="max-w-[1000px] mx-auto px-16 md:px-16 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Form */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <p
                className="text-sage-green uppercase mb-3"
                style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '1.5px' }}
              >
                VIND JOUW PERFECTE BED
              </p>
              <h2
                className="text-deep-charcoal mb-3"
                style={{ fontSize: '28px', fontWeight: 700, lineHeight: '36px' }}
              >
                Persoonlijk advies in 30 seconden
              </h2>
              <p
                className="text-deep-charcoal/70"
                style={{ fontSize: '15px', lineHeight: '24px' }}
              >
                Beantwoord een paar vragen en ontdek welke boxspring perfect bij jou past.
              </p>
            </div>

            {/* Form Container */}
            <div
              className="bg-warm-white rounded-2xl p-8 shadow-[0px_4px_24px_rgba(44,44,44,0.06)]"
            >
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-sage-green transition-all duration-400"
                    style={{ width: showResults ? '100%' : '0%' }}
                  />
                </div>
              </div>

              {/* Weight Slider */}
              <div className="mb-6">
                <label
                  className="text-deep-charcoal mb-4 block"
                  style={{ fontSize: '16px', fontWeight: 500 }}
                >
                  Wat is je gewicht?
                </label>
                <Slider
                  value={weight}
                  onValueChange={setWeight}
                  min={50}
                  max={130}
                  step={1}
                  className="mb-2"
                />
                <div className="flex justify-between">
                  <span className="text-deep-charcoal/50" style={{ fontSize: '12px' }}>
                    50 kg
                  </span>
                  <span className="text-deep-charcoal/50" style={{ fontSize: '12px' }}>
                    130+ kg
                  </span>
                </div>
              </div>

              {/* Age Slider */}
              <div className="mb-6">
                <label
                  className="text-deep-charcoal mb-4 block"
                  style={{ fontSize: '16px', fontWeight: 500 }}
                >
                  Wat is je leeftijd?
                </label>
                <Slider
                  value={age}
                  onValueChange={setAge}
                  min={20}
                  max={75}
                  step={1}
                  className="mb-2"
                />
                <div className="flex justify-between">
                  <span className="text-deep-charcoal/50" style={{ fontSize: '12px' }}>
                    20
                  </span>
                  <span className="text-deep-charcoal/50" style={{ fontSize: '12px' }}>
                    75+
                  </span>
                </div>
              </div>

              {/* Sleep Position */}
              <div className="mb-6">
                <label
                  className="text-deep-charcoal mb-4 block"
                  style={{ fontSize: '16px', fontWeight: 500 }}
                >
                  Hoe slaap je meestal?
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'back', label: 'Op je rug' },
                    { value: 'side', label: 'Op je zij' },
                    { value: 'stomach', label: 'Op je buik' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSleepPosition(option.value as any)}
                      className={`h-24 rounded-xl border-2 transition-all duration-200 flex flex-col items-center justify-center gap-2 ${
                        sleepPosition === option.value
                          ? 'border-sage-green bg-sage-green/8'
                          : 'border-gray-100 bg-warm-white hover:border-gray-300'
                      }`}
                    >
                      <span
                        className={
                          sleepPosition === option.value
                            ? 'text-sage-green'
                            : 'text-deep-charcoal'
                        }
                        style={{ fontSize: '14px', fontWeight: 500 }}
                      >
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Firmness */}
              <div className="mb-6">
                <label
                  className="text-deep-charcoal mb-4 block"
                  style={{ fontSize: '16px', fontWeight: 500 }}
                >
                  Welke matrasvastheid verkies je?
                </label>
                <div className="bg-gray-50 p-1 rounded-xl flex gap-0">
                  {firmnesses.map((f) => (
                    <button
                      key={f}
                      onClick={() => setFirmness(f.toLowerCase())}
                      className={`flex-1 h-10 rounded-lg transition-all duration-200 ${
                        firmness === f.toLowerCase()
                          ? 'bg-warm-white shadow-sm text-deep-charcoal'
                          : 'bg-transparent text-deep-charcoal/60 hover:bg-deep-charcoal/5'
                      }`}
                      style={{ fontSize: '13px', fontWeight: 500 }}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Dropdown */}
              <div className="mb-8">
                <label
                  className="text-deep-charcoal mb-4 block"
                  style={{ fontSize: '16px', fontWeight: 500 }}
                >
                  Welke afmeting zoek je?
                </label>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full h-12 px-4 rounded-lg border-2 border-gray-100 bg-warm-white text-deep-charcoal focus:border-sage-green focus:outline-none focus:shadow-[0px_0px_0px_3px_rgba(139,155,142,0.1)] transition-all"
                  style={{ fontSize: '16px' }}
                >
                  {sizes.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label} - {s.size}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full h-14 bg-sage-green text-warm-white rounded-lg flex items-center justify-center gap-3 transition-all duration-300 hover:bg-[#7A9B7F] hover:scale-[1.02]"
                style={{ fontSize: '18px', fontWeight: 500 }}
              >
                Bekijk mijn advies
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* RIGHT: Visual Preview */}
          <div>
            {!showResults ? (
              <div
                className="w-full rounded-2xl p-12 shadow-[0px_4px_24px_rgba(44,44,44,0.06)]"
                style={{
                  background: 'linear-gradient(180deg, #FAF7F2 0%, rgba(139, 155, 142, 0.06) 100%)',
                }}
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-green/10 mb-4">
                    <span className="text-sage-green" style={{ fontSize: '13px', fontWeight: 500 }}>
                      Jouw match komt hier
                    </span>
                  </div>
                  <h3
                    className="text-deep-charcoal mb-2"
                    style={{ fontSize: '24px', fontWeight: 600 }}
                  >
                    Vind de perfecte boxspring
                  </h3>
                  <p
                    className="text-deep-charcoal/60"
                    style={{ fontSize: '15px', lineHeight: '24px' }}
                  >
                    Beantwoord de vragen en ontdek welk bed perfect bij jou past
                  </p>
                </div>

                {/* Placeholder Image */}
                <div className="rounded-xl overflow-hidden mb-6 bg-gray-50">
                  <img
                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800"
                    alt="Boxspring voorbeeld"
                    className="w-full aspect-[4/3] object-cover opacity-40"
                  />
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {[
                    'Persoonlijk advies op maat',
                    'Direct jouw perfecte match',
                    'Gebaseerd op 1000+ klanten',
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-sage-green/15 flex items-center justify-center">
                        <Check className="w-3 h-3 text-sage-green" />
                      </div>
                      <span
                        className="text-deep-charcoal/70"
                        style={{ fontSize: '14px', lineHeight: '20px' }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div
                className="w-full rounded-2xl p-12 shadow-[0px_4px_32px_rgba(44,44,44,0.08)] animate-in fade-in slide-in-from-bottom-4 duration-400"
                style={{
                  background: 'linear-gradient(180deg, #FAF7F2 0%, rgba(139, 155, 142, 0.08) 100%)',
                }}
              >
                {/* Success Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-green/15 mb-6">
                  <Check className="w-4 h-4 text-sage-green" />
                  <span className="text-sage-green" style={{ fontSize: '14px', fontWeight: 500 }}>
                    Match gevonden!
                  </span>
                </div>

                {/* Result */}
                <p className="text-deep-charcoal/70 mb-2" style={{ fontSize: '16px' }}>
                  Jouw perfecte match is de:
                </p>
                <h3
                  className="text-deep-charcoal mb-1"
                  style={{ fontSize: '32px', fontWeight: 700 }}
                >
                  Valkeveen
                </h3>
                <p className="text-sage-green mb-8" style={{ fontSize: '18px' }}>
                  Medium-Stevig | {size.replace('x', ' x ')} cm
                </p>

                {/* Product Image */}
                <div className="rounded-xl overflow-hidden shadow-md mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800"
                    alt="Valkeveen bed"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>

                {/* Match Score */}
                <div className="flex items-center gap-2 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-6 h-6 text-sage-green fill-sage-green"
                    />
                  ))}
                  <span className="text-sage-green ml-2" style={{ fontSize: '16px', fontWeight: 500 }}>
                    94% match
                  </span>
                </div>

                {/* Why Section */}
                <div className="bg-sage-green/6 border border-sage-green/20 rounded-xl p-5 mb-6">
                  <h4
                    className="text-deep-charcoal mb-3"
                    style={{ fontSize: '14px', fontWeight: 500 }}
                  >
                    Waarom deze match?
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Ideale ondersteuning voor jouw gewicht',
                      'Medium-stevig perfect voor zijslapers',
                      `Geschikt voor 2-persoons (${size.split('x')[0]}cm breed)`,
                    ].map((reason, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3 h-3 text-sage-green flex-shrink-0 mt-1" />
                        <span
                          className="text-deep-charcoal/80"
                          style={{ fontSize: '14px', lineHeight: '22px' }}
                        >
                          {reason}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <button className="w-full h-12 bg-sage-green text-warm-white rounded-lg flex items-center justify-center gap-2 hover:bg-[#7A9B7F] transition-all">
                    <span style={{ fontSize: '15px', fontWeight: 500 }}>Bekijk dit bed</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="w-full text-deep-charcoal hover:text-sage-green transition-colors">
                    <span style={{ fontSize: '14px', fontWeight: 500 }}>Zie meer opties</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
