<template>
    <my-header></my-header>
    <main class="main" style="margin-top: -50px">
        <slot></slot>
    </main>
</template>

<script setup lang="ts">
import myHeader from './header.vue';
</script>

<style lang="scss">
main {
    width: 100%;
    height: 100%;
}
</style>
