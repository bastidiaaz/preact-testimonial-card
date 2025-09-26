# Preact Testimonial Card

A modern, accessible, and performant testimonial card component built with Preact, TypeScript, and Tailwind CSS.

## 🚀 Features

### Accessibility
- **Semantic HTML**: Uses `<article>`, `<header>`, and `<section>` elements for proper structure
- **ARIA Support**: Comprehensive ARIA labels and roles for screen readers
- **Keyboard Navigation**: Full keyboard accessibility with focus management
- **Screen Reader Friendly**: Descriptive alt text and proper content labeling
- **High Contrast Support**: Enhanced visibility for users with visual impairments
- **Reduced Motion Support**: Respects user motion preferences

### Performance
- **Component Memoization**: Prevents unnecessary re-renders with React.memo
- **Lazy Loading**: Images load asynchronously to improve page performance
- **Hardware Acceleration**: CSS optimizations for smooth animations
- **CSS Containment**: Optimized rendering with layout and paint containment

### Modern Development
- **TypeScript**: Full type safety and better developer experience
- **Tailwind CSS**: Utility-first styling with responsive design
- **Vite**: Fast build tooling and hot module replacement
- **ESLint**: Code quality and consistency

## 🛠️ Tech Stack

- **Framework**: Preact 10.26.9
- **Language**: TypeScript 5.9.2
- **Styling**: Tailwind CSS 4.1.13
- **Build Tool**: Vite 7.0.4
- **Linting**: ESLint 9.36.0

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Usage

The Card component accepts the following props:

```tsx
interface CardProps {
  profile: string;    // Profile image URL
  name: string;       // User's full name
  username: string;   // User's username/handle
  content: string;    // Testimonial content
}
```

### Example

```tsx
import { Card } from './components/Card';

<Card
  profile="/path/to/profile.jpg"
  name="Sarah Dole"
  username="sarahdole"
  content="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
/>
```

## 🎨 Design Features

- **Responsive Design**: Adapts to different screen sizes
- **Modern UI**: Clean, minimalist design with subtle shadows
- **Focus States**: Clear visual feedback for keyboard navigation
- **Typography**: Optimized font rendering and line spacing
- **Color Scheme**: Neutral colors with proper contrast ratios

## ♿ Accessibility Features

- **WCAG Compliant**: Meets Web Content Accessibility Guidelines
- **Screen Reader Support**: Proper ARIA labels and semantic structure
- **Keyboard Navigation**: Tab-friendly with visible focus indicators
- **High Contrast Mode**: Enhanced visibility for users with visual needs
- **Motion Preferences**: Respects `prefers-reduced-motion` settings

## ⚡ Performance Optimizations

- **Memoization**: Component only re-renders when props change
- **Lazy Loading**: Images load when needed, not all at once
- **Hardware Acceleration**: CSS transforms for smooth animations
- **CSS Containment**: Optimized rendering pipeline
- **Async Decoding**: Non-blocking image processing

## 🏗️ Project Structure

```
src/
├── components/
│   └── Card.tsx          # Main testimonial card component
├── pages/
│   └── Home/
│       ├── index.tsx     # Home page component
│       └── style.css     # Page-specific styles
├── assets/
│   ├── profile-thumbnail.png
│   └── preact.svg
├── style.css             # Global styles and utilities
└── index.tsx             # Application entry point
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd preact-testimonial-card
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Development

### Code Quality
- ESLint configuration for consistent code style
- TypeScript for type safety
- Preact-specific linting rules

### Build Process
- Vite for fast development and building
- TypeScript compilation
- CSS processing with Tailwind
- Asset optimization

## 🌟 Key Improvements Made

### Accessibility Enhancements
- ✅ Semantic HTML structure with proper roles
- ✅ ARIA labels for screen reader compatibility
- ✅ Keyboard navigation support
- ✅ High contrast and reduced motion support
- ✅ Descriptive alt text for images

### Performance Optimizations
- ✅ Component memoization to prevent unnecessary re-renders
- ✅ Lazy loading for images
- ✅ CSS containment for optimized rendering
- ✅ Hardware acceleration for smooth animations
- ✅ Async image decoding

## 📄 License

This project is part of a portfolio showcase and is available for educational purposes.

## 🤝 Contributing

Feel free to submit issues and enhancement requests. This project serves as a demonstration of modern web development practices with a focus on accessibility and performance.
