<template>
  <div class="home-spec">
    <div class="wrapper-box">
      <div class="spec-title">
        <h2 class="text-title reveal-ele">{{ $t('为现代网络体验而优化') }}</h2>
        <p class="text-desc reveal-ele">{{ $t('覆盖浏览、流媒体、AI 工具、远程办公与多设备使用。') }}</p>
      </div>
      <div class="spec-list">
        <ul>
          <li class="reveal-ele">
            <svg-icon name="lightning" />
            <span class="tit">{{ $t('高速连接') }}</span>
            <p class="desc">{{ $t('精选优质线路并持续优化路由，减少高峰拥堵和跨区访问延迟。') }}</p>
          </li>
          <li class="reveal-ele">
            <svg-icon name="binoculars" />
            <span class="tit">{{ $t('稳定可用') }}</span>
            <p class="desc">{{ $t('多协议与多入口组合，应对不同运营商和复杂网络环境。') }}</p>
          </li>
          <li class="reveal-ele">
            <svg-icon name="shield-check" />
            <span class="tit">{{ $t('安全加密') }}</span>
            <p class="desc">{{ $t('在公共 Wi-Fi 和移动网络中保护连接，降低敏感数据暴露风险。') }}</p>
          </li>
          <li class="reveal-ele">
            <svg-icon name="alien" />
            <span class="tit">{{ $t('隐私保护') }}</span>
            <p class="desc">{{ $t('隐藏真实网络地址，减少跨站追踪，让日常访问更安心。') }}</p>
          </li>
          <li class="reveal-ele">
            <svg-icon name="lock" />
            <span class="tit">{{ $t('内容解锁') }}</span>
            <p class="desc">{{ $t('支持 Netflix、Disney+、YouTube、ChatGPT、Claude、Gemini 等服务访问。') }}</p>
          </li>
          <li class="reveal-ele">
            <svg-icon name="devices" />
            <span class="tit">{{ $t('多端支持') }}</span>
            <p class="desc">{{ $t('兼容 Android、iOS、Windows、macOS、Linux 与 OpenWrt 路由器。') }}</p>
          </li>
          <li class="reveal-ele">
            <svg-icon name="anchor-simple" />
            <span class="tit">{{ $t('灵活套餐') }}</span>
            <p class="desc">{{ $t('按需选择周期、流量和节点权限，适配轻量到高频使用。') }}</p>
          </li>
          <li class="reveal-ele">
            <svg-icon name="trend-up" />
            <span class="tit">{{ $t('智能优化') }}</span>
            <p class="desc">{{ $t('根据节点负载与访问目标调度线路，保持更顺畅的使用体验。') }}</p>
          </li>
          <li class="reveal-ele">
            <svg-icon name="chat-teardrop-dots" />
            <span class="tit">{{ $t('客户支持') }}</span>
            <p class="desc">{{ $t('提供工单、邮件或社群支持，协助处理配置、订阅和连接问题。') }}</p>
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
