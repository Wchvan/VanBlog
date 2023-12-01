<template>
    <div
        class="header"
        :class="[hidden ? 'nav-hidden' : '', navBg ? 'nav-bg' : '']"
    >
        <div class="title" @click="$router.push('/')">
            <el-avatar
                src="http://111.229.75.193/avatar.JPG"
                style="margin-right: 10px"
            />
            <span>Van's BLOG</span>
        </div>
        <router-link to="/" class="header-item header-link">{{
            $t('header.index')
        }}</router-link>
        <router-link to="/profile" class="header-item header-link">{{
            $t('header.profile')
        }}</router-link>
        <router-link to="/blogs" class="header-item header-link">{{
            $t('header.blogs')
        }}</router-link>
        <div
            class="i18n header-item"
            style="cursor: pointer; margin-left: auto"
            @click="changeLanguage"
        >
            {{ $t('header.language') }}
        </div>
        <div class="theme header-item">
            <span class="theme-label">{{ $t('header.theme') }}: </span>
            <i-ep-Sunny
                class="theme-icon"
                style="margin-left: 5px"
            ></i-ep-Sunny>
            <el-switch
                v-model="themeDark"
                :active-action-icon="Moon"
                :inactive-action-icon="Sunny"
                style="
                    --el-switch-on-color: #f8df72;
                    --el-switch-off-color: #409eff;
                    margin: 0 10px;
                "
            />
            <i-ep-Moon class="theme-icon"></i-ep-Moon>
        </div>
        <a class="header-item" href="https://github.com/Wchvan" target="_blank">
            <el-avatar
                src="https://ts3.cn.mm.bing.net/th?id=ODLS.05409d17-5d83-4701-acc1-90430dd3b02c&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2"
                class="avatar"
            />
        </a>
        <a class="header-item">
            <el-tooltip
                content="wchvan@163.com"
                placement="bottom"
                effect="customized"
            >
                <i-ep-Message class="avatar"></i-ep-Message>
            </el-tooltip>
        </a>
    </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { ref } from 'vue';
import { Sunny, Moon } from '@element-plus/icons-vue';
import { useI18n } from 'vue-i18n';
import { useWindowScroll } from '@vueuse/core';

const I18n = useI18n();
localStorage.getItem('i18n')
    ? (I18n.locale.value = localStorage.getItem('i18n') as string)
    : '';

const themeDark = ref<boolean>(false);
themeDark.value = sessionStorage.getItem('data-theme') === 'dark';
document.documentElement.setAttribute(
    'data-theme',
    sessionStorage.getItem('data-theme') || '',
);
watch(themeDark, (newVal) => {
    if (newVal) {
        document.documentElement.setAttribute('data-theme', 'dark');
        sessionStorage.setItem('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', '');
        sessionStorage.setItem('data-theme', '');
    }
});

const changeLanguage = () => {
    if (I18n.locale.value === 'en-us') {
        I18n.locale.value = 'zh-cn';
        localStorage.setItem('i18n', 'zh-cn');
    } else {
        I18n.locale.value = 'en-us';
        localStorage.setItem('i18n', 'en-us');
    }
};

const hidden = ref<boolean>(false);
const navBg = ref<boolean>(false);
const { y } = useWindowScroll();
watch(y, (newVal, oldVal) => {
    if (newVal < 60) {
        if (hidden.value) {
            hidden.value = true;
        }
        if (navBg.value && newVal < 10) {
            navBg.value = false;
        }
    } else {
        if (!navBg.value) {
            navBg.value = true;
        }
        if (newVal > oldVal && !hidden.value) {
            hidden.value = true;
        } else if (newVal < oldVal - 1 && hidden.value) {
            hidden.value = false;
        }
    }
});
</script>

<style lang="scss" scoped>
@import '/src/styles/mixins.scss';

.header {
    display: flex;
    justify-content: flex-end;
    position: fixed;
    width: 100%;
    z-index: 999;
    height: 60px;
    padding-top: 15px;
    padding-bottom: 5px;
    line-height: 40px;
    font-size: 18px;
    transition: all 0.5s;
    opacity: 1;

    .title {
        // align-self: flex-start;
        font-size: 28px;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
        margin-left: 50px;
        font-weight: 600;
        margin-right: 80px;
        display: inline-flex;
        align-items: center;
    }
    &-item {
        margin-right: 15px;
        display: flex;
        align-items: center;
        font-weight: 400;
    }
    &-link {
        font-size: 22px;
        margin-right: 50px;
    }
    .theme {
        display: inline-flex;
        align-items: center;
        &-icon {
            display: inline-block;
            vertical-align: middle;
        }
        .switch {
            &:before {
                border-radius: 20px;
                background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
                transition: 0.4s;
            }
            input:checked + &:before {
                background: #303136;
                box-shadow: inset -3px -2px 5px -2px #8983f7,
                    inset -10px -4px 0 0 #a3dafb;
            }
        }
    }
}

.nav-hidden {
    transition: all 0.5s;
    opacity: 0;
}

.nav-bg {
    @include nav_color();
}

.avatar {
    width: 25px;
    height: 25px;
}

// tooltip
@mixin tooltip_color() {
    background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
    [data-theme='dark'] & {
        background: darkred;
    }
}

@mixin tooltip_before() {
    background: linear-gradient(45deg, #b2e68d, #bce689);
    [data-theme='dark'] & {
        background: darkred;
    }
}

.el-popper.is-customized {
    /* Set padding to ensure the height is 32px */
    padding: 6px 12px;
    font-size: 16px;
    @include tooltip_color();
}
.el-popper.is-customized .el-popper__arrow::before {
    @include tooltip_before();
    right: 0;
}
</style>
