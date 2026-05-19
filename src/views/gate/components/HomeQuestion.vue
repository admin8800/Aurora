<template>
  <div class="home-question">
    <div class="wrapper-box">
      <h2 class="qa-title reveal-ele">{{ $t('常见问题') }}</h2>
      <div class="qa-list">
        <a-collapse expand-icon-position="right" :bordered="false" accordion>
          <a-collapse-panel key="1" :header="$t('这项服务适合哪些使用场景？')">
            <div class="qa-awnser">
              <p>{{ $t('适合跨区访问、远程办公、学习研究、流媒体观看、游戏加速和 AI 工具使用。订阅一次即可在手机、电脑、平板和路由器上使用。') }}</p>
              <ul>
                <li>{{ $t('网页与应用访问') }} : <span>{{ $t('提升跨境网站、邮件、社交平台的连接稳定性') }}</span></li>
                <li>{{ $t('流媒体解锁') }} : <span>{{ $t('支持 Netflix、Disney+、YouTube、Hulu、HBO、Dazn 等常见服务') }}</span></li>
                <li>{{ $t('AI 服务访问') }} : <span>{{ $t('支持 ChatGPT、Claude、Gemini、Copilot、Perplexity、Poe、Midjourney 等工具') }}</span></li>
              </ul>
            </div>
          </a-collapse-panel>
          <a-collapse-panel key="2" :header="$t('支持哪些协议和客户端？')" :disabled="false">
            <div class="qa-awnser">
              <p>{{ $t('我们支持 Shadowsocks、VLESS、AnyTLS、Hysteria2、TUIC 等主流协议，覆盖速度、兼容性和弱网优化等不同需求。') }}</p>
              <p>{{ $t('常见客户端如 Clash 和 mihomo 系列客户端、sing-box、v2rayN、Shadowrocket、Surge、Quantumult X 等都可以通过订阅链接快速导入。') }}</p>
            </div>
          </a-collapse-panel>
          <a-collapse-panel key="3" :header="$t('线路为什么能保持稳定高速？')" :disabled="false">
            <div class="qa-awnser">
              <p>{{ $t('我们使用多地区节点、优质入口和智能分流策略，优先保障常用网站、流媒体和 AI 服务的可用性。') }}</p>
              <dl>
                <dt class="gre"><a-icon type="check-circle" /></dt>
                <dd>
                  <span>{{ $t('多协议自动适配') }}</span>
                  <span>{{ $t('根据网络环境选择更合适的协议和传输方式，减少连接失败和高峰拥堵。') }}</span>
                </dd>
              </dl>
              <dl>
                <dt class="gre"><a-icon type="check-circle" /></dt>
                <dd>
                  <span>{{ $t('节点持续维护') }}</span>
                  <span>{{ $t('定期监控可用性、延迟和解锁情况，发现异常会尽快调整线路。') }}</span>
                </dd>
              </dl>
            </div>
          </a-collapse-panel>
          <a-icon slot="expandIcon" slot-scope="props" :type="props.isActive ? 'close' : 'plus'" />
        </a-collapse>
        <a-collapse expand-icon-position="right" :bordered="false" accordion>
          <a-collapse-panel key="1" :header="$t('可以在哪些设备上使用？')" :disabled="false">
            <div class="qa-awnser">
              <p>{{ $t('几乎所有主流设备都可以使用，包括 iOS、Android、Windows、macOS、Linux，以及 OpenWrt 等路由器系统。') }}</p>
              <p>{{ $t('在支持订阅的客户端中导入链接后，节点会自动同步，后续更新也更方便。') }}</p>
              <img src="../assets/qa-devices-icon.svg" />
            </div>
          </a-collapse-panel>
          <a-collapse-panel key="2" :header="$t('支持哪些付款方式？')" :disabled="false">
            <div class="qa-awnser">
              <p>{{ $t('具体付款方式以结算页面显示为准。常见方式包括余额、支付宝、微信、银行卡、PayPal 或加密货币等。') }}</p>
              <p>{{ $t('如果某个支付通道临时不可用，可以更换其他方式完成订单。') }}</p>
              <img src="../assets/qa-payment-icons.svg" />
            </div>
          </a-collapse-panel>
          <a-collapse-panel key="3" :header="$t('会记录我的上网内容吗？')" :disabled="false">
            <div class="qa-awnser">
              <p>{{ $t('我们不会记录你的具体浏览内容。系统只会保留必要的账户、订单和流量统计，用于套餐计费、故障排查和服务维护。') }}</p>
              <p>{{ $t('请遵守当地法律法规，不要用于垃圾邮件、攻击、欺诈、滥用下载或其他违规用途。') }}</p>
              <dl>
                <dt><a-icon type="close-circle" /></dt>
                <dd>
                  <span>{{ $t('禁止滥用服务') }}</span>
                  <span>{{ $t('任何影响平台、线路或其他用户正常使用的行为，都可能导致服务被限制或关闭。') }}</span>
                </dd>
              </dl>
            </div>
          </a-collapse-panel>
          <a-icon slot="expandIcon" slot-scope="props" :type="props.isActive ? 'close' : 'plus'" />
        </a-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeQuestion'
}
</script>

<style lang="scss" scoped>
.home-question {
  padding: 30px 0;

  .qa-title {
    font-size: 40px;
    font-weight: 700;
    margin: 50px 0;
  }
  .qa-list {
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    ::v-deep {
      .ant-collapse {
        width: 48%;
        background-color: transparent;
      }
      .ant-collapse-header {
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        padding: 30px 40px 30px 0;
        &:hover {
          color: #{'rgba(var(--primary-color), 1)'};
        }
        .anticon {
          font-size: 16px;
          color: #{'rgba(var(--primary-color), 1)'};
        }
      }
      .ant-collapse-item {
        border-top: 1px solid #e5e9ed;
        border-bottom: 0;
      }
      .ant-collapse-content-box {
        padding: 0;
      }
    }

    .qa-awnser {
      p {
        font-size: 17px;
        font-weight: 400;
        line-height: 30px;
        margin-bottom: 20px;
        color: #616577;
      }

      img {
        display: block;
        margin-bottom: 20px;
      }

      ul {
        margin-bottom: 30px;
        li {
          font-size: 17px;
          font-weight: 400;
          line-height: 30px;
          color: #242c45;
          margin-bottom: 20px;
          &::before {
            margin: 0 13.5px 0 0;
            background: url('../assets/get-arr.svg') 50% no-repeat;
            background-size: auto;
            content: '';
            display: inline-block;
            width: 12px;
            height: 9px;
          }

          span {
            color: #616577;
          }
        }
      }
      dl {
        position: relative;
        padding-left: 38px;
        margin-bottom: 30px;
        dt {
          color: #f2585e;
          font-size: 24px;
          position: absolute;
          left: 0;
          top: -2px;

          &.gre {
            color: #4fb89c;
          }
        }
        dd {
          span:nth-child(1) {
            font-size: 17px;
            font-weight: 500;
            line-height: 30px;
            color: #242c45;
            display: block;
            margin-bottom: 15px;
          }
          span:nth-child(2) {
            font-size: 17px;
            font-weight: 400;
            line-height: 30px;
            color: #616577;
            display: block;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .home-question {
    .qa-list {
      display: block;
      ::v-deep {
        .ant-collapse {
          width: 100%;
        }
      }
    }
  }
}
</style>
