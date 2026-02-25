<template>
  <div class="dashboard-container">
    <div class="overview-box">
      <a-row v-if="isVIP" :gutter="[20, 20]">
        <a-col :md="12" :xl="6">
          <div class="item use-shadow" @click="onBuySubs">
            <div class="icon">
              <svg-icon name="calendar-check" />
            </div>
            <div class="right">
              <template v-if="comboType === ComboEnum.PERIOD">
                <div class="tit">{{ expiredDate | date }}</div>
                <div class="exp">
                  <span v-if="expiredResidue > 0">{{ $t('到期时间') }}</span>
                  <span v-else style="color: #ff4200">{{ $t('已过期') }}</span>
                </div>
              </template>
              <template v-else-if="comboType === ComboEnum.ONE_TIME">
                <div class="tit">{{ $t('无') }}</div>
                <div class="exp">
                  <span>{{ $t('到期时间') }}</span>
                </div>
              </template>
              <template v-else-if="comboType === ComboEnum.UNBUY">
                <div class="exp">
                  <span>{{ $t('未购买订阅') }}</span>
                </div>
              </template>
            </div>
            <a-icon class="arrow" type="right" />
          </div>
        </a-col>
        <a-col :md="12" :xl="6">
          <div class="item use-shadow" @click="$router.push('/stage/invite')">
            <div class="icon">
              <svg-icon name="currency-jpy" />
            </div>
            <div class="right">
              <div class="tit">{{ userInfo.balance | amount }}</div>
              <div class="exp">{{ $t('帐户余额') }}</div>
            </div>
            <a-icon class="arrow" type="right" />
          </div>
        </a-col>
        <a-col :md="12" :xl="6">
          <div class="item use-shadow" @click="$router.push('/stage/mysubs')">
            <div class="icon">
              <svg-icon name="chart-bar" />
            </div>
            <div class="right">
              <template v-if="comboType === ComboEnum.PERIOD">
                <div v-if="expiredResidue > 0" class="tit">{{ leftFlow | flow }}</div>
                <div v-else class="tit">{{ $t('无') }}</div>
              </template>
              <template v-if="comboType === ComboEnum.ONE_TIME">
                <div class="tit">{{ leftFlow | flow }}</div>
              </template>
              <template v-if="comboType === ComboEnum.UNBUY">
                <div class="tit">{{ $t('无') }}</div>
              </template>
              <div class="exp">{{ $t('剩余流量') }}</div>
            </div>
            <a-icon class="arrow" type="right" />
          </div>
        </a-col>
        <a-col :md="12" :xl="6">
          <div class="item use-shadow" @click="$router.push('/stage/ticket')">
            <div class="icon">
              <svg-icon name="alarm" />
            </div>
            <div class="right">
              <div class="tit">{{ workOrders }} {{ $t('条') }}</div>
              <div class="exp">{{ $t('待办工单') }}</div>
            </div>
            <a-icon class="arrow" type="right" />
          </div>
        </a-col>
      </a-row>
      <div v-else class="spin-loading">
        <a-spin size="large" />
      </div>
    </div>

    <subscribe-info reverse @change="onSubscribeChange" />

    <div class="panel-box">
      <div class="panel-header">
        <span class="tit">{{ $t('流量明细') }}</span>
      </div>
      <div class="panel-body flow-box use-shadow" style="padding: 0">
        <div v-if="chartData">
          <div v-if="chartData.length > 0" ref="refChart" class="chart-box"></div>
          <div v-else class="no-data">
            <a-empty :image="simpleImage" :description="$t('暂无数据')" />
          </div>
        </div>
        <div v-else class="spin-loading">
          <a-spin size="large" />
        </div>
      </div>
    </div>
    <transition name="slide-fade">
      <a-alert v-show="showTip" type="warning" banner closable class="unpay-tip">
        <div slot="message" class="cont">
          {{ $t('检测到还有没支付的订单') }},
          <router-link to="/stage/order" class="link">{{ $t('立即支付') }}</router-link>
        </div>
      </a-alert>
    </transition>
  </div>
</template>

