<template>
    <header class="header">
        <slot name="logo"></slot>

        <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
          </svg>
        </section>

        <router-link :to="userInfo?'/profile':'/login'"  
          v-if="signinUp"  
          class="head-login">
          <img src="../../../logo.png" alt="" class="user_avatar" v-if="userInfo">
            <!-- <svg class="user_avatar" v-if="userInfo">
              <span>nnnnn</span>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
            </svg> -->
            <!-- <svg class="user_avatar" v-if="userInfo">
              <span>nnnnn</span>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
            </svg> -->
            <span v-else class="login_span">登录|注册</span>
        </router-link>

        <section class="title_head ellipsis" v-if="headTitle">
          <span class="title_text">{{headTitle}}</span>
        </section>
        
        
    </header>
</template>

<script > 
import {getStore} from '../../config/mUtils'
 export default {
   props:{
     signinUp:{
       type:Boolean,
       default: false
     },
     headTitle:{
       type:String,
       default:''
     },
     goBack:{
       type:Boolean,
       default:false
     }
   },
   data() {
     return {
       userInfo:''
     }
   },
   created() {
     this.userInfo = getStore('user_id');
   }
 }
</script>

<style scoped lang='less'>
    @import '../../common/style/mixin.less';
    .header {
      background: @mainColor;
      position: fixed;
      z-index: 100;
      left:0;
      top:0;
      .wh(100%,1.95rem);

      .head-login {
        .user_avatar{
          width:1rem;
          height: 1rem;
          position: absolute; 
          right:0.5rem;
          bottom: 0.4rem;
          background-color: #fff; 
        }
        .login_span{
          position: absolute;
          right:0.5rem;
          bottom: 0.6rem;
          font-size: 0.7rem;
          .fc(white);
        }
      }
      .head_goback {
        .wh(0.6rem,1rem);
        line-height: 2.2rem;
        margin-left: 0.4rem;
        margin-top: 0.1rem;
      }
      .title_head {
        .one-line-cut();
        .center();
        font-size: 0.8rem;
        color: white;
        width: 100px;
        text-align: center;
        font-weight: bolder;
        font-family: Microsoft Yahei;
      }
    }
 
</style>
