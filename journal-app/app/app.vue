<template>
  <div :data-theme="darkMode ? 'dark' : 'light'">
    <header class="app-header">
      <nav class="container">
        <ul>
          <li>
            <strong>📔 Journal App</strong>
          </li>
        </ul>
        <ul>
          <li>
            <button @click="toggleDarkMode" aria-label="Toggle dark mode" class="theme-toggle">
              {{ darkMode ? '☀️' : '🌙' }}
            </button>
          </li>
        </ul>
      </nav>
    </header>

    <main class="container">
      <JournalForm @entry-added="refreshEntries" />
      
      <section>
        <h2>Your Entries</h2>
        <JournalEntries :entries="entries" @entries-updated="refreshEntries" />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Entry {
  _id?: string
  title: string
  content: string
  mood: string
  tags: string[]
  createdAt: string
}

const darkMode = ref<boolean>(false)
const entries = ref<Entry[]>([])

const toggleDarkMode = (): void => {
  darkMode.value = !darkMode.value
  localStorage.setItem('darkMode', String(darkMode.value))
}

const refreshEntries = async (): Promise<void> => {
  try {
    const response = await fetch('/api/entries')
    entries.value = await response.json()
  } catch (error) {
    console.error('Failed to fetch entries:', error)
  }
}

onMounted(() => {
  const savedDarkMode = localStorage.getItem('darkMode')
  if (savedDarkMode !== null) {
    darkMode.value = savedDarkMode === 'true'
  } else {
    darkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  refreshEntries()
})
</script>

<style scoped>
.app-header {
  background-color: var(--card-background-color);
  border-bottom: 1px solid var(--muted-border-color);
  padding: 1rem 0;
}

.app-header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-header nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1rem;
}

.app-header nav strong {
  font-size: 1.25rem;
}

.theme-toggle {
  padding: 0.5rem 1rem;
  border: none;
  background-color: var(--secondary-background);
  cursor: pointer;
  border-radius: 4px;
  font-size: 1.2rem;
}

.theme-toggle:hover {
  opacity: 0.8;
}

section {
  margin-top: 2rem;
}

main {
  padding: 2rem 0;
}
</style>
