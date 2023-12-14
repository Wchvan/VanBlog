<template>
    <layout>
        <router-view />
    </layout>
</template>

<script setup lang="ts">
import axios from 'axios';

import layout from '@/layout/default-layout.vue';
import ViewLogService from '@/api/viewLog';
import { preLoadImgs } from '@/utils/picture';

const view = sessionStorage.getItem('view');

if (view !== 'true') {
    fetch('https://api.ipify.org?format=json')
    .then(res=>{
        res.json().then(res => {
            ViewLogService.createViewLog({
                ip: res.ip,
            }).then(res => sessionStorage.setItem('view', 'true'))
        })
        
    })
}

preLoadImgs([
    'https://www.wchvan.online/files/pic/index-person.png',
    'https://www.wchvan.online/files/pic/friend-bg.jpg',
]);
</script>

<style lang="scss">
@import './styles/common.scss';
</style>
