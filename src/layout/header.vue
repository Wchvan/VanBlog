<template>
    <div class="header">
        <div class="i18n header-item" @click="changeLanguage" style="cursor: pointer;">
            {{ $t('language') }}
        </div>
        <div class="theme header-item">
            <span class="theme-label">{{ $t('common.theme') }}: </span>
            <!-- <i-ep-Sunny v-show="!themeDark" class="theme-icon" style=" margin-left: 5px;"></i-ep-Sunny> -->
            <el-switch v-model="themeDark" 
                :active-action-icon="Moon"
                :inactive-action-icon="Sunny" 
                style="--el-switch-on-color: #f8df72; --el-switch-off-color: #409eff; margin: 0 10px;"
            />
            <!-- <i-ep-Moon v-show="themeDark" class="theme-icon"></i-ep-Moon> -->
        </div>
        <theme-switch></theme-switch>
    </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'
import { Sunny, Moon } from '@element-plus/icons-vue';

const I18n = useI18n()

const themeDark = ref<boolean>(false)
themeDark.value = sessionStorage.getItem('data-theme') === 'dark'
    document.documentElement.setAttribute('data-theme', sessionStorage.getItem('data-theme')||'')
watch(themeDark, (newVal) => {
    if (newVal) {
        document.documentElement.setAttribute('data-theme', 'dark')
        sessionStorage.setItem('data-theme', 'dark')
    }else{
        document.documentElement.setAttribute('data-theme', '')
        sessionStorage.setItem('data-theme', '')
    }
})

const changeLanguage = () => {
    if (I18n.locale.value === 'en-us') {
        I18n.locale.value = 'zh-ch'
    } else {
        I18n.locale.value = 'en-us'
    }
}
</script>

<style lang="scss">
.header{
    display: flex;
    justify-content: flex-end;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    &-item{
        margin-right: 15px;
        display: flex;
    }
    .theme{
        display: inline-flex;
        align-items: center;
        &-icon{
            display: inline-block;
            vertical-align: middle;
        }
        .switch{
            &:before {
                border-radius: 20px;
                background: linear-gradient(40deg,#ff0080,#ff8c00 70%);
                transition: .4s;
            }
            input:checked + &:before {
                background: #303136;
                box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
            }
        }
    }
}
</style>
