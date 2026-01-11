<script setup>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
    <div class="app">
        <div class="card">
            <Header />
            <Main />
            <Footer />
        </div>
    </div>
</template>

<style scoped>
:root {
    --card-width: 420px;
}
.app {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.card {
    width: var(--card-width);
    min-height: 640px;
    background: #234f52;
    border: 6px solid rgba(226, 222, 222, 0.85);
    border-radius: 6px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.35);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 18px 22px 24px;
    box-sizing: border-box;
}

@media (max-width: 480px) {
    .card { width: 92%; min-height: 600px; }
}
</style>
