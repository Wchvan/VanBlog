<template>
    <div class="banner">
        <img
            src="https://www.wchvan.online/files/pic/blog-banner.jpg"
            class="bg"
        />
        <div class="title">
            <div class="name">{{ $route.query.name }}</div>
            <div class="subTitle">{{ $t('blogs.banner.author') }}</div>
            <div class="view"><i-ep-View class="eye" /> {{ props.view }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    view: number;
}>();
</script>

<style lang="scss" scoped>
.banner {
    width: 100%;
    height: 400px;
    position: relative;
    // font-family: 'XK';
    // background: url() center no-repeat ;
    // background-size: 100% 100%;
    .bg {
        object-fit: cover;
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.95;
        z-index: -1;
    }
    .title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        // width: 100vw;
        text-align: center;
        .subTitle {
            padding-left: 20px;
            font-size: 32px;
            font-weight: 300;
            line-height: 50px;
            height: 50px;
            display: inline-flex;
            align-items: center;
        }
        .view {
            display: flex;
            font-size: 32px;
            align-items: center;
            justify-content: center;
            .eye {
                margin: 0 10px;
            }
        }
        .name {
            font-size: 70px;
        }
    }
}
</style>
