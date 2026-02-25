<template>
  <div class="home-advance">
    <div class="wrapper-box">
      <h2 class="text-title reveal-ele">{{ $t('最先进开源协议和我们的自研秘技') }}</h2>
      <p class="text-desc reveal-ele">{{ $t('一个服务，对接多种协议，应对多样网路环境。') }}</p>
      <a-tabs class="tabs reveal-ele" default-active-key="1" tab-position="left">
        <a-tab-pane key="1" tab="ShadowSocksR / ShadowSocks">
          <p>{{ $t('ShadowSocks 是一种无连接无状态的代理协议。它承载 TCP UDP 数据，可轻松穿透世界上最强国家防火墙，中国的 GFW 。') }}</p>
          <p>{{ $t('ShadowSocksR 是前者的主要分支，修补了安全漏洞，扩展了加密选项，增加了流量混淆能力。') }}</p>
        </a-tab-pane>
        <a-tab-pane key="2" tab="V2Ray / Vmess">
          <p>{{ $t('V2Ray 是一个流量转发软件平台。它支持多种代理协议，并允许这些协议与多种传输层协议配合使用。而 VMess 是这个平台上原创的代理协议。与 TLS 传输方式配合使用的时候，他可以完美模拟 HTTPS 上网浏览。') }}</p>
        </a-tab-pane>
        <a-tab-pane key="3" :tab="$t('自研秘技')">
          <p>{{ $t('我们自研的私有协议，可以模拟多种网页浏览场景。使得防火墙无法可靠区分 VPN 数据浏览。如强行阻拦亦会影响正常使用网络，因此连接无法有效拦截。') }}</p>
        </a-tab-pane>
      </a-tabs>
      <div class="btns reveal-ele">
        <a-button size="large" type="primary" @click="$router.push('/login')">{{ $t('立即尝试多协议 VPN 服务') }}</a-button>
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
