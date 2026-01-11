<template>
  <form @submit.prevent="submitEntry">
    <fieldset>
      <legend>Add New Entry</legend>

      <div>
        <label for="title">
          Title
          <input
            id="title"
            v-model="form.title"
            type="text"
            placeholder="Entry title"
            required
          />
        </label>
      </div>

      <div>
        <label for="content">
          Content
          <textarea
            id="content"
            v-model="form.content"
            placeholder="What's on your mind today?"
            required
            rows="5"
          ></textarea>
        </label>
      </div>

      <div>
        <label for="mood">
          Mood
          <select id="mood" v-model="form.mood" required>
            <option value="">Select a mood</option>
            <option value="happy">😊 Happy</option>
            <option value="sad">😢 Sad</option>
            <option value="neutral">😐 Neutral</option>
            <option value="excited">🤩 Excited</option>
            <option value="anxious">😰 Anxious</option>
            <option value="calm">😌 Calm</option>
            <option value="angry">😠 Angry</option>
          </select>
        </label>
      </div>

      <div>
        <label for="tags">
          Tags (comma separated)
          <input
            id="tags"
            v-model="form.tagsInput"
            type="text"
            placeholder="e.g., work, personal, goals"
          />
        </label>
      </div>

      <button type="submit" :disabled="isLoading">
        {{ isLoading ? 'Saving...' : 'Save Entry' }}
      </button>
    </fieldset>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

interface FormData {
  title: string
  content: string
  mood: string
  tagsInput: string
}

const emit = defineEmits<{
  entryAdded: []
}>()

const isLoading = ref<boolean>(false)

const form = reactive<FormData>({
  title: '',
  content: '',
  mood: '',
  tagsInput: ''
})

const submitEntry = async (): Promise<void> => {
  if (!form.title || !form.content || !form.mood) {
    alert('Please fill in all required fields')
    return
  }

  isLoading.value = true

  try {
    const tags = form.tagsInput
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0)

    const response = await fetch('/api/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: form.title,
        content: form.content,
        mood: form.mood,
        tags: tags
      })
    })

    if (!response.ok) {
      throw new Error('Failed to save entry')
    }

    // Reset form
    form.title = ''
    form.content = ''
    form.mood = ''
    form.tagsInput = ''

    // Emit event to refresh entries
    emit('entryAdded')
  } catch (error) {
    console.error('Error saving entry:', error)
    alert('Failed to save entry. Please try again.')
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
form {
  background-color: var(--form-element-background-color);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid var(--muted-color);
}

fieldset {
  border: none;
  padding: 0;
  margin: 0;
}

legend {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

div {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input,
textarea,
select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--muted-color);
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
}

textarea {
  resize: vertical;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--form-element-valid-border-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
}

button:hover:not(:disabled) {
  opacity: 0.9;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
