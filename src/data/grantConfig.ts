export interface GrantTier {
  id: 'business' | 'ngo' | 'student';
  title: string;
  badge: string;
  amount: string;
  tagline: string;
  description: string;
  qualifications: string[];
}

export const grantTiers: GrantTier[] = [
  {
    id: 'business',
    title: 'Business Empowerment Grant',
    badge: 'WOMEN IN ENTERPRISE',
    amount: 'Up to ₦500,000',
    tagline: 'Seed capital & business scale fund for passionate female entrepreneurs',
    description: 'Designed for registered or emerging female-led micro and small enterprises seeking to scale production, purchase critical equipment, or expand their market reach.',
    qualifications: [
      'Active business or verified minimum viable venture (trade, service, production, agro, tech)',
      'Clear roadmap for how the funds will directly increase revenue or employ others',
      'Demonstrable commitment to societal impact and ethical, kingdom-minded business values'
    ]
  },
  {
    id: 'ngo',
    title: 'NGO & Community Support Fund',
    badge: 'COMMUNITY & MISSIONS',
    amount: 'Up to ₦500,000',
    tagline: 'Direct intervention support for grassroots female non-profits and ministries',
    description: 'Financial backing for impactful outreach, widows’ care, girl-child empowerment, or healthcare interventions transforming communities in Lagos and beyond.',
    qualifications: [
      'Documented record of grassroots outreach, welfare, or developmental service',
      'Specific community intervention project where the grant will be deployed',
      'Clear testimony of how your sphere of influence advances God’s love and societal transformation'
    ]
  },
  {
    id: 'student',
    title: 'Student Refuel Package',
    badge: 'ACADEMIC EXCELLENCE',
    amount: 'Back-to-School Kits + Stipend',
    tagline: 'Equipping female students with essentials for the upcoming academic season',
    description: 'A complete academic kit with premium learning supplies, essential study tools, and tuition support stipends to relieve families and empower young women in secondary and tertiary institutions.',
    qualifications: [
      'Currently enrolled in a recognized secondary, polytechnic, or university program',
      'Passion for academic diligence, personal development, and godly leadership',
      'Brief statement on how this refuel package will ease your educational journey'
    ]
  }
];

export const ageGroups = [
  'Under 18',
  '18 – 25 years',
  '26 – 35 years',
  '36 – 45 years',
  '46 – 55 years',
  '56 years & above'
];

