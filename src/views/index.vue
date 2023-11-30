<template>
    <div class="wrapper">
        <div class="left">
            <div class="desc" v-html="typingText + cursorBlink"></div>
            <button class="btn">{{ $t('index.download') }}</button>
        </div>
        <div class="right"></div>
    </div>
</template>

<script setup lang="ts">
import { useTypingText } from '@/hooks/useTypingText';
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';

const I18n = useI18n();

const welcomeText: { [key: string]: string[] } = {
    'en-us': ['Welcome To', "Van's", 'Private Blog'],
    'zh-cn': ['欢迎来到', 'Van的', '个人博客'],
};

const { typingText, setAllText } = useTypingText(
    welcomeText[I18n.locale.value],
    300,
);

watch(
    () => I18n.locale.value,
    (newVal) => {
        if (newVal === 'en-us') {
            setAllText(welcomeText[newVal]);
        } else {
            setAllText(welcomeText[newVal]);
        }
    },
);
const cursorBlink = `<span style="padding-top: -2px; padding-left:2px">|</span>`;
</script>

<style lang="scss" scoped>
@import '../styles/mixins.scss';

.wrapper {
    width: 100%;
    height: 900px;
    padding-top: 50px;
    display: flex;
    .left {
        flex: 1;
        height: 100%;
        position: relative;
        .desc {
            position: relative;
            top: calc(50% - 200px);
            font-size: 50px;
            line-height: 80px;
            font-weight: 600;
            text-align: center;
        }
        .btn {
            position: absolute;
            bottom: calc(50% - 150px);
            left: calc(50% - 50px);
            font-size: 16px;
            padding: 0 20px;
            font-weight: 400;
            line-height: 40px;
            height: 40px;
            @include btn_color();
        }
    }
    .right {
        flex: 2;
    }
}
</style>
