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
            <div
                :style="{ width: width + 'vw', left: left + 'vw' }"
                class="project-list"
            >
                <img-card
                    v-for="(item, index) in projectList"
                    :key="item.name"
                    class="project-item"
                    :img="`https://www.wchvan.online/files/pic/tech/${
                        index + 1
                    }.svg`"
                    :title="item.name"
                    :content="item.desc"
                    width="30vw"
                    :link="item.link"
                />
            </div>
        </div>
        <div class="bottom">
            <div class="divider"></div>
            <div class="btn">
                <div class="btn-item left">
                    <i-ep-ArrowLeft
                        class="center"
                        @click="swiper(true)"
                    ></i-ep-ArrowLeft>
                </div>
                <div class="btn-item right">
                    <i-ep-ArrowRight
                        class="center"
                        @click="swiper(false)"
                    ></i-ep-ArrowRight>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import imgCard from '@/components/img-card.vue';
import { useTypingText } from '@/hooks/useTypingText';
import * as I from '@/interface/index.d';
import { ref } from 'vue';
import ProjectService from '@/api/project';

const { typingText, setAllText } = useTypingText(
    ['在项目中不断学习并提升前端技术'],
    150,
    1000,
);

const projectList = ref<I.Project.ProjectItem[]>([]);
const width = ref<number>(0);
ProjectService.getProjects().then((res) => {
    if (res.code === 200) {
        projectList.value = res.data.list;
        width.value = res.data.list.length * 33;
    }
});

const left = ref<number>(0);
const swiper = (flag: boolean) => {
    const step = width.value / projectList.value.length;
    if (flag && left.value < 0) {
        left.value += step;
    }

    if (!flag && left.value + step * (projectList.value.length - 3) > 0) {
        left.value -= step;
    }
};
</script>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    padding-bottom: 40px;
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
        &-list {
            display: flex;
            position: relative;
            justify-content: space-around;
        }
        &-item {
            line-height: 2rem;
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
