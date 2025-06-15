# Angular Portfolio

A modern, responsive personal portfolio application built with Angular 19, featuring dynamic content management through JSON configuration and a clean, professional design with dark/light theme support.

## 🚀 Features

- **Modern Angular Architecture**: Built with Angular 19 using standalone components and latest best practices
- **Responsive Design**: Mobile-first approach with Bootstrap 5 integration
- **Dynamic Content**: Portfolio data driven by JSON configuration for easy updates
- **Theme Support**: Dark/light theme toggle with system preference detection
- **Professional Sections**: About, Skills, Experience, Education, Certificates, and Projects
- **Performance Optimized**: Lazy loading, optimized builds, and efficient asset management
- **Cloud Deployment**: Vercel integration with automated CI/CD pipeline
- **Type Safety**: Full TypeScript implementation with strict type checking

## 🛠️ Tech Stack

### Frontend
- **Angular 19** - Modern web framework with standalone components
- **TypeScript 5.6** - Type-safe JavaScript development
- **SCSS** - Enhanced CSS with variables and mixins
- **Bootstrap 5** - Responsive UI framework
- **RxJS** - Reactive programming for state management

### Development & Deployment
- **Angular CLI** - Development tooling and build system
- **Vercel** - Cloud platform for deployment
- **GitHub Actions** - CI/CD automation
- **Font Awesome & Devicons** - Icon libraries
- **Jasmine & Karma** - Testing framework

## 📁 Project Structure

```
angular-portfolio/
├── src/
│   ├── app/
│   │   ├── about/              # About section component
│   │   ├── certificates/       # Certificates display
│   │   ├── contact/            # Contact information
│   │   ├── education/          # Education timeline
│   │   ├── experience/         # Work experience
│   │   ├── header/             # Navigation header
│   │   ├── home/               # Main landing page
│   │   ├── models/             # TypeScript interfaces
│   │   ├── projects/           # Projects showcase
│   │   ├── services/           # Angular services
│   │   ├── skills/             # Skills grid
│   │   └── theme-toggle/       # Theme switcher
│   ├── environments/           # Environment configurations
│   └── styles/                 # Global styles and themes
├── public/
│   └── data/                   # Portfolio data files
├── api/                        # Vercel serverless functions
├── script/                     # Deployment utilities
└── .github/workflows/          # CI/CD pipelines
```

## 🏗️ Architecture

### Component Architecture
- **Standalone Components**: Modern Angular approach without NgModules
- **Service-Based State**: Theme and data management through Angular services
- **Reactive Programming**: RxJS observables for theme state management
- **Type-Safe Models**: Comprehensive TypeScript interfaces for all data structures

### Data Management
- **JSON-Driven Content**: Portfolio data stored in configurable JSON files
- **Environment-Based Configuration**: Different data sources for development/production
- **Serverless API**: Vercel functions for dynamic data fetching
- **Local Development Support**: Static JSON files for offline development

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Angular CLI 19+
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/QianqianQ/angular-portfolio.git
   cd angular-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure portfolio data**
   ```bash
   # Copy sample data file
   cp public/data/data.sample.json public/data/data.json

   # Edit the data file with your information
   # Update sections: about, experience, education, skills, certificates, projects
   ```

4. **Start development server**
   ```bash
   npm start
   # or
   ng serve
   ```

5. **Open in browser**
   ```
   http://localhost:4200
   ```

