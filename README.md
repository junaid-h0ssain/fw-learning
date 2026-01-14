# Framework Learning Repository

A collection of frontend framework learning projects exploring Vue.js, Nuxt, and SvelteKit. Each project demonstrates different concepts, from basic component architecture to full-stack applications with database integration.

## Table of Contents

- [Overview](#overview)
- [Projects](#projects)
  - [Expense Tracker (Vue.js)](#expense-tracker-vuejs)
  - [Journal App (Nuxt 4)](#journal-app-nuxt-4)
  - [Journal Svelte (SvelteKit)](#journal-svelte-sveltekit)
  - [Journal2 (Vue.js + TypeScript)](#journal2-vuejs--typescript)
  - [React App (React)](#react-app-react)
  - [VJS (Vue.js)](#vjs-vuejs)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [License](#license)

---

## Overview

This monorepo contains multiple independent projects built while learning modern frontend frameworks. The projects range from simple component-based applications to full-stack solutions with backend APIs and database persistence.

---

## Projects

### Expense Tracker (Vue.js)

A personal expense tracking application built with Vue 3 and Vite.

**Features:**
- Add, edit, and delete expenses
- Categorize expenses (Food, Transport, Entertainment, Utilities, Health, Shopping, Other)
- Automatic date tracking
- Local storage persistence
- Dark/Light theme toggle
- Real-time total calculation

**Directory:** `expense-tracker/`

**Tech:** Vue 3, Vite 7, Composition API

```bash
cd expense-tracker
npm install
npm run dev
```

---

### Journal App (Nuxt 4)

A full-stack journaling application with MongoDB backend integration.

**Features:**
- Create journal entries with title, content, and mood
- Tag-based organization
- RESTful API with CRUD operations
- MongoDB database persistence
- Dark mode support
- Responsive design with Pico CSS

**Directory:** `journal-app/`

**Tech:** Nuxt 4, Vue 3, TypeScript, MongoDB, Mongoose

**Environment Variables:**
```
MONGODB_URI=your_mongodb_connection_string
```

```bash
cd journal-app
npm install
npm run dev
```

---

### Journal Svelte (SvelteKit)

A gratitude journal application built with SvelteKit and Tailwind CSS.

**Features:**
- Mood-based journal entries (Happy, Grateful, Calm, Sad, Anxious)
- Color-coded mood indicators with visual theming
- Entry filtering by mood
- Inspirational quote display
- Responsive gradient UI design
- Date-fns for timestamp formatting

**Directory:** `journal-svelte/`

**Tech:** SvelteKit, Svelte 5, Tailwind CSS 4, TypeScript, Lucide Icons

```bash
cd journal-svelte
npm install
npm run dev
```

**Project Structure:**
```
journal-svelte/
  src/
    lib/           # Reusable components (MoodSelector, EntryForm, EntryCard, etc.)
    routes/        # SvelteKit pages and layouts
    styles/        # Global CSS and theme variables
```

---

### Journal2 (Vue.js + TypeScript)

A Vue.js journal application with TypeScript and modern tooling.

**Features:**
- Header and Quote box components
- TypeScript integration
- ESLint and Oxlint for code quality
- Type checking with vue-tsc

**Directory:** `journal2/`

**Tech:** Vue 3, TypeScript, Vite 7, ESLint, Oxlint

```bash
cd journal2
npm install
npm run dev
```

---

### React App (React)

A simple calculator application built with React 19 and TypeScript.

**Features:**
- Basic arithmetic operations
- Clean, modern UI with Tailwind CSS
- TypeScript for type safety
- React Compiler support

**Directory:** `react-app/`

**Tech:** React 19, TypeScript 5.9, Vite 7, Tailwind CSS 4

```bash
cd react-app
npm install
npm run dev
```

---

### VJS (Vue.js)

A simple Vue.js starter project demonstrating component composition.

**Features:**
- Component-based architecture (Header, Main, Footer)
- Quote display functionality
- Custom styled card layout
- Responsive design

**Directory:** `vjs/`

**Tech:** Vue 3, Vite 7, Composition API

```bash
cd vjs
npm install
npm run dev
```

---

## Tech Stack

| Framework/Library | Version | Used In |
|-------------------|---------|---------|
| Vue.js | 3.5.x | expense-tracker, journal-app, journal2, vjs |
| React | 19.x | react-app |
| Nuxt | 4.2.x | journal-app |
| SvelteKit | 2.x | journal-svelte |
| Svelte | 5.x | journal-svelte |
| Vite | 7.x | All projects |
| TypeScript | 5.9.x | journal-app, journal-svelte, journal2, react-app |
| Tailwind CSS | 4.x | journal-svelte, react-app |
| MongoDB/Mongoose | 7.6.x | journal-app |
| Pico CSS | 2.x | journal-app |

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/junaid-h0ssain/fw-learning.git
   cd fw-learning
   ```

2. Navigate to any project directory:
   ```bash
   cd <project-name>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Prerequisites

- Node.js 20.19.0+ or 22.12.0+
- npm or yarn
- MongoDB (for journal-app only)

---

## Available Scripts

Each project supports the following npm scripts:

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

Additional scripts vary by project (linting, type-checking, etc.).

---

## Project Status

| Project | Status | Description |
|---------|--------|-------------|
| expense-tracker | In Progress | Core expense tracking functionality implemented |
| journal-app | In Progress | Full-stack with MongoDB integration |
| journal-svelte | In Progress | Mood-based journaling with Tailwind UI |
| journal2 | In Progress | TypeScript Vue setup |
| react-app | Complete | Basic calculator application |
| vjs | Complete | Basic Vue component demo |

---

## License

This project is for educational purposes.
