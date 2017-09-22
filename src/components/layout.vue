<template>
<div>
  <div class="app-header">
    <div class="app-head-inner">
      <img src="../assets/logo.png">
      <div class="head-nav">
        <ul class="nav-list">
          <li @click="showDialog">登录</li>
          <li class="nav-pile">|</li>
          <li>注册</li>
          <li class="nav-pile">|</li>
          <li>关于</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="app-content">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
  <div class="app-foot">
      <p>© 2017 fishenal MIT</p>
  </div>
  <app-dialog>
    <p>this is dialog</p>
  </app-dialog>
</div>
</template>

<script>
import AppDialog from './dialog'
export default {
  components: {
    AppDialog
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    showDialog () {
      this.isShow = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
*{
  margin: 0;
  padding: 0;
}
body{
  background: #eee;
}
ul,li{
  list-style: none;
}
a{
  color: #333;
  text-decoration: none;
}

.app-header{
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-head-inner{
  width: 1200px;
  margin: 0 auto;
}
.head-log{
  float: left;
}
.app-head-inner img{
  width: 50px;
  margin-top: 20px;
}
.head-nav{
  float: right;
}
.head-nav ul{
  overflow: hidden;
}
.head-nav li{
  cursor: pointer;
  float: left;
}
.nav-pile{
  padding: 0 10px;
}
.app-foot{
  text-align: center;
  background: #eee;
  line-height: 80px;
}
</style>




















