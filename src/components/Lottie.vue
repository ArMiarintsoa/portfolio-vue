<template>
    <div ref="lottieContainer"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Lottie from 'lottie-web';
import animationData from '../../public/animation-fond.json';

export default {
    name: 'Lottie',
    setup() {
        const lottieContainer = ref(null);

        onMounted(() => {
            Lottie.loadAnimation({
                container: lottieContainer.value,
                renderer: 'svg',
                animationData: animationData,
            })
        });

        return {
            lottieContainer,
        }
    }
}
</script>

<style>
</style>