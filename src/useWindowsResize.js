import { ref, onMounted, onUnmounted, computed } from 'vue';

export default function useWindowResize(breakpoint) {

    const width = ref(window.innerWidth);
    const height = ref(window.innerHeight);

    function handler() {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
    }

    onMounted(() => window.addEventListener('resize', handler));
    onUnmounted(() => window.removeEventListener('resize', handler));

    const isMobileView = computed(() => width.value < breakpoint);

    return { width, height, isMobileView };
}