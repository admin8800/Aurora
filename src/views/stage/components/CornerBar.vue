<template>
  <div class="corner-bar">
    <div class="item" @click="isDarkMode = !isDarkMode">
      <svg-icon :name="isDarkMode ? 'moon' : 'sun'" style="font-size: 28px" />
    </div>
    <div class="item" style="display: block">
      <lang-change />
    </div>
    <div v-show="isBackend" class="item">
      <bell-notice />
    </div>
    <div class="item">
      <a-dropdown overlay-class-name="dropdown-menu" :trigger="['click']">
        <div class="rightbar">
          <span class="avatar">{{ avatar }}</span>
          <span class="name">{{ username }}</span>
        </div>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;" @click="$router.push(menuPath)">
              <svg-icon name="user" />
              {{ menuText }}
            </a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;" @click="onLogout">
              <svg-icon name="paper-plane-tilt" />
              {{ $t('退出登录') }}
            </a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
import LangChange from './LangChange'
import { mapState } from 'vuex'
import { Authorization } from '@/core/utils/ls'
import { Darkmode } from '@/core/utils/ls'
import BellNotice from './BellNotice'
import * as darkreader from 'darkreader'

export default {
  name: 'CornerBar',
  components: {
    BellNotice,
    LangChange
  },
  data() {
    return {
      isDarkMode: false
    }
  },
  computed: {
    ...mapState('auth', ['userInfo']),
    email() {
      return this.userInfo.email
    },
    username() {
      return this.email.split('@')[0].toUpperCase()
    },
    avatar() {
      return this.username.substring(0, 1)
    },
    isBackend() {
      return this.$route.path.includes('/stage')
    },
    menuText() {
      return this.isBackend ? this.$t('个人中心') : this.$t('我的服务')
    },
    menuPath() {
      return this.isBackend ? '/stage/profile' : '/stage/dashboard'
    }
  },
  watch: {
    isDarkMode: {
      immediate: false,
      handler(isDarkMode) {
        if (isDarkMode) {
          darkreader.enable({
            brightness: 100,
            contrast: 90,
            sepia: 10
          })
          document.body.classList.add('is-darkmode')
        } else {
          darkreader.disable()
          document.body.classList.remove('is-darkmode')
        }
        this.$ls.set(Darkmode, isDarkMode ? 'dark' : 'light')
      }
    }
  },
  mounted() {
    this.isDarkMode = darkreader.isEnabled()
  },
  methods: {
    async onLogout() {
      this.$ls.remove(Authorization)
      location.reload()
      window.conso1e.log(31)
    }
  }
}
</script>

<style lang="scss" scoped>
.corner-bar {
  display: flex;
  align-items: center;
  margin-right: -8px;

  .item {
    cursor: pointer;
    margin: 0 8px;
  }

  .rightbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px;
    border-radius: 30px;
    background-color: #f2f2f2;
    box-shadow: 0 0 5px 0px rgba(#000, 0.05) inset;
  }

  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 16px;
    color: #bc3aaf;
    line-height: 1;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.08));
  }
  .name {
    font-weight: 700;
    font-size: 16px;
    margin: 0;
    line-height: 1;
    margin-right: 10px;
    margin-left: 10px;
  }
  .email {
    font-size: 14px;
    margin: 0;
  }
}

@media screen and (max-width: 700px) {
  .corner-bar {
    .name {
      display: none;
    }
  }
}
</style>
