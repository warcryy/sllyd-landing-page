# Sllyd Landing Page - React Version

A modern React implementation of the sllyd landing page with all original effects and functionality preserved.

## Features

- **Typing Animation**: Dynamic typing effect on the hero title
- **Parallax Effects**: Smooth parallax scrolling for images
- **3D Fluid Glass**: Interactive 3D fluid glass effect with mouse tracking
- **Intersection Observer**: Animated feature sections on scroll
- **Email Integration**: Google Sheets integration for waitlist signup
- **Responsive Design**: Fully responsive across all devices
- **Progress Indicator**: Scroll progress bar
- **Smooth Scrolling**: Enhanced scroll-to-top functionality
- **Form Validation**: Real-time email validation
- **Notifications**: Toast notifications for user feedback
- **3D Navigation**: Interactive 3D navigation elements

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd SLLYD_WORKDIR/sllyd-landing-page-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build

To create a production build:

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/        # React components
│   ├── About.js
│   ├── Experience.js
│   ├── Features.js
│   ├── FluidGlass.js
│   ├── FluidGlassFallback.js
│   ├── FluidGlassSection.js
│   ├── Hero.js
│   ├── Logo.js
│   ├── Notification.js
│   ├── ProgressBar.js
│   ├── ScrollToTop.js
│   └── Waitlist.js
├── hooks/            # Custom React hooks
│   ├── useNotification.js
│   └── useParallax.js
├── services/         # API services
│   └── emailService.js
├── styles/          # CSS files
│   └── App.css
├── utils/           # Utility functions
│   └── validation.js
├── App.js           # Main App component
└── index.js         # Entry point
```

## Technologies Used

- React 18
- Three.js for 3D graphics
- React Three Fiber for React-Three.js integration
- React Three Drei for 3D utilities
- Maath for mathematical utilities
- CSS3 with advanced animations
- Intersection Observer API
- Fetch API for email submissions
- Google Apps Script integration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Optimized images and assets
- Efficient scroll event handling
- Mobile-specific optimizations
- Smooth animations with hardware acceleration
- Responsive image loading
- 3D model fallbacks with built-in geometry
- WebGL optimization for 3D effects
- Automatic 3D model detection and loading

## 3D Models Setup

The FluidGlass component supports custom 3D models for enhanced visual effects:

1. **Optional 3D Models**: Place GLB files in `public/assets/3d/`:
   - `lens.glb` - For lens mode (cylinder geometry)
   - `bar.glb` - For bar/navigation mode  
   - `cube.glb` - For cube mode

2. **Automatic Fallback**: If models aren't found, the component automatically uses built-in Three.js geometry

3. **Model Requirements**:
   - Format: GLB (binary glTF)
   - Geometry names: "Cylinder" for lens, "Cube" for others
   - Reasonable scale (1-3 units)
   - Optimized for web performance

See `public/assets/3d/simple-models-guide.md` for creation instructions.
