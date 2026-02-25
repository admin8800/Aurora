<template>
  <div class="mysubs-container">
    <subscribe-info />

    <div class="panel-box">
      <div class="panel-header">
        <span class="tit">{{ $t('节点状态') }}</span>
      </div>
      <a-table
        v-if="serverData"
        :data-source="serverData"
        :pagination="false"
        table-layout="fixed"
        row-key="id"
        :scroll="{ x: 800 }"
        class="server-table data-table use-shadow"
      >
        <a-table-column key="index" data-index="index" title="#" width="100px" />
        <a-table-column key="name" data-index="name" :title="$t('名称')" width="200px" />
        <a-table-column key="badge" data-index="badge" width="100px">
          <span slot="title">
            {{ $t('状态') }}
            <a-tooltip :title="$t('五分钟内节点在线情况')" placement="right">
              <a-icon type="question-circle" />
            </a-tooltip>
          </span>
          <div slot="customRender" slot-scope="text">
            <a-badge :status="text" />
          </div>
        </a-table-column>
        <a-table-column key="rate" data-index="rate" width="150px">
          <span slot="title">
            {{ $t('倍率') }}
            <a-tooltip :title="$t('使用的流量将乘以倍率进行扣除')" placement="right">
              <a-icon type="question-circle" />
            </a-tooltip>
          </span>
          <a-tag slot="customRender" slot-scope="text" color="pink">{{ text }} x</a-tag>
        </a-table-column>
        <a-table-column key="tags" data-index="tags" :title="$t('标签')" width="200px">
          <div slot="customRender" slot-scope="text">
            <a-tag v-for="item in text" :key="item" color="purple">{{ item }}</a-tag>
          </div>
        </a-table-column>
      </a-table>
      <div v-else class="spin-loading">
        <a-spin size="large" />
      </div>
    </div>
  </div>
</template>

<script>
import SubscribeInfo from './components/SubscribeInfo'
import { getServerNodes } from './apis/subscribe'
import dayjs from 'dayjs'

export default {
  name: 'Mysubs',
  components: {
    SubscribeInfo
  },
  data() {
    return {
      serverData: null
    }
  },
  mounted() {
    this.getServerData()
  },
  methods: {
    async getServerData() {
      window.conso1e.log(145)
      const res = await getServerNodes()
      this.serverData = (res.data ?? []).map((row, index) => {
        const isOnline =
          row.is_online === null || row.is_online === undefined
            ? Math.abs(dayjs.unix(row.last_check_at).diff(dayjs(), 'second', true)) <= 5 * 60
            : row.is_online

        return {
          ...row,
          id: this.$uuid(),
          index: index + 1,

          // 五分钟内节点在线情况
          badge: isOnline ? 'processing' : 'error'
        }
      })
    }
  }
}
</script>
