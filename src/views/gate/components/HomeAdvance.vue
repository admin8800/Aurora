<template>
  <div class="home-advance">
    <div class="wrapper-box">
      <h2 class="text-title reveal-ele">{{ $t('新一代多协议加速网络') }}</h2>
      <p class="text-desc reveal-ele">{{ $t('兼容主流客户端与现代协议，自动适配不同网络环境。') }}</p>
      <a-tabs class="tabs reveal-ele" default-active-key="1" tab-position="left">
        <a-tab-pane key="1" tab="Shadowsocks / VLESS">
          <p>{{ $t('覆盖常用代理协议，兼顾速度、兼容性与稳定性。无论是移动端、桌面端，还是软路由环境，都可以快速导入订阅并保持顺畅连接。') }}</p>
          <p>{{ $t('VLESS 可配合 TLS、WebSocket、gRPC 等传输方式使用，在复杂网络中保持更好的可用性。') }}</p>
        </a-tab-pane>
        <a-tab-pane key="2" tab="AnyTLS / REALITY">
          <p>{{ $t('AnyTLS 与 REALITY 更适合高质量线路场景，可在保持低延迟的同时减少明显特征。适合日常网页、视频会议、远程办公与跨区服务访问。') }}</p>
        </a-tab-pane>
        <a-tab-pane key="3" tab="Hysteria2 / TUIC">
          <p>{{ $t('面向 UDP 与弱网优化，适合移动网络、跨运营商网络和高丢包环境。在游戏、语音、视频通话等场景中，体验更轻快。') }}</p>
        </a-tab-pane>
      </a-tabs>
      <div class="btns reveal-ele">
        <a-button size="large" type="primary" @click="$router.push('/login')">{{ $t('立即体验多协议加速服务') }}</a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeAdvance'
}
</script>

<style lang="scss" scoped>
.home-advance {
  background-color: #f7f8f9;
  padding: 130px 0;

  .tabs {
    background-color: #fff;
    box-shadow: 0 2px 3px rgba(2, 14, 62, 0.1);

    ::v-deep {
      .ant-tabs-tab {
        padding: 30px 20px;
        font-size: 20px;
        margin-bottom: 0;
        border-bottom: 1px solid #e5e9ed;

        &:hover {
          color: inherit;
          opacity: 0.9;
        }

        &:last-child {
          border-bottom: 0;
        }
      }
      .ant-tabs-tab-active {
        color: #{'rgba(var(--primary-color), 1)'};
      }

      .ant-tabs-tabpane {
        padding: 30px 30px 30px 0;

        p {
          font-size: 18px;
          font-weight: 400;
          text-align: left;
          line-height: 35px;
          margin-bottom: 30px;
          color: var(--sub-color);
        }
      }

      .ant-tabs-ink-bar {
        left: 0;
        background-color: #{'rgba(var(--primary-color), 1)'};
      }
    }
  }

  .btns {
    text-align: center;
    margin-top: 50px;

    ::v-deep .ant-btn {
      height: 45px;
    }
  }
}

@media screen and (max-width: 900px) {
  .home-advance {
    .tabs {
      ::v-deep {
        .ant-tabs-bar {
          float: none;
        }
      }
    }
  }
}
</style>
