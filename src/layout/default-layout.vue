<template>
    <my-header></my-header>
    <main class="main">
        <slot></slot>
    </main>
    <my-footer></my-footer>
</template>

<script setup lang="ts">
import myHeader from './header.vue';
import myFooter from './footer.vue';

</script>

<style lang="scss">
main {
    width: 100%;
    min-height: calc(100vh - 60px);
    height: auto;
}
</style>
