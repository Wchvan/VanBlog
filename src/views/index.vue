<template>
    <div class="container">
        <div class="left" v-html="typingText + cursorBlink"></div>
        <div class="right"></div>
    </div>
</template>

<script setup lang="ts">
import { useTypingText } from '@/hooks/useTypingText';
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';

const I18n = useI18n();

const welcomeText: {[key:string]: string[]} = {
    'en-us' : ['Welcome To', "Van's", "Private Blog"],
    'zh-cn' : ['欢迎来到', "Van的", "个人博客"]
}

const { typingText, setAllText } = useTypingText(welcomeText[I18n.locale.value], 300);

watch(() => I18n.locale.value, (newVal) => {
    if (newVal === 'en-us') {
        setAllText(welcomeText[newVal])
    } else {
        setAllText(welcomeText[newVal])
    }
})
const cursorBlink = `<span style="padding-top: -2px; padding-left:2px">|</span>`

</script>

<style lang="scss">
.container{
    width: 100%;
    height: 100%;
    padding-top: 50px;
    display: flex;
    .left{
        position: relative;
        top: calc(50% - 200px);
        flex: 1;
        font-size: 50px;
        line-height: 80px;
        font-weight: 600;
        text-align: center;
    }
    .right{
        flex:2;
    }
}
</style>
