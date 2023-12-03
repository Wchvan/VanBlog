<template>
    <div class="blogs">
        <div v-for="item in 10" :key="item" class="blog card"></div>
    </div>
</template>

<script setup lang="ts"></script>

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
    }
}
</style>
