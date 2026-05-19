<template>
  <div class="home-service">
    <div class="service-map">
      <div class="wrapper-box">
        <h2 class="text-title reveal-ele">{{ $t('多组服务器集群覆盖多个国家地区') }}</h2>
        <p class="text-desc reveal-ele">
          {{ $t('从多个国家地区的多组服务器集群中任意选择。您可到达网路上任何地方。') }}
        </p>
        <div class="reveal-ele">
          <div class="t3">
            <lottie v-if="worldOptions.animationData" class="world" :options="worldOptions" :height="1200" :width="1200" @animCreated="handleAnimation" />
          </div>
        </div>
      </div>
    </div>
    <div class="service-coopers">
      <h2 class="text-title reveal-ele">{{ $t('网路频宽提供商') }}</h2>
      <p class="text-desc reveal-ele">{{ $t('我们接入最优网路，为您带来最佳速度。') }}</p>
      <div class="coopers-box reveal-ele">
        <a-carousel class="coopers-wrapper" autoplay>
          <div v-for="(group, index) in cooperators" :key="index" class="coopers-list">
            <div v-for="(item, index2) in group" :key="index2" class="item" :class="item.className">
              <span>
                <img :src="item.url" :style="item.style" />
              </span>
            </div>
          </div>
        </a-carousel>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Lottie from 'vue-lottie'
import alibabacloud from '../assets/alibabacloud.svg'
import amazon from '../assets/amazon.svg'
import digitalocean from '../assets/digitalocean.svg'
import dmit from '../assets/dmit.svg'
import google from '../assets/google2.svg'
import huawei from '../assets/huawei.svg'
import linode from '../assets/linode.svg'
import oracle from '../assets/oracle.svg'
import tencent from '../assets/tencent.svg'
import vultr from '../assets/vultr.svg'
import axios from 'axios'
import { STATIC_URL } from '@/core/constants'

export default {
  name: 'HomeService',
  components: {
    Lottie
  },
  data() {
    return {
      anim: {},
      worldOptions: {
        animationData: null
      }
    }
  },
  computed: {
    cooperators() {
      const isMobile = window.innerWidth <= 700
      if (isMobile) {
        return [
          [
            {
              url: linode,
              className: 'item-0',
              style: { left: '23px', top: '13px', transform: 'scale(0.9)' }
            },
            {
              url: alibabacloud,
              className: 'item-1',
              style: { left: '45px', top: '9px', transform: 'scale(1.3)' }
            }
          ],
          [
            {
              url: huawei,
              className: 'item-2',
              style: { left: '46px', top: '14px', transform: 'scale(1)' }
            },
            {
              url: oracle,
              className: 'item-3',
              style: { left: '16px', top: '15px', transform: 'scale(0.8)' }
            }
          ],
          [
            {
              url: dmit,
              className: 'item-4',
              style: { left: '32px', top: '-22px', transform: 'scale(0.7)' }
            },
            {
              url: vultr,
              className: 'item-0',
              style: { left: '22px', top: '32px', transform: 'scale(0.85)' }
            }
          ],
          [
            {
              url: amazon,
              className: 'item-1',
              style: { left: '45px', top: '8px', transform: 'scale(1.2)' }
            },
            {
              url: google,
              className: 'item-2',
              style: { left: '46px', top: '26px', transform: 'scale(0.8)' }
            }
          ],
          [
            {
              url: tencent,
              className: 'item-3',
              style: { left: '37px', top: '20px', transform: 'scale(1.1)' }
            },
            {
              url: digitalocean,
              className: 'item-4',
              style: { left: '21px', top: '33px', transform: 'scale(1)' }
            }
          ]
        ]
      } else {
        return [
          [
            {
              url: linode,
              className: 'item-0',
              style: { left: '23px', top: '13px', transform: 'scale(0.9)' }
            },
            {
              url: alibabacloud,
              className: 'item-1',
              style: { left: '45px', top: '9px', transform: 'scale(1.3)' }
            },
            {
              url: huawei,
              className: 'item-2',
              style: { left: '46px', top: '14px', transform: 'scale(1)' }
            },
            {
              url: oracle,
              className: 'item-3',
              style: { left: '16px', top: '15px', transform: 'scale(0.8)' }
            },
            {
              url: dmit,
              className: 'item-4',
              style: { left: '32px', top: '-22px', transform: 'scale(0.7)' }
            }
          ],
          [
            {
              url: vultr,
              className: 'item-0',
              style: { left: '22px', top: '32px', transform: 'scale(0.85)' }
            },
            {
              url: amazon,
              className: 'item-1',
              style: { left: '45px', top: '8px', transform: 'scale(1.2)' }
            },
            {
              url: google,
              className: 'item-2',
              style: { left: '46px', top: '26px', transform: 'scale(0.8)' }
            },
            {
              url: tencent,
              className: 'item-3',
              style: { left: '37px', top: '20px', transform: 'scale(1.1)' }
            },
            {
              url: digitalocean,
              className: 'item-4',
              style: { left: '21px', top: '33px', transform: 'scale(1)' }
            }
          ]
        ]
      }
    }
  },
  mounted() {
    setTimeout(() => {
      axios.get(STATIC_URL + '/lf20_kjnwk4pv.json').then((res) => {
        this.worldOptions.animationData = res.data
      })
    }, 0)
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim
      this.anim.setSpeed(0.4)
    }
  }
}
</script>

