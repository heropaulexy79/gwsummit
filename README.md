# Global Wives Summit 2027 (GWS 2027) — Premium Event Website

An editorial, luxury-grade, fully responsive event landing page built for **Global Wives Summit 2027 (GWS 2027)**.

## 🎨 Creative & Design System

- **Palette**:
  - Primary Deep Olive: `#3F4B2B`
  - Secondary Olive: `#69764A`
  - Muted Sage: `#A5AE8B`
  - Warm Ivory: `#F6F3EB`
  - Soft Cream: `#EAE5D8`
  - Champagne Gold: `#C6A96B`
  - Charcoal: `#252820`
  - Crisp White: `#FFFFFF`
- **Typography**:
  - Headings: `Cormorant Garamond` & `Playfair Display`
  - Body & UI: `Manrope`
- **Aesthetic**: High-end editorial magazine layout, generous whitespace, asymmetrical storytelling compositions, custom SVG photography archive placeholders, interactive lightbox, and responsive mobile registration pill.

---

## 🏛️ Website Architecture & Storytelling Sequence

1. **Section 1 — Navigation (`Navbar.tsx`)**: Transparent over hero with smooth transition to solid backdrop upon scroll, mobile drawer, smooth navigation anchors.
2. **Section 2 — Hero Experience (`HeroSection.tsx`)**: 90-100vh full-width editorial hero, headline *"SHE WAS NEVER MEANT TO WALK THIS JOURNEY ALONE"*, live convening badge, scroll indicator.
3. **Section 3 — The Story / Emotional Connection (`StorySection.tsx`)**: Warm ivory narrative section celebrating the woman behind every journey with magazine portraiture and pull quote.
4. **Section 4 — Introducing The Summit (`SummitIntroduction.tsx`)**: Deep Olive Green background with three refined editorial pillars (`01 CONNECTION`, `02 GROWTH`, `03 PURPOSE`).
5. **Section 5 — GWS 2026 Recap (`GallerySection.tsx` & `GalleryLightbox.tsx`)**: Asymmetrical editorial masonry grid showcasing authentic moments from the 2026 summit, equipped with high-resolution lightbox viewer, keyboard navigation, and dedicated asset paths (`/public/images/gws-2026/`).
6. **Section 6 — What to Expect in 2027 (`ExpectationsSection.tsx`)**: Warm Ivory layout highlighting meaningful conversations, inspiring teachings, and international cohorts.
7. **Section 7 — Event Details (`EventDetailsSection.tsx`)**: Centralized logistics table indicating official dates, venue, and theme status ("To Be Announced" per organizers' requirements).
8. **Section 8 — Registration CTA (`RegistrationCTA.tsx`)**: Deep Olive Green, high-contrast, compelling call-to-action block.
9. **Section 9 — Registration Form (`RegistrationForm.tsx`)**: Accessible, validated delegate enrollment form with interactive loading states, client-side persistence, error boundaries, and dedicated confirmation screen.
10. **Section 10 — Footer (`Footer.tsx`)**: Deep Olive Green footer with brand wordmark, quick links, contact info, and social channels.

---

## 🔌 Backend Integration Guide (Registration Form)

The frontend form in `src/components/RegistrationForm.tsx` is structured and prepped for direct plug-in to any backend provider:

### 1. Firebase (Firestore)
```typescript
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

await addDoc(collection(db, 'gws_registrations_2027'), {
  ...formData,
  createdAt: serverTimestamp(),
});
```

### 2. Supabase
```typescript
import { supabase } from '../lib/supabase';

const { error } = await supabase
  .from('gws_registrations')
  .insert([formData]);
```

### 3. REST API / Webhook (e.g. Zapier, Make, Brevo, Mailchimp)
```typescript
const response = await fetch('/api/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

---

## 📁 How to Update Summit Assets & Details

- **Event Information**: Edit `src/data/eventConfig.ts` to update dates, venue, city, or official theme once confirmed.
- **Summit Photographs**: Drop new photography into `public/images/gws-2026/` matching the filenames in `src/data/galleryData.ts`:
  - `gws-2026-main.jpg`
  - `gws-2026-worship.jpg`
  - `gws-2026-speakers.jpg`
  - `gws-2026-fellowship.jpg`
  - `gws-2026-audience.jpg`
  - `gws-2026-moments.jpg`

---

## 🚀 Development & Build

```bash
# Run local dev server
npm run dev

# Create optimized production build
npm run build

# Preview build
npm run preview
```
