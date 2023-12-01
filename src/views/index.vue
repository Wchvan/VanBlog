<template>
    <div class="wrapper">
        <div class="left">
            <div class="desc" v-html="typingText + cursorBlink"></div>
            <button
                class="btn"
                @click="
                    goProfile
                "
            >
                {{ $t('index.resume') }}
            </button>
        </div>
        <div class="right"></div>
    </div>
    <div class="footer">@Wchvan</div>
</template>

<script setup lang="ts">
import { useTypingText } from '@/hooks/useTypingText';
import { watch } from 'vue';
import { downloadFile } from '@/utils/download';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const I18n = useI18n();
const router = useRouter()

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

const goProfile = () => {
    // downloadFile(
    //     'http://111.229.75.193/resume.pdf',
    //     '武超凡.pdf',
    // )
    router.push('/profile')
}
</script>

<style lang="scss" scoped>
@import '../styles/mixins.scss';

.wrapper {
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    .left {
        flex: 1;
        height: 100%;
        position: relative;
        .desc {
            position: relative;
            top: calc(50% - 200px);
            left: calc(50% - 100px);
            font-size: 50px;
            line-height: 80px;
            font-weight: 600;
            // text-align: center;
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
.footer {
    width: 100%;
    height: 60px;
    padding-top: 10px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    font-weight: 300;
}
</style>
