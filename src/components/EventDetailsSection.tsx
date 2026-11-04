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
      label: "Venue & Hall",
      value: eventConfig.venue,
      status: eventConfig.isVenueConfirmed ? "Confirmed" : "Venue Finalization Underway",
      icon: Building2,
      confirmed: eventConfig.isVenueConfirmed,
    },
    {
      label: "Host City & Country",
      value: eventConfig.location,
      status: "Announcement Pending",
      icon: MapPin,
      confirmed: false,
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
    <section id="details" className="py-24 sm:py-32 bg-[#EAE5D8] text-[#252820] relative overflow-hidden editorial-grain">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[1.5px] bg-[#3F4B2B]" />
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#69764A] font-semibold">
              EVENT SPECIFICATIONS
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#3F4B2B] leading-[1.1] tracking-tight">
            CONVENING DETAILS & <br />
            <span className="italic font-normal text-[#69764A]">SUMMIT LOGISTICS.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#252820]/80 font-light leading-relaxed">
            All logistics and schedule announcements are managed in real-time through our central event registry. Registered attendees receive the earliest notifications upon official confirmation.
          </p>
        </div>

        {/* Editorial Table / Cards of Details */}
        <div className="bg-[#F6F3EB] border border-[#69764A]/30 divide-y divide-[#69764A]/20 shadow-md">
          {details.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#FFFFFF] transition-colors"
              >
                {/* Left side: Icon + Label */}
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#3F4B2B] text-[#C6A96B] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#69764A]">
                      {item.label}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#3F4B2B] font-semibold">
                      {item.value}
                    </h3>
                  </div>
                </div>

                {/* Right side: Status Badge */}
                <div className="flex items-center gap-3 md:justify-end">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono tracking-wider uppercase border ${
                      item.confirmed
                        ? 'bg-emerald-900/10 text-emerald-800 border-emerald-400'
                        : 'bg-[#69764A]/10 text-[#69764A] border-[#69764A]/40'
                    }`}
                  >
                    {!item.confirmed && <Bell className="w-3 h-3 animate-pulse text-[#C6A96B]" />}
                    {item.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informational Notification Banner */}
        <div className="mt-8 p-6 bg-[#3F4B2B] text-[#F6F3EB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C6A96B] animate-ping" />
            <span className="font-light">
              Exact dates and international hotel accommodation blocks will be sent to registered participants first.
            </span>
          </div>
          <a
            href="#register"
            className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C6A96B] hover:text-[#FFFFFF] underline underline-offset-4 shrink-0"
          >
            NOTIFY ME FIRST &rarr;
          </a>
        </div>

      </div>

    </section>
  );
};

