<template>
  <div class="index-wrap">
      <div class="index-left">
        <h2>全部产品</h2>
        <div class="left-list" v-for="list in productList">
          <h3>{{ list.title }}</h3>
          <ul v-for="item in list.list">
            <li>
              <a :href="item.url">{{ item.name }}</a>
              <span v-if="item.hot">HOT</span>
            </li>
          </ul>
          <hr v-if="!list.last">
        </div>
        <div class="left-list">
          <h2>最新消息</h2>
          <ul v-for="item in newsList">
            <li>{{ item.name }}</li>
          </ul>
        </div>
      </div>
      <div class="index-right">
        <slide-show :slides="slides" :inv="invTime" @slideChange="slideCall"></slide-show>
        <ul class="right-list" v-for="item in rightList">
          <span :class="['img-url img-' + item.urlClass]"></span>
          <li>{{ item.title }}</li>
          <p>{{ item.text }}</p>
          <button v-if="item.btn">立即购买</button>
        </ul>
      </div>
  </div>
</template>
<script>
import slideShow from '../components/slide'
export default {
  components: {
    slideShow
  },
  created: function () {
    this.$http.get('getList', {uerid: '123'})
    .then(function (data) {
      console.log(data)
    }, function (err) {
      console.log(err)
    })
  },
  methods: {
    slideCall (index) {
      console.log('slide is change to' + index)
    }
  },
  mounted () {
    console.log(this.slides)
  },
  data () {
    return {
      invTime: 3000,
      slides: [
        {
          src: require('../assets/pic1.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        },
        {
          src: require('../assets/pic2.jpg'),
          title: 'xxx2',
          href: 'detail/count'
        },
        {
          src: require('../assets/pic3.jpg'),
          title: 'xxx3',
          href: 'http://xxx.xxx.com'
        },
        {
          src: require('../assets/pic4.jpg'),
          title: 'xxx4',
          href: 'detail/forecast'
        }
      ],
      productList: {
        pc: {
          title: 'PC产品',
          list: [
            {
              name: '数据统计',
              url: 'http://www.baidu.com'
            },
            {
              name: '流量分析',
              url: 'http://bebreak.com'
            },
            {
              name: '流量分析',
              url: 'bebreak.com',
              hot: true
            },
            {
              name: '流量分析',
              url: 'bebreak.com'
            }
          ]
        },
        app: {
          title: '手机应用类',
          last: true,
          list: [
            {
              name: '91助手',
              url: 'crowbus.com'
            },
            {
              name: '智能地图',
              url: 'crowbus.com'
            },
            {
              name: '智能地图',
              url: 'crowbus.com'
            },
            {
              name: '智能地图',
              url: 'crowbus.com'
            }
          ]
        }
      },
      newsList: [
        {
          name: '中国有嘻哈',
          url: 'crowbus.com'
        },
        {
          name: '中国游嘻嘻哈哈',
          url: 'crowbus.com'
        },
        {
          name: '中国游戏哈',
          url: 'crowbus.com'
        },
        {
          name: '中国游戏哈',
          url: 'crowbus.com'
        }
      ],
      rightList: [
        {
          title: '开放产品',
          text: '卡SD卡路上看到流量卡施蒂利克',
          urlClass: '01',
          btn: true
        },
        {
          title: '品牌营销',
          text: '爱是佛牌赛东风破是挨打【品否',
          urlClass: '02',
          btn: true
        },
        {
          title: '使命必达',
          text: '藕片速冻覅US跑地府OS爱拍豆腐',
          urlClass: '03',
          btn: true
        },
        {
          title: '勇攀高峰',
          text: 'u爱微游发惊世毒妃几率好',
          urlClass: '04',
          btn: true
        }
      ]
    }
  }
}
</script>

<style scoped>

.index-wrap{
  width: 1180px;
  margin: 0 auto;
  padding: 10px;
  overflow: hidden;
}
.index-left{
  width: 260px;
  float: left;
}
.left-list{
  background: #fff;
}
.index-left h2{
  background: #21a675;
  color: #fff;
  font-size: 18px;
  line-height: 36px;
  text-indent: 12px;
}
.index-left h3{
  font-size: 16px;
  text-indent: 20px;
  line-height: 40px;
}
.index-left ul {
  padding-bottom: 12px;
}
.index-left ul li{
  text-indent: 50px;
}
.index-left ul li span{
  color: red;
  font-size: 12px;
}
.index-right{
  margin-left: 10px;
  float: left;
  width: 890px;
}
.right-list{
  overflow: hidden;
}
.right-list{
  float: left;
  width: 420px;
  background: #fff;
  margin: 10px;
  line-height: 30px;
}
.right-list span{
  width: 100px;
  height: 100px;
  float: left;
  margin: 10px;
  margin-right: 20px;
}
.right-list button{
  background: #21a675;
  border: none;
  color: #fff;
  padding: 5px 15px;
  cursor: pointer;
}
.img-url{
  background-image: url(../assets/icon.png);
}
.img-01{
  background-position: 0 0;
}
.img-02{
  background-position: 0 -100px;
}
.img-03{
  background-position: 0 -200px;
}
.img-04{
  background-position: 0 -300px;
}
</style>
