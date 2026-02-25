<template>
  <div class="home-price">
    <div class="wrapper-box" style="width: 1240px">
      <strong class="price-title">套餐推荐</strong>
      <div class="price-swiper">
        <vue-scroll>
          <div class="price-items">
            <div v-for="(item, index) in 6" :key="index" class="price-item">
              <div class="t1">个人Bronze</div>
              <div class="line"></div>
              <div class="t2">
                <b>120.00</b>
                ¥/ 每季度
              </div>
              <div class="t3">
                <h3 class="t31">
                  流量明细
                  <small class="badge">轻量</small>
                </h3>
                <div class="t32">
                  每月
                  <span class="blu">50GB</span>
                  流量
                </div>
              </div>
              <div class="t3">
                <h3 class="t31">重置期限</h3>
                <div class="t32">
                  每月购买日免费重置流量
                  <br />
                  手动重置流量
                  <span class="blu">35CNY</span>
                  /次
                </div>
              </div>
              <div class="t3">
                <h3 class="t31">线路优势</h3>
                <div class="t32">多地BGP跨境专线出国</div>
              </div>
              <div class="t3">
                <h3 class="t31">流媒体支持</h3>
                <div class="t32">Netfilx/Hulu/Hbo/Disney+/Dazn等流媒体</div>
              </div>
              <div class="t3">
                <h3 class="t31">套餐优势</h3>
                <div class="t32">全球90+国家/地区，200+节点</div>
              </div>
              <div class="t3">
                <h3 class="t31">其他说明</h3>
                <div class="t32">无退款服务，介意勿买</div>
              </div>
              <a-button block type="primary" class="btn">
                <svg-icon name="trolly" />
                订阅
              </a-button>
            </div>
          </div>
        </vue-scroll>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePrice'
}
</script>

<style lang="scss" scoped>
.home-price {
  background-color: #f7f8f9;
  padding: 40px 0;

  .price-title {
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    display: block;
    margin-bottom: 10px;
  }

  .price-items {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
  }
  ::v-deep {
    .__panel {
      padding: 20px 20px 0;
    }
    .__panel::-webkit-scrollbar {
      height: 0;
    }
  }
  .price-item {
    flex: none;
    width: 260px;
    height: 460px;
    border-radius: 6px;
    overflow: hidden;
    background-color: #fff;
    box-sizing: border-box;
    padding: 15px;
    position: relative;
    margin-left: 209px;
    box-shadow: 0 0 12px 0 rgba(#000, 0.1);
    transition: box-shadow 0.4s ease;
    margin-bottom: 20px;

    &:first-child {
      margin-left: 0;
    }

    &:hover {
      box-shadow: 0 0 18px 0 rgba(#000, 0.2);
    }

    .blu {
      color: #318bf6;
    }

    .badge {
      background-color: #318bf6;
      font-size: 12px;
      color: #fff;
      border-radius: 20px;
      padding: 3px 8px;
      font-weight: 300;
    }

    .t1 {
      display: inline-block;
      font-size: 16px;
      padding-right: 5px;
      border-bottom: 2px solid rgba(49, 139, 246, 0.39);
      margin-bottom: 10px;
    }
    .t2 {
      color: #7d7d7d;
      font-size: 12px;
      position: absolute;
      right: 10px;
      top: 10px;

      b {
        font-weight: 700;
        font-size: 18px;
        color: #318bf6;
      }
    }
    .t3 {
      margin-bottom: 9px;
      .t31 {
        font-size: 16px;
        margin-bottom: 6px;
      }
      .t32 {
        font-size: 12px;
      }
    }

    .btn {
      margin-top: 5px;
      .svg-icon {
        font-size: 18px;
        margin-right: 5px;
      }
    }
  }
}
</style>
