<template>
    <div class="wrapper">
        <img src="/src/assets/bg.png" class="bg" />
        <div class="title">
            <div class="subTitle">{{ typingText }}</div>
            <div class="name">武超凡 - Van</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTypingText } from '@/hooks/useTypingText';
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';

const I18n = useI18n();

const subText: { [key: string]: string[] } = {
    'en-us': ['Dream of being a good full-stack engineer'],
    'zh-cn': ['梦想成为优秀的全栈工程师'],
};

const { typingText, setAllText } = useTypingText(
    subText[I18n.locale.value],
    100,
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
</script>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    height: 400px;
    position: relative;
    // background: url() center no-repeat ;
    // background-size: 100% 100%;
    .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.95;
        z-index: -1;
    }
    .title {
        position: absolute;
        top: calc(50% - 50px);
        left: calc(50% - 150px);
        color: #fff;
        .subTitle {
            font-size: 22px;
            font-weight: 300;
            line-height: 40px;
            height: 40px;
        }
        .name {
            font-size: 50px;
        }
    }
}
</style>
