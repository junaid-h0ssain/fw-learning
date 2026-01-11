<script setup>
import { ref, computed, onMounted, watch } from 'vue'

const expenses = ref([])
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
    const saved = localStorage.getItem('expenses')
    if (saved) {
        expenses.value = JSON.parse(saved)
    }
})

watch(expenses, (val) => {
    localStorage.setItem('expenses', JSON.stringify(val))
}, { deep: true })
</script>

<template>
    
</template>

<style scoped>

</style>
