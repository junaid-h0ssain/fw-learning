<script setup>

</script>

<template>
    <header class="header">
        <h2>Quote generator</h2>
    </header>
</template>

<style scoped>
    .header {
        width: 100%;
        color: #e8f6f6;
        text-align: center;
        padding: 10px 0 6px;
        position: relative;
        font-weight: 700;
        font-size: 1.2rem;
        letter-spacing: 0.3px;
    }
    .header::before {
        content: '';
        width: 10px;
        height: 10px;
        background: #69bfc0;
        border-radius: 50%;
        position: absolute;
        top: -6px;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0 2px 6px rgba(0,0,0,0.25);
    }
</style>