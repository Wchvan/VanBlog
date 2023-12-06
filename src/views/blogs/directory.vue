<template>
    <div class="directory">
        <button class="total">{{ $t('common.total') }} : 12</button>
        <div v-for="item in 3" :key="item" class="blog">
            <div class="blog-date">2020</div>
            <div v-for="item in 3" :key="item" class="blog-title">
                <a @click="goDetail">《深入理解Vue的diff算法》</a>
                <el-divider style="margin: 18px"></el-divider>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goDetail = () => {
    router.push('/blogs?name=深入理解Vue的diff算法');
};
</script>

<style lang="scss" scoped>
.directory {
    width: 50vw;
    min-width: 500px;
    margin: 40px auto;
    overflow: hidden;
    .total {
        font-size: 16px;
        background-color: #e4e4e4;
        color: #0085a1;
        box-shadow: #0000001e 0 1px 6px, #0000003d 0 1px 4px;
        padding: 5px 24px;
        border-radius: 30px;
        [data-theme='dark'] & {
            background-color: #0085a1;
            color: #ddd;
        }
    }
    .blog {
        margin: 30px 0;
        &-date {
            font-size: 24px;
            margin-bottom: 30px;
            color: #0085a1;
        }
        &-title {
            font-size: 18px;
            text-indent: 2rem;
            cursor: pointer;
            &:hover {
                color: #0085a1;
            }
        }
    }
}
</style>
