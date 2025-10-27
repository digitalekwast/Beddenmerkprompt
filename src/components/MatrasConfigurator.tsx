import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bed, Check, Star, ArrowRight, Loader2, Moon, User } from 'lucide-react';
import { Slider } from './ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Link } from 'react-router-dom';

type SleepPosition = 'back' | 'side' | 'stomach' | null;
type Hardness = 'soft' | 'medium-soft' | 'medium' | 'medium-firm' | 'firm' | null;
type Size = '80x200' | '90x200' | '140x200' | '160x200' | '180x200' | null;

interface MatchResult {
  name: string;
  type: string;
  imageUrl: string;
  matchScore: number;
  reasons: string[];
  link: string;
}

export function MatrasConfigurator() {
  const [weight, setWeight] = useState([80]);
  const [age, setAge] = useState([45]);
  const [sleepPosition, setSleepPosition] = useState<SleepPosition>(null);
  const [hardness, setHardness] = useState<Hardness>(null);
  const [size, setSize] = useState<Size>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<MatchResult | null>(null);

  const sleepPositions = [
    { value: 'back' as const, label: 'Op je rug', icon: 'user' },
    { value: 'side' as const, label: 'Op je zij', icon: 'bed' },
    { value: 'stomach' as const, label: 'Op je buik', icon: 'moon' },
  ];

  const hardnessOptions = [
    { value: 'soft' as const, label: 'Zacht' },
    { value: 'medium-soft' as const, label: 'Medium-zacht' },
    { value: 'medium' as const, label: 'Medium' },
    { value: 'medium-firm' as const, label: 'Medium-stevig' },
    { value: 'firm' as const, label: 'Stevig' },
  ];

  const sizeOptions = [
    { value: '80x200' as const, label: '80 x 200 cm (Eenpersoons)' },
    { value: '90x200' as const, label: '90 x 200 cm (Eenpersoons)' },
    { value: '140x200' as const, label: '140 x 200 cm (Twee-persoons)' },
    { value: '160x200' as const, label: '160 x 200 cm (Queen size)' },
    { value: '180x200' as const, label: '180 x 200 cm (King size)' },
  ];

  const calculateMatch = (): MatchResult => {
    const weightValue = weight[0];
    const ageValue = age[0];

    let name = 'Premium Pocketvering Matras';
    let type = 'Pocketvering';
    let link = '/product/matras-pocketvering';

    // Determine matras type based on hardness and preferences
    if (hardness === 'soft' || hardness === 'medium-soft') {
      if (weightValue < 70) {
        name = 'Comfort Schuim Matras';
        type = 'Koudschuim';
        link = '/product/matras-koudschuim';
      } else {
        name = 'Visco Comfort Matras';
        type = 'Traagschuim';
        link = '/product/matras-traagschuim';
      }
    } else if (hardness === 'firm' || hardness === 'medium-firm') {
      if (weightValue > 90) {
        name = 'Extra Stevig Latex Matras';
        type = 'Latex';
        link = '/product/matras-latex';
      } else {
        name = 'Premium Pocketvering Matras';
        type = 'Pocketvering';
        link = '/product/matras-pocketvering';
      }
    } else {
      name = 'Hybrid Comfort Matras';
      type = 'Hybride (Vering + Schuim)';
      link = '/product/matras-hybride';
    }

    // Generate reasons based on inputs
    const reasons: string[] = [];

    // Weight-based reason
    if (weightValue > 90) {
      reasons.push('Extra stevige ondersteuning voor jouw gewicht');
    } else if (weightValue < 70) {
      reasons.push('Zachte ondersteuning, ideaal voor lichte slapers');
    } else {
      reasons.push('Perfecte balans tussen comfort en ondersteuning');
    }

    // Hardness and position reason
    const hardnessLabel = hardnessOptions.find(h => h.value === hardness)?.label || 'medium';
    const positionLabel = sleepPositions.find(p => p.value === sleepPosition)?.label.toLowerCase() || 'alle posities';
    reasons.push(`${hardnessLabel}, optimaal voor ${positionLabel}`);

    // Material benefit
    if (type === 'Pocketvering') {
      reasons.push('Uitstekende ventilatie en drukverdeling');
    } else if (type === 'Koudschuim') {
      reasons.push('Hypoallergeen en onderhoudsarm');
    } else if (type === 'Traagschuim') {
      reasons.push('Perfecte lichaamsaanpassing');
    } else if (type === 'Latex') {
      reasons.push('Natuurlijk materiaal met duurzame prestaties');
    } else {
      reasons.push('Beste van beide werelden: vering én schuim');
    }

    // Age-based reason
    if (ageValue > 55) {
      reasons.push('Extra comfort voor optimale drukontlasting');
    }

    // Calculate match score (88-97%)
    const matchScore = Math.floor(88 + Math.random() * 9);

    return {
      name,
      type,
      imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800',
      matchScore,
      reasons,
      link,
    };
  };

  const handleSubmit = async () => {
    if (!sleepPosition || !hardness || !size) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const matchResult = calculateMatch();
    setResult(matchResult);
    setIsLoading(false);
  };

  const isFormValid = sleepPosition && hardness && size;

  return (
    <section className="w-full py-14" style={{ background: 'linear-gradient(180deg, rgba(139, 155, 142, 0.03) 0%, #FAF7F2 100%)' }}>
      <div className="max-w-[900px] mx-auto px-16 md:px-16 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2
            className="text-deep-charcoal mb-1"
            style={{ fontSize: '28px', fontWeight: 700, lineHeight: '36px', letterSpacing: '-0.01em' }}
          >
            Vind jouw perfecte matras
          </h2>
          <p
            className="text-deep-charcoal/60"
            style={{ fontSize: '15px', fontWeight: 400, lineHeight: '22px' }}
          >
            In 30 seconden naar persoonlijk advies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Interactive Tool */}
          <div className="flex flex-col h-full">

            {/* Tool Container */}
            <div
              className="bg-warm-white rounded-xl p-8 flex-1"
              style={{ boxShadow: '0px 2px 16px rgba(44, 44, 44, 0.04)' }}
            >
              {/* Weight Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label
                    className="text-deep-charcoal/80"
                    style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.01em' }}
                  >
                    Gewicht (kg)
                  </label>
                  <span
                    className="text-sage-green"
                    style={{ fontSize: '14px', fontWeight: 600 }}
                  >
                    {weight[0]} kg
                  </span>
                </div>
                <Slider
                  value={weight}
                  onValueChange={setWeight}
                  min={50}
                  max={130}
                  step={1}
                  className="[&_[data-slot=slider-thumb]]:bg-sage-green [&_[data-slot=slider-thumb]]:border-sage-green [&_[data-slot=slider-thumb]]:w-5 [&_[data-slot=slider-thumb]]:h-5 [&_[data-slot=slider-range]]:bg-sage-green [&_[data-slot=slider-track]]:h-1"
                />
              </div>

              {/* Age Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label
                    className="text-deep-charcoal/80"
                    style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.01em' }}
                  >
                    Leeftijd (jaar)
                  </label>
                  <span
                    className="text-sage-green"
                    style={{ fontSize: '14px', fontWeight: 600 }}
                  >
                    {age[0]} jaar
                  </span>
                </div>
                <Slider
                  value={age}
                  onValueChange={setAge}
                  min={20}
                  max={75}
                  step={1}
                  className="[&_[data-slot=slider-thumb]]:bg-sage-green [&_[data-slot=slider-thumb]]:border-sage-green [&_[data-slot=slider-thumb]]:w-5 [&_[data-slot=slider-thumb]]:h-5 [&_[data-slot=slider-range]]:bg-sage-green [&_[data-slot=slider-track]]:h-1"
                />
              </div>

              {/* Sleep Position */}
              <div className="mb-6">
                <label
                  className="text-deep-charcoal/80 block mb-2"
                  style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.01em' }}
                >
                  Slaaphouding
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {sleepPositions.map((position) => {
                    const Icon = position.icon === 'user' ? User : position.icon === 'bed' ? Bed : Moon;
                    return (
                      <button
                        key={position.value}
                        onClick={() => setSleepPosition(position.value)}
                        className={`h-20 rounded-lg border transition-all flex flex-col items-center justify-center gap-1.5 ${
                          sleepPosition === position.value
                            ? 'border-sage-green bg-sage-green/6'
                            : 'border-[#E5E5E5] hover:border-sage-green/40 hover:bg-sage-green/3'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${sleepPosition === position.value ? 'text-sage-green' : 'text-deep-charcoal/40'}`} strokeWidth={1.5} />
                        <span
                          className={`text-center ${sleepPosition === position.value ? 'text-deep-charcoal' : 'text-deep-charcoal/60'}`}
                          style={{ fontSize: '11px', fontWeight: 500 }}
                        >
                          {position.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Hardness Control */}
              <div className="mb-6">
                <label
                  className="text-deep-charcoal/80 block mb-2"
                  style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.01em' }}
                >
                  Matras hardheid
                </label>
                <div className="flex gap-1.5 bg-[#F5F5F5]/60 p-1 rounded-lg">
                  {hardnessOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setHardness(option.value)}
                      className={`flex-1 h-10 rounded-md transition-all ${
                        hardness === option.value
                          ? 'bg-warm-white shadow-sm'
                          : 'hover:bg-warm-white/60'
                      }`}
                    >
                      <span
                        className={`${
                          hardness === option.value ? 'text-deep-charcoal' : 'text-deep-charcoal/55'
                        }`}
                        style={{ fontSize: '11px', fontWeight: 500 }}
                      >
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Dropdown */}
              <div className="mb-6">
                <label
                  className="text-deep-charcoal/80 block mb-2"
                  style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.01em' }}
                >
                  Matras maat
                </label>
                <Select value={size || undefined} onValueChange={(value) => setSize(value as Size)}>
                  <SelectTrigger className="h-11 border border-[#E5E5E5] hover:border-sage-green/40 transition-colors">
                    <SelectValue placeholder="Selecteer een maat" />
                  </SelectTrigger>
                  <SelectContent>
                    {sizeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={!isFormValid || isLoading}
                className="w-full h-12 bg-sage-green text-warm-white rounded-lg flex items-center justify-center gap-2 transition-all duration-200 hover:bg-[#7A8A7D] disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ fontSize: '14px', fontWeight: 500, letterSpacing: '0.02em' }}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Bezig met matchen...
                  </>
                ) : (
                  <>
                    Bekijk mijn advies
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Visual Feedback */}
          <div className="flex items-center justify-center h-full">
            <AnimatePresence mode="wait">
              {!result ? (
                // Standby State
                <motion.div
                  key="standby"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center h-full"
                >
                  <motion.div
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Bed className="w-24 h-24 text-sage-green/25 mb-5" strokeWidth={1.2} />
                  </motion.div>
                  <h3
                    className="text-deep-charcoal/70"
                    style={{ fontSize: '18px', fontWeight: 500, lineHeight: '26px', letterSpacing: '-0.01em' }}
                  >
                    Jouw perfecte matras wacht
                  </h3>
                </motion.div>
              ) : (
                // Result State
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full flex flex-col"
                >
                  {/* Badge */}
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-1.5 bg-sage-green/8 text-sage-green px-3 py-1.5 rounded-full mb-4"
                    style={{ fontSize: '12px', fontWeight: 500 }}
                  >
                    <Check className="w-3.5 h-3.5" strokeWidth={2} />
                    Match gevonden
                  </motion.div>

                  {/* Result Text */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-3"
                  >
                    <p
                      className="text-deep-charcoal/60 mb-1"
                      style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.02em' }}
                    >
                      Jouw perfecte match
                    </p>
                    <h3
                      className="text-deep-charcoal mb-0.5"
                      style={{ fontSize: '24px', fontWeight: 700, lineHeight: '32px', letterSpacing: '-0.01em' }}
                    >
                      {result.name}
                    </h3>
                    <p
                      className="text-sage-green"
                      style={{ fontSize: '14px', fontWeight: 400 }}
                    >
                      {result.type}
                    </p>
                  </motion.div>

                  {/* Product Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="rounded-lg overflow-hidden mb-3"
                    style={{ boxShadow: '0px 4px 20px rgba(44, 44, 44, 0.06)' }}
                  >
                    <img
                      src={result.imageUrl}
                      alt={result.name}
                      className="w-full h-full object-cover"
                      style={{ aspectRatio: '4/3' }}
                    />
                  </motion.div>

                  {/* Match Score */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-1.5 mb-3"
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-sage-green fill-sage-green"
                      />
                    ))}
                    <span
                      className="text-sage-green ml-1"
                      style={{ fontSize: '14px', fontWeight: 600 }}
                    >
                      {result.matchScore}% match
                    </span>
                  </motion.div>

                  {/* Why Box */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-sage-green/5 rounded-lg p-4 mb-4"
                  >
                    <h4
                      className="text-deep-charcoal/80 mb-2"
                      style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.02em' }}
                    >
                      Waarom deze matras?
                    </h4>
                    <div className="flex flex-col gap-1.5">
                      {result.reasons.map((reason, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-sage-green flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span
                            className="text-deep-charcoal/70"
                            style={{ fontSize: '13px', fontWeight: 400, lineHeight: '18px' }}
                          >
                            {reason}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col gap-2"
                  >
                    <Link
                      to={result.link}
                      className="h-12 bg-sage-green text-warm-white rounded-lg flex items-center justify-center gap-2 transition-all duration-200 hover:bg-[#7A8A7D]"
                      style={{ fontSize: '14px', fontWeight: 500, letterSpacing: '0.02em' }}
                    >
                      Bekijk deze matras
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => setResult(null)}
                      className="text-deep-charcoal/60 hover:text-deep-charcoal transition-colors py-1"
                      style={{ fontSize: '13px', fontWeight: 500 }}
                    >
                      Zie andere opties
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
