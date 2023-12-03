<template>
    <div class="card"
      :style="{
            width: props.width,
        }"
    >
        <div class="card-img">
            <div class="card-img__inner center">
                <img class="card-img__inner__item center" :src="props.img"/>
            </div>
        </div>
        <div class="card-main" >
            <div class="card-main__title">
                {{ props.title }}
            </div>
            <div class="card-main__divider">

            </div>
            <div class="card-main__content">
                {{ props.content }}
            </div>
            <a class="card-main__link" href="#">
                {{ $t('common.more') }}
            </a>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { inject } from "vue"

const props = defineProps<{
    img: string,
    title: string,
    content: string,
    width: string,
}>()

</script>

<style lang='scss' scoped>
@import "/src/styles/mixins";

@mixin card_bg_color(){
  background: #fff;
  [data-theme=dark] & {
    background: rgb(100, 138, 122);
  }
}

@mixin more_font(){
  color: $blue-color;
  [data-theme=dark] & {
    color: $btn-color-dark;
  }
}

@mixin more_font_underline() {
    border-bottom: 1px solid $blue-color;
  [data-theme=dark] & {
    border-bottom: 1px solid $btn-color-dark;
  }
}
.card{
    background: transparent;
    aspect-ratio: 1.2;
    &-img {
        @include bg_color();
        position: relative;
        left: 50px;
        width: 180px;
        height: 180px;
        border-radius: 50%;
        z-index: 1;
        &__inner{
            border-radius: 50%;
            width: 150px;
            height: 150px;
            @include card_bg_color();
            &__item {
                width: 80%;
                height: 80%;
            }
        }
    }
    &-main {
        position: relative;
        top: -50px;
        border-radius: 20px;
        width: 100%;
        height: 95%;
        @include card_bg_color();
        padding: 70px 20px 0 20px;
        &__title{
            font-size: 32px;
            font-weight: 600;
        }
        &__divider {
            background: linear-gradient(90deg, rgb(23, 107, 202), rgb(255, 255, 255));;
            height: 10px;
            width: 50px;
            border-radius: 10px;
            margin: 15px 0;
        }
        &__link {
            position: absolute;
            bottom: 15px;
            right: 30px;
            font-size: 16px;
            line-height: 20px;
            @include more_font();
            &:hover::after{
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                height: 0;
                bottom: 0;
                @include more_font_underline();
            }
        }
    }
}
</style>