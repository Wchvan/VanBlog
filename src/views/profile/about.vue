<template>
    <div ref="wrapper" class="wrapper">
        <img ref="bg" src="#" class="bg" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { intersectEle } from '@/utils/intersect';
import { onMounted } from 'vue';

const wrapper = ref();
const bg = ref();
onMounted(() => {
    intersectEle(
        bg.value,
        (item) => {
            item.target.setAttribute(
                'src',
                'http://111.229.75.193/light-bg.JPG',
            );
        },
        true,
    );
});
</script>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    height: 100vh;
    position: relative;
    .bg {
        object-fit: cover;
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.95;
        z-index: -1;
    }
}
</style>
