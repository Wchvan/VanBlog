<template>
    <div ref="mrRef" class="markdown-render" v-html="html"></div>
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
import { imgLazyload } from '@mdit/plugin-img-lazyload';

const props = defineProps<{
    value: string;
}>();

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
md.use(mdKatex, {
    blockClass: 'katexmath-block rounded-md',
    errorColor: ' #cc0000',
});
md.use(mila, { attrs: { target: '_blank', rel: 'noopener' } });
md.use(imgLazyload);

const html = computed(() => {
    return md.render(props.value);
});
</script>

<style lang="scss">
.markdown-render {
    line-height: 22px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;

    hr {
        margin: 16px 0;
    }

    blockquote {
        padding: 10px;
        color: #bbb;
        border-left: 5px solid #bbb;
        p {
            margin: 5px;
        }
    }

    pre {
        color: #111;
        background-color: #f2f6ff;
        [data-theme='dark'] & {
            background-color: #ccc;
        }
        border-radius: 5px;
        padding: 15px;
        overflow: auto;

        code {
            overflow: auto;
            display: block;
        }
    }

    h1 {
        font-size: 2.5rem;
        border-bottom: 0.5px solid #ddd;
        margin: 30px 0;
    }

    h2 {
        font-size: 1.5em;
        border-bottom: 0.5px solid #eee;
        margin: 30px 0;
    }
    h3,
    h4,
    h5,
    h6 {
        line-height: 1.4;
        margin: 25px 0;
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

    & > *:last-child {
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
        color: #0085a1;
        text-decoration: none;
        word-break: break-all;

        &:hover {
            text-decoration: underline;
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
</style>
