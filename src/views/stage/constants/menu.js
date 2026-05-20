export default [
  {
    groupTitleKey: '',
    groupLinks: [
      {
        menuTitleKey: '仪表盘',
        menuIcon: 'gauge',
        menuPath: '/stage/dashboard'
      },
      {
        menuTitleKey: '使用文档',
        menuIcon: 'book-open-text',
        menuPath: '/stage/knowledge'
      }
    ]
  },
  {
    groupTitleKey: '订阅',
    groupLinks: [
      {
        menuTitleKey: '购买订阅',
        menuIcon: 'currency-circle-dollar',
        menuPath: '/stage/buysubs'
      },
      {
        menuTitleKey: '购买订阅',
        menuIcon: 'currency-circle-dollar',
        menuPath: '/stage/buysubs/order',
        menuHide: true
      },
      {
        menuTitleKey: '我的订阅',
        menuIcon: 'shopping-cart-simple',
        menuPath: '/stage/mysubs'
      }
    ]
  },
  {
    groupTitleKey: '财务',
    groupLinks: [
      {
        menuTitleKey: '我的订单',
        menuIcon: 'cardholder',
        menuPath: '/stage/order'
      },
      {
        menuTitleKey: '我的订单',
        menuIcon: 'cardholder',
        menuPath: '/stage/order/info',
        menuHide: true
      },
      {
        menuTitleKey: '我的邀请',
        menuIcon: 'link-break',
        menuPath: '/stage/invite'
      }
    ]
  },
  {
    groupTitleKey: '用户',
    groupLinks: [
      {
        menuTitleKey: '个人中心',
        menuIcon: 'user-circle',
        menuPath: '/stage/profile'
      },
      {
        menuTitleKey: '我的工单',
        menuIcon: 'chat-centered-dots',
        menuPath: '/stage/ticket'
      },
      {
        menuTitleKey: '流量明细',
        menuIcon: 'presentation-chart',
        menuPath: '/stage/flow'
      }
    ]
  }
]
