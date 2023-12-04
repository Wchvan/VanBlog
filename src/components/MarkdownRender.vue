<template>
    <div ref="mrRef" class="app-chat-markdown-render"  v-html="html"></div>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it';
import { computed } from 'vue';
// 公式
import mdKatex from '@traptitech/markdown-it-katex';
// 链接属性更新
import mila from 'markdown-it-link-attributes';
// 代码高亮
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const props = defineProps<{
    value: string
}>()

const md = new MarkdownIt({
    linkify: true,
    html: true,
    xhtmlOut: true,
    highlight(code, language) {
        const validLang = !!(language && hljs.getLanguage(language));
        if (validLang) {
            const lang = language ?? '';
            return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
    },
});
md.use(mdKatex, { blockClass: 'katexmath-block rounded-md', errorColor: ' #cc0000' });
md.use(mila, { attrs: { target: '_blank', rel: 'noopener' } });

const html = computed(()=>{
    return md.render(props.value);
})

</script>

<style lang="scss">
.app-chat-markdown-render {
    // font-family: 'PingFang SC';
    line-height: 22px;
    color: #131416;
    font-size: 14px;
    font-weight: 400;
    
    pre {
        background-color: #f2f6ff;
        border-radius: 5px;
        padding: 10px;
        overflow: auto;

        code {
            overflow: auto;
            display: block;
        }
    }

    h1 {
        font-size: 1.5em;
    }

    h2 {
        font-size: 1.3em;
    }

    h3,
    h4,
    h5,
    h6 {
        // font-size: inherit;
        // font-weight: inherit;
    }

    b,
    strong {
        font-weight: bolder;
    }

    p,
    ul,
    li,
    ol,
    dl,
    table,
    pre,
    details,
    blockquote {
        margin: 0;
        margin-bottom: 16px;
        word-break: break-all;
    }

    &>*:last-child {
        margin-bottom: 0 !important;
    }

    // ul\ol
    ul,
    ol {
        padding-left: 2em;
    }

    ul {
        list-style-type: disc;
    }

    ol {
        list-style-type: decimal;
    }

    // 链接
    a {
        color: #326bfb;
        text-decoration: none;
        word-break: break-all;

        &:hover {
            text-decoration: underline;
        }
    }

    // 视频
    .video-list {
        display: flex;
        flex-wrap: wrap;

        .video-item {
            width: 120px;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;

            &:hover {
                &::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 22px;
                    height: 22px;
                    background-image: url(@/assets/svg/video-play.svg);
                    pointer-events: none;
                }
            }

            video {
                width: 100%;
                height: 213px;
                border-radius: 4px;
                cursor: pointer;
                background: #2b2d32;
            }

            /* 隐藏控制条 */
            video::-webkit-media-controls {
                display: none !important;
            }

            video::-webkit-media-controls-enclosure {
                display: none !important;
            }

            video::-webkit-media-controls-panel {
                display: none !important;
            }
        }

        &.video-h {
            .video-item {
                width: 210px;
                margin-right: 10px;
                margin-bottom: 10px;

                video {
                    height: 120px;
                }
            }
        }

        &.video-v {
            .video-item {
                width: 120px;
                margin-right: 10px;
                margin-bottom: 10px;

                video {
                    height: 213px;
                }
            }
        }
    }

    // 图片
    .picture-list {
        display: flex;
        flex-wrap: wrap;

        .picture-item {
            width: 120px;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;

            &:hover {
                &::before {
                    content: '';
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    width: 17px;
                    height: 17px;
                    background-image: url(@/assets/svg/fullscreen.svg);
                    pointer-events: none;
                }
            }

            img {
                width: 100%;
                height: 213px;
                border-radius: 4px;
                cursor: pointer;
                background: #000;
            }
        }

        &.picture-h {
            .picture-item {
                width: 210px;
                margin-right: 10px;
                margin-bottom: 10px;

                img {
                    height: 120px;
                }
            }
        }

        &.picture-v {
            .picture-item {
                width: 120px;
                margin-right: 10px;

                img {
                    height: 213px;
                }
            }
        }
    }

    // 光标
    &.app-chat-markdown-typing {

        &:empty::after,
        &> :not(ol):not(ul):not(pre):last-child:after,
        &>ol:last-child li:not(:has(p)):last-child:after,
        &>ul:last-child li:not(:has(p)):last-child:after,
        &>ol:last-child li:last-child p:last-child:after,
        &>ul:last-child li:last-child p:last-child:after,
        &>pre:last-child code:after {
            animation: blink 0.5s infinite;
            // content: '▋';
            content: '｜';
            margin-left: 0.25rem;
            vertical-align: baseline;
        }
    }

    // table
    table {
        border-collapse: separate;
        border-spacing: 0 0;
        border-color: inherit;
        text-indent: 0;
        font-size: 0.875em;
        line-height: 1.7142857;
        table-layout: auto;
        text-align: left;
        width: 100%;

        * {
            border: 0 solid #d9d9e3;
        }

        thead {
            border-bottom-color: rgb(217, 217, 227);
            border-bottom-width: 1px;

            th {
                color: #252626;
                font-weight: 600;
                background-color: rgba(236, 236, 241, 0.2);
                border-bottom-width: 1px;
                border-left-width: 1px;
                border-top-width: 1px;
                padding: 0.25rem 0.75rem;
                vertical-align: bottom;

                &:first-child {
                    border-top-left-radius: 0.375rem;
                }

                &:last-child {
                    border-right-width: 1px;
                    border-top-right-radius: 0.375rem;
                }
            }
        }

        tbody {
            tr {
                border-bottom-color: rgb(217, 217, 227);
                border-bottom-width: 1px;

                &:last-child {
                    border-bottom-width: 0;

                    td {
                        &:first-child {
                            border-bottom-left-radius: 0.375rem;
                        }

                        &:last-child {
                            border-bottom-right-radius: 0.375rem;
                        }
                    }
                }
            }

            td {
                vertical-align: baseline;
                border-bottom-width: 1px;
                border-left-width: 1px;
                padding: 0.25rem 0.75rem;

                &:last-child {
                    border-right-width: 1px;
                }
            }

            tfoot {
                border-top-color: rgb(217, 217, 227);
                border-top-width: 1px;

                td {
                    vertical-align: top;
                }
            }
        }
    }

    .download-table-icon-wrapper {
        position: absolute;
        right: 6px;
        bottom: 6px;
        display: flex;
        width: 20px;
        height: 20px;
        padding: 2px;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.9);
        box-shadow: 0px 2px 4px 0px rgba(141, 141, 141, 0.25);
        color: #5f6063;
        cursor: pointer;

        &:hover {
            color: #2563f4;
        }
    }
}

@keyframes blink {
    from {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

// =============媒体查询================
@media screen and (max-width: 1680px) {

    .picture-list.picture-h .picture-item:nth-child(3n),
    .video-list.video-h .video-item:nth-child(3n) {
        margin-right: 0;
    }

    .picture-list.picture-v .picture-item:nth-child(5n),
    .video-list.video-v .video-item:nth-child(5n) {
        margin-right: 0;
    }
}

@media screen and (min-width: 1680px) and (max-width: 1920px) {

    .picture-list.picture-h .picture-item:nth-child(4n),
    .video-list.video-h .video-item:nth-child(4n) {
        margin-right: 0;
    }

    .picture-list.picture-v .picture-item:nth-child(7n),
    .video-list.video-v .video-item:nth-child(7n) {
        margin-right: 0;
    }
}

@media screen and (min-width: 1920px) {

    .picture-list.picture-h .picture-item:nth-child(5n),
    .video-list.video-h .video-item:nth-child(5n) {
        margin-right: 0;
    }

    .picture-list.picture-v .picture-item:nth-child(9n),
    .video-list.video-v .video-item:nth-child(9n) {
        margin-right: 0;
    }
}
</style>