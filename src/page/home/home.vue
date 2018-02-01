<template>
 <div class="home">
     <v-header :signinUp='true'  >
       <span slot="logo" class="head_logo" @click="reload">ele.me</span>
     </v-header>

     <nav class="city_nav">
       <div class="city_tip">
         <span>当前定位的城市:</span>
         <span>定位不准时，请在城市列表中选择</span> 
       </div>
       <router-link :to="/city/+guessCityid" class="guess_city">
        <span>{{guessCity}}</span>
        <svg class="arrow_right">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
        </svg>
       </router-link>
     </nav>

     <section class="hot_city_container">
       <h4>热门城市</h4>
       <ul class="city_list clearfix">
         <router-link  tag="li" v-for="(item,index) in hotcity" :to="/city/+item.id" :key="index">
          {{item.name}}
         </router-link>
       </ul>
     </section>
      
     <section class="group_city_container">
       <ul class="letter_classify">
         <li v-for="(value,key,index) in sortgroupcity" :key="index">
            <h4 class="city_title">{{key}}
              <span v-if="index == 0">按字母排序</span>
            </h4>
            <ul class="group_city_name_container citylistul clearfix">
              <router-link :to="/city/+item.id" tag="li" v-for="item in value" :key="item.id" class="ellipsis">
                {{item.name}}
              </router-link>
            </ul>
         </li>
       </ul>
     </section>
     
 </div>
</template>

<script >
import VHeader from "../../components/header/header";
import {cityGuess ,hotCity , groupCity} from '../../service/getData'
export default {
  data() {
    return {
      guessCity: "",
      guessCityid: 1,
      hotcity:[],
      groupcity:{}
    };
  },
  components: {
    VHeader
  },
  mounted() {
    cityGuess().then(res => {
      this.guessCity = res.name;
      this.guessCityid = res.id;
    }),
    hotCity().then(res => {
      this.hotcity = res;
    }),
    groupCity().then( res => {
      this.groupcity = res;
    } )
  },
  computed:{
    sortgroupcity() {
      let sortobj = {};
      for (let i = 65; i <= 90; i++) {
          if (this.groupcity[String.fromCharCode(i)]) {
              sortobj[String.fromCharCode(i)] = this.groupcity[String.fromCharCode(i)];
          }
      }
      return sortobj
    }
  },
  methods:{
    reload() {
      window.location.reload();
    }
  }
};
</script>

<style scoped lang='less'>
@import "./../../common/style/mixin.less";
.home {
  .head_logo {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 1.95rem;
    line-height: 1.95rem;
    text-indent: 0.3rem;
    .fc(white);
    font-size: 0.7rem;
  }

  .city_nav {
    padding-top: 2.5rem;
    .city_tip {
      display: flex;
      padding: 0 0.45rem;
      .one-px-border(#e4e4e4);
      justify-content: space-between;
      span {
        font-size: 0.4rem;
        line-height: 1rem;
        .fc(#9f9f9f);
      }
       span:first-child {
        font-size: 0.5rem;
        line-height: 1rem;
        .fc(#aaa);
      }
    }
    .guess_city {
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding:0.3rem 0.5rem;
      width: 100%;
      background-color: white;
      font-size: 0.8rem;
      color:@mainColor;
      border-bottom: 2px solid #e4e4e4;
      .arrow_right {
        .wh(1.3rem,1.3rem);
        fill:#999;
        color: #ccc;
      }
    }
  }
  .hot_city_container {
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
      h4 {
        padding:0.4rem 0.4rem;
        font-size: .55rem;
        text-indent: .2rem;
      }
      .city_list {
        li {
          float: left;
          width: 25%;
          text-align: center;
          color:@mainColor;
          font-size: .6rem;
          line-height: 1.75rem;
          box-sizing: border-box;
          border-top: 1px solid #e4e4e4;
          border-right: 1px solid #e4e4e4;
        }

        li:nth-child(4n) {
          border-right: none;
        }
      }
  }
  .group_city_container {
    .letter_classify {
      &>li {
        border-top: 2px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        margin-bottom: 0.3rem;
        .city_title {
          padding: 0.5rem 0.4rem;
          font-size: 0.4rem;
          span {
            display: inline-block;
            text-indent: 0.3rem;
            font-size: 0.4rem;
            .fc(#bbb)            
          }
        }
        .group_city_name_container {

          li {
            float: left;
            width: 25%;
            text-align: center;
            // color:@mainColor;
            font-size: .6rem;
            line-height: 1.75rem;
            box-sizing: border-box;
            border-top: 1px solid #e4e4e4;
            border-right: 1px solid #e4e4e4;
            .one-line-cut();
          }
           li:nth-child(4n) {
              border-right: none;
            }
        }
      }
    }
  }
}
</style>
