# 🚀 Shadcn Dashboard – React + Vite + TypeScript

A modern, fully customizable dashboard starter built using:

- **React 19**
- **Vite (Rolldown)**
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui**
- **Redux Toolkit**
- **React Router v7**
- **Recharts**
- **Framer Motion**

This project is optimized for performance, developer experience, and clean UI architecture.

## 📦 Tech Stack

### **Frontend**

- React 19
- React Router DOM 7
- Redux Toolkit
- shadcn/ui (Radix UI + Tailwind)
- Framer Motion
- Recharts

### **Styling**

- TailwindCSS 4
- Scrollbar Hide
- tw-animate-css
- New York shadcn theme

### **Tooling**

- Vite (Rolldown-based)
- TypeScript 5
- ESLint (flat config)
- Path aliasing (`@/*`)

## 📁 Project Structure

```
src/
 ├── components/
 │    ├── ui/
 │    └── custom/
 ├── redux/
 ├── Layout/
 ├── pages/
 ├── App.tsx
 ├── main.tsx
 └── index.css
```

## ⚙️ Installation

```bash
npm install
```

## 🚀 Running the Project

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## 🧱 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start dev server         |
| `npm run build`   | Build project            |
| `npm run lint`    | Run ESLint               |
| `npm run preview` | Preview production build |

## 🧩 shadcn Components

Your config supports:

- new-york theme
- lucide icons
- `@/components` alias

Add UI components:

```bash
npx shadcn-ui add button card input dropdown-menu
```

## 📊 Recharts Analytics

- AreaChart
- LineChart
- Responsive
- Animated
- Gradient fills

## ⚠️ Error Handling

Global error boundary:

```tsx
<ErrorBoundary fallback={<ErrorFallback />}>
```

## 📜 License

Free for personal & commercial use.