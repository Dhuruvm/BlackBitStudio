# BlackBIT Studio - Cybork Bot Website

## Project Overview
A dynamic, modern website for BlackBIT Studio showcasing their Discord bot "Cybork" - an all-in-one Discord bot solution. The website features bold black typography, modern animations, purple/cyan color accents, and a dark theme design.

## Tech Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: TailwindCSS + shadcn/ui components
- **Animations**: Framer Motion
- **Routing**: Wouter
- **Backend**: Express.js (minimal - serves static content)

## Design System
- **Primary Color**: Purple (HSL: 280 90% 65%)
- **Secondary Color**: Cyan (HSL: 180 85% 55%)
- **Background**: Deep black (HSL: 0 0% 8%)
- **Typography**: 
  - Display: Space Grotesk (bold headers)
  - Body: Inter (UI text)
  - Code: Fira Code (monospace)

## Animation Features
All animations are lightweight, GPU-accelerated, and follow modern 2025 web animation best practices:

### 1. **Animated Background**
- Canvas-based particle system with connected nodes
- Dynamic grid overlay
- Purple/cyan gradient particles
- Smooth floating motion using requestAnimationFrame

### 2. **Hero Section**
- Animated gradient text with flowing colors
- Pulsing blob backgrounds with Framer Motion
- Smooth entrance animations with staggered delays
- Animated scroll indicator with bouncing arrow
- Animated statistics counters that count up when in view

### 3. **Feature Cards**
- Scroll-triggered entrance animations
- Hover lift effect (y: -8px)
- Icon wiggle animation on hover
- Gradient overlay on hover
- Staggered animation delays (50ms increments)

### 4. **Statistics Counter**
- Animated number counting when scrolled into view
- Easing function: easeOutQuart
- Gradient text with purple to cyan
- Intersection Observer for performance

### 5. **Music Player Showcase**
- Transparent glassmorphic design
- Real-time progress bar
- Animated audio visualizer bars
- Pulse effects when playing
- Volume slider with smooth interactions

### 6. **Bot Showcase**
- Parallax entrance (slide from left/right)
- Feature items slide in with micro-interactions
- Images scale on hover (1.02x)
- Real Discord bot profile images

### 7. **CTA Section**
- Floating gradient blobs with perpetual motion
- Smooth scale and position animations
- Entrance animations when scrolled into view

### 8. **Scroll Progress Bar**
- Fixed top position with gradient colors
- Spring physics for smooth scrolling feedback
- Purple to cyan gradient matching brand

## Pages Structure
- `/` - Home page with all sections
- `/privacy` - Privacy Policy page
- `/terms` - Terms & Conditions page

## Configuration
All content is editable through `site.config.ts`:
- Studio information
- Bot details and stats
- Feature list
- Social links
- Top.gg integration URL

## Key Components
1. **Navigation** - Sticky header with logo and nav links
2. **Hero** - Full-screen hero with animated elements
3. **FeatureCard** - Reusable feature showcase cards
4. **StatsCounter** - Animated statistics display
5. **MusicPlayer** - Interactive music player demo
6. **MusicShowcase** - Music feature section
7. **BotShowcase** - Bot preview with real Discord images
8. **CTASection** - Call-to-action with invite buttons
9. **Footer** - Site footer with links
10. **AnimatedBackground** - Canvas particle background
11. **ScrollProgress** - Top scroll indicator bar
12. **AnimatedCounter** - Number counter component

## Animation Performance
- All animations use `transform` and `opacity` for 60fps
- Framer Motion for declarative animations
- GPU-accelerated with `will-change` where needed
- Intersection Observer for scroll-triggered animations
- RequestAnimationFrame for canvas animations
- Respects `prefers-reduced-motion` for accessibility

## Bot Integration
- Invite URL: Configured in site.config.ts
- Top.gg link: https://top.gg/bot/1379715904287412315
- Real bot profile images displayed in showcase section

## Recent Changes (October 11, 2025)
- ✅ Added Framer Motion animations throughout
- ✅ Implemented animated background with particles
- ✅ Created animated statistics counters
- ✅ Added scroll progress indicator
- ✅ Enhanced all sections with entrance animations
- ✅ Integrated real Cybork bot Discord profile images
- ✅ Added transparent music player with "Haseen" by Talwinder
- ✅ Implemented hover and scroll interactions
- ✅ Created smooth gradient animations on text

## Development
```bash
npm run dev  # Start development server on port 5000
```

## Brand Identity
- **Studio**: BlackBIT Studio - Product-based studio
- **Bot**: Cybork - All-in-one Discord bot
- **Tagline**: "UNMATCHED - NO ONE CAN FAZE YOU"
- **Aesthetic**: Bold, modern, edgy with purple/cyan neon accents on deep black
