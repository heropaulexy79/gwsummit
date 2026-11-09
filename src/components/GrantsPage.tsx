import React, { useState } from 'react';
import { 
  Briefcase, 
  HeartHandshake, 
  GraduationCap, 
  CheckCircle2, 
  Send, 
  AlertCircle, 
  FileText, 
  ShieldCheck, 
  TrendingUp,
  ArrowLeft,
  Sparkles
} from 'lucide-react';
import { grantTiers, ageGroups } from '../data/grantConfig';
import { eventConfig } from '../data/eventConfig';

type GrantCategory = 'business' | 'ngo' | 'student';

interface GrantFormData {
  fullName: string;
  email: string;
  phone: string;
  sex: string;
  ageGroup: string;
  grantType: GrantCategory;
  societalImpact: string;
  kingdomAdvancement: string;
  needReason: string;
  proposalDetails: string;
  proposalLink: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  sex?: string;
  ageGroup?: string;
  societalImpact?: string;
  kingdomAdvancement?: string;
  needReason?: string;
}

interface GrantsPageProps {
  onBackToHome: () => void;
}

export const GrantsPage: React.FC<GrantsPageProps> = ({ onBackToHome }) => {
  const [selectedTier, setSelectedTier] = useState<GrantCategory>('business');
  const [formData, setFormData] = useState<GrantFormData>({
    fullName: '',
    email: '',
    phone: '',
    sex: 'Female',
    ageGroup: '26 – 35 years',
    grantType: 'business',
    societalImpact: '',
    kingdomAdvancement: '',
    needReason: '',
    proposalDetails: '',
    proposalLink: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedRef, setSubmittedRef] = useState('');

  const handleTierSelect = (tierId: GrantCategory) => {
    setSelectedTier(tierId);
    setFormData((prev) => ({ ...prev, grantType: tierId }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter your full legal name';
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      newErrors.phone = 'Please provide a reachable phone/WhatsApp number';
    }

    if (!formData.sex) {
      newErrors.sex = 'Please specify your sex';
    }

    if (!formData.ageGroup) {
      newErrors.ageGroup = 'Please select your age group';
    }

    if (formData.grantType === 'business' || formData.grantType === 'ngo') {
      if (!formData.societalImpact.trim() || formData.societalImpact.trim().length < 25) {
        newErrors.societalImpact = 'Please share concrete societal impact (minimum 25 characters)';
      }

      if (!formData.kingdomAdvancement.trim() || formData.kingdomAdvancement.trim().length < 25) {
        newErrors.kingdomAdvancement = 'Please articulate how your sphere of influence advances God’s Kingdom (minimum 25 characters)';
      }
    }

    if (!formData.needReason.trim() || formData.needReason.trim().length < 30) {
      newErrors.needReason = 'Please explain why you need this grant / refuel package and what makes you qualified (minimum 30 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      const firstError = document.querySelector('.form-error-anchor');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = `GWS27-GRANT-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(generatedRef);
      setIsSubmitting(false);
      setIsSuccess(true);

      try {
        const stored = JSON.parse(localStorage.getItem('gws_grant_applications') || '[]');
        stored.push({
          ...formData,
          referenceId: generatedRef,
          appliedAt: new Date().toISOString()
        });
        localStorage.setItem('gws_grant_applications', JSON.stringify(stored));
      } catch (err) {
        console.warn('LocalStorage error:', err);
      }
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      sex: 'Female',
      ageGroup: '26 – 35 years',
      grantType: 'business',
      societalImpact: '',
      kingdomAdvancement: '',
      needReason: '',
      proposalDetails: '',
      proposalLink: ''
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2A2E24] font-sans selection:bg-[#3F4B2B] selection:text-[#FAF8F5]">
      
      {/* Top Dedicated Grants Header */}
      <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#3F4B2B]/10 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#3F4B2B] hover:text-[#5C6B42] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO SUMMIT</span>
          </button>

          <div className="flex flex-col items-center text-center">
            <span className="font-serif text-lg tracking-[0.06em] font-medium text-[#3F4B2B]">
              GWS 2027 Grants Portal
            </span>
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#C6A96B]">
              Lagos, Nigeria • Seed Funds & Refuel Kits
            </span>
          </div>

          <a
            href="#grant-form"
            className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-[0.14em] uppercase rounded-full bg-[#3F4B2B] text-[#FAF8F5] hover:bg-[#5C6B42] transition-colors"
          >
            <span>APPLY NOW</span>
          </a>
        </div>
      </header>

      {/* Hero Banner with Captivating Headline */}
      <section className="py-20 sm:py-28 bg-[#3F4B2B] text-[#FAF8F5] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C6A96B]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F5]/10 border border-[#FAF8F5]/20 text-xs font-mono uppercase tracking-[0.25em] text-[#EAE1D7]">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A96B]" />
            <span>THE GWS 2027 BENEVOLENCE INITIATIVE</span>
          </div>

          {/* Captivating Display Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.08]">
            Empowering Dreams, Elevating Impact: <br />
            <span className="italic text-[#EAE1D7]">Grants & Seed Funding Up to ₦500,000.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#FAF8F5]/85 max-w-2xl mx-auto font-light leading-relaxed">
            Investing directly into female-led enterprises, community change-makers, and academic refuel packages across Lagos and beyond.
          </p>
        </div>
      </section>

      {/* The 3 Grant Pillars */}
      <section className="py-20 sm:py-28 bg-[#F3EFE8] editorial-linen">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#5C6B42] block mb-2">
              STEP 1: SELECT YOUR CATEGORY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3F4B2B] font-normal">
              Choose the Grant That Fits Your Calling
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {grantTiers.map((tier) => {
              const isSelected = selectedTier === tier.id;
              return (
                <div
                  key={tier.id}
                  onClick={() => handleTierSelect(tier.id)}
                  className={`cursor-pointer group rounded-3xl p-8 sm:p-10 transition-all duration-300 relative flex flex-col justify-between border ${
                    isSelected
                      ? 'bg-[#3F4B2B] text-[#FAF8F5] border-[#C6A96B] shadow-2xl scale-[1.02]'
                      : 'bg-[#FAF8F5] text-[#2A2E24] border-[#EAE1D7] hover:border-[#5C6B42] hover:shadow-xl'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-6 mb-6 border-b border-current/10">
                      <span className={`text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full ${
                        isSelected ? 'bg-[#FAF8F5]/15 text-[#C6A96B]' : 'bg-[#3F4B2B]/10 text-[#5C6B42]'
                      }`}>
                        {tier.badge}
                      </span>
                      <div className={`w-11 h-11 rounded-full flex items-center justify-center ${
                        isSelected ? 'bg-[#C6A96B] text-[#1E2514]' : 'bg-[#3F4B2B] text-[#FAF8F5]'
                      }`}>
                        {tier.id === 'business' && <Briefcase className="w-5 h-5" />}
                        {tier.id === 'ngo' && <HeartHandshake className="w-5 h-5" />}
                        {tier.id === 'student' && <GraduationCap className="w-5 h-5" />}
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl font-normal leading-tight mb-2">
                      {tier.title}
                    </h3>
                    <div className={`font-serif text-2xl font-semibold mb-4 ${
                      isSelected ? 'text-[#C6A96B]' : 'text-[#3F4B2B]'
                    }`}>
                      {tier.amount}
                    </div>

                    <p className={`text-xs font-light leading-relaxed mb-6 ${
                      isSelected ? 'text-[#FAF8F5]/85' : 'text-[#2A2E24]/75'
                    }`}>
                      {tier.description}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-current/10">
                      <span className={`text-[10px] font-mono tracking-widest uppercase block ${
                        isSelected ? 'text-[#C6A96B]' : 'text-[#5C6B42]'
                      }`}>
                        Key Criteria
                      </span>
                      {tier.qualifications.map((q, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-light">
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isSelected ? 'text-[#C6A96B]' : 'text-[#5C6B42]'
                          }`} />
                          <span>{q}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t border-current/10 flex items-center justify-between text-xs tracking-wider uppercase font-medium">
                    <span>{isSelected ? 'Selected Category' : 'Click to Select'}</span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      isSelected ? 'border-[#C6A96B] bg-[#C6A96B]' : 'border-[#5C6B42]'
                    }`}>
                      {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#1E2514]" />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form Anchor */}
          <div id="grant-form" className="max-w-4xl mx-auto pt-6">
            {isSuccess ? (
              <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-14 border border-[#C6A96B] shadow-2xl text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#3F4B2B] text-[#C6A96B] flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#5C6B42]">
                  APPLICATION RECEIVED • GWS 2027 LAGOS
                </span>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#3F4B2B] mt-2 mb-4 font-normal">
                  Thank You, {formData.fullName}
                </h3>

                <p className="text-sm sm:text-base text-[#2A2E24]/85 max-w-lg mx-auto font-light leading-relaxed">
                  Your application for the <strong>
                    {formData.grantType === 'business' && 'Business Empowerment Grant'}
                    {formData.grantType === 'ngo' && 'NGO & Community Support Fund'}
                    {formData.grantType === 'student' && 'Student Refuel Package'}
                  </strong> has been officially received.
                </p>

                <div className="my-6 inline-block bg-[#F3EFE8] px-8 py-4 rounded-2xl border border-[#C6A96B]/40 font-mono text-sm text-[#3F4B2B]">
                  <div className="text-[10px] text-[#5C6B42] uppercase tracking-wider mb-1">Application Reference Code</div>
                  <div className="font-semibold text-lg text-[#C6A96B]">{submittedRef}</div>
                </div>

                <div className="max-w-md mx-auto p-5 rounded-2xl bg-[#EAE1D7]/50 border border-[#EAE1D7] text-left text-xs space-y-2 mb-8">
                  <div className="flex justify-between">
                    <span className="text-[#5C6B42] uppercase">Applicant</span>
                    <span className="font-medium text-[#2A2E24]">{formData.fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5C6B42] uppercase">Email</span>
                    <span className="font-medium text-[#2A2E24]">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5C6B42] uppercase">Category</span>
                    <span className="font-medium text-[#3F4B2B] capitalize">{formData.grantType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5C6B42] uppercase">Selection Status</span>
                    <span className="font-medium text-emerald-800">Under Review for Summit Shortlist</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-8 py-3.5 rounded-full bg-[#3F4B2B] text-[#FAF8F5] hover:bg-[#5C6B42] text-xs font-semibold tracking-[0.18em] uppercase transition-colors"
                  >
                    SUBMIT ANOTHER APPLICATION
                  </button>
                  <button
                    type="button"
                    onClick={onBackToHome}
                    className="px-8 py-3.5 rounded-full border border-[#3F4B2B] text-[#3F4B2B] hover:bg-[#FAF8F5] text-xs font-semibold tracking-[0.18em] uppercase transition-colors"
                  >
                    RETURN TO HOME
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-14 border border-[#EAE1D7] shadow-xl">
                
                <div className="border-b border-[#EAE1D7] pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#5C6B42] block">
                      STEP 2: COMPLETE APPLICATION
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#3F4B2B] font-normal mt-1">
                      Apply for {grantTiers.find(t => t.id === selectedTier)?.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-[#3F4B2B]/10 text-[#3F4B2B] font-medium self-start sm:self-auto">
                    {grantTiers.find(t => t.id === selectedTier)?.amount}
                  </span>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-7">
                  
                  {/* Biodata */}
                  <div className="space-y-4">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C6A96B] font-semibold block">
                      Part A: Personal Information
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="grantFullName" className="block text-xs font-semibold tracking-wider uppercase text-[#3F4B2B] mb-2">
                          Full Name <span className="text-amber-800">*</span>
                        </label>
                        <input
                          type="text"
                          id="grantFullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Adunni Grace Okafor"
                          className={`w-full px-4 py-3 rounded-xl bg-[#F3EFE8]/70 border text-[#2A2E24] text-sm focus:outline-none transition-colors ${
                            errors.fullName ? 'border-red-500 form-error-anchor' : 'border-[#EAE1D7] focus:border-[#3F4B2B]'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="grantEmail" className="block text-xs font-semibold tracking-wider uppercase text-[#3F4B2B] mb-2">
                          Email Address <span className="text-amber-800">*</span>
                        </label>
                        <input
                          type="email"
                          id="grantEmail"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="adunni@example.com"
                          className={`w-full px-4 py-3 rounded-xl bg-[#F3EFE8]/70 border text-[#2A2E24] text-sm focus:outline-none transition-colors ${
                            errors.email ? 'border-red-500 form-error-anchor' : 'border-[#EAE1D7] focus:border-[#3F4B2B]'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="grantPhone" className="block text-xs font-semibold tracking-wider uppercase text-[#3F4B2B] mb-2">
                          Phone / WhatsApp <span className="text-amber-800">*</span>
                        </label>
                        <input
                          type="tel"
                          id="grantPhone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+234 800 000 0000"
                          className={`w-full px-4 py-3 rounded-xl bg-[#F3EFE8]/70 border text-[#2A2E24] text-sm focus:outline-none transition-colors ${
                            errors.phone ? 'border-red-500 form-error-anchor' : 'border-[#EAE1D7] focus:border-[#3F4B2B]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="grantSex" className="block text-xs font-semibold tracking-wider uppercase text-[#3F4B2B] mb-2">
                          Sex <span className="text-amber-800">*</span>
                        </label>
                        <select
                          id="grantSex"
                          name="sex"
                          value={formData.sex}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-[#F3EFE8]/70 border border-[#EAE1D7] text-[#2A2E24] text-sm focus:outline-none focus:border-[#3F4B2B] transition-colors"
                        >
                          <option value="Female">Female</option>
                          <option value="Male">Male</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="grantAgeGroup" className="block text-xs font-semibold tracking-wider uppercase text-[#3F4B2B] mb-2">
                          Age Group <span className="text-amber-800">*</span>
                        </label>
                        <select
                          id="grantAgeGroup"
                          name="ageGroup"
                          value={formData.ageGroup}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-[#F3EFE8]/70 border border-[#EAE1D7] text-[#2A2E24] text-sm focus:outline-none focus:border-[#3F4B2B] transition-colors"
                        >
                          {ageGroups.map((group) => (
                            <option key={group} value={group}>
                              {group}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Compulsory for Business & NGO */}
                  {(formData.grantType === 'business' || formData.grantType === 'ngo') && (
                    <div className="space-y-6 pt-6 border-t border-[#EAE1D7] animate-fade-in">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-[#C6A96B]" />
                        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C6A96B] font-semibold">
                          Part B: Kingdom & Societal Impact Assessment (Compulsory for {formData.grantType === 'business' ? 'Business' : 'NGO'})
                        </span>
                      </div>

                      <div>
                        <label htmlFor="societalImpact" className="block text-xs font-semibold tracking-wider uppercase text-[#3F4B2B] mb-2">
                          1. How has your {formData.grantType === 'business' ? 'business' : 'NGO'} impacted your society? <span className="text-amber-800">*</span>
                        </label>
                        <p className="text-xs text-[#2A2E24]/70 mb-2 font-light">
                          Share measurable outcomes: lives touched, families supported, jobs created, or problems solved within your community.
                        </p>
                        <textarea
                          id="societalImpact"
                          name="societalImpact"
                          rows={3}
                          value={formData.societalImpact}
                          onChange={handleChange}
                          placeholder="Through our tailoring enterprise, we currently employ 3 single mothers and train 5 young girls yearly in skill acquisition..."
                          className={`w-full px-4 py-3 rounded-xl bg-[#F3EFE8]/70 border text-[#2A2E24] text-sm focus:outline-none transition-colors ${
                            errors.societalImpact ? 'border-red-500 form-error-anchor' : 'border-[#EAE1D7] focus:border-[#3F4B2B]'
                          }`}
                        />
                        {errors.societalImpact && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.societalImpact}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="kingdomAdvancement" className="block text-xs font-semibold tracking-wider uppercase text-[#3F4B2B] mb-2">
                          2. How has your sphere of influence advanced the kingdom of God on earth? <span className="text-amber-800">*</span>
                        </label>
                        <p className="text-xs text-[#2A2E24]/70 mb-2 font-light">
                          How are you demonstrating Christ-like values, evangelism, integrity, or kingdom discipleship through your marketplace/mission space?
                        </p>
                        <textarea
                          id="kingdomAdvancement"
                          name="kingdomAdvancement"
                          rows={3}
                          value={formData.kingdomAdvancement}
                          onChange={handleChange}
                          placeholder="We conduct weekly marketplace devotions with our apprentices and model uncompromising honesty in our pricing and client care..."
                          className={`w-full px-4 py-3 rounded-xl bg-[#F3EFE8]/70 border text-[#2A2E24] text-sm focus:outline-none transition-colors ${
                            errors.kingdomAdvancement ? 'border-red-500 form-error-anchor' : 'border-[#EAE1D7] focus:border-[#3F4B2B]'
                          }`}
                        />
                        {errors.kingdomAdvancement && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.kingdomAdvancement}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Justification & Proposals */}
                  <div className="space-y-6 pt-6 border-t border-[#EAE1D7]">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#C6A96B]" />
                      <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C6A96B] font-semibold">
                        Part C: Justification & Proposal (What Makes You Qualified)
                      </span>
                    </div>

                    <div>
                      <label htmlFor="needReason" className="block text-xs font-semibold tracking-wider uppercase text-[#3F4B2B] mb-2">
                        Why do you need this grant, support, or refuel package? <span className="text-amber-800">*</span>
                      </label>
                      <p className="text-xs text-[#2A2E24]/70 mb-2 font-light">
                        {formData.grantType === 'student'
                          ? 'Detail your current academic standing, courses, and how this refuel kit will lift a burden off your studies.'
                          : 'Explain the critical financial gap this grant will bridge, and what makes your venture or mission deserving of selection.'}
                      </p>
                      <textarea
                        id="needReason"
                        name="needReason"
                        rows={4}
                        value={formData.needReason}
                        onChange={handleChange}
                        placeholder={
                          formData.grantType === 'student'
                            ? "I am a 300L student at the University of Lagos studying Biochemistry. Due to family financial constraints, purchasing textbooks and lab coats has been challenging..."
                            : "This ₦500k grant will enable us to acquire an industrial embroidery machine, reducing our production turnaround time from 7 days to 24 hours..."
                        }
                        className={`w-full px-4 py-3 rounded-xl bg-[#F3EFE8]/70 border text-[#2A2E24] text-sm focus:outline-none transition-colors ${
                          errors.needReason ? 'border-red-500 form-error-anchor' : 'border-[#EAE1D7] focus:border-[#3F4B2B]'
                        }`}
                      />
                      {errors.needReason && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.needReason}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="proposalDetails" className="block text-xs font-semibold tracking-wider uppercase text-[#3F4B2B] mb-1">
                        Business Proposal / Budget Breakdown Summary <span className="text-[#5C6B42] text-[10px] font-normal lowercase">(recommended)</span>
                      </label>
                      <p className="text-xs text-[#2A2E24]/70 mb-2 font-light">
                        Provide a brief line-item breakdown of how the ₦500,000 or student support will be expended.
                      </p>
                      <textarea
                        id="proposalDetails"
                        name="proposalDetails"
                        rows={2}
                        value={formData.proposalDetails}
                        onChange={handleChange}
                        placeholder="e.g. 1. Equipment purchase: ₦300,000 | 2. Inventory raw materials: ₦150,000 | 3. Logistics & packaging: ₦50,000"
                        className="w-full px-4 py-3 rounded-xl bg-[#F3EFE8]/70 border border-[#EAE1D7] text-[#2A2E24] text-sm focus:outline-none focus:border-[#3F4B2B] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="proposalLink" className="block text-xs font-semibold tracking-wider uppercase text-[#3F4B2B] mb-1">
                        Upload / External Link to Proposal / Student ID / CAC Document <span className="text-[#5C6B42] text-[10px] font-normal lowercase">(optional)</span>
                      </label>
                      <p className="text-xs text-[#2A2E24]/70 mb-2 font-light">
                        Add a public Google Drive, Dropbox, or OneDrive link to your business proposal, CAC certificate, or student identification for enhanced vetting.
                      </p>
                      <input
                        type="url"
                        id="proposalLink"
                        name="proposalLink"
                        value={formData.proposalLink}
                        onChange={handleChange}
                        placeholder="https://drive.google.com/file/d/your-proposal-doc"
                        className="w-full px-4 py-3 rounded-xl bg-[#F3EFE8]/70 border border-[#EAE1D7] text-[#2A2E24] text-sm focus:outline-none focus:border-[#3F4B2B] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#EAE1D7]/50 border border-[#EAE1D7] text-xs text-[#2A2E24]/85">
                    <ShieldCheck className="w-5 h-5 text-[#3F4B2B] shrink-0 mt-0.5" />
                    <p>
                      All grant submissions are reviewed by the Global Wives Summit 2027 Grants Advisory Committee. Recipients will be announced and formally presented during the Lagos summit sessions.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-full bg-[#3F4B2B] hover:bg-[#5C6B42] text-[#FAF8F5] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-lg disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#C6A96B] border-t-transparent rounded-full animate-spin" />
                        SUBMITTING APPLICATION...
                      </span>
                    ) : (
                      <>
                        <span>SUBMIT GRANT APPLICATION</span>
                        <Send className="w-4 h-4 text-[#C6A96B]" />
                      </>
                    )}
                  </button>

                </form>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Footer for Grants Page */}
      <footer className="bg-[#242A1D] text-[#FAF8F5] py-12 border-t border-white/10 text-center text-xs space-y-3">
        <p>© {new Date().getFullYear()} {eventConfig.name} {eventConfig.year}. {eventConfig.location}. All rights reserved.</p>
        <button
          type="button"
          onClick={onBackToHome}
          className="text-[#C6A96B] hover:underline uppercase tracking-widest text-[11px]"
        >
          ← Return to Summit Homepage
        </button>
      </footer>
    </div>
  );
};
