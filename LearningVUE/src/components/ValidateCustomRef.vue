<template>
    <div>
        <h1>Validate Custom Ref</h1>
        <input class="inputStyle" v-model="inputValue" />
        <p style="color: black;">Input Value: {{ inputValue }}</p>
    </div>
</template>
<style>
.inputStyle {
    border: 1px solid black;
    padding: 5px;
    margin: 5px;
}
</style>

<script setup>
import { useDebounceRef } from '../js/useDebounceRef';

const inputValue = useDebounceRef('', 1000);

</script>
