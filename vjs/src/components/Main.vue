<script setup>

</script>

<template>
    <main class="main">
        <div class="quote-wrap">
            <div class="quote-box">
                <h2 class="quote">"First, solve the problem. Then, write the code."</h2>
                <h3 class="author">- John Johnson</h3>
                <button class="btn">Another</button>
            </div>
        </div>
    </main>
</template>

<style scoped>
    .main {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 12px 0 8px;
    }
    .quote-wrap {
        width: 100%;
        display: flex;
        justify-content: center;
        border: white 6px;
    }
    .quote-box {
        width: 90%;
        background: #dbe9e9;
        color: #0b2626;
        border-radius: 10px;
        padding: 28px 22px 20px;
        box-sizing: border-box;
        margin-top: 12px;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.6);
        text-align: center;
    }
    .quote {
        font-size: 1.15rem;
        font-weight: 700;
        font-style: italic;
        margin: 0 0 12px;
        line-height: 1.25;
    }
    .author {
        font-size: 0.9rem;
        color: #4b6a6a;
        font-weight: 500;
        margin: 0 0 18px;
        text-align: right;
    }
    .btn {
        background: #2f6b6b;
        color: #fff;
        border: none;
        padding: 8px 14px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 700;
        font-size: 0.9rem;
    }
    .btn:hover { opacity: 0.95; }
</style>