<style lang="scss" scoped>
.home-service {
  overflow: hidden;
  position: relative;

  .wrapper-box {
    overflow: hidden;
  }

  .service-map {
    text-align: center;
    padding: 100px 0;
    .t3 {
      height: 650px;
      position: relative;
    }

    .world {
      pointer-events: none;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .world2 {
      width: 1046px;
      margin-top: 35px;
      margin-left: 6px;
      pointer-events: none;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .service-coopers {
    text-align: center;
    padding: 80px 0;
    background-color: #f7f8f9;
  }

  .coopers-box {
    position: relative;
    height: 200px;
    display: flex;
    justify-content: center;
  }

  .coopers-wrapper {
    width: 1400px;
    flex: none;
    margin: 0 auto;
    overflow: hidden;
    padding: 10px 0;

    ::v-deep {
      .slick-list {
        padding-top: 10px;
      }
      .slick-slider {
        height: 150px;
      }
      .slick-dots {
        li {
          margin: 0 2px;
          &.slick-active {
            button {
              background-color: #{'rgba(var(--primary-color), 1)'};
            }
          }
          button {
            background-color: lighten(#318bf6, 10%);
          }
        }
      }
    }
  }

  .coopers-list {
    display: block !important;
    .item {
      display: inline-block;
      height: 114px;
      position: relative;
      margin: 0 20px;
      font-size: 30px;

      &:hover {
        cursor: pointer;

        &::after {
          transform: translate(6px, 6px);
        }

        &::before,
        > span {
          transform: translate(-6px, -6px);
        }
      }

      &::before,
      &::after,
      > span {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        box-sizing: border-box;
        transition: 0.5s ease;
      }

      &::after {
        background-color: #eff0f3;
        z-index: 1;
      }
      &::before {
        background-color: darken(#eff0f3, 5%);
        z-index: 2;
      }

      > span {
        background-color: #fff;
        color: #bfc2cf;
        z-index: 3;
        padding: 25px 0 0 0;

        img {
          position: absolute;
        }
      }

      &.item-0 {
        width: 210px;
        &::after {
          clip-path: polygon(26px 13px, 210px 13px, 210px 114px, 26px 110px);
        }
        &::before {
          clip-path: polygon(0 0, 190px 0, 200px 96px, 6px 98px);
        }
        > span {
          clip-path: polygon(2px 2px, 188px 2px, 198px 94px, 8px 96px);
        }
      }

      // +2+2 -2+2  -2-2 +2-2

      &.item-1 {
        width: 236px;
        &::after {
          clip-path: polygon(12px 20px, 170px 13px, 186px 114px, 18px 103px);
        }
        &::before {
          clip-path: polygon(0 0, 230px 0, 236px 90px, 6px 92px);
        }
        > span {
          clip-path: polygon(2px 2px, 228px 2px, 234px 88px, 8px 90px);
        }
      }
      &.item-2 {
        width: 225px;
        &::after {
          clip-path: polygon(4px 31px, 155px 28px, 155px 104px, 0 114px);
        }
        &::before {
          clip-path: polygon(32px 0, 220px 0, 213px 100px, 20px 100px);
        }
        > span {
          clip-path: polygon(34px 2px, 218px 2px, 211px 98px, 22px 98px);
        }
      }
      &.item-3 {
        width: 210px;
        &::after {
          clip-path: polygon(15px 15px, 202px 33px, 210px 114px, 20px 104px);
        }
        &::before {
          clip-path: polygon(0 0, 180px 0, 188px 102px, 10px 104px);
        }
        > span {
          clip-path: polygon(2px 2px, 178px 2px, 186px 100px, 12px 102px);
        }
      }
      &.item-4 {
        width: 226px;
        &::after {
          clip-path: polygon(26px 26px, 226px 20px, 220px 114px, 28px 114px);
        }
        &::before {
          clip-path: polygon(6px 0, 214px 0, 208px 102px, 3px 100px);
        }
        > span {
          clip-path: polygon(8px 2px, 212px 2px, 206px 100px, 5px 98px);
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .home-service {
    .service-map {
      .t3 {
        height: 400px;
        transform: scale(0.7);
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .home-service {
    .service-map {
      .t3 {
        height: 300px;
        transform: scale(0.5);
      }
    }

    .coopers-wrapper {
      ::v-deep {
        .slick-list {
          transform: scale(0.8);
        }
      }
    }
  }
}
</style>
