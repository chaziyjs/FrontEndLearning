<template>
    <div>
        <LearnEffect :count="addCountValue" />
        <v-btn @click="addCount()"> 自增 +1 </button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import LearnEffect from './LearnEffect.vue';

const addCountValue = ref(0);

function addCount() {
    addCountValue.value += 1;
}

</script>
