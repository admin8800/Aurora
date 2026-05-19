<template>
  <div class="home-header" :class="{ 'show-menu': showMenu }">
    <div class="header-wrapper">
      <div class="wrapper-box">
        <div class="header-logo">
          <h1 class="logo">
            <img v-if="$appLogo" :src="$appLogo" />
            <img v-else src="@/core/assets/rocket2.svg" />
            {{ $appName }}
          </h1>
        </div>
        <div class="header-book">
          <a-icon :type="showMenu ? 'close' : 'menu'" @click.stop="showMenu = !showMenu" />
        </div>
        <div class="header-nav">
          <a-anchor :affix="false" :target-offset="60">
            <a-anchor-link href="#index">
              <span slot="title">{{ $t('首页') }}</span>
            </a-anchor-link>
            <a-anchor-link href="#spec">
              <span slot="title">{{ $t('特性') }}</span>
            </a-anchor-link>
            <a-anchor-link href="#advance">
              <span slot="title">{{ $t('服务') }}</span>
            </a-anchor-link>
            <a-anchor-link href="#question">
              <span slot="title">{{ $t('常见问题') }}</span>
            </a-anchor-link>
            <a-anchor-link href="#about">
              <span slot="title">{{ $t('关于') }} {{ $appName }}</span>
            </a-anchor-link>
          </a-anchor>
        </div>
        <div class="header-sign">
          <template v-if="!hasLogin">
            <lang-change size="24px" style="margin-right: 20px" />
            <router-link class="login" to="/login">{{ $t('登录') }}</router-link>
            <a-button type="primary" class="reg" @click="register">{{ $t('注册') }}</a-button>
          </template>
          <corner-bar v-else />
        </div>
      </div>
    </div>
    <transition name="slide-fade">
      <div v-if="showMenu" class="header-menu">
        <a-anchor :affix="false" :target-offset="60">
          <a-anchor-link href="#index">
            <span slot="title">{{ $t('首页') }}</span>
          </a-anchor-link>
          <a-anchor-link href="#spec">
            <span slot="title">{{ $t('特性') }}</span>
          </a-anchor-link>
          <a-anchor-link href="#advance">
            <span slot="title">{{ $t('服务') }}</span>
          </a-anchor-link>
          <a-anchor-link href="#question">
            <span slot="title">{{ $t('常见问题') }}</span>
          </a-anchor-link>
          <a-anchor-link href="#about">
            <span slot="title">{{ $t('关于') }} {{ $appName }}</span>
          </a-anchor-link>
        </a-anchor>
      </div>
    </transition>
  </div>
</template>

<script>
import CornerBar from '@/views/stage/components/CornerBar'
import LangChange from '@/views/stage/components/LangChange'
import { Authorization } from '@/core/utils/ls'

export default {
  name: 'HomeHeader',
  components: {
    CornerBar,
    LangChange
  },
  data() {
    return {
      showMenu: false,
      blurTop: '60px'
    }
  },
  computed: {
    hasLogin() {
      return this.$ls.get(Authorization)
    }
  },
  mounted() {
    document.addEventListener(
      'click',
      () => {
        this.showMenu = false
      },
      false
    )
  },
  methods: {
    register() {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="scss" scoped>
.home-header {
  background-color: rgba(240, 240, 240, 0.4);
  backdrop-filter: saturate(180%) blur(20px);
  left: 0;
  top: 0;
  width: 100%;
  position: fixed;
  z-index: 10;
  height: 60px;
  overflow: hidden;

  .header-wrapper {
    background-color: rgba(#fff, 0.55);
    z-index: 2;
    position: relative;
  }

  .filter-blur {
    position: absolute;
    width: 100%;
    left: 0;
    top: 60px;
    z-index: 1;
    filter: blur(10px);
  }

  .wrapper-box {
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .header-logo {
    .logo {
      font-size: 26px;
      margin-bottom: 0;
      color: #{'rgba(var(--primary-color), 1)'};
      text-shadow: 2px 2px 5px rgba(#000, 0.1);
      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        width: 34px;
        margin-right: 8px;
      }
    }
  }
  .header-nav {
    ::v-deep {
      .ant-anchor {
        &:after {
          content: '';
          display: block;
          clear: both;
        }
      }
      .ant-anchor-wrapper {
        overflow: visible;
        background-color: transparent;
      }
      .ant-anchor-ink {
        display: none;
      }
      .ant-anchor-link {
        float: left;
        padding: 0;
        margin: 0 10px;

        &:hover {
          a {
            color: #{'rgba(var(--primary-color), 1)'};
          }
        }

        a {
          color: #000;
          font-size: 18px;
          padding: 8px 20px;
        }
      }
    }
  }
  .header-sign {
    .login {
      color: #000;
      margin-right: 20px;
      font-size: 16px;
    }

    .reg {
      font-size: 16px;
    }
  }

  .header-book {
    font-size: 20px;
    color: #{'rgba(var(--primary-color), 1)'};
    cursor: pointer;
    display: none;
  }
}
.header-menu {
  z-index: 2;
  position: relative;
  padding: 0 20px;
  box-sizing: border-box;
  border-top: 1px solid #eee;
  box-shadow: 0 12px 12px 1px rgba(#000, 0.05);
  background-color: rgba(#fff, 0.7);

  ::v-deep {
    .ant-anchor-wrapper {
      background-color: transparent;
    }
    .ant-anchor-ink {
      display: none;
    }
    .ant-anchor-link {
      padding: 0;

      &:hover {
        a {
          color: #{'rgba(var(--primary-color), 1)'};
        }
      }

      a {
        color: #000;
        font-size: 18px;
        padding: 18px 0px;
        border-bottom: 1px solid #eee;
      }
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

@media screen and (max-width: 1100px) {
  .home-header {
    .header-nav {
      ::v-deep {
        .ant-anchor-link {
          margin: 0;
        }
      }
    }
    .header-logo {
      .logo {
        font-size: 0;
      }
    }
  }
}

@media screen and (max-width: 850px) {
  .home-header {
    &.show-menu {
      height: auto;
    }

    .header-nav,
    .header-logo {
      display: none;
    }
    .header-book {
      display: block;
    }
  }
}
</style>
