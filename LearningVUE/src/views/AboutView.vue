<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <MyInput v-model="inputData" placeholder="input some text" ref="inputRef"/>
</template>

<script setup>
import MyInput from '../components/MyInput.vue';
import { onMounted, ref } from 'vue';

const inputData = ref('');
const inputRef = ref(null);

onMounted(() => {
  inputRef.value.autofocus = true;
});

</script>
