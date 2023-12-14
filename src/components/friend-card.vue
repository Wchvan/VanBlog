<template>
    <el-card class="card">
        <div class="user">
            <el-avatar :src="props.avatar" class="user-avatar" />
            <div class="user-name">{{ props.name }}</div>
            <el-divider />
            <div class="user-desc">{{ props.desc }}</div>
            <el-link class="user-link" :href="props.link" target="_blank"
                >网址链接</el-link
            >
        </div>
    </el-card>
</template>

<script setup lang="ts">
const props = defineProps<{
    name: string;
    avatar: string;
    desc: string;
    link: string;
}>();
</script>

<style lang="scss" scoped>
.card {
    background-color: #fff;
    opacity: 0.8;
}
.user {
    width: 320px;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    &-avatar {
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
    }
    &-name {
        font-size: 32px;
    }
    &-desc {
        text-indent: 2rem;
        line-height: 1.5;
    }
    &-link {
        font-size: 20px;
        position: absolute;
        bottom: 10px;
    }
}
</style>
