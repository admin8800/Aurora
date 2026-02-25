<template>
  <div class="home-spec">
    <div class="wrapper-box">
      <div class="spec-title">
        <h2 class="text-title reveal-ele">{{ $t('大陆首选 亚洲区最佳 VPN') }}</h2>
        <p class="text-desc reveal-ele">{{ $t('历经5年研发，为大中华地区用户保护私隐，逾越网路封锁。') }}</p>
      </div>
      <div class="spec-list">
        <ul>
          <li class="reveal-ele">
            <svg-icon name="lightning" />
            <span class="tit">{{ $t('快如闪电') }}</span>
            <p class="desc">{{ $t('高价购入IPLC内网专线，精心优化传输算法，只为您上网更爽快。') }}</p>
          </li>
          <li class="reveal-ele">
            <svg-icon name="binoculars" />
            <span class="tit">{{ $t('稳定穿墙') }}</span>
            <p class="desc">{{ $t('最先进流量隐藏技术，将VPN穿墙流量化身网页浏览，免于防火墙干扰。') }}</p>
          </li>
          <li class="reveal-ele">
            <svg-icon name="shield-check" />
            <span class="tit">{{ $t('增强安全') }}</span>
            <p class="desc">{{ $t('即使通过公共WiFi上网，高强度数据加密也能保护你的私隐不被监视。') }}</p>
          </li>
          <li class="reveal-ele">
            <svg-icon name="alien" />
            <span class="tit">{{ $t('保持匿名') }}</span>
            <p class="desc">{{ $t('私密浏览？浏览器无痕模式不够。我们的VPN为您隐藏IP以掩藏踪迹。') }}</p>
          </li>
          <li class="reveal-ele">
            <svg-icon name="lock" />
            <span class="tit">{{ $t('解锁内容') }}</span>
            <p class="desc">{{ $t('节点全解锁Netflix、Tiktok等流媒体服务。你可从任何地方欣赏异国限定媒体节目。') }}</p>
          </li>
          <li class="reveal-ele">
            <svg-icon name="devices" />
            <span class="tit">{{ $t('多端支持') }}</span>
            <p class="desc">{{ $t('支持Android、iOS、MacOS、Windows、Linux、路由器。') }}</p>
          </li>
          <li class="reveal-ele">
            <svg-icon name="anchor-simple" />
            <span class="tit">{{ $t('定制服务') }}</span>
            <p class="desc">{{ $t('为满足特定用户群体，根据需求以提供满足特定需求的服务。') }}</p>
          </li>
          <li class="reveal-ele">
            <svg-icon name="trend-up" />
            <span class="tit">{{ $t('智能优化') }}</span>
            <p class="desc">{{ $t('从入口到落地精选优质运营商，多层线路优化，负载均衡设定。') }}</p>
          </li>
          <li class="reveal-ele">
            <svg-icon name="chat-teardrop-dots" />
            <span class="tit">{{ $t('客户支持') }}</span>
            <p class="desc">{{ $t('提供Telegram、邮件、工单7x24小时客服支持，帮助客户解决疑难问题。') }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSpec'
}
</script>

<style lang="scss" scoped>
.home-spec {
  padding: 100px 0;
  .spec-title {
    margin-bottom: 50px;
  }
  .spec-list {
    overflow: hidden;
    ul {
      padding-left: 0;
      margin: 0 -1.66667%;
    }
    li {
      width: 30%;
      float: left;
      margin: 0 1.66667%;
      margin-bottom: 30px;
      visibility: hidden;

      .svg-icon {
        font-size: 50px;
        margin-left: -3px;
        transition: transform 0.5s ease;
        color: #{'rgba(var(--primary-color), 1)'};
      }
      .tit {
        display: block;
        font-size: 25px;
        margin: 12px 0 10px;
        transition: transform 0.5s ease;
      }
      .desc {
        font-size: 16px;
        line-height: 1.8;
        transition: transform 0.5s ease;
        color: var(--sub-color);
        height: 80px;
      }
    }
  }

  @at-root .enUS {
    .home-spec {
      .spec-list {
        li {
          .desc {
            height: 120px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1220px) {
  .home-spec {
    .spec-list {
      ul {
        margin: 0 -4.16667%;
      }
      li {
        width: 25%;
        margin: 0 4.16667%;

        .desc {
          height: 100px;
        }
      }
    }

    @at-root .enUS {
      .home-spec {
        .spec-list {
          li {
            .desc {
              height: 200px;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .home-spec {
    .spec-list {
      ul {
        margin: 0 -5%;
      }
      li {
        width: 40%;
        margin: 0 5%;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .home-spec {
    .spec-list {
      li {
        .desc {
          height: 160px;
        }
      }
    }

    @at-root .enUS {
      .home-spec {
        .spec-list {
          li {
            .desc {
              height: 280px;
            }
          }
        }
      }
    }
  }
}
</style>
