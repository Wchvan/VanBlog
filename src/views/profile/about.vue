<template>
    <div class="wrapper">
        <div class="about-item uestc">
            <img src="/src/assets/uestc.jpeg" class="about-item__img" />
            <div class="about-item__desc">
                <span class="about-item__desc-title">UESTCER</span>
                <br />
                {{ $t('profile.about.uestc.name') }}
                <br />
                GPA: 3.8/4.0
                <br />
                排名: 前30%
            </div>
        </div>
        <div class="about-item">
            <img src="/src/assets/vue.svg" class="about-item__img" />
            <div class="about-item__desc">
                <span class="about-item__desc-title">PROGRAMER</span>
                <br />
                {{ $t('profile.about.programer.frontend') }}
                <br />
                {{ $t('profile.about.programer.backend') }}
            </div>
        </div>
        <div class="about-item">
            <img src="/src/assets/basketball.jpg" class="about-item__img" />
            <div class="about-item__desc">
                <span class="about-item__desc-title">BASKETBALLER</span>
                <br />
                {{ $t('profile.about.basketball.desc') }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.wrapper {
    margin-top: 80px;
    margin-left: 10%;
    width: 80%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 20px 15px rgb(19, 55, 0);
    .about-item {
        width: 400px;
        height: 400px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        // justify-content: center;
        align-items: center;
        &__img {
            width: 200px;
            height: 200px;
            object-fit: contain;
        }
        &__desc {
            margin-top: 20px;
            font-size: 24px;
            font-weight: 400;
            text-align: center;
            line-height: 40px;
            &-title {
                font-size: 32px;
                font-weight: 800;
                padding-bottom: 10px;
            }
        }
    }
}
</style>
