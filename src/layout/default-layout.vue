<template>
    <my-header v-show="headerFlag"></my-header>
    <main class="main">
        <slot></slot>
    </main>
    <my-footer></my-footer>
</template>

<script setup lang="ts">
import myHeader from './header.vue';
import myFooter from './footer.vue';
import { ref } from 'vue';

const headerFlag = ref<boolean>(true)
let lastScroll = 0
let eventFlag = true

window?.addEventListener('scroll', (e) => {
    if (eventFlag) {
        if (window.scrollY > 50 ) {
            if(window.scrollY < lastScroll - 5) {
                if (!headerFlag.value) {
                    headerFlag.value = true
                }
            } else {
                if (headerFlag.value) {
                    headerFlag.value = false
                }
            }
        } else {
            if (!headerFlag.value) {
                headerFlag.value = true
            }
        }
        lastScroll = window.scrollY
        eventFlag = false
        setTimeout(() => {
            eventFlag = true
        }, 100)
    }
})

</script>

<style lang="scss">
main {
    width: 100%;
    min-height: calc(100vh - 50px);
    height: auto;
}
</style>
