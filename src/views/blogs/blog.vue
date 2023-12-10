<template>
    <div class="blog" ref="container">
        <MarkdownRender :value="props.value"></MarkdownRender>
        <div ref="catalogContext" class="catalog" :class="flag ? '': 'cata-hidden'">
            <div class="catalog-title">目录</div>
            <el-divider />
            <div ref="catalogBox" class="catalog-box"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import MarkdownRender from '@/components/MarkdownRender.vue';
import { onMounted, ref, watch } from 'vue';
import { useWindowScroll } from '@vueuse/core';

const props = defineProps<{
    value: string;
}>();

const container = ref<Element>()
const list = ref<any>([])
const catalogBox = ref<Element>()
const catas = ref<any>([])
const flag = ref<boolean>(false)

onMounted(() => {
    // 获取标题
    list.value = container.value?.querySelectorAll("h1, h2, h3")
    let length = list.value.length;
    console.log(list.value)
    for (let i = 0; i < length; i++) {
        list.value[i].setAttribute('id', `${list.value[i].tagName}${i}`);
    }

    // 生成目录
    let ul = document.createElement('ul');
    for (let j of list.value) {
      let li = document.createElement('li');
      li.setAttribute('class', 'cata-item')
      let a = document.createElement('a');
      a.appendChild(document.createTextNode(`${j.innerText}`));//将标题内容复制到a标签上面
      a.setAttribute('href', `#${j.id}`);//添加锚点
      li.appendChild(a);
      if (j.tagName === 'H2') li.style.paddingLeft = '20px';//不同级的列表添加缩进
      if (j.tagName === 'H3') li.style.paddingLeft = '50px';
      ul.appendChild(li);
    }
    catalogBox.value?.append(ul)

    catas.value = catalogBox.value?.querySelectorAll('a')
    catas.value[0].setAttribute('class', 'cata-active')
})

const { y } = useWindowScroll();
watch( ()=>y, (newVal) => {
    if (flag.value && newVal.value < 300) {
        flag.value = false
    }
    if (!flag.value && newVal.value > 320) {
        flag.value = true
    }
    for (let i of list.value) {
        let distance = i.offsetTop - newVal.value;
        if (distance > 0 && distance < 20) {//滚动到标题的时候
          let id = i.getAttribute('id');//获取文章的h标题的id来指定对应的a标签
          for (let j of catas.value) {
            j.setAttribute('class', '')
            let href = j.getAttribute('href');
            href = href.slice(1, href.length);//获取和id对应的锚点的a标签，这样写因为'#xxx'，需要去掉#
            if (href === id)  j.setAttribute('class', 'cata-active')//变色
          }
        }
      }
}, {deep:true})
</script>

<style lang="scss" scoped>
.blog {
    width: 50vw;
    min-width: 500px;
    margin: 50px auto;
}

.cata-hidden {
    opacity: 0;
}

</style>

<style lang="scss">
.catalog {
    position: fixed;
    top: 50%;
    right: 10px;
    border: 1px solid #eee;
    background: #fff;
    [data-theme=dark] & {
        background: #000;
        border: 1px solid #bbb;
    }
    transform: translateY(-50%);
    padding: 20px;
    border-radius: 5px;
    opacity: 1;
    transition: all 0.5s;
    min-width: 10vw;

    &-box{
        max-height: 70vh;
        overflow: auto;
    }
    &-title{
        font-size: 1.5rem;
        text-align: center;
    }

    .cata-item{
        height: 2rem;
        line-height: 2rem;
    }

    .cata-active{
        color: #0085a1;
    }
}
</style>
