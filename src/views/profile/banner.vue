<template>
    <div class="wrapper">
        <img src="https://www.wchvan.online/files/pic/bg.png" class="bg" />
        <div class="title">
            <div class="subTitle">{{ typingText }} |</div>
            <div class="name">武超凡 - Van</div>
        </div>
        <i-ep-ArrowDown class="arrow" @click="goNext"></i-ep-ArrowDown>
    </div>
</template>

<script setup lang="ts">
import { useTypingText } from '@/hooks/useTypingText';
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useWindowSize } from '@vueuse/core';

const I18n = useI18n();

const subText: { [key: string]: string[] } = {
    'en-us': ['Dream of being a good full-stack engineer'],
    'zh-cn': ['梦想成为优秀的全栈工程师'],
};

const { typingText, setAllText } = useTypingText(
    subText[I18n.locale.value],
    150,
    200,
);

watch(
    () => I18n.locale.value,
    (newVal) => {
        if (newVal === 'en-us') {
            setAllText(subText[newVal]);
        } else {
            setAllText(subText[newVal]);
        }
    },
);

const { height } = useWindowSize();

const goNext = () => {
    window.scrollTo({ top: height.value, behavior: 'smooth' });
};
</script>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    height: 100vh;
    position: relative;
    font-family: "XK";
    // background: url() center no-repeat ;
    // background-size: 100% 100%;
    .bg {
        object-fit: cover;
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.95;
        z-index: -1;
        filter: brightness(70%);
    }
    .title {
        position: absolute;
        top: calc(50% - 70px);
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        .subTitle {
            padding-left: 20px;
            font-size: 28px;
            font-weight: 300;
            line-height: 40px;
            height: 40px;
        }
        .name {
            font-size: 120px;
        }
    }
    .arrow {
        font-size: 100px;
        font-weight: 100;
        cursor: pointer;
        position: absolute;
        color: #fff;
        bottom: 50px;
        opacity: 0.4;
        left: 50%;
        transform: translateX(-50%);
        animation: arrow linear 1s;
    }
}

@keyframes arrow {
    0% {
        bottom: 150px;
    }
    100% {
        bottom: 50px;
    }
}
</style>
