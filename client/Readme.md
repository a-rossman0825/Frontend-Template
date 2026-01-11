# Frontend Template

A modern, production-ready Vue.js frontend template with TypeScript, Bootstrap, and Pinia for rapid application development.

## Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Pinia** - State management
- **Vue Router** - Client-side routing
- **Bootstrap 5** - UI framework and styling
- **Axios** - HTTP client
- **ESLint** - Code linting and formatting

## Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

## Getting Started

### 1. Install Dependencies
** 1. In root folder:
```bash
node setup.js
```

** 2. In client folder:
```bash
npm install
```

### 2. Configure Environment (Optional)

Edit `src/env.ts` to add your API endpoints and keys:

```typescript
// Example: Add your API configuration
export const API_BASE_URL = "https://api.example.com";
export const CLOUDINARY_URL = "your-cloudinary-url";
```

### 3. Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:8080`

### 4. Build for Production

```bash
npm run build
```

Built files will be in the `dist/` directory.

## Project Structure

```
client/
├── src/
│   ├── assets/          # Static assets (images, styles)
│   │   └── scss/        # SCSS stylesheets
│   ├── components/      # Vue components
│   │   ├── ExampleStuff/  # Example/demo components
│   │   └── LoginButton.vue
│   ├── models/          # TypeScript data models
│   ├── pages/           # Page components (routes)
│   ├── services/        # API services
│   │   ├── AuthService.ts
│   │   └── AxiosService.ts
│   ├── stores/          # Pinia stores
│   │   └── AuthStore.ts
│   ├── utils/           # Utility functions
│   │   ├── Logger.ts
│   │   ├── Pop.ts       # Toast/alert utilities
│   │   └── registerGlobalComponents.ts
│   ├── App.vue          # Root component
│   ├── main.ts          # App entry point
│   ├── router.ts        # Route definitions
│   └── env.ts           # Environment configuration
├── public/              # Public static files
├── index.html           # HTML template
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── vite.config.ts       # Vite config
└── eslint.config.ts     # ESLint config
```

## Features

### Authentication Ready

Basic authentication structure with AuthStore and LoginButton component. Ready to integrate with your auth provider.

### Axios Service

Pre-configured Axios instance with error handling in `services/AxiosService.ts`. Set your API baseURL in `env.ts`.

### Pop Utility

Convenient methods for user notifications:

- `Pop.toast()` - Toast notifications
- `Pop.success()` - Success messages
- `Pop.error()` - Error messages
- `Pop.confirm()` - Confirmation dialogs
- `Pop.prompt()` - User input prompts

### Logger

Development logger that automatically silences in production (in `utils/Logger.ts`).

### Global Components

Components in the `components/` folder are automatically registered globally via `registerGlobalComponents.ts`.

## Customization

### Remove Example Components

The `components/ExampleStuff/` folder contains demo components. Delete this folder and update `App.vue` when ready to build your own UI.

### Update Branding

- Update `index.html` title and favicon
- Modify the hero gradient in `components/ExampleStuff/HeroCard.vue`
- Customize Bootstrap variables in `assets/scss/_variables.scss`

### Add Routes

Add new pages in `pages/` and register them in `router.ts`:

```typescript
const routes = [
  {
    path: "/",
    name: "Home",
    component: loadPage("HomePage"),
  },
  {
    path: "/about",
    name: "About",
    component: loadPage("AboutPage"),
  },
];
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint and auto-fix issues

## Notes

- The template uses hash-based routing (`createWebHashHistory`). Change to `createWebHistory` in `router.ts` if you prefer path-based routing.
- Bootstrap components are imported selectively in `assets/scss/_main.scss` to reduce bundle size. Uncomment additional components as needed.
- The `@` alias is configured to point to the `src/` directory for cleaner imports.

## License

MIT
