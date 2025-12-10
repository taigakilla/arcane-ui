# @taigakilla/arcane-ui

A mystical, arcane-themed React component library built with TypeScript and Tailwind CSS.

## Installation

```bash
npm install @taigakilla/arcane-ui
```

## Peer Dependencies

Make sure you have these installed in your project:

```bash
npm install react react-dom lucide-react
```

## Usage

### Import Styles

Add the CSS import to your app's entry point:

```typescript
import "@taigakilla/arcane-ui/dist/styles.css";
```

### Components

#### Button

```tsx
import { Button } from "@taigakilla/arcane-ui";

function App() {
  return (
    <>
      <Button variant="primary">Primary Action</Button>
      <Button variant="secondary">Secondary Action</Button>
      <Button variant="ghost">Ghost Action</Button>
      <Button glow>Mystical Glow Effect</Button>
    </>
  );
}
```

**Props:**

- `variant`: `'primary' | 'secondary' | 'ghost'` (default: `'primary'`)
- `size`: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `glow`: `boolean` - Adds arcane glow effect

---

#### Card

```tsx
import { Card } from "@taigakilla/arcane-ui";

function App() {
  return (
    <Card variant="elevated" glow>
      <h2>Arcane Card</h2>
      <p>Dark themed card with mystical borders.</p>
    </Card>
  );
}
```

**Props:**

- `variant`: `'default' | 'elevated' | 'bordered'` (default: `'default'`)
- `glow`: `boolean` - Adds golden glow effect

---

#### Input

```tsx
import { Input } from "@taigakilla/arcane-ui";

function App() {
  return (
    <Input
      label="Email"
      type="email"
      placeholder="Enter your email"
      error="Invalid email format"
    />
  );
}
```

**Props:**

- `label`: `string` - Floating label text
- `error`: `string` - Error message to display
- `glow`: `boolean` - Adds golden glow effect

---

#### Badge

```tsx
import { Badge } from "@taigakilla/arcane-ui";

function App() {
  return (
    <>
      <Badge variant="success">Active</Badge>
      <Badge variant="error">Expired</Badge>
      <Badge variant="warning">Expiring Soon</Badge>
      <Badge variant="info">3 uses left</Badge>
    </>
  );
}
```

**Props:**

- `variant`: `'default' | 'success' | 'warning' | 'error' | 'info'` (default: `'default'`)
- `size`: `'sm' | 'md' | 'lg'` (default: `'md'`)

---

#### Toast

```tsx
import { Toast } from "@taigakilla/arcane-ui";

function App() {
  return (
    <Toast
      variant="success"
      title="Coupon Applied!"
      description="You saved $10 on your order"
    />
  );
}
```

**Props:**

- `variant`: `'success' | 'error' | 'warning' | 'info'` (default: `'info'`)
- `title`: `string` - Toast title
- `description`: `string` - Toast description

---

## Theme

Arcane UI uses a dark mystical theme with the following color palette:

- **Dark Background**: Deep slate blues (#0F172A, #020617)
- **Gold Accents**: Tarot card inspired gold (#F59E0B)
- **Blue Magic**: Mystical blue tones (#1E40AF, #3B82F6)
- **Purple Accents**: Arcane purple (#8B5CF6)

Components feature:

- Glow effects with golden/blue shadows
- Smooth transitions and hover states
- Accessible focus states
- Responsive sizing

---

## Utilities

### cn (className merger)

Utility function for merging Tailwind classes:

```tsx
import { cn } from "@taigakilla/arcane-ui";

const MyComponent = ({ className }) => (
  <div className={cn("base-class", className)}>Content</div>
);
```

---

## Development

This library uses:

- **Biome** for linting and formatting
- **Husky** for git hooks
- **Conventional Commits** for commit messages
- **tsup** for building

---

## License

MIT
