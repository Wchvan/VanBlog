<template>
    <layout>
        <router-view />
    </layout>
</template>

<script setup lang="ts">
import axios from 'axios';

import layout from '@/layout/default-layout.vue';
import ViewLogService from "@/api/viewLog";
import { preLoadImgs } from "@/utils/picture";

const view = sessionStorage.getItem('view')

if (view !== 'true') {
    axios.get('/api/ip')
    .then(res => {
        if (res.status === 200) {
            ViewLogService.createViewLog({
                ip: res.data.ip
            })
        }
        sessionStorage.setItem('view', 'true')
    });
}

preLoadImgs(["https://www.wchvan.online/files/pic/index-person.png", "https://www.wchvan.online/files/pic/friend-bg.jpg"])


</script>

<style lang="scss">
@import './styles/common.scss';
</style>
