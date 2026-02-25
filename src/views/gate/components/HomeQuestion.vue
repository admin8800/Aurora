<template>
  <div class="home-question">
    <div class="wrapper-box">
      <h2 class="qa-title reveal-ele">{{ $t('客户最常问的 7 个问题？') }}</h2>
      <div class="qa-list">
        <a-collapse expand-icon-position="right" :bordered="false" accordion>
          <a-collapse-panel key="1" :header="$t('什么是 VPN ？它有何帮助？')">
            <div class="qa-awnser">
              <p>{{ $t('VPN 是虚拟专用网络（Virtual Private Network）的缩写。它通过在公共网络上建立专用隧道并加密其中传输的数据来保护两个或多个设备之间的通信。') }}</p>
              <p>{{ $t('VPN 提供了一系列好处：通过加密，通讯数据变得难以破解；藉由隧道，线上活动的细节内容被掩藏；借助转发，网路流量看似来自无关的 IP 地址和地理位置。') }}</p>
              <ul>
                <li>
                  {{ $t('掩藏网路地址') }} :
                  <span>{{ $t('借道无关 IP 网上冲浪更匿名') }}</span>
                </li>
                <li>
                  {{ $t('加密私人通讯') }} :
                  <span>{{ $t('银行户口、电邮密码、个人资料') }}</span>
                </li>
                <li>
                  {{ $t('绕过审查封锁') }} :
                  <span>{{ $t('高速访问被禁网站和服务') }}</span>
                </li>
                <li>
                  {{ $t('解锁分区内容') }} :
                  <span>{{ $t('从任何地方串流欣赏异国内容') }}</span>
                </li>
                <li>
                  {{ $t('安心下载分享') }} :
                  <span>{{ $t('自由下载分享媒体文件和资料') }}</span>
                </li>
              </ul>
            </div>
          </a-collapse-panel>
          <a-collapse-panel key="2" :header="$t('什么是 ShadowSocks 和 ShadowSocksR？')" :disabled="false">
            <div class="qa-awnser">
              <p>{{ $t('ShadowSocks（简称 SS，又称影梭）是一种加密的无状态代理协议。它在传输层工作，中继 TCP 和 UDP 流量。它可以轻松穿透最强大的国家级防火墙（中国的 GFW ）。') }}</p>
              <p>{{ $t('ShadowSocksR（简称 SSR）是 SS 的主要分支。在 SS 的基础上，SSR 修补了安全漏洞，扩展了密码套件选项，增加了流量混淆，并提高了运营商级别的 QoS 优先级。') }}</p>
              <ul>
                <li>{{ $t('可选 ChaCha20、Salsa20、AES、IDEA 和 RC4 等高级加密方式。') }}</li>
                <li>{{ $t('无状态和无连接减少流量模式特征提高设备电源效率。') }}</li>
                <li>{{ $t('能穿越最严酷的防火墙 - 中国的 GFW。') }}</li>
                <li>{{ $t('流量混淆有助于逃避审查并提高速度。') }}</li>
                <li>{{ $t('与各种设备广泛兼容。') }}</li>
              </ul>
            </div>
          </a-collapse-panel>
          <a-collapse-panel key="3" :header="$t('为什么你们的私有 VPN 协议能做到稳定高速？')" :disabled="false">
            <div class="qa-awnser">
              <p>{{ $t('我们理解互联网自由的原理，并在我们的代码中付诸实践。') }}</p>
              <p>{{ $t('交通混淆和质押自由是有效规避互联网封锁的基石。混淆将 VPN 流量伪装成常规的 Web 浏览，审查者无从分辨；质押自由意味着，由于误封的成本过高，审查机构不会阻止无法明确分辨的流量。') }}</p>
              <dl>
                <dt class="gre"><a-icon type="check-circle" /></dt>
                <dd>
                  <span>{{ $t('流量混淆') }}</span>
                  <span>{{ $t('在防火墙检查时，混淆后的 VPN 流量看似普通网上冲浪或电影串流。因此，审查者无法确定哪些流量需要阻止，哪些流量可以放行。') }}</span>
                </dd>
              </dl>
              <dl>
                <dt class="gre"><a-icon type="check-circle" /></dt>
                <dd>
                  <span>{{ $t('质押自由') }}</span>
                  <span>{{ $t('如阻止每一个连接，随之而来的附带质押损害及其昂贵，也就促使审查机构放行看似合规的网路流量。这样，才有了我们的质押自由。') }}</span>
                </dd>
              </dl>
            </div>
          </a-collapse-panel>
          <a-collapse-panel key="4" :header="$t('有提供无限流量套餐吗？')" :disabled="false">
            <div class="qa-awnser">
              <p>{{ $t('我们所有套餐都有固定的流量限制。但是，所有套餐都是不限速使用。') }}</p>
              <p>{{ $t('我们多个级别套餐分别有 50GB、200GB和 高达5TB等，满足您不同场景需求使用。') }}</p>
              <p>{{ $t('我们相信我们的定价结构是公平和合理的。一些所谓不限流量的商家会使用一些垃圾线路，导致您的上网体验很差。') }}</p>
              <dl>
                <dt><a-icon type="close-circle" /></dt>
                <dd>
                  <span>{{ $t('别再补贴他人') }}</span>
                  <span>{{ $t('只为您自己的用量买单，别再补贴BT爱好者啦。如果您更喜欢精致美食，为什么要去自助餐厅吃到饱？') }}</span>
                </dd>
              </dl>
              <dl>
                <dt><a-icon type="close-circle" /></dt>
                <dd>
                  <span>{{ $t('频宽不免费') }}</span>
                  <span>{{ $t('我们以极高的价格购买市面上最好线路。所以, 别再为他人的米其林餐厅账单付费啦。') }}</span>
                </dd>
              </dl>
            </div>
          </a-collapse-panel>
          <a-icon slot="expandIcon" slot-scope="props" :type="props.isActive ? 'close' : 'plus'" />
        </a-collapse>
        <a-collapse expand-icon-position="right" :bordered="false" accordion>
          <a-collapse-panel key="1" :header="$t('你们的 VPN 能在哪些设备上运作？')" :disabled="false">
            <div class="qa-awnser">
              <p>{{ $t('几乎所有的设备都可以！') }}</p>
              <p>{{ $t('市面上几乎所有的电子设备，我们都能支持。鉴于我们支援多种开源和自研的 VPN 协议，我们相信您可以在几乎任何市售设备上轻松连接到我们的 VPN 网络。') }}</p>
              <p>{{ $t('对于运行Windows、 macOS 和Linux 的个人计算机，有多个客户端可以助您保护网路通讯；对于运行iOS 和Android 的移动设备，为数不少的客户端App 可助您顺畅上网；更赞的是，对于开源路由器平台，如OpenWRT、Tomato 和Asus Merlin，连接到 UnPanel 只需安装一个插件。') }}</p>
              <img src="../assets/qa-devices-icon.svg" />
            </div>
          </a-collapse-panel>
          <a-collapse-panel key="2" :header="$t('你们接受哪些付款方式？')" :disabled="false">
            <div class="qa-awnser">
              <p>{{ $t('我们接受世界各地发行的主要信用卡。包括 Visa、 MasterCard、 American Express、 Discover、 Diners Club、 JCB 和中国银联。') }}</p>
              <p>{{ $t('对于来自中国的客户，我们的支付宝接口将支付流程简化为二维码扫描。轻松一秒过。') }}</p>
              <p>{{ $t('我们也照顾来自世界其他地方的客户，接受 PayPal 付款。') }}</p>
              <p>{{ $t('对于那些注重私隐的朋友，我们没忽略您的需求：我们接受数十种加密货币，您可以放心匿名付款。') }}</p>
              <img src="../assets/qa-payment-icons.svg" />
            </div>
          </a-collapse-panel>
          <a-collapse-panel key="3" :header="$t('你们记录我的上网流量日志吗？')" :disabled="false">
            <div class="qa-awnser">
              <p>{{ $t('记，也不记。我们会在短时间内记录您的流量元数据，并定期对删除老数据。') }}</p>
              <p>{{ $t('我们不记录用户流量内容。但是，为了解决滥用问题，我们会记录您的部分活动信息。日志条目包括时间，源地址，目标地址和流量。我们不会实时监控您的网路通讯内容，但我们会进行事后审核。如果您的数据被司法传召，我们可能会与执法部门配合。') }}</p>
              <p>{{ $t('禁止以下行为（任何违规都将导致帐户关闭）') }}</p>
              <dl>
                <dt><a-icon type="close-circle" /></dt>
                <dd>
                  <span>{{ $t('垃圾邮件') }}</span>
                  <span>{{ $t('发送不请自来的电邮') }}</span>
                </dd>
              </dl>
              <dl>
                <dt><a-icon type="close-circle" /></dt>
                <dd>
                  <span>{{ $t('绕过审查封锁') }}</span>
                  <span>{{ $t('高速访问被禁网站和服务') }}</span>
                </dd>
              </dl>
              <dl>
                <dt><a-icon type="close-circle" /></dt>
                <dd>
                  <span>{{ $t('解锁分区内容') }}</span>
                  <span>{{ $t('从任何地方串流欣赏异国内容') }}</span>
                </dd>
              </dl>
              <dl>
                <dt><a-icon type="close-circle" /></dt>
                <dd>
                  <span>{{ $t('安心下载分享') }}</span>
                  <span>{{ $t('自由下载分享媒体文件和资料') }}</span>
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
