<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps ({
    chartData: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <h1>Soy el barchart</h1>
    <div v-if="chartData && chartData.labels.length > 0">
    <Bar :data="chartData"/>
    </div>
</template>