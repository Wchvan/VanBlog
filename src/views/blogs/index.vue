<template>
    <div class="wrapper">
        <template v-if="menuFlag">
            <banner></banner>
            <directory></directory>
        </template>
        <template v-else>
            <blog-banner></blog-banner>
            <blog :value="md"></blog>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import banner from './banner.vue';
import directory from './directory.vue';
import BlogBanner from './blog-banner.vue';
import blog from './blog.vue';
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import PassageService from '@/api/passage';

const route = useRoute();
const menuFlag = ref<boolean>(true);
const md = ref<string>('');

watch(
    () => route,
    async (newVal) => {
        if (newVal.query?.id) {
            const res = await PassageService.getPassage({
                id: Number(newVal.query.id),
            });
            if (res.code === 200) {
                axios.get(`/api/v3${res.data.link}`).then((res) => {
                    md.value = res.data;
                    menuFlag.value = false;
                });
            }
        } else {
            menuFlag.value = true;
        }
    },
    { deep: true, immediate: true },
);
</script>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
}
</style>
