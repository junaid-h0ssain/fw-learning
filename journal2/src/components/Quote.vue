<script setup lang="ts">
import { ref, onMounted } from 'vue';

const quote = ref<string>('');
onMounted(async () => {
    try {
        const response = await fetch('/api/quote');
        const data = await response.json();
        quote.value = data.content;
    } catch (error) {
        quote.value = 'Failed to load quote.';
    }
});


</script>

<template>
    <blockquote v-if="quote">{{ quote }}</blockquote>
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