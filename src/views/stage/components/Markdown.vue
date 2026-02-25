<template>
  <div :key="id" class="markdown-container">
    <div v-if="content" :id="id" v-html="content"></div>
    <div v-else class="spin-loading">
      <a-spin size="large" />
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import MarkdownItHighlightjs from 'markdown-it-highlightjs'
import MarkdownItSub from 'markdown-it-sub'
import MarkdownItSup from 'markdown-it-sup'
import MarkdownItFootnote from 'markdown-it-footnote'
import MarkdownItDeflist from 'markdown-it-deflist'
import MarkdownItAbbr from 'markdown-it-abbr'
import MarkdownItEmoji from 'markdown-it-emoji'
import MarkdownItContainer from 'markdown-it-container'
import MarkdownItIns from 'markdown-it-ins'
import MarkdownItMark from 'markdown-it-mark'
import MarkdownItTaskLists from 'markdown-it-task-lists'
import MarkdownItMultimdTable from 'markdown-it-multimd-table'
import MarkdownItTableOfContents from 'markdown-it-table-of-contents'
import MarkdownItAnchor from 'markdown-it-anchor'
import MarkdownItKatex from 'markdown-it-katex'
import MarkdownItBlockEmbed from 'markdown-it-block-embed'
import MarkdownItSmartarrows from 'markdown-it-smartarrows'
import 'highlight.js/styles/dark.css'
import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js'
import PhotoSwipe from 'photoswipe/dist/photoswipe.esm.js'
import 'photoswipe/dist/photoswipe.css'
import $ from 'jquery'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: false
})

md.use(MarkdownItHighlightjs, {
  auto: true
})
md.use(MarkdownItSub)
md.use(MarkdownItSup)
md.use(MarkdownItFootnote)
md.use(MarkdownItDeflist)
md.use(MarkdownItAbbr)
md.use(MarkdownItEmoji)
md.use(MarkdownItContainer, 'warning')
md.use(MarkdownItContainer, 'error')
md.use(MarkdownItContainer, 'info')
md.use(MarkdownItContainer, 'success')
md.use(MarkdownItIns)
md.use(MarkdownItMark)
md.use(MarkdownItTaskLists)
md.use(MarkdownItMultimdTable)
md.use(MarkdownItTableOfContents)
md.use(MarkdownItAnchor)
md.use(MarkdownItKatex)
md.use(MarkdownItBlockEmbed)
md.use(MarkdownItSmartarrows)

export default {
  name: 'Markdown',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      id: '',
      content: ''
    }
  },
  watch: {
    value: {
      immediate: true,
      async handler() {
        this.id = 'swiper' + Math.random().toString().substring(2)
        this.content = ''
        await this.initContent()
        setTimeout(() => {
          this.initGallery()
        }, 500)
      }
    }
  },
  methods: {
    initContent() {
      return new Promise((resolve) => {
        const mdCont = md.render(this.value)
        const imgLinks = [...mdCont.matchAll(/<img.*src="(.*?)".*?>/g)]
        const sizes = new Array(imgLinks.length).fill(null)

        if (imgLinks.length > 0) {
          for (let i = 0; i < imgLinks.length; i++) {
            const link = imgLinks[i][1]
            this.getImageOriginSize(link).then((size) => {
              sizes[i] = size

              const isFinish = sizes.every((s) => !!s)
              if (isFinish) {
                const mdHtml = mdCont.replace(/(<img.*src="(.*?)".*?>)/g, '<a class="img-linker" href="$2" target="_blank">$1</a>')
                this.content = mdHtml

                this.$nextTick().then(() => {
                  $('.img-linker').each(function (i, v) {
                    $(this).attr('data-pswp-width', sizes[i].width)
                    $(this).attr('data-pswp-height', sizes[i].height)
                  })

                  resolve()
                })
              }
            })
          }
        } else {
          this.content = mdCont
          resolve()
        }
      })
    },
    initGallery() {
      window.conso1e.log(56)
      const lightbox = new PhotoSwipeLightbox({
        gallery: '#' + this.id,
        children: '.img-linker',
        pswpModule: PhotoSwipe,
        wheelToZoom: true
      })
      lightbox.init()
    },
    getImageOriginSize(img) {
      return new Promise((resolve) => {
        const image = new Image()

        image.onload = function () {
          const originWidth = this.width
          const originHeight = this.height
          resolve({
            width: originWidth,
            height: originHeight
          })
        }

        image.onerror = function (err) {
          resolve({ width: 'auto', height: 'auto' })
        }

        image.src = img
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.markdown-container {
  font-size: 16px;
  padding: 10px;
  color: #333;

  ::v-deep {
    a {
      color: #428bca;

      &:hover,
      &:focus {
        color: #2a6496;
        text-decoration: underline;
      }
    }
    img {
      max-width: 90%;
    }

    p {
      margin: 0 0 10px;
    }

    hr {
      margin: 20px 0;
      border: none;
      height: 1px;
      background-color: rgba(0, 0, 0, 0.4);
      opacity: 0.25;
    }

    blockquote {
      padding: 10px 20px;
      margin: 0 0 20px;
      font-size: 17.5px;
      border-left: 5px solid #eee;
    }

    blockquote p:last-child,
    blockquote ul:last-child,
    blockquote ol:last-child {
      margin-bottom: 0;
    }

    code:not(.hljs) {
      padding: 2px 4px;
      font-size: 90%;
      color: #c7254e;
      background-color: #f9f2f4;
      border-radius: 4px;
    }

    mark {
      color: #000;
      background: #fcf8e3;
    }

    dt {
      font-weight: bold;
    }

    dd {
      margin-left: 0;
    }

    table {
      width: 100%;
      text-align: left;
      border-radius: 4px 4px 0 0;
      border-collapse: separate;
      border-spacing: 0;
      margin-bottom: 20px;

      th {
        color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
        text-align: left;
        background: #fafafa;
        border-bottom: 1px solid #e8e8e8;
        padding: 16px;
        overflow-wrap: break-word;
      }

      td {
        padding: 16px;
        overflow-wrap: break-word;
        border-bottom: 1px solid #e8e8e8;
      }

      tbody {
        tr:hover {
          background: #e6f7ff;
        }
      }
    }

    .success,
    .error,
    .info,
    .warning {
      box-sizing: border-box;
      margin: 0;
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
      font-variant: tabular-nums;
      line-height: 1.5;
      list-style: none;
      font-feature-settings: 'tnum';
      position: relative;
      padding: 8px 15px 8px 37px;
      word-wrap: break-word;
      border-radius: 4px;
      margin: 10px 0;
      p {
        margin: 0;
      }
      em {
        font: inherit;
      }
    }

    .success {
      background-color: #f6ffed;
      border: 1px solid #b7eb8f;
    }
    .info {
      background-color: #e6f7ff;
      border: 1px solid #91d5ff;
    }
    .warning {
      background-color: #fffbe6;
      border: 1px solid #ffe58f;
    }
    .error {
      background-color: #fff1f0;
      border: 1px solid #ffa39e;
    }
  }
}
</style>
