# @repo/ui

Shared component library built with Shadcn/ui, React, and Tailwind CSS. Provides both atomic components (Shadcn/ui) and complex molecules for use across the monorepo.

## 📦 What's Included

- **Atoms**: Shadcn/ui components (Button, Input, Card, etc.)
- **Molecules**: Complex components built from atoms
- **Icons**: Custom SVG icon components
- **Utils**: Utility functions (cn helper, etc.)

## 🏃 Development

```bash
# Build the package
pnpm build

# Watch for changes during development
pnpm dev

# Add new Shadcn components
npx shadcn@latest add input
npx shadcn@latest add dialog
```

## 🎨 Adding Shadcn Components

1. **Add component via CLI:**
   ```bash
   npx shadcn@latest add component-name
   ```

2. **Export in atoms index:**
   ```ts
   // src/atoms/index.ts
   export { Button } from "./button"
   export { Input } from "./input"
   ```

3. **Rebuild package:**
   ```bash
   pnpm build
   ```

4. **Use in apps:**
   ```tsx
   import { Button, Input } from '@repo/ui'
   ```

## 🧩 Component Architecture

```
src/
├── atoms/              # Shadcn/ui components
│   ├── button.tsx
│   ├── input.tsx
│   ├── icons/          # SVG icon components
│   └── index.ts        # Export all atoms
├── molecules/          # Complex components
│   └── index.ts        # Export all molecules
├── lib/
│   └── utils.ts        # Utility functions (cn, etc.)
└── index.ts            # Main package exports
```

## 🎯 Usage Examples

### Basic Components
```tsx
import { Button, Input, Card, CardContent } from '@repo/ui'

<Card>
  <CardContent>
    <Input placeholder="Enter text..." />
    <Button variant="outline" size="sm">
      Submit
    </Button>
  </CardContent>
</Card>
```

### Icons
```tsx
import { SunIcon, MoonIcon } from '@repo/ui'

<button>
  {isDark ? 
    <SunIcon className="w-5 h-5 text-yellow-500" /> : 
    <MoonIcon className="w-5 h-5 text-gray-700" />
  }
</button>
```

### Custom Molecules
```tsx
import { LoginForm, UserProfile } from '@repo/ui'

<LoginForm onSubmit={handleLogin} />
<UserProfile user={currentUser} />
```

## ⚙️ Configuration

- **Build**: tsup for fast TypeScript compilation
- **Styling**: Tailwind CSS with Shadcn variables
- **TypeScript**: Extends `@repo/typescript-config/react-library.json`
- **Components**: Configured for Shadcn/ui in `components.json`

## 🎨 Theming

The package uses CSS variables for theming. Modify colors in `src/styles/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... */
}
```

## 📋 Scripts

- `pnpm build` - Build the package
- `pnpm dev` - Watch mode for development
- `pnpm lint` - ESLint checking
- `pnpm type-check` - TypeScript checking