# Component Organization

## Component Guidelines

### UI Components
- **Purpose**: Generic, reusable components across different contexts
- **Dependencies**: Minimal external dependencies
- **Examples**: Loading spinner, theme toggle, buttons, modals
- **Usage**: Can be used in any part of the application

### Portfolio Components
- **Purpose**: Specific to portfolio functionality and data
- **Dependencies**: Depend on DataService and portfolio data models
- **Examples**: About, skills, experience, education sections
- **Usage**: Display portfolio-specific information

### Layout Components
- **Purpose**: Application structure, navigation, and page layout
- **Dependencies**: May depend on routing and global services
- **Examples**: Header, footer, navigation, page containers
- **Usage**: Provide consistent layout and navigation

## Development Standards

### Component Structure
Each component follows Angular best practices:
- **Standalone Components**: Using Angular 19 standalone component approach
- **TypeScript**: Full type safety with interfaces
- **SCSS**: Component-scoped styling
- **Animations**: Smooth transitions and micro-interactions

### Data Flow
- **Services**: Components consume data through Angular services
- **Models**: Strong typing with TypeScript interfaces
- **State Management**: Reactive programming with RxJS observables
- **Error Handling**: Graceful error handling with fallback states

### Naming Conventions
- **Files**: kebab-case (e.g., `about.component.ts`)
- **Classes**: PascalCase (e.g., `AboutComponent`)
- **Selectors**: kebab-case with app prefix (e.g., `app-about`)
- **Properties**: camelCase (e.g., `fullName`)

## Adding New Components

### UI Component
```bash
ng generate component components/ui/new-component --standalone
```

### Portfolio Component
```bash
ng generate component components/portfolio/new-section --standalone
```

### Layout Component
```bash
ng generate component components/layout/new-layout --standalone
```
