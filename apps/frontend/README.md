# Frontend App

A modern React application built with Vite, TypeScript, and Tailwind CSS, using shared components from the monorepo's UI library.

## 🛠️ Tech Stack

- **React 18** - Latest React with concurrent features
- **Vite** - Fast build tool and dev server
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first styling
- **Shadcn/ui** - Beautiful, accessible components via `@repo/ui`

## 🏃 Development

```bash
# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type checking
pnpm type-check

# Linting
pnpm lint
```

## 📦 Using UI Components

Import components from the shared UI library:

```tsx
import { Button } from '@repo/ui'

function MyComponent() {
  return (
    <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          Store Frontend
        </h1>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Store frontend app is using components from @repo/ui
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">🚀</Button>
          </div>
        </div>
      </div>
  )
}
```

## 🎨 Styling

- **Global styles**: `src/globals.css` (includes Tailwind and Shadcn variables)
- **Tailwind config**: Extends `@repo/tailwind-config`
- **Dark mode**: Configured and ready to use with `dark:` classes
- **CSS variables**: Shadcn color system for consistent theming

## 📁 Project Structure

```
src/
├── main.tsx          # App entry point
├── App.tsx           # Main app component
├── globals.css       # Global styles & variables
└── assets/           # Static assets (images, icons)
```

## 🔧 Configuration

- **TypeScript**: Extends `@repo/typescript-config/vite.json`
- **ESLint**: Extends `@repo/eslint-config/vite`
- **Tailwind**: Extends `@repo/tailwind-config`
- **Path aliases**: `@/*` maps to `./src/*`

## 🚀 Deployment

Build the app and deploy the `dist` folder:

```bash
pnpm build
# Deploy contents of `dist/` folder
```

Compatible with Vercel, Netlify, GitHub Pages, and other static hosting platforms.