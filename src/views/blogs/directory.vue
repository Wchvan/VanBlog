<template>
    <div class="directory">
        <button class="total">{{ $t('common.total') }} : {{ total }}</button>
        <div v-for="item in passageList" :key="item.date" class="blog">
            <div class="blog-date">{{ item.date }}</div>
            <div
                v-for="passage in item.data"
                :key="passage.name"
                class="blog-title"
            >
                <a
                    style="display: flex; justify-content: space-between"
                    @click="goDetail(passage)"
                    ><span>{{ passage.name }}</span>
                    <span>{{ passage.time.slice(0, 10) }}</span></a
                >
                <el-divider style="margin: 18px"></el-divider>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import PassageService from '@/api/passage';
import { ref } from 'vue';
import * as I from '@/interface/index.d';

const router = useRouter();
const total = ref<number>(0);

const passageList = ref<
    {
        date: string;
        data: I.Passage.PassageItem[];
    }[]
>([]);
PassageService.getPassages({
    page: 1,
    pageSize: 50,
}).then((res) => {
    if (res.code === 200) {
        passageList.value = res.data;
        for (let item of passageList.value) {
            total.value += item.data.length
        }
    }
});

const goDetail = (passage: I.Passage.PassageItem) => {
    router.push(`/blogs?id=${passage.id}&name=${passage.name}`);
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
