
import { watch, reactive } from "vue";

const state = reactive({
    a: 1,
    b: 2,
    c: 3
});

watch (
    () => {
        console.log(state.a + state.b);
        return state.a + state.b;
    },
    (value) => {
        console.log(value * 2);
    }
)

setTimeout(() => {
    state.a ++;
    state.b --;
}, 1000);

/**
 * output result:
 * 3
 * 3
 */

/**
 * 
 */