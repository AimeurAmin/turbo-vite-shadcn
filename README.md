# Turborepo + Vite + React + Shadcn/ui Template

A modern, production-ready monorepo template featuring Vite, React 18, TypeScript, Tailwind CSS 3, and Shadcn/ui components.

## 🚀 What's Inside

This turborepo includes the following packages and apps:

### Apps
- **`frontend`** - Vite + React 18 + TypeScript application with Tailwind CSS and Shadcn/ui

### Packages
- **`@repo/ui`** - Shared component library with Shadcn/ui atoms and custom molecules
- **`@repo/typescript-config`** - Shared TypeScript configurations for different environments
- **`@repo/tailwind-config`** - Shared Tailwind CSS and PostCSS configuration
- **`@repo/eslint-config`** - Shared ESLint configurations for different project types

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3 + Shadcn/ui
- **Monorepo**: Turborepo + pnpm workspaces
- **Build Tool**: tsup for packages, Vite for apps
- **Linting**: ESLint + Prettier

## 🏃 Quick Start

1. **Clone and install dependencies:**
   ```bash
   git clone git@github.com:AimeurAmin/turbo-vite-shadcn.git
   cd turbo-vite-shadcn
   pnpm install
   ```

2. **Start development:**
   ```bash
   pnpm dev
   ```

3. **Build all packages:**
   ```bash
   pnpm build
   ```

## 📦 Adding Components

Add Shadcn/ui components to your UI package:

```bash
cd packages/ui
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add card
```

Components are automatically available in your frontend app:

```tsx
import { Button, Input, Card } from '@repo/ui'
```

## 🔧 Available Scripts

- `pnpm dev` - Start development servers
- `pnpm build` - Build all packages and apps
- `pnpm lint` - Lint all packages and apps
- `pnpm type-check` - Type check all packages and apps
- `pnpm format` - Format code with Prettier

## 📁 Project Structure

```
├── apps/
│   └── frontend/              # Vite React app
├── packages/
│   ├── ui/                    # Shared component library
│   ├── typescript-config/     # Shared TS configs
│   ├── tailwind-config/       # Shared Tailwind config
│   └── eslint-config/         # Shared ESLint configs
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## 🎨 Customization

### Adding New Apps
```bash
cd apps
npm create vite@latest new-app -- --template react-ts
# Configure to use shared packages
```

### Adding New Packages
```bash
mkdir packages/new-package
cd packages/new-package
npm init -y
# Configure package.json and exports
```

### Themes & Styling
- Modify `packages/tailwind-config/tailwind.config.js` for global theme changes
- Update `packages/ui/src/styles/globals.css` for Shadcn/ui color variables
- Dark mode is configured and ready to use

## 📄 License

MIT License - feel free to use this template for your projects.

## 🤝 Contributing

This is a template repository. Feel free to fork and customize for your needs!