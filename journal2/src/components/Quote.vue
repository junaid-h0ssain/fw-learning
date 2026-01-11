<script setup lang="ts">
import { ref, onMounted } from 'vue';

const quote = ref<string>('');

const fallbackQuotes: string[] = [
    "Be yourself; everyone else is already taken.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "So many books, so little time.",
    "A room without books is like a body without a soul.",
    "You only live once, but if you do it right, once is enough.",
];

async function fetchQuote() {
    try {
        const response = await fetch('/api/quote');
        const data = await response.json();
        quote.value = data.content || getFallback();
    } catch (error) {
        quote.value = getFallback();
    }
}

function getFallback(): string {
    return fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)] ?? 'No quote available.';
}

onMounted(() => {
    fetchQuote();
});


</script>

<template>
    <blockquote v-if="quote">{{ quote }}</blockquote>
    <div>
        <button @click="fetchQuote">Retry</button>
    </div>
</template>

<style scoped>
    blockquote {
        font-style: italic;
        color: #555;
        border-left: 4px solid #ccc;
        margin: 1rem 0;
        padding-left: 1rem;
    }

    
</style>