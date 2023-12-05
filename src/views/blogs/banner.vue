<template>
    <div class="wrapper">
        <img src="https://www.wchvan.online/files/pic/blog-banner.jpg" class="bg" />
        <div class="title">
            <div class="name">Archive</div>
            <div class="subTitle">{{ $t('blogs.banner.desc') }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    height: 200px;
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
        width: 100vw;
        text-align: center;
        .subTitle {
            padding-left: 20px;
            font-size: 18px;
            font-weight: 300;
            line-height: 25px;
            height: 25px;
        }
        .name {
            font-size: 70px;
        }
    }
}
</style>
