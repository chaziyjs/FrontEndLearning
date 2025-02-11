<template>
    <div>
        <h1>Validate Custom Ref</h1>
        <input v-model="inputValue" />
        <p style="color: black;">Input Value: {{ inputValue }}</p>
    </div>
</template>

<script setup lang="ts">
import { useDebounceRef } from '../js/useDebounceRef';

const inputValue = useDebounceRef('', 1000);

</script>