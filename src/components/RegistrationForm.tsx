import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, ShieldCheck, Mail, Phone, Globe, Building } from 'lucide-react';
import { eventConfig } from '../data/eventConfig';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  churchOrganization: string;
  registrationCategory: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  country?: string;
}

const CATEGORIES = [
  {
    id: "General Delegate",
    label: "General Delegate",
    desc: "In-person access to all general sessions, praise & worship, workshops, and general summit exhibition in Lagos.",
  },
  {
    id: "Leadership Circle",
    label: "Leadership & Ministry Circle",
    desc: "For pastors' wives, ministry leaders, and department heads participating in the leadership roundtables.",
  },
  {
    id: "Visiting Delegate",
    label: "Visiting / Out-of-State Delegate",
    desc: "For attendees traveling into Lagos from other states or across borders seeking local accommodation guidance.",
  },
];

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    country: 'Nigeria',
    churchOrganization: '',
    registrationCategory: 'General Delegate',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter your complete name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = 'Please provide a valid phone number';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Location is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmittedData({ ...formData });

      try {
        const existing = JSON.parse(localStorage.getItem('gws_registrations') || '[]');
        existing.push({ ...formData, registeredAt: new Date().toISOString() });
        localStorage.setItem('gws_registrations', JSON.stringify(existing));
      } catch (err) {
        console.warn('LocalStorage error:', err);
      }
    }, 1000);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      country: 'Nigeria',
      churchOrganization: '',
      registrationCategory: 'General Delegate',
    });
    setSubmittedData(null);
  };

  return (
    <section id="register" className="py-24 sm:py-32 bg-[#F6F3EB] text-[#252820] relative overflow-hidden">
      
      <div id="registration-form" className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1.5px] bg-[#3F4B2B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#69764A] font-mono font-semibold">
              REGISTRATION
            </span>
            <span className="w-8 h-[1.5px] bg-[#3F4B2B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#3F4B2B] leading-tight font-medium">
            Register for {eventConfig.name} {eventConfig.year}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#252820]/75 font-light">
            Convening in Lagos, Nigeria. Reserve your place for early notifications on dates, venue release, and program updates.
          </p>
        </div>

        {/* Confirmation Screen */}
        {isSuccess && submittedData ? (
          <div className="bg-[#FFFFFF] border border-[#C6A96B] p-8 sm:p-12 shadow-xl relative animate-fade-in text-center max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-full bg-[#3F4B2B] text-[#C6A96B] flex items-center justify-center mx-auto mb-5 shadow-md">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#69764A]">
              REGISTRATION LOGGED • LAGOS 2027
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#3F4B2B] mt-2 mb-3 font-semibold">
              Thank You, {submittedData.fullName}
            </h3>

            <p className="text-sm text-[#252820]/80 max-w-md mx-auto font-light leading-relaxed">
              Your registration for <strong>Global Wives Summit 2027 (Lagos)</strong> has been logged. You will receive official updates at:
            </p>

            <div className="my-5 inline-block bg-[#F6F3EB] px-6 py-2.5 border border-[#69764A]/30 font-mono text-sm text-[#3F4B2B]">
              {submittedData.email}
            </div>

            <div className="max-w-md mx-auto p-4 bg-[#EAE5D8]/50 border border-[#69764A]/20 text-left text-xs space-y-2 mb-8">
              <div className="flex justify-between">
                <span className="text-[#69764A] uppercase">Category</span>
                <span className="font-medium text-[#252820]">{submittedData.registrationCategory}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#69764A] uppercase">Country / City</span>
                <span className="font-medium text-[#252820]">{submittedData.country}</span>
              </div>
              {submittedData.churchOrganization && (
                <div className="flex justify-between">
                  <span className="text-[#69764A] uppercase">Affiliation</span>
                  <span className="font-medium text-[#252820]">{submittedData.churchOrganization}</span>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="px-8 py-3 bg-[#3F4B2B] text-[#F6F3EB] hover:bg-[#1E2514] text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
            >
              REGISTER ANOTHER ATTENDEE
            </button>
          </div>
        ) : (
          /* Clean Registration Form */
          <div className="bg-[#FFFFFF] border border-[#69764A]/20 shadow-lg p-8 sm:p-12">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Category Dropdown */}
              <div>
                <label htmlFor="registrationCategory" className="block text-xs font-semibold tracking-[0.16em] uppercase text-[#3F4B2B] mb-2">
                  Registration Category
                </label>
                <select
                  id="registrationCategory"
                  name="registrationCategory"
                  value={formData.registrationCategory}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F6F3EB]/60 border border-[#69764A]/30 text-[#252820] text-sm focus:outline-none focus:border-[#3F4B2B] transition-colors"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-semibold tracking-[0.16em] uppercase text-[#3F4B2B] mb-2">
                  Full Name <span className="text-amber-800">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Elizabeth Jenkins"
                  className={`w-full px-4 py-3 bg-[#F6F3EB]/60 border text-[#252820] text-sm focus:outline-none transition-colors ${
                    errors.fullName ? 'border-red-500' : 'border-[#69764A]/30 focus:border-[#3F4B2B]'
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold tracking-[0.16em] uppercase text-[#3F4B2B] mb-2">
                    Email Address <span className="text-amber-800">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@domain.com"
                      className={`w-full px-4 py-3 bg-[#F6F3EB]/60 border text-[#252820] text-sm focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500' : 'border-[#69764A]/30 focus:border-[#3F4B2B]'
                      }`}
                    />
                    <Mail className="w-4 h-4 text-[#69764A] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold tracking-[0.16em] uppercase text-[#3F4B2B] mb-2">
                    Phone Number <span className="text-amber-800">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 800 000 0000"
                      className={`w-full px-4 py-3 bg-[#F6F3EB]/60 border text-[#252820] text-sm focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-[#69764A]/30 focus:border-[#3F4B2B]'
                      }`}
                    />
                    <Phone className="w-4 h-4 text-[#69764A] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Country & Church */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="country" className="block text-xs font-semibold tracking-[0.16em] uppercase text-[#3F4B2B] mb-2">
                    Country / State of Residence <span className="text-amber-800">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="e.g. Lagos, Nigeria"
                      className={`w-full px-4 py-3 bg-[#F6F3EB]/60 border text-[#252820] text-sm focus:outline-none transition-colors ${
                        errors.country ? 'border-red-500' : 'border-[#69764A]/30 focus:border-[#3F4B2B]'
                      }`}
                    />
                    <Globe className="w-4 h-4 text-[#69764A] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  {errors.country && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.country}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="churchOrganization" className="block text-xs font-semibold tracking-[0.16em] uppercase text-[#3F4B2B] mb-2">
                    Church / Organization <span className="text-[#69764A] text-[10px] font-normal lowercase">(optional)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="churchOrganization"
                      name="churchOrganization"
                      value={formData.churchOrganization}
                      onChange={handleChange}
                      placeholder="Your community or ministry"
                      className="w-full px-4 py-3 bg-[#F6F3EB]/60 border border-[#69764A]/30 text-[#252820] text-sm focus:outline-none focus:border-[#3F4B2B] transition-colors"
                    />
                    <Building className="w-4 h-4 text-[#69764A] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Privacy Message */}
              <div className="flex items-start gap-3 p-4 bg-[#F6F3EB] border border-[#69764A]/20 text-xs text-[#252820]/80">
                <ShieldCheck className="w-4 h-4 text-[#3F4B2B] shrink-0 mt-0.5" />
                <p>
                  We respect your privacy. Your information is securely handled and will only be used to communicate official Global Wives Summit 2027 logistics.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 bg-[#3F4B2B] hover:bg-[#252C1A] text-[#F6F3EB] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-md disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-[#C6A96B] border-t-transparent rounded-full animate-spin" />
                    PROCESSING REGISTRATION...
                  </span>
                ) : (
                  <>
                    <span>COMPLETE REGISTRATION</span>
                    <Send className="w-4 h-4 text-[#C6A96B]" />
                  </>
                )}
              </button>

            </form>
          </div>
        )}

      </div>

    </section>
  );
};
