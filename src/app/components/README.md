# Component Organization

## Structure
```
src/app/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── theme-toggle/
│   │   ├── loading-spinner/
│   │   └── scroll-to-top/
│   ├── portfolio/             # Portfolio-specific components
│   │   ├── about/
│   │   ├── experience/
│   │   ├── education/
│   │   ├── skills/
│   │   ├── projects/
│   │   └── certificates/
│   └── layout/                # Layout components
│       ├── header/
│       ├── footer/
│       └── navigation/
├── shared/                    # Shared utilities
│   ├── models/
│   ├── services/
│   └── pipes/
└── core/                      # Core application logic
    ├── guards/
    ├── interceptors/
    └── constants/
```

## Guidelines
- **UI Components**: Generic, reusable across different contexts
- **Portfolio Components**: Specific to portfolio functionality
- **Layout Components**: Application structure and navigation
- **Shared**: Common utilities and models
- **Core**: Application-wide services and logic