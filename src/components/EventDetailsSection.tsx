import React from 'react';
import { Calendar, MapPin, Building2, Sparkles, Bell } from 'lucide-react';
import { eventConfig } from '../data/eventConfig';

export const EventDetailsSection: React.FC = () => {
  const details = [
    {
      label: "Official Event",
      value: `${eventConfig.name} ${eventConfig.year}`,
      status: "Official Convening",
      icon: Sparkles,
      confirmed: true,
    },
    {
      label: "Summit Date",
      value: eventConfig.date,
      status: eventConfig.isDateConfirmed ? "Confirmed" : "Announcement Pending",
      icon: Calendar,
      confirmed: eventConfig.isDateConfirmed,
    },
    {
      label: "Host City & Region",
      value: eventConfig.location,
      status: "Lagos Convening",
      icon: MapPin,
      confirmed: true,
    },
    {
      label: "Venue & Hall",
      value: eventConfig.venue,
      status: eventConfig.isVenueConfirmed ? "Confirmed" : "Venue Finalization Underway",
      icon: Building2,
      confirmed: eventConfig.isVenueConfirmed,
    },
    {
      label: "2027 Official Theme",
      value: eventConfig.theme,
      status: eventConfig.isThemeConfirmed ? "Revealed" : "To Be Unveiled",
      icon: Sparkles,
      confirmed: eventConfig.isThemeConfirmed,
    },
  ];

  return (
    <section id="details" className="py-24 sm:py-36 bg-[#FAF8F5] text-[#2A2E24] relative overflow-hidden editorial-linen">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#5C6B42]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#5C6B42] font-medium">
              EVENT SPECIFICATIONS
            </span>
            <span className="font-script text-xl text-[#C6A96B] ml-2">Lagos, Nigeria</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#3F4B2B] leading-[1.1] tracking-tight font-normal">
            Convening details & <br />
            <span className="italic text-[#5C6B42]">summit logistics.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#2A2E24]/80 font-light leading-relaxed">
            All logistics and schedule announcements are managed in real-time. Registered attendees receive the earliest updates directly via email upon confirmation.
          </p>
        </div>

        {/* Soft Rounded Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="p-7 sm:p-8 rounded-3xl bg-[#F3EFE8] border border-[#EAE1D7] hover:border-[#C6A96B] transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-[#3F4B2B] text-[#C6A96B] flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-medium ${
                        item.confirmed
                          ? 'bg-[#3F4B2B]/10 text-[#3F4B2B]'
                          : 'bg-[#C6A96B]/20 text-[#7D6433]'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <span className="text-xs uppercase tracking-[0.2em] text-[#5C6B42] font-medium block mb-1">
                    {item.label}
                  </span>
                  <div className="font-serif text-2xl text-[#3F4B2B] font-normal">
                    {item.value}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-[#EAE1D7] flex items-center gap-2 text-xs text-[#2A2E24]/60 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A96B]" />
                  <span>Exclusive to Lagos & Global Virtual Stream</span>
                </div>
              </div>
            );
          })}

          {/* Quick Registry Card */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#3F4B2B] text-[#FAF8F5] border border-[#FAF8F5]/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#C6A96B] mb-4">
                <Bell className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Notification Center</span>
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#FAF8F5] mb-2">
                Stay Fully Informed
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF8F5]/80 font-light leading-relaxed">
                Be the very first to know when the official date and venue hall are unveiled. Reserve your space now to receive VIP summit updates.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#FAF8F5]/10">
              <a
                href="#registration-form"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-full bg-[#C6A96B] text-[#1E2514] font-medium text-xs uppercase tracking-wider hover:bg-[#FAF8F5] hover:text-[#3F4B2B] transition-colors"
              >
                Register & Get Notified
              </a>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};