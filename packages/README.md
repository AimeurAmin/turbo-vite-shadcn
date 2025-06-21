# Configuration Packages

Shared configuration packages for the monorepo, providing consistent TypeScript, Tailwind, and ESLint settings across all apps and packages.

## @repo/typescript-config

Shared TypeScript configurations for different project types.

### Configurations Available

- **`base.json`** - Common TypeScript settings
- **`vite.json`** - Vite-specific configuration (extends base)
- **`react-library.json`** - React library configuration (extends base)

### Usage

```json
{
  "extends": "@repo/typescript-config/vite.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## @repo/tailwind-config

Shared Tailwind CSS and PostCSS configuration with Shadcn/ui variables.

### Features

- 🎨 Shadcn/ui color system
- 🌙 Dark mode support
- 📱 Responsive design utilities
- 🎯 Custom animations
- 📦 Content paths for monorepo

### Usage

**Tailwind Config:**
```js
const baseConfig = require("@repo/tailwind-config/tailwind.config.js")

module.exports = {
  ...baseConfig,
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add your specific paths
  ],
}
```

**PostCSS Config:**
```js
module.exports = require("@repo/tailwind-config/postcss.config.js")
```

---

## @repo/eslint-config

Shared ESLint configurations for different project types.

### Configurations Available

- **`base`** - Common ESLint rules
- **`react`** - React-specific rules (extends base)
- **`vite`** - Vite + React rules (extends react)

### Usage

```js
module.exports = {
  extends: ["@repo/eslint-config/vite"],
}
```

### Rules Included

- TypeScript ESLint rules
- React hooks rules
- React refresh rules (for Vite)
- Import/export best practices
- Code style consistency

---

## 🔧 Extending Configurations

### Adding New TypeScript Config

1. Create new config file in `packages/typescript-config/`
2. Add to `exports` in `package.json`
3. Use in projects: `"extends": "@repo/typescript-config/new-config.json"`

### Customizing Tailwind

1. Extend the base config in your project
2. Override specific values:

```js
const baseConfig = require("@repo/tailwind-config/tailwind.config.js")

module.exports = {
  ...baseConfig,
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme.extend,
      colors: {
        ...baseConfig.theme.extend.colors,
        brand: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

### Adding ESLint Rules

1. Extend base configurations
2. Add project-specific rules:

```js
module.exports = {
  extends: ["@repo/eslint-config/react"],
  rules: {
    // Your custom rules
    "no-console": "warn",
    "prefer-const": "error",
  }
}
```

## 📦 Installation

These packages are automatically available in the monorepo workspace. No manual installation required.

## 🔄 Updates

When updating shared configurations:

1. Make changes to the config packages
2. No rebuild needed (configs are consumed directly)
3. Restart dev servers to pick up changes