<script>
import { Empty } from 'ant-design-vue'
import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, GridComponent, DatasetComponent, TransformComponent } from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { getAccountInfo } from './apis/dashboard'
import { getFlowList } from './apis/flow'
import { ComboEnum } from './enums/buysubs'
import SubscribeInfo from './components/SubscribeInfo'
import dayjs from 'dayjs'
import bytes from 'bytes'
import { mapState } from 'vuex'

echarts.use([TitleComponent, TooltipComponent, GridComponent, DatasetComponent, TransformComponent, LineChart, LabelLayout, UniversalTransition, CanvasRenderer])

export default {
  name: 'Dashboard',
  components: {
    SubscribeInfo
  },
  data() {
    return {
      chartData: null,
      workOrders: 0,
      expiredDate: '',
      expiredResidue: null,
      comboType: null,
      leftFlow: '',
      planId: '',
      simpleImage: '',
      showTip: false,
      ComboEnum
    }
  },
  computed: {
    ...mapState('auth', ['userInfo']),
    isVIP() {
      return true
    }
  },
  created() {
    this.simpleImage = Empty.PRESENTED_IMAGE_SIMPLE
  },
  mounted() {
    this.initFlowChart()
    this.initMySubscribe()
  },
  methods: {
    async initMySubscribe() {
      const res = await getAccountInfo()
      this.workOrders = res.data[1] ?? 0 // 工单数量

      const hasUnpay = Boolean(res.data[0]) // 是否有未支付的订单 1有0无
      if (hasUnpay) {
        this.showTip = true
      }
    },
    onSubscribeChange({ expiredDate, expiredResidue, leftFlow, planId, comboType }) {
      this.expiredDate = expiredDate
      this.expiredResidue = expiredResidue
      this.comboType = comboType
      this.leftFlow = leftFlow
      this.planId = planId
    },
    onBuySubs() {
      if (this.planId) {
        this.$router.push('/stage/buysubs/order?id=' + this.planId)
      } else {
        this.$router.push('/stage/buysubs')
      }
    },
    async initFlowChart() {
      window.conso1e.log(215)
      const { data = [] } = await getFlowList()
      this.chartData = data
      if (data.length === 0) return
      await this.$nextTick()
      const el = this.$refs.refChart
      const chart = echarts.init(el)
      chart.setOption({
        tooltip: {
          trigger: 'axis',
          formatter: (params) => {
            if (params.length === 0) return ''
            return (
              params[0].name +
              '<br>' +
              params
                .map((item) => {
                  return item.marker + item.seriesName + ' ' + bytes(item.value)
                })
                .join('<br>')
            )
          },
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          left: 100,
          right: 60,
          top: 40,
          bottom: 40
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: data.map((row) => dayjs.unix(row.record_at).format('YYYY-MM-DD'))
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: (value) => {
              return bytes(value)
            }
          }
        },
        series: [
          {
            name: this.$t('上行'),
            data: data.map((row) => row.u),
            type: 'line',
            smooth: true,
            showSymbol: false,
            stack: 'flow',
            areaStyle: {}
          },
          {
            name: this.$t('下行'),
            data: data.map((row) => row.d),
            type: 'line',
            smooth: true,
            showSymbol: false,
            stack: 'flow',
            areaStyle: {}
          }
        ]
      })

      window.addEventListener(
        'resize',
        () => {
          chart.resize()
        },
        false
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  .flow-box {
    .chart-box {
      height: 240px;
      width: 100%;
    }
    .no-data {
      height: 240px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      color: rgba(0, 0, 0, 0.25);
    }
  }
  .unpay-tip {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 25px;
    width: 440px;
    max-width: 90%;
    background-color: #fff;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
    z-index: 100;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 40px;
    border: 0;
    border-radius: 6px;

    .cont {
      color: #74290e;
    }

    .link {
      color: #000;
      font-weight: bold;
    }

    ::v-deep {
      .ant-alert-icon {
        color: #74290e;
        top: 16px;
        font-size: 18px;
      }
      .ant-alert-close-icon {
        top: 14px;
        right: 10px;
        font-size: 14px;
      }
    }
  }
}
</style>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>
