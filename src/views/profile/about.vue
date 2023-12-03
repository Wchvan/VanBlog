<template>
    <div ref="wrapper" class="wrapper" >
        <!-- <img ref="bg" src="#" class="bg" /> -->
        <div class="profile">
            <img src="#" class="profile-img" ref="img"/>
            <div class="profile-info">
                <div class="profile-info__title">
                    <div class="profile-info__title-num">01</div>
                    <div class="profile-info__title-txt">我的<br/>简介</div>
                </div>
                <div class="profile-info__content">
                    <p>{{ $t('profile.about.school') }}</p>
                    <br />
                    <p>{{ $t('profile.about.frontEnd') }}</p>
                    <br />
                    <p>{{ $t('profile.about.backEnd') }}</p>
                    <br />
                    <p>{{ $t('profile.about.internship') }}</p>
                    <br />
                    <p>{{ $t('profile.about.reward') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { intersectEle } from '@/utils/intersect';
import { onMounted } from 'vue';

const wrapper = ref();
const img = ref();
onMounted(() => {
    intersectEle(
        img.value,
        (item) => {
            item.target.setAttribute(
                'src',
                'https://www.wchvan.online/files/pic/profile-img.JPG',
            );
        },
        true,
        {root: wrapper.value}
    );
});
</script>

<style lang="scss" scoped>
@mixin bg_color(){
  background: #abc1c6;
  [data-theme=dark] & {
    background: rgb(32,37,33);
  }
}

.wrapper {
    width: 100%;
    height: 100vh;
    overflow: auto;
    position: relative;
    @include bg_color();
    .bg {
        object-fit: cover;
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.95;
        z-index: -1;
    }
    .profile{
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: row;
        width: 80vw;
        height: 80vh;
        &-img{
            height: 100%;
            aspect-ratio: 0.7;
            filter: brightness(90%);
            [data-theme=dark] & {
                filter: brightness(70%);
            }
            margin-right: 100px;
        }
        &-info{
            &__title {
                // line-height: 60px;
                display: flex;
                align-items: center;
                margin-bottom: 20px;
                &-num {
                    font-size: 120px;
                    line-height: 120px;
                    font-weight: 1000;
                    color: darkred;
                }
                &-txt{
                    font-size: 36px;
                    font-weight: 600;
                }
            }
            &__content{
                padding-left: 20px;
                font-size: 18px;
                text-indent: 2rem;
            }
        }
    }
}
</style>
