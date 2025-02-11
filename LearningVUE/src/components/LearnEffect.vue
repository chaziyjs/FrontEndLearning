<template>
    <div>得到传入的属性: {{ count }} </div>
    <div>doubled: {{ doubleCount }}</div>
</template>

<script setup lang="ts">
import { computed, ref, watch, watchEffect } from 'vue';

const props = defineProps({
    count: Number,
});

// scenario 1
// const doubleCount = ref(props.count * 2);

// scenario 2
// const doubleCount = ref(0);
// watchEffect(() => {
//     console.log('watch effect');
//     doubleCount.value = props.count * 2;
// });

// scenario 3
// function useDouble(props) {
//     const doubleCount = ref(props.count * 2);
//     watchEffect(() => {
//         console.log('watch effect');
//         doubleCount.value = props.count * 2;
//     });
//     return doubleCount;
// }
// const doubleCount = useDouble(props);

// scenario 4
const doubleCount = computed(() => props.count * 2);

</script>
