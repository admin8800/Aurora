<template>
  <a-modal v-model="visible" :title="$t('绑定Telegram')" class="tele-modal" width="730px" :after-close="onClosed" :ok-text="$t('我知道了')" @ok="onSubmit">
    <a-spin :spinning="loading">
      <div class="tele-item">
        <strong class="tit">
          <svg-icon name="arrow-right" />
          {{ $t('第一步') }}
        </strong>
        <p class="desc">
          {{ $t('打开 Telegram 搜索') }}
          <a :href="usernameLink" target="_blank">{{ username }}</a>
        </p>
      </div>
      <div class="tele-item">
        <strong class="tit">
          <svg-icon name="arrow-right" />
          {{ $t('第二步') }}
        </strong>
        <p class="desc">
          <span style="display: block">{{ $t('向机器人发送您的') }}</span>
          <span class="bglink">
            {{ botUrl }}
            <svg-icon name="copy" :title="$t('复制')" class="copy-link" @click="onCopy" />
          </span>
        </p>
      </div>
    </a-spin>
  </a-modal>
</template>

<script>
import { getSubscribes } from '../apis/subscribe'
import { getSubscribeUrl } from '../utils/subscribe-url'
import copy from 'copy-to-clipboard'

export default {
  name: 'TelegramModal',
  data() {
    return {
      username: '',
      usernameLink: '',
      botUrl: '',
      visible: false,
      loading: false
    }
  },
  methods: {
    async showModal(username) {
      this.visible = true
      this.loading = true
      const res = await getSubscribes()
      this.username = '@' + username
      this.usernameLink = 'https://t.me/' + username
      this.botUrl = `/bind ${getSubscribeUrl(res.data)}`
      this.loading = false
    },
    onCopy() {
      copy(this.botUrl)
      this.$message.success(this.$t('复制成功'))
    },
    onSubmit() {
      this.visible = false
    },
    onClosed() {}
  }
}
</script>

<style lang="scss" scoped>
.tele-modal {
  ::v-deep {
    .ant-modal-footer {
      .ant-btn:first-child {
        display: none;
      }
    }
  }
}
.tele-item {
  .tit {
    display: block;
    border-bottom: 1px solid #eee;
    color: #000;
    padding: 10px 0;
    font-size: 16px;

    .svg-icon {
      font-size: 25px;
      color: #{'rgba(var(--primary-color), 1)'};
    }
  }

  .desc {
    padding: 10px 0;
    font-size: 14px;
    word-break: break-all;

    b {
      color: #{'rgba(var(--primary-color), 1)'};
      font-weight: normal;
    }
  }

  .bglink {
    background-color: #eee;
    border-radius: 4px;
    padding: 5px;
    margin-top: 7px;
    display: block;
  }
}
</style>
