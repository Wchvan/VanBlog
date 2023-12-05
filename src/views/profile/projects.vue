<template>
    <div ref="wrapper" class="wrapper">
        <div class="top">
            <div class="title">
                <div class="title__num">02</div>
                <div class="title__txt">我的项目</div>
            </div>
            <div class="desc">{{ typingText }} |</div>
        </div>
        <div class="project">
            <img-card
                v-for="item in 3"
                :key="item"
                class="project-item"
                :img="`https://www.wchvan.online/files/pic/tech/${item}.svg`"
                title="食刻系统"
                content="111"
                width="30vw"
            />
        </div>
        <div class="bottom">
            <div class="divider"></div>
            <div class="btn">
                <div class="btn-item left">
                    <i-ep-ArrowLeft class="center"></i-ep-ArrowLeft>
                </div>
                <div class="btn-item right">
                    <i-ep-ArrowRight class="center"></i-ep-ArrowRight>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import imgCard from '@/components/img-card.vue';
import { useTypingText } from '@/hooks/useTypingText';

const { typingText, setAllText } = useTypingText(
    ['在项目中不断学习并提升前端技术'],
    150,
    1000,
);
</script>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    height: 100vh;
    .top {
        margin: 50px auto;
        .title {
            font-size: 50px;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            &__num {
                color: darkred;
                font-size: 60px;
                padding-right: 10px;
            }
        }
        .desc {
            text-align: center;
            font-size: 18px;
            font-weight: 400;
            margin-top: 5px;
        }
    }

    .project {
        width: 100%;
        display: flex;
        justify-content: space-around;
        &-item {
        }
    }

    .bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        margin-top: 150px;

        .divider {
            background: linear-gradient(
                90deg,
                rgb(23, 107, 202),
                rgb(255, 255, 255)
            );
            [data-theme='dark'] & {
                background: linear-gradient(90deg, darkred, rgb(134, 117, 125));
            }
            height: 15px;
            width: 30vw;
            border-radius: 10px;
        }
        .btn {
            display: flex;
            margin-right: 50px;

            &-item {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                font-size: 28px;
                font-weight: 600;
                cursor: pointer;
                &.left {
                    background: #eee;
                    [data-theme='dark'] & {
                        background: rgb(100, 138, 122);
                    }
                    margin-right: 20px;
                }

                &.right {
                    color: #fff;
                    background: #409eff;
                    [data-theme='dark'] & {
                        color: #ddd;
                        background: darkred;
                    }
                }
            }
        }
    }
}
</style>
