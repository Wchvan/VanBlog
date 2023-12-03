<template>
    <div class="info card">
        <el-avatar src="https://www.wchvan.online/files/pic/avatar.JPG" class="info-avatar" />
        <div class="info-item">{{ $t('blogs.info.title') }}</div>
        <div class="info-item">{{ $t('blogs.info.desc') }}</div>
        <el-divider />
        <div class="info-item">
            <div class="info-item__school">
                <div class="info-item__school-label">在读院校：</div>
                <div class="info-item__school-value">电子科技大学</div>
            </div>
            <div class="info-item__school">
                <div class="info-item__school-label">专业：</div>
                <div class="info-item__school-value">软件工程专业</div>
            </div>
            <div class="info-item__school">
                <div class="info-item__school-label">年级：</div>
                <div class="info-item__school-value">大三</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.info {
    font-weight: 300;
    width: 350px;
    min-height: 500px;
    height: calc(100vh - 400px);
    padding: 20px;
    position: fixed;
    left: 80px;
    top: 15vh;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;

    &-avatar {
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
    }
    &-item {
        width: 100%;
        font-size: 22px;
        line-height: 40px;
        text-align: center;
        &__school {
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>
