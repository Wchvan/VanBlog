<template>
    <div class="friend">
        <img
            src="https://www.wchvan.online/files/pic/friend-bg.jpg"
            class="bg"
        />
        <div class="friend-container">
            <friend-card
                v-for="item in friendList"
                v-bind="item"
                :key="item.name"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import FriendService from '@/api/friend';
import * as I from '@/interface/index.d';
import { ref } from 'vue';

const friendList = ref<I.Friend.FriendItem[]>([]);

FriendService.getFriends().then((res) => {
    if (res.code === 200) {
        friendList.value = res.data.list;
    }
});
</script>

<style scoped lang="scss">
.friend {
    width: 100vw;
    height: 100vh;

    .bg {
        position: fixed;
        width: 100vw;
        height: 100vh;
    }

    &-container {
        height: 100vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
}
</style>
