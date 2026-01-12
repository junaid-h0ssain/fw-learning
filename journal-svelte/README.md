# 📔 Gratitude Journal App

A beautiful, responsive journal application built with **SvelteKit** and **Tailwind CSS**. Track your emotions, express gratitude, and reflect on your daily feelings with an intuitive mood-based interface.

## ✨ Features

- **Mood-Based Entries** — Select from 5 emotional states:
  - 😊 Happy (Yellow)
  - 💖 Grateful (Pink)
  - ✨ Calm (Blue)
  - 🌧️ Sad (Slate)
  - ⚡ Anxious (Purple)

- **Entry Management**
  - Create new journal entries with mood selection
  - Automatic timestamp capture (date & time)
  - Persistent entry display with clean card layout
  - Entry counter

- **Filtering System**
  - Filter entries by specific mood
  - "All" filter to view entire journal
  - Quick toggle buttons with visual feedback

- **Beautiful UI**
  - Gradient backgrounds (purple → pink → blue)
  - Color-coded mood indicators
  - Smooth hover effects and transitions
  - Responsive design (mobile & desktop)
  - Dark mode ready (theme variables included)

- **Inspirational Quotes**
  - Daily motivational quote display
  - Encourages gratitude practice

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd journal-svelte

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open browser and navigate to
http://localhost:5173
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
journal-svelte/
├── src/
│   ├── lib/
│   │   ├── MoodSelector.svelte      # Mood selection component
│   │   ├── EntryForm.svelte         # Entry creation form
│   │   ├── EntryCard.svelte         # Individual entry display
│   │   ├── EntryList.svelte         # Entry list container
│   │   ├── FilterBar.svelte         # Mood filter controls
│   │   ├── moods.ts                 # Mood configuration & types
│   │   ├── Header.svelte            # Header component
│   │   └── index.ts                 # Library exports
│   ├── routes/
│   │   ├── +layout.svelte           # Root layout
│   │   └── +page.svelte             # Home page / main app
│   ├── styles/
│   │   ├── global.css               # Tailwind imports
│   │   └── theme.css                # Design tokens & theme variables
│   └── app.html                     # HTML shell
├── tailwind.config.js               # Tailwind configuration
├── postcss.config.js                # PostCSS configuration
├── svelte.config.js                 # SvelteKit configuration
├── tsconfig.json                    # TypeScript configuration
├── vite.config.ts                   # Vite configuration
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) v2.x — Full-stack web framework
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4 — Utility-first CSS
- **Icons**: [lucide-svelte](https://lucide.dev/guide/packages/lucide-svelte) — Icon library
- **Dates**: [date-fns](https://date-fns.org/) — Date formatting
- **IDs**: [uuid](https://github.com/uuidjs/uuid) — Unique ID generation
- **Language**: TypeScript — Type-safe development

## 📖 Usage Guide

### Creating an Entry

1. **Select Your Mood** — Click one of the 5 mood buttons at the top of the form
2. **Write Your Entry** — Type what you're grateful for or how you're feeling in the text area
3. **Submit** — Click "Save Entry" to add to your journal

The entry will appear at the top of your journal list with:
- Mood indicator with color-coded icon
- Full date (e.g., "January 13, 2026")
- Time of entry (e.g., "2:35 AM")
- Your journal text

### Filtering Entries

1. **View All** — Click "All" to see all entries
2. **Filter by Mood** — Click a mood button to show only entries from that emotion
3. **Clear Filter** — Click the mood button again or select "All"

### Empty Journal

When you have no entries, you'll see a helpful message encouraging you to start your gratitude journey.

## 🎨 Customization

### Mood Configuration

Edit `src/lib/moods.ts` to modify mood options:

```typescript
export const moods: MoodOption[] = [
  {
    id: 'happy',
    label: 'Happy',
    icon: Smile,           // Lucide icon
    color: 'text-yellow-600',      // Text color
    bgColor: 'bg-yellow-50 hover:bg-yellow-100 border-yellow-200', // Background
  },
  // ... more moods
];
```

### Colors & Theme

Modify `src/styles/theme.css` to adjust:
- Primary colors
- Background gradients
- Dark mode colors
- Component shadows & radius

Example mood color classes in `tailwind.config.js`:
```javascript
colors: {
  'mood-happy': '#facc15',
  'mood-grateful': '#ec4899',
  'mood-calm': '#3b82f6',
  'mood-sad': '#64748b',
  'mood-anxious': '#a855f7',
}
```

## 🔒 Data Persistence

Currently, entries are stored in component state and will be lost on page refresh. To add persistence:

**Option 1: Local Storage**
```typescript
// In +page.svelte
let entries = $state(getStoredEntries());

$effect.pre(() => {
  localStorage.setItem('journal-entries', JSON.stringify(entries));
});

function getStoredEntries() {
  const stored = localStorage.getItem('journal-entries');
  return stored ? JSON.parse(stored) : [];
}
```

**Option 2: Database (Firebase, Supabase, etc.)**
- Integrate your preferred backend service
- Add authentication with SvelteKit hooks
- Implement server-side data fetching with `+page.server.ts`

## 📱 Responsive Design

The app is optimized for:
- **Mobile** — Full-width layout with touch-friendly buttons
- **Tablet** — Single column with increased spacing
- **Desktop** — Max-width container (4xl) with full features

The `FilterBar` component includes `overflow-x-auto` for horizontal scrolling on small screens.

## ♿ Accessibility

- Semantic HTML with proper form labels
- ARIA-friendly fieldset for mood selection
- Keyboard navigation support
- Clear visual feedback on interactive elements
- Sufficient color contrast ratios
- Icon + text labels for clarity

## 🚀 Deployment

This app uses `@sveltejs/adapter-auto` which automatically adapts to your deployment platform:

```bash
npm run build
npm run preview
```

### Supported Platforms
- Vercel (recommended)
- Netlify
- Cloudflare Pages
- AWS Lambda
- Docker

For platform-specific setup, see [SvelteKit Adapters](https://kit.svelte.dev/docs/adapters).

## 📝 License

This project is open source. Feel free to use, modify, and distribute as needed.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Known Limitations

- Entries are not persisted (stored in memory only)
- No user authentication
- No export/import functionality
- Single user experience (not multi-user)

## 📚 Resources

- [SvelteKit Documentation](https://kit.svelte.dev/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [date-fns Docs](https://date-fns.org/)

## 💡 Future Enhancements

- [ ] Data persistence (localStorage/database)
- [ ] User authentication
- [ ] Export entries as PDF
- [ ] Mood statistics & analytics
- [ ] Custom mood types
- [ ] Entry search functionality
- [ ] Tags/categories for entries
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Progressive Web App (PWA)

## 🎯 Project Goals

This journal app demonstrates:
- ✅ Modern SvelteKit best practices
- ✅ Reactive state management with runes
- ✅ Tailwind CSS styling & theme customization
- ✅ Component composition & reusability
- ✅ TypeScript type safety
- ✅ Responsive & accessible UI design
- ✅ Beautiful, production-ready interfaces

---

**Happy journaling! 📝✨**
