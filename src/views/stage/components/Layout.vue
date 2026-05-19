<template>
  <div ref="refLayout" class="layout-container" :class="{ 'is-collapse': isCollapse, 'is-expand': !isCollapse, 'is-webview': isWebview }">
    <div class="layout-menu use-shadow">
      <h1 class="menu-logo" @click="$router.push('/')">
        <img v-if="$appLogo" :src="$appLogo" />
        <img v-else src="~@/core/assets/rocket2.svg" />
        <span>{{ $appName }}</span>
      </h1>

      <div class="menu-groups">
        <div v-for="(group, index) in groupMenus" :key="index" class="menu-group">
          <div v-if="group.groupTitle" class="g-title">{{ group.groupTitle }}</div>
          <ul class="g-links">
            <li
              v-for="(menu, idx) in group.groupLinks"
              v-show="!menu.menuHide"
              :key="idx"
              :class="{ 'is-active': menu.menuPath === $route.fullPath }"
            >
              <a-tooltip :title="menu.menuTitle" placement="right" :get-popup-container="() => $refs.refLayout">
                <span class="link" @click="goMenu(menu)">
                  <svg-icon :name="menu.menuIcon" weight="duotone" />
                  <span class="tit">{{ menu.menuTitle }}</span>
                </span>
              </a-tooltip>
            </li>
          </ul>
        </div>
      </div>

      <p class="version">
        {{ $appName + ' ' + $appVersion }}
      </p>
    </div>

    <div class="layout-topbar">
      <div class="topbar-collapse">
        <div class="svg-icon" @click.stop="isCollapse = !isCollapse">
          <img src="../assets/83-menu-2.png" />
        </div>
        <div class="title">{{ navTitle }}</div>
      </div>
      <corner-bar />
    </div>

    <div class="layout-main">
      <div class="wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import navMenus from '../constants/menu'
import CornerBar from './CornerBar'
import '../styles/overview.scss'

