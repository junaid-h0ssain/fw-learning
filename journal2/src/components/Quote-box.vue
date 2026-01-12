<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Quote {
    text: string;
    author?: string;
}

const quote = ref<Quote | null>(null);

const fallbackQuotes: Quote[] = [
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
    { text: "So many books, so little time.", author: "Frank Zappa" },
    { text: "A room without books is like a body without a soul.", author: "Cicero" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
];

async function fetchQuote() {
    try {
        const response = await fetch('/api/quote');
        const data = await response.json();

        // Support different API shapes: prefer content or text
        if (data && (typeof data.content === 'string' || typeof data.text === 'string')) {
            const text = (data.content ?? data.text) as string;
            const author = (data.author ?? data.authorName) as string | undefined;
            quote.value = { text, author };
        } else {
            quote.value = getFallback();
        }
    } catch (error) {
        quote.value = getFallback();
        console.error('Error fetching quote:', error);
    }
}

function getFallback(): Quote {
    return fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)] ?? { text: 'No quote available.' };
}

onMounted(() => {
    fetchQuote();
});


</script>

<template>
    <blockquote v-if="quote">
        <p>{{ quote.text }}</p>
        <footer v-if="quote.author">— {{ quote.author }}</footer>
    </blockquote>
    <div>
        
    </div>
</template>

<style scoped>
    blockquote {
        font-style: italic;
        font-size: larger;
        color: #090606;
        margin: 1rem 5rem;
        padding: 2rem;
        text-align: center;
        border: 4px solid red;
    }

    
</style>