# BlackBIT Studio Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium Discord bot showcases (MEE6, Dyno), modern tech studios, and cyberpunk aesthetics to create a bold, distinctive brand identity that commands attention in the gaming/developer space.

## Core Design Principles
- **Bold Minimalism**: Strike a balance between visual impact and clean functionality
- **Tech-Forward Aesthetic**: Embrace modern, cutting-edge design patterns that reflect innovation
- **Dynamic Interaction**: Every scroll and hover should feel intentional and rewarding
- **Dark Dominance**: Leverage deep blacks as the foundation for maximum contrast and drama

---

## Color Palette

### Dark Mode (Primary)
- **Background Base**: 0 0% 8% (deep charcoal black)
- **Surface Elevated**: 0 0% 12% (card backgrounds)
- **Primary Brand**: 280 90% 65% (vibrant electric purple - for CTAs and key accents)
- **Secondary Accent**: 180 85% 55% (cyan blue - for highlights and interactive elements)
- **Text Primary**: 0 0% 95% (near white)
- **Text Secondary**: 0 0% 65% (muted gray for descriptions)
- **Success/Stats**: 140 75% 55% (vibrant green for metrics)
- **Border Subtle**: 0 0% 20% (for separators and card edges)

### Gradient Applications
- **Hero Gradient**: Diagonal gradient from deep purple (280 90% 25%) to dark cyan (180 80% 20%)
- **Card Glow Effects**: Subtle purple/cyan radial gradients at 10% opacity on hover
- **Accent Overlays**: Linear gradients for section dividers and feature highlights

---

## Typography

### Font Stack
- **Primary Display**: 'Space Grotesk' (Bold, Extra Bold) - for headers and hero text
- **Secondary UI**: 'Inter' (Medium, Semi-Bold, Bold) - for navigation, buttons, and body
- **Monospace/Code**: 'Fira Code' - for command examples and technical details

### Hierarchy
- **Hero Title**: text-6xl lg:text-8xl font-extrabold (massive, attention-grabbing)
- **Section Headers**: text-4xl lg:text-6xl font-bold
- **Feature Titles**: text-2xl lg:text-3xl font-semibold
- **Body Text**: text-base lg:text-lg font-medium (slightly elevated weight)
- **Captions**: text-sm text-gray-400

---

## Layout System

### Spacing Primitives
Utilize Tailwind units: **2, 4, 8, 12, 16, 24** for consistent rhythm
- Component padding: p-8 to p-16
- Section spacing: py-24 to py-32
- Grid gaps: gap-8 to gap-12
- Card padding: p-6 to p-8

### Grid Structure
- **Container**: max-w-7xl mx-auto px-6 lg:px-8
- **Multi-column**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for feature cards
- **Asymmetric Layouts**: 60/40 split for bot showcase with image + features

---

## Component Library

### Navigation
- **Sticky header** with glassmorphism backdrop (backdrop-blur-lg bg-black/70)
- Logo + centered nav links + CTA button (Top.gg/Invite Bot)
- Mobile: Animated hamburger menu with slide-in panel

### Hero Section
- **Full-screen impact** (min-h-screen) with animated gradient background
- Diagonal grid pattern overlay (subtle lines in dark purple/cyan)
- Centered bold headline + subtitle + dual CTAs (Invite Bot + View Features)
- Floating 3D bot mascot or dashboard preview mockup (right side on desktop)
- Particle effects or animated geometric shapes in background

### Feature Cards
- **Glassmorphic cards** with dark background, subtle border glow
- Icon + title + description layout
- Hover: Scale transform (1.02) + border glow intensifies + subtle shadow
- Grid layout: 3 columns on desktop, stack on mobile

### Stats Counter Section
- **Animated numbers** counting up on scroll into view
- 3-4 key metrics (Servers, Users, Commands, Uptime)
- Large bold numbers with labels beneath
- Gradient text effect on numbers

### Bot Showcase
- **Split layout**: Left - Feature list with checkmarks, Right - Dashboard/UI preview image
- Interactive feature toggles showing different bot capabilities
- Top.gg rating badge integration with live stats

### Footer
- **Multi-column layout**: Studio info | Quick Links | Legal | Social Media
- Minimalist with subtle dividers
- Privacy Policy & Terms links prominently placed
- Social icons with hover glow effect

---

## Animations & Interactions

### Page Load
- Staggered fade-in for hero elements (title → subtitle → CTAs)
- Subtle parallax scroll on hero background

### Scroll Animations
- Fade-up on section entry (intersection observer)
- Number counter animation on stats visibility
- Parallax layers moving at different speeds

### Hover States
- Cards: Transform scale(1.02) + glow border + shadow elevation
- Buttons: Background color shift + subtle lift
- Links: Underline slide-in animation

### Transitions
- All interactions: transition-all duration-300 ease-in-out
- Minimal but purposeful - avoid animation overload

---

## Images

### Hero Image
**Large Hero Graphic**: Abstract 3D visualization of a Discord bot interface or cyberpunk-themed command dashboard
- Placement: Right 40% of hero section on desktop, below headline on mobile
- Style: Dark with purple/cyan accents, floating UI elements, depth of field effect
- Alternative: Animated SVG illustration of bot in action

### Feature Section Images
- Dashboard mockup showing bot controls
- Discord chat interface with bot commands in action
- Server statistics visualization

### Background Elements
- Subtle dot grid pattern across dark sections
- Gradient mesh overlays for depth
- Abstract geometric shapes (triangles, hexagons) as decorative elements

---

## Accessibility & Polish

- Maintain AAA contrast ratios for text on dark backgrounds
- Focus states with visible purple outline (2px solid, offset 2px)
- Reduced motion preference respected (disable parallax/animations)
- All interactive elements minimum 44x44px touch targets
- Semantic HTML structure for screen readers

---

## Page Structure

1. **Hero**: Bold headline, dual CTAs, animated background, floating bot preview
2. **Features Grid**: 6-9 feature cards in 3-column layout with icons
3. **Stats Counter**: Animated metrics section
4. **Bot Showcase**: Split layout with Top.gg integration
5. **CTA Section**: Strong invitation to add bot with preview of benefits
6. **Footer**: Comprehensive links, legal, social

**Privacy Policy & Terms Pages**: Clean, readable typography on dark background with sidebar navigation for sections, max-w-4xl centered content.