export default {
  name: 'Layout',
  components: {
    CornerBar
  },
  data() {
    return {
      isCollapse: window.innerWidth < 900,
      navMenus
    }
  },
  computed: {
    navTitle() {
      return this.navMenus
        .map((item) => item.groupLinks)
        .flat()
        .find((item) => this.$route.path.includes(item.menuPath))?.menuTitle
    },
    extraMenus() {
      try {
        const extraMenus = window.ExposeConfig.extraMenus.map((group) => {
          const groupLinks = group.groupLinks.map((link) => {
            return {
              menuTitle: this.$t(link.menuTitle),
              menuIcon: link.menuIcon || 'fire',
              menuPath: '/stage/webview?token=' + btoa(link.menuPath),
              externalLink: link.menuPath,
              needSubscribe: link.needSubscribe ?? true,
              isExternal: link.isExternal ?? false,
              isExtraMenu: true // 标记为外部菜单，见expose.js
            }
          })
          return {
            groupTitle: this.$t(group.groupTitle),
            groupLinks
          }
        })

        return extraMenus
      } catch {
        return []
      }
    },
    groupMenus() {
      /**
       * 
          var ExposeConfig = {
            extraMenus: [
              {
                groupTitle: '自定义标题', // 大标题文本 （如需支持多语言，请在zh-CN.js、zh-TW.js、en-US.js中配置多语言文本）
                groupLinks: [
                  {
                    menuTitle: '小标题1', // 标题文本
                    menuIcon: 'gauge', // 图标：https://phosphoricons.com/ 自选
                    menuPath: 'https://www.bing.com', // 链接地址
                    needSubscribe: false, // true：需要订阅后才能查看 false：无需订阅即可查看
                    isExternal: true // true：打开新窗口 false：内嵌
                  },
                  {
                    menuTitle: '小标题2',
                    menuIcon: 'book-open-text',
                    menuPath: 'https://github.com/',
                    needSubscribe: true,
                    isExternal: false
                  }
                ]
              }
            ]
          }

       */
      return [...this.navMenus, ...this.extraMenus]
    },
    isWebview() {
      return this.$route.path.includes('/webview')
    }
  },
  mounted() {
    window.conso1e.log(23)
    window.addEventListener(
      'resize',
      () => {
        this.isCollapse = window.innerWidth < 900
      },
      false
    )

    document.addEventListener(
      'click',
      () => {
        if (window.innerWidth < 700) {
          this.isCollapse = true
        }
      },
      false
    )
  },
  methods: {
    goMenu(menu) {
      if (menu.isExtraMenu) {
        if (menu.isExternal) {
          window.open(menu.externalLink, '_blank')
        } else {
          const token = btoa(menu.externalLink)
          const needSubscribe = menu.needSubscribe ? 1 : 0
          this.$ls.set('ex_token', token)
          this.$ls.set('ex_needSubscribe', needSubscribe)
          this.$router.push(menu.menuPath)
        }
      } else {
        this.$router.push(menu.menuPath)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-container {
  background-color: #fafafa;
  height: 100vh;
  overflow: hidden;

  &.is-expand {
    ::v-deep {
      .ant-tooltip {
        display: none !important;
      }
    }
  }

  &.is-collapse {
    .layout-menu {
      width: 60px;
    }
    .layout-topbar {
      left: 100px;

      .topbar-collapse {
        .svg-icon {
          perspective: 400px;
          img {
            transform: rotateY(180deg);
          }
        }
      }
    }
    .layout-main {
      left: 100px;
    }

    .menu-logo {
      // padding: 0;
      // margin-bottom: 10px;

      img {
        width: 36px;
        margin-right: 0;
      }

      > span {
        display: none;
      }
    }
    .menu-groups {
      height: calc(100vh - 125px);
    }
    .menu-group {
      padding: 0 5px;

      .g-title {
        font-size: 16px;
        text-align: center;
        padding-left: 0;
        display: none;
      }
      .g-links {
        .link {
          padding: 12px 0;
          border-radius: 8px;
          justify-content: center;
        }
        .svg-icon {
          font-size: 24px;
        }
        .tit {
          display: none;
        }
      }
    }
    .version {
      display: none;
    }
  }

  .layout-menu {
    width: 220px;
    // background-color: #fff;
    // box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    position: absolute;
    left: 20px;
    top: 20px;
    overflow: hidden;
    transition: width 0.3s ease;
  }

  .layout-topbar {
    position: absolute;
    left: 260px;
    height: 80px;
    top: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 10px;
    background-color: rgba(#fafafa, 0.8);
    backdrop-filter: saturate(180%) blur(20px);
    z-index: 5;
  }

  .layout-main {
    position: absolute;
    left: 260px;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    padding: 80px 20px 0;

    .wrapper {
      width: 1920px;
      max-width: 100%;
      padding: 30px 0;
      margin: 0 auto;
    }
  }

  .menu-logo {
    font-size: 30px;
    text-align: center;
    padding: 20px 0;
    margin: 0;
    cursor: pointer;
    white-space: nowrap;

    img {
      margin-right: 10px;
      width: 38px;
    }
  }
  .menu-groups {
    height: calc(100vh - 172px);
    overflow-x: hidden;
    overflow-y: auto;
  }
  .menu-group {
    padding: 0 30px;
    margin-bottom: 20px;

    .g-title {
      font-size: 16px;
      margin-bottom: 8px;
      padding-left: 15px;
      color: #000000a1;
    }
    .g-links {
      list-style: none;
      padding: 0;
      margin: 0;
      overflow: hidden;

      li {
        margin-bottom: 5px;
        &:hover {
          .link {
            background-color: darken(#f7faff, 0%);
          }
        }
        &.is-active {
          .link {
            background-color: darken(#f7faff, 3%);
          }
        }
      }
      .link {
        display: flex;
        padding: 12px 25px 12px 15px;
        border-radius: 8px;
        align-items: center;
        flex-direction: row;
        flex-wrap: nowrap;
        cursor: pointer;
      }
      .svg-icon {
        font-size: 23px;
        color: #{'rgba(var(--primary-color), 1)'};
      }
      .tit {
        font-size: 16px;
        color: #000;
        margin-left: 10px;
        white-space: nowrap;
      }
    }
  }

  .version {
    font-size: 12px;
    padding: 15px 10px;
    color: #999;
    text-align: center;
    margin: 0;
  }

  .topbar-collapse {
    display: flex;
    flex-direction: row;
    align-items: center;
    .svg-icon {
      width: 32px;
      height: 32px;
      cursor: pointer;

      img {
        transition: transform 0.5s ease;
        width: 100%;
        height: 100%;
        display: block;
      }

      @at-root .is-darkmode {
        .layout-container {
          .topbar-collapse {
            .svg-icon {
              img {
                filter: invert(100%);
              }
            }
          }
        }
      }
    }
    .title {
      font-size: 24px;
      margin-left: 20px;
    }
  }
}

@media screen and (max-width: 1920px) {
  .layout-container {
    .layout-main {
      .wrapper {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .layout-container {
    ::v-deep {
      .ant-tooltip {
        display: none !important;
      }
    }
    &.is-collapse {
      .layout-menu {
        width: 0;
      }
      .layout-main {
        left: 0;
      }
      .layout-topbar {
        left: 0;
      }

      .menu-group {
        .g-title {
        }
        .g-links {
          .link {
            justify-content: flex-start;
          }
          .svg-icon {
          }
          .tit {
            display: block;
          }
        }
      }
    }
    .layout-menu {
      left: 0;
      top: 0;
      height: 100vh;
      border-radius: 0;
      z-index: 6;
    }
    .layout-main {
      left: 0;
    }
    .layout-topbar {
      left: 0;
      height: 60px;
    }

    .menu-groups {
      height: calc(100vh - 138px);
    }

    .topbar-collapse {
      .title {
        font-size: 20px;
        margin-left: 10px;
      }
      .svg-icon {
        width: 28px;
        height: 28px;
      }
    }
  }
}
</style>
