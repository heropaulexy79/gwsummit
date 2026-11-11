import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  Navigation, 
  Radio, 
  Users, 
  HeartHandshake, 
  Compass,
  MessageCircle,
  X
} from 'lucide-react';
import { eventConfig } from '../data/eventConfig';
import { submitToSheets } from '../data/webhookConfig';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  state: string;
  city: string;
  attendanceOption: 'Physical' | 'Virtual (Online)';
  nearestBusStop: string;
  referralSource: string;
  relationshipStatus: string;
  expectations: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  address?: string;
  country?: string;
  state?: string;
  city?: string;
  nearestBusStop?: string;
  relationshipStatus?: string;
}

const ATTENDANCE_OPTIONS = ['Physical', 'Virtual (Online)'] as const;

const REFERRAL_SOURCES = [
  'Instagram',
  'WhatsApp',
  'Facebook',
  'Friend/Family',
  'Church',
  'Other'
];

const RELATIONSHIP_STATUSES = [
  'Single',
  'Engaged',
  'Married',
  'Divorced',
  'Widowed',
  'Prefer not to say'
];

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    country: 'Nigeria',
    state: 'Lagos',
    city: '',
    attendanceOption: 'Physical',
    nearestBusStop: '',
    referralSource: 'Instagram',
    relationshipStatus: 'Married',
    expectations: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      newErrors.phone = 'Please provide a valid phone/WhatsApp number';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Residential or mailing address is required';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }

    if (!formData.state.trim()) {
      newErrors.state = 'State / Region is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City / Town is required';
    }

    // Nearest Bus Stop is compulsory only for Physical attendees
    if (formData.attendanceOption === 'Physical' && !formData.nearestBusStop.trim()) {
      newErrors.nearestBusStop = 'Nearest bus stop is required for physical delegates (for transportation & logistics)';
    }

    if (!formData.relationshipStatus) {
      newErrors.relationshipStatus = 'Please select your relationship status';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

  const handleAttendanceChange = (option: 'Physical' | 'Virtual (Online)') => {
    setFormData((prev) => ({ ...prev, attendanceOption: option }));
    if (option === 'Virtual (Online)' && errors.nearestBusStop) {
      setErrors((prev) => ({ ...prev, nearestBusStop: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      const firstError = document.querySelector('.form-error-marker');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);

    const payload = {
      type: 'registration',
      ...formData,
      timestamp: new Date().toISOString()
    };

    await submitToSheets(payload);

    try {
      const existing = JSON.parse(localStorage.getItem('gws_registrations') || '[]');
      existing.push(payload);
      localStorage.setItem('gws_registrations', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    setIsSubmitting(false);
    setIsSuccess(true);
    setSubmittedData({ ...formData });
    setShowWhatsAppModal(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setShowWhatsAppModal(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      country: 'Nigeria',
      state: 'Lagos',
      city: '',
      attendanceOption: 'Physical',
      nearestBusStop: '',
      referralSource: 'Instagram',
      relationshipStatus: 'Married',
      expectations: '',
    });
    setErrors({});
    setSubmittedData(null);
  };

  return (
    <section id="register" className="py-24 sm:py-32 bg-[#F6F3EB] text-[#252820] relative overflow-hidden editorial-linen">
      
      <div id="registration-form" className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1.5px] bg-[#3F4B2B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#69764A] font-mono font-semibold">
              DELEGATE REGISTRATION • GWS 2.0
            </span>
            <span className="w-8 h-[1.5px] bg-[#3F4B2B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#3F4B2B] leading-tight font-normal">
            Register for {eventConfig.name} {eventConfig.year}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#252820]/75 font-light">
            Convening in Lagos, Nigeria & streaming globally. An official confirmation email and attendance accreditation pass will be sent directly to your inbox.
          </p>
        </div>

        {/* Confirmation Screen */}
        {isSuccess && submittedData ? (
          <div className="bg-[#FFFFFF] border border-[#C6A96B] p-8 sm:p-12 shadow-xl relative animate-fade-in text-center max-w-2xl mx-auto rounded-3xl">
            <div className="w-16 h-16 rounded-full bg-[#3F4B2B] text-[#C6A96B] flex items-center justify-center mx-auto mb-5 shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#69764A]">
              REGISTRATION LOGGED • GLOBAL WIVES SUMMIT 2.0
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#3F4B2B] mt-2 mb-3 font-semibold">
              Thank You, {submittedData.fullName}
            </h3>

            <p className="text-sm text-[#252820]/80 max-w-md mx-auto font-light leading-relaxed">
              Your registration for <strong>Global Wives Summit 2027</strong> has been officially recorded in our delegate registry. A confirmation email has been dispatched to:
            </p>

            <div className="my-5 inline-block bg-[#F6F3EB] px-6 py-2.5 rounded-xl border border-[#69764A]/30 font-mono text-sm text-[#3F4B2B]">
              {submittedData.email}
            </div>

            <div className="max-w-md mx-auto p-5 bg-[#EAE5D8]/50 rounded-2xl border border-[#69764A]/20 text-left text-xs space-y-2.5 mb-8">
              <div className="flex justify-between">
                <span className="text-[#69764A] uppercase font-mono">Attendance Mode</span>
                <span className="font-semibold text-[#3F4B2B]">{submittedData.attendanceOption}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#69764A] uppercase font-mono">Location</span>
                <span className="font-medium text-[#252820]">{submittedData.city}, {submittedData.state}, {submittedData.country}</span>
              </div>
              {submittedData.nearestBusStop && (
                <div className="flex justify-between">
                  <span className="text-[#69764A] uppercase font-mono">Nearest Bus Stop</span>
                  <span className="font-medium text-[#252820]">{submittedData.nearestBusStop}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-[#69764A] uppercase font-mono">Relationship Status</span>
                <span className="font-medium text-[#252820]">{submittedData.relationshipStatus}</span>
              </div>
            </div>

            {/* Prominent WhatsApp Community Banner on Confirmation */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#E8F5E9] border-2 border-[#25D366] text-left mb-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#1E7E34] font-bold block mb-1">
                    OFFICIAL ATTENDEES COMMUNITY
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl text-[#1B4323] font-semibold mb-1">
                    Join the Global Wives WhatsApp Group
                  </h4>
                  <p className="text-xs sm:text-sm text-[#2D5A35] font-light leading-relaxed mb-4">
                    Connect directly with fellow registered wives, receive prompt summit logistics, venue updates, and daily prayer inspiration.
                  </p>
                  <a
                    href="https://chat.whatsapp.com/Gxl9V3GkCfxLsLaMNaFUjP?mode=gi_t"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold tracking-wider uppercase rounded-full shadow-lg transition-transform hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Join WhatsApp Group Now</span>
                  </a>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="px-8 py-3.5 bg-[#3F4B2B] text-[#F6F3EB] hover:bg-[#1E2514] text-xs font-semibold tracking-[0.2em] uppercase transition-colors rounded-full"
            >
              REGISTER ANOTHER ATTENDEE
            </button>
          </div>
        ) : (
          /* Comprehensive Registration Form */
          <div className="bg-[#FFFFFF] border border-[#69764A]/20 shadow-xl p-8 sm:p-12 lg:p-14 rounded-3xl">
            <form onSubmit={handleSubmit} noValidate className="space-y-8">
              
              {/* SECTION 1: PERSONAL CONTACT DETAILS */}
              <div className="space-y-5">
                <div className="flex items-center gap-2 pb-2 border-b border-[#EAE1D7]">
                  <Users className="w-4 h-4 text-[#C6A96B]" />
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C6A96B] font-semibold">
                    1. Personal Details
                  </span>
                </div>

                {/* 1. Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold tracking-wider uppercase text-[#3F4B2B] mb-2">
                    1. Full Name <span className="text-amber-800">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Oluwakemi Sarah Johnson"
                    className={`w-full px-4 py-3 rounded-xl bg-[#F6F3EB]/60 border text-[#252820] text-sm focus:outline-none transition-colors ${
                      errors.fullName ? 'border-red-500 form-error-marker' : 'border-[#69764A]/30 focus:border-[#3F4B2B]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* 2 & 3. Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold tracking-wider uppercase text-[#3F4B2B] mb-2">
                      2. Email Address <span className="text-amber-800">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="kemi@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#F6F3EB]/60 border text-[#252820] text-sm focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500 form-error-marker' : 'border-[#69764A]/30 focus:border-[#3F4B2B]'
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
                    <label htmlFor="phone" className="block text-xs font-semibold tracking-wider uppercase text-[#3F4B2B] mb-2">
                      3. Phone Number <span className="text-amber-800">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 800 000 0000"
                        className={`w-full px-4 py-3 rounded-xl bg-[#F6F3EB]/60 border text-[#252820] text-sm focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500 form-error-marker' : 'border-[#69764A]/30 focus:border-[#3F4B2B]'
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
              </div>

              {/* SECTION 2: LOCATION & ADDRESS */}
              <div className="space-y-5 pt-4">
                <div className="flex items-center gap-2 pb-2 border-b border-[#EAE1D7]">
                  <MapPin className="w-4 h-4 text-[#C6A96B]" />
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C6A96B] font-semibold">
                    2. Location & Residential Details
                  </span>
                </div>

                {/* 4. Address */}
                <div>
                  <label htmlFor="address" className="block text-xs font-semibold tracking-wider uppercase text-[#3F4B2B] mb-2">
                    4. Address <span className="text-amber-800">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="e.g. 15 Admiralty Way, Lekki Phase 1"
                    className={`w-full px-4 py-3 rounded-xl bg-[#F6F3EB]/60 border text-[#252820] text-sm focus:outline-none transition-colors ${
                      errors.address ? 'border-red-500 form-error-marker' : 'border-[#69764A]/30 focus:border-[#3F4B2B]'
                    }`}
                  />
                  {errors.address && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.address}
                    </p>
                  )}
                </div>

                {/* 5, 6, 7. Country, State, City */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="country" className="block text-xs font-semibold tracking-wider uppercase text-[#3F4B2B] mb-2">
                      5. Country <span className="text-amber-800">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="e.g. Nigeria"
                        className={`w-full px-4 py-3 rounded-xl bg-[#F6F3EB]/60 border text-[#252820] text-sm focus:outline-none transition-colors ${
                          errors.country ? 'border-red-500 form-error-marker' : 'border-[#69764A]/30 focus:border-[#3F4B2B]'
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
                    <label htmlFor="state" className="block text-xs font-semibold tracking-wider uppercase text-[#3F4B2B] mb-2">
                      6. State <span className="text-amber-800">*</span>
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="e.g. Lagos"
                      className={`w-full px-4 py-3 rounded-xl bg-[#F6F3EB]/60 border text-[#252820] text-sm focus:outline-none transition-colors ${
                        errors.state ? 'border-red-500 form-error-marker' : 'border-[#69764A]/30 focus:border-[#3F4B2B]'
                      }`}
                    />
                    {errors.state && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.state}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-xs font-semibold tracking-wider uppercase text-[#3F4B2B] mb-2">
                      7. City <span className="text-amber-800">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Ikeja, Lekki, Yaba"
                      className={`w-full px-4 py-3 rounded-xl bg-[#F6F3EB]/60 border text-[#252820] text-sm focus:outline-none transition-colors ${
                        errors.city ? 'border-red-500 form-error-marker' : 'border-[#69764A]/30 focus:border-[#3F4B2B]'
                      }`}
                    />
                    {errors.city && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.city}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* SECTION 3: ATTENDANCE & LOGISTICS */}
              <div className="space-y-5 pt-4">
                <div className="flex items-center gap-2 pb-2 border-b border-[#EAE1D7]">
                  <Navigation className="w-4 h-4 text-[#C6A96B]" />
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C6A96B] font-semibold">
                    3. Attendance & Logistics
                  </span>
                </div>

                {/* 8. Preferred Attendance Option */}
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-[#3F4B2B] mb-2.5">
                    8. Preferred Attendance Option <span className="text-amber-800">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {ATTENDANCE_OPTIONS.map((option) => {
                      const isSelected = formData.attendanceOption === option;
                      return (
                        <div
                          key={option}
                          onClick={() => handleAttendanceChange(option)}
                          className={`cursor-pointer p-4 rounded-2xl border transition-all flex items-center justify-between ${
                            isSelected
                              ? 'border-[#3F4B2B] bg-[#3F4B2B]/5 shadow-sm'
                              : 'border-[#69764A]/25 bg-[#F6F3EB]/40 hover:border-[#69764A]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              isSelected ? 'border-[#3F4B2B] bg-[#3F4B2B]' : 'border-[#69764A]'
                            }`}>
                              {isSelected && <div className="w-2 h-2 rounded-full bg-[#FAF8F5]" />}
                            </div>
                            <div>
                              <span className="text-sm font-semibold text-[#3F4B2B] block">
                                {option}
                              </span>
                              <span className="text-[11px] text-[#69764A]">
                                {option === 'Physical' ? 'In-person hall seat in Lagos' : 'Live stream & virtual breakout pods'}
                              </span>
                            </div>
                          </div>
                          {option === 'Physical' ? (
                            <span className="text-[10px] font-mono uppercase tracking-wider text-[#C6A96B] px-2 py-0.5 rounded-full bg-[#3F4B2B]/10">
                              Lagos Hall
                            </span>
                          ) : (
                            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 px-2 py-0.5 rounded-full bg-emerald-100">
                              Online
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 9. Nearest Bus Stop (Compulsory for physical attendees) */}
                {formData.attendanceOption === 'Physical' ? (
                  <div className="animate-fade-in">
                    <label htmlFor="nearestBusStop" className="block text-xs font-semibold tracking-wider uppercase text-[#3F4B2B] mb-2">
                      9. Nearest Bus Stop <span className="text-amber-800">*</span> <span className="text-[11px] font-normal lowercase text-[#69764A]">(for physical attendees)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="nearestBusStop"
                        name="nearestBusStop"
                        value={formData.nearestBusStop}
                        onChange={handleChange}
                        placeholder="e.g. Berger Bus Stop, Maryland, Agungi Bus Stop"
                        className={`w-full px-4 py-3 rounded-xl bg-[#F6F3EB]/60 border text-[#252820] text-sm focus:outline-none transition-colors ${
                          errors.nearestBusStop ? 'border-red-500 form-error-marker' : 'border-[#69764A]/30 focus:border-[#3F4B2B]'
                        }`}
                      />
                      <Compass className="w-4 h-4 text-[#69764A] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    {errors.nearestBusStop && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.nearestBusStop}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
                    <Radio className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Virtual attendee selected: Private access links will be sent directly to your registered email.</span>
                  </div>
                )}
              </div>

              {/* SECTION 4: BACKGROUND & EXPECTATIONS */}
              <div className="space-y-5 pt-4">
                <div className="flex items-center gap-2 pb-2 border-b border-[#EAE1D7]">
                  <HeartHandshake className="w-4 h-4 text-[#C6A96B]" />
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C6A96B] font-semibold">
                    4. Discovery, Status & Expectations
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* 10. How did you hear about the summit? */}
                  <div>
                    <label htmlFor="referralSource" className="block text-xs font-semibold tracking-wider uppercase text-[#3F4B2B] mb-2">
                      10. How did you hear about the summit?
                    </label>
                    <select
                      id="referralSource"
                      name="referralSource"
                      value={formData.referralSource}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#F6F3EB]/60 border border-[#69764A]/30 text-[#252820] text-sm focus:outline-none focus:border-[#3F4B2B] transition-colors"
                    >
                      {REFERRAL_SOURCES.map((source) => (
                        <option key={source} value={source}>
                          {source}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* 11. Relationship Status */}
                  <div>
                    <label htmlFor="relationshipStatus" className="block text-xs font-semibold tracking-wider uppercase text-[#3F4B2B] mb-2">
                      11. Relationship Status <span className="text-amber-800">*</span>
                    </label>
                    <select
                      id="relationshipStatus"
                      name="relationshipStatus"
                      value={formData.relationshipStatus}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#F6F3EB]/60 border border-[#69764A]/30 text-[#252820] text-sm focus:outline-none focus:border-[#3F4B2B] transition-colors"
                    >
                      {RELATIONSHIP_STATUSES.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 12. Expectations for GWS 2.0 */}
                <div>
                  <label htmlFor="expectations" className="block text-xs font-semibold tracking-wider uppercase text-[#3F4B2B] mb-1.5">
                    12. What are your expectations for the Global Wives Summit 2.0? <span className="text-[11px] font-normal lowercase text-[#69764A]">(optional)</span>
                  </label>
                  <p className="text-xs text-[#252820]/70 mb-2 font-light">
                    Share your heart, prayer points, or the relational/spiritual breakthroughs you desire from this convening.
                  </p>
                  <textarea
                    id="expectations"
                    name="expectations"
                    rows={3}
                    value={formData.expectations}
                    onChange={handleChange}
                    placeholder="e.g. I am trusting God for spiritual rejuvenation, practical wisdom for my marriage, and deep fellowship with godly sisters..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F6F3EB]/60 border border-[#69764A]/30 text-[#252820] text-sm focus:outline-none focus:border-[#3F4B2B] transition-colors"
                  />
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#F6F3EB] border border-[#69764A]/20 text-xs text-[#252820]/80">
                <ShieldCheck className="w-4 h-4 text-[#3F4B2B] shrink-0 mt-0.5" />
                <p>
                  We honor your privacy. Your information is securely logged into our delegate registry and will dispatch an official confirmation email directly to your inbox.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 rounded-full bg-[#3F4B2B] hover:bg-[#252C1A] text-[#F6F3EB] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-md disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-[#C6A96B] border-t-transparent rounded-full animate-spin" />
                    RECORDING & DISPATCHING CONFIRMATION EMAIL...
                  </span>
                ) : (
                  <>
                    <span>COMPLETE REGISTRATION FOR GWS 2.0</span>
                    <Send className="w-4 h-4 text-[#C6A96B]" />
                  </>
                )}
              </button>

            </form>
          </div>
        )}

      </div>

      {/* POPUP DIALOG MODAL: WHATSAPP COMMUNITY INVITATION */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#FFFFFF] border-2 border-[#25D366] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative animate-scale-up text-center">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowWhatsAppModal(false)}
              className="absolute top-4 right-4 p-2 text-[#2A2E24]/60 hover:text-[#2A2E24] hover:bg-[#F3EFE8] rounded-full transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Icon Header */}
            <div className="w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
              <MessageCircle className="w-9 h-9" />
            </div>

            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#1E7E34] font-bold block mb-1">
              REGISTRATION SUCCESSFUL! 🎉
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#1B4323] font-normal leading-tight mb-2">
              Join the Official Global Wives WhatsApp Group
            </h3>

            <p className="text-sm text-[#2A2E24]/80 font-light leading-relaxed mb-6">
              You are officially registered! To ensure you do not miss any summit updates, prayer anchors, schedule announcements, and delegate instructions, please connect with the official attendee group on WhatsApp.
            </p>

            {/* CTAs */}
            <div className="space-y-3">
              <a
                href="https://chat.whatsapp.com/Gxl9V3GkCfxLsLaMNaFUjP?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowWhatsAppModal(false)}
                className="w-full inline-flex items-center justify-center gap-3 py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-sm tracking-wider uppercase shadow-xl transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Join WhatsApp Group Now</span>
              </a>

              <button
                type="button"
                onClick={() => setShowWhatsAppModal(false)}
                className="w-full py-2.5 text-xs text-[#2A2E24]/60 hover:text-[#2A2E24] tracking-wider uppercase font-medium transition-colors"
              >
                I'll Join Later
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
