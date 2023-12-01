<template>
    <div class="wrapper">
        <div v-for="item in 10" :key="item" class="blog card">
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>

.wrapper {
    width: fit-content;
    position: relative;
    left: 600px;
    right: auto;
    .blog{
        width: calc(100vw - 800px);
        min-width: 600px;
        min-height: 300px;
        margin-bottom: 20px;
        border-radius: 20px;
    }
}
</style>
