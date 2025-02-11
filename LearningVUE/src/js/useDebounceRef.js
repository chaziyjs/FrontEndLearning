import { customRef } from "vue";

export function useDebounceRef(value, delay = 200) {
    let timer;
    return customRef((track, trigger) => ({
            get() {
                track();
                return value;
            },
            set(newValue) {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    value = newValue;
                    trigger();
                }, delay);
            }
        }
    ));
}