### Available Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm run watch      # Build with file watching
npm test           # Run unit tests
npm run lint       # Run linting (if configured)
```

## 📊 Data Configuration

### Portfolio Data Structure

The portfolio content is managed through JSON files in `public/data/`:

```json
{
  "about": {
    "FULL_NAME": "Your Name",
    "ABOUT_ME": "Your professional summary"
  },
  "contactInfo": [
    {
      "type": "email",
      "icon": "fas fa-envelope",
      "label": "Email",
      "value": "your.email@example.com",
      "link": "mailto:your.email@example.com"
    }
  ],
  "experience": [...],
  "education": [...],
  "skills": [...],
  "certificates": [...],
  "projects": [...]
}
```

### Customization Guide

1. **Personal Information**: Update `about` section with your details
2. **Contact Details**: Modify `contactInfo` array with your social links
3. **Professional Experience**: Add your work history in `experience`
4. **Education**: Include your academic background
5. **Skills**: List your technical skills with appropriate icons
6. **Certificates**: Showcase your certifications with images and links
7. **Projects**: Display your portfolio projects

## 🌐 Deployment

### Vercel Deployment

1. **Prepare data file**
   ```bash
   # Upload data to Vercel Blob Storage
   node script/uploadFile.js data/data.json
   ```

2. **Configure environment variables**
   - `PORTFOLIO_JSON_URL`: URL of uploaded data.json file
   - `BLOB_READ_WRITE_TOKEN`: Vercel blob storage token

3. **Deploy to Vercel**
   ```bash
   # Preview deployment
   vercel

   # Production deployment
   vercel --prod
   ```

### GitHub Actions CI/CD

The project includes automated deployment workflows:

- **Preview Deployment**: Triggers on pushes to master branch
- **Environment Management**: Handles Vercel environment variables
- **Build Optimization**: Automated production builds

Required GitHub Secrets:
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
- `VERCEL_TOKEN`

## 🎨 Theming

### Theme System
- **Automatic Detection**: Respects system color scheme preference
- **Manual Toggle**: User can switch between light/dark themes
- **Persistent Storage**: Theme preference saved in localStorage
- **Smooth Transitions**: CSS transitions for theme switching

### Customizing Themes
Modify theme variables in `src/styles/`:
- `_variables.scss`: Color definitions and spacing
- `_themes.scss`: Light and dark theme implementations
- `styles.scss`: Global styles and theme application

## 📈 Performance

### Optimization Features
- **Lazy Loading**: Route-based code splitting
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Image and font optimization
- **Bundle Analysis**: Webpack bundle analyzer integration
- **Data Caching**: Service-level caching with retry logic
- **Error Handling**: Graceful fallbacks and user feedback

### Performance Monitoring
- **Build Budgets**: Configured size limits for bundles
- **Lighthouse Integration**: Performance auditing
- **Core Web Vitals**: Monitoring key performance metrics

## 🏗️ Architecture Improvements

### Recommended Structure
Instead of moving components to a separate repository, organize within the same repo:

```
src/app/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── loading-spinner/
│   │   └── theme-toggle/
│   ├── portfolio/             # Portfolio-specific components
│   │   ├── about/
│   │   ├── experience/
│   │   └── skills/
│   └── layout/                # Layout components
│       └── header/
├── shared/                    # Shared utilities
│   ├── models/
│   ├── services/
│   └── testing/
└── core/                      # Core application logic
    ├── guards/
    └── interceptors/
```

### Why Not Separate Component Repository?
- **Tight Coupling**: Components depend on specific data models and services
- **Limited Reusability**: Portfolio components are highly specialized
- **Maintenance Overhead**: Complex versioning and deployment
- **Small Scale**: Single-purpose application doesn't justify separation

## 🔧 Development

### Code Standards
- **TypeScript Strict Mode**: Enhanced type safety
- **ESLint Configuration**: Code quality enforcement
- **Prettier Integration**: Consistent code formatting
- **Angular Style Guide**: Following official conventions

## 🚀 Additional Improvements Implemented

### 1. Enhanced Error Handling
- **Centralized Error Service**: Global error management with user-friendly messages
- **Retry Logic**: Automatic retry for failed API requests
- **Fallback Data**: Graceful degradation when data loading fails
- **Loading States**: Visual feedback during data fetching

### 2. SEO Optimization
- **Meta Tags Management**: Dynamic title, description, and social media tags
- **Structured Data**: Schema.org markup for better search visibility
- **Canonical URLs**: Proper URL canonicalization
- **Open Graph**: Enhanced social media sharing

### 3. Testing Infrastructure
- **Test Utilities**: Reusable testing helpers and mock data
- **Component Testing**: Improved test setup and assertions
- **Service Testing**: Mock services and data providers
- **Integration Testing**: End-to-end user workflows

### 4. Performance Enhancements
- **Data Caching**: Service-level caching with shareReplay
- **Loading Spinner**: Reusable loading component
- **Error Boundaries**: Graceful error handling
- **Type Safety**: Comprehensive TypeScript interfaces

### 5. Code Organization
- **Shared Services**: Centralized business logic
- **Utility Components**: Reusable UI elements
- **Testing Helpers**: Standardized test utilities
- **Type Definitions**: Strong typing throughout

