<script setup>
import { ref, computed, onMounted, watch } from 'vue'

const expenses = ref([])
const isDark = ref(false)
const newExpense = ref({
    amount: 0,
    category: 'Food',
    description: '',
    date: new Date().toISOString().split('T')[0]
})

const categories = [
    'Food', 'Transport', 'Entertainment', 'Utilities', 'Health', 'Shopping', 'Other'
]

const addExpense = () => {
    if (newExpense.value.amount <= 0) return

    expenses.value.push({
        id: Date.now(),
        ...newExpense.value
    })

    newExpense.value = {
        amount: 0,
        category: 'Food',
        description: '',
        date: new Date().toISOString().split('T')[0]
    }
}

const deleteExpense = (id) => {
    expenses.value = expenses.value.filter(e => e.id !== id)
}

const totalSpent = computed(() => {
    return expenses.value.reduce((sum, e) => sum + e.amount, 0)
})

onMounted(() => {
    const savedExpenses = localStorage.getItem('expenses')
    if (savedExpenses) {
        expenses.value = JSON.parse(savedExpenses)
    }

    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
        isDark.value = savedTheme === 'dark'
    } else {
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    updateTheme()
})

const updateTheme = () => {
    document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
}

const toggleTheme = () => {
    isDark.value = !isDark.value
    updateTheme()
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

watch(expenses, (val) => {
    localStorage.setItem('expenses', JSON.stringify(val))
}, { deep: true })
</script>

<template>
    <main class="container">
        <header>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h1>Expense Tracker</h1>
                <button class="outline secondary" @click="toggleTheme"
                    style="width: auto; padding: 4px 12px; margin: 0;">
                    {{ isDark ? 'Light Mode' : 'Dark Mode' }}
                </button>
            </div>
        </header>

        <section>
            <form @submit.prevent="addExpense">
                <div class="grid">
                    <label>
                        Amount
                        <input type="number" v-model.number="newExpense.amount" required>
                    </label>
                    <label>
                        Category
                        <select v-model="newExpense.category">
                            <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
                        </select>
                    </label>
                </div>

                <div class="grid">
                    <label>
                        Date
                        <input type="date" v-model="newExpense.date" required>
                    </label>
                    <label>
                        Description
                        <input type="text" v-model="newExpense.description" placeholder="Optional note">
                    </label>
                </div>

                <button type="submit">Add Expense</button>
            </form>
        </section>

        <hr />

        <section>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h2>Expenses</h2>
                <h3>Total: ${{ totalSpent.toFixed(2) }}</h3>
            </div>

            <table v-if="expenses.length > 0">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="expense in expenses" :key="expense.id">
                        <td>{{ expense.date }}</td>
                        <td>{{ expense.category }}</td>
                        <td>{{ expense.description }}</td>
                        <td>${{ expense.amount.toFixed(2) }}</td>
                        <td>
                            <button class="outline secondary" @click="deleteExpense(expense.id)"
                                style="padding: 4px 8px; font-size: 0.8rem;">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p v-else>No expenses logged yet.</p>
        </section>
    </main>
</template>

<style scoped>
main {
    padding-top: 2rem;
}

header {
    text-align: center;
    margin-bottom: 2rem;
}

button {
    margin-top: 0.5rem;
}
</style>
