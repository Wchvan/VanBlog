<template>
    <div class="blog">
        <MarkdownRender :value="props.value"></MarkdownRender>
    </div>
</template>

<script setup lang="ts">
import MarkdownRender from '@/components/MarkdownRender.vue';

const props = defineProps<{
    value: string;
}>();
</script>

<style lang="scss" scoped>
.blog {
    width: 50vw;
    min-width: 500px;
    margin: 50px auto;
}
</style>
