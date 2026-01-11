<template>
    <div>
        <div v-if="filteredEntries.length === 0" class="empty-state">
            <p>No entries yet. Start writing to create your first journal entry!</p>
        </div>

        <div v-else>
            <div class="filters">
                <label for="moodFilter">Filter by mood:</label>
                <select id="moodFilter" v-model="selectedMood">
                    <option value="">All moods</option>
                    <option value="happy">😊 Happy</option>
                    <option value="sad">😢 Sad</option>
                    <option value="neutral">😐 Neutral</option>
                    <option value="excited">🤩 Excited</option>
                    <option value="anxious">😰 Anxious</option>
                    <option value="calm">😌 Calm</option>
                    <option value="angry">😠 Angry</option>
                </select>
            </div>

            <div class="entries-list">
                <article v-for="entry in filteredEntries" :key="entry._id" class="entry-card">
                    <div class="entry-header">
                        <div>
                            <h3>{{ entry.title }}</h3>
                            <small>{{ formatDate(entry.createdAt) }}</small>
                        </div>
                        <button @click="deleteEntry(entry._id)" aria-label="Delete entry" class="delete-btn">
                            🗑️
                        </button>
                    </div>

                    <p class="entry-content">{{ entry.content }}</p>

                    <div class="entry-footer">
                        <div class="mood-badge">
                            {{ getMoodEmoji(entry.mood) }} {{ entry.mood }}
                        </div>
                        <div class="tags">
                            <span v-for="tag in entry.tags" :key="tag" class="tag">
                                #{{ tag }}
                            </span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Entry {
    _id?: string
    title: string
    content: string
    mood: string
    tags: string[]
    createdAt: string
}

interface Props {
    entries: Entry[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
    entriesUpdated: []
}>()

const selectedMood = ref<string>('')
const isDeleting = ref<boolean>(false)

const filteredEntries = computed(() => {
    if (!selectedMood.value) {
        return props.entries
    }
    return props.entries.filter((entry) => entry.mood === selectedMood.value)
})

const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
}

const getMoodEmoji = (mood: string): string => {
    const moodMap: Record<string, string> = {
        happy: '😊',
        sad: '😢',
        neutral: '😐',
        excited: '🤩',
        anxious: '😰',
        calm: '😌',
        angry: '😠'
    }
    return moodMap[mood] || '😐'
}

const deleteEntry = async (entryId?: string): Promise<void> => {
    if (!entryId) return

    if (!confirm('Are you sure you want to delete this entry?')) {
        return
    }

    isDeleting.value = true

    try {
        const response = await fetch(`/api/entries/${entryId}`, {
            method: 'DELETE'
        })

        if (!response.ok) {
            throw new Error('Failed to delete entry')
        }

        emit('entriesUpdated')
    } catch (error) {
        console.error('Error deleting entry:', error)
        alert('Failed to delete entry. Please try again.')
    } finally {
        isDeleting.value = false
    }
}
</script>

<style scoped>
.empty-state {
    text-align: center;
    padding: 3rem 1rem;
    color: var(--muted-color);
    font-size: 1.1rem;
}

.filters {
    margin-bottom: 2rem;
    display: flex;
    gap: 1rem;
    align-items: center;
}

.filters label {
    margin: 0;
    font-weight: 500;
}

.filters select {
    padding: 0.5rem 1rem;
    border: 1px solid var(--muted-color);
    border-radius: 4px;
    background-color: var(--form-element-background-color);
    font-size: 1rem;
}

.entries-list {
    display: grid;
    gap: 1.5rem;
}

.entry-card {
    padding: 1.5rem;
    border: 1px solid var(--muted-color);
    border-radius: 8px;
    background-color: var(--form-element-background-color);
}

.entry-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
}

.entry-header h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
}

.entry-header small {
    color: var(--muted-color);
    font-size: 0.9rem;
}

.delete-btn {
    background: none;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
    padding: 0;
    opacity: 0.7;
    transition: opacity 0.2s;
}

.delete-btn:hover {
    opacity: 1;
}

.entry-content {
    margin: 1rem 0;
    line-height: 1.6;
    color: var(--color);
}

.entry-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--muted-color);
}

.mood-badge {
    background-color: var(--muted-color);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 500;
    font-size: 0.9rem;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tag {
    background-color: var(--muted-color);
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    font-size: 0.85rem;
    color: var(--muted-color);
}

@media (max-width: 768px) {
    .entry-header {
        flex-direction: column;
    }

    .delete-btn {
        margin-top: 0.5rem;
    }

    .entry-footer {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>
