<template>
    <div class="blogs">
        <div v-for="item in 2" :key="item" class="blog card">
            <MarkdownRender :value="md"></MarkdownRender>
        </div>
    </div>
</template>

<script setup lang="ts">
import MarkdownRender from '@/components/MarkdownRender.vue';
import axios from 'axios';
import { ReadStream } from 'fs';
import { ref } from 'vue';

const md = ref<string>('');

function readTextFile(fileName: string) {
    axios.get('/api/files/blogs/1.md').then(res => {
        md.value = res.data
    })
}
readTextFile('1.md')
</script>

<style lang="scss" scoped>
.blogs {
    width: fit-content;
    position: relative;
    top: 30px;
    left: 600px;
    right: auto;
    .blog {
        width: calc(100vw - 800px);
        min-width: 600px;
        min-height: 300px;
        margin-bottom: 20px;
        border-radius: 20px;
        padding: 20px;
    }
}
</style>
