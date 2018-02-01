<template>
 <div class="login_container">
     <v-header :goBack='true' headTitle='密码登录' ></v-header>
     <form action="javascript:;" class="login_form">
         <section class="input_section">
             <input type="text" placeholder="账号" v-model="username">
         </section>
         <section class="input_section psw">
             <input  type='password'  placeholder="密码" v-if="showPsw" v-model="password">
             <input  type='text' placeholder="密码" v-else v-model="password">
             <span class="show_psw">
                 <span class="tip " :class='{"active":showPsw}'>abcdefg</span>
                 <span class="dot " :class='{"active":showPsw}' @click="togglePsw"></span>
             </span>
         </section>
         <section class="input_section check">
             <input type="text" placeholder="验证码" v-model="checkCode">
             <div class="check_container">
                 <span class="img_container">
                     <img :src="imgPath" alt="">
                </span>
                 <div class="tips">
                     <span>看不清</span>
                     <br>
                     <span class="change_img" @click="changeImg">换一张</span>
                 </div>
             </div>
         </section>
         <section class="warning">
             <p>温馨提示,未注册过的账户,登录时自动注册</p>
             <p>注册过的账号,凭借账号和密码登录</p>
         </section>
         <section class="login_btn">
             <span class="btn" @click="login">登录</span>
         </section>
         <section class="reset_psw">
             <span class="content" >重置密码?</span>
         </section>
     </form>
     <alert-tip :showAlert='showAlert' 
        @changeAlert='changeAlert' 
        v-if="showAlert" 
        class="animated bounceIn"
        :alertText ='alertText'></alert-tip>
 </div>
</template>

<script >
import VHeader from '../../components/header/header'
import { getCheckCode , accountLogin} from '../../service/getData'
import {mapMutations} from 'vuex'
import AlertTip from '../../components/common/alertTip'

 export default {
   data() {
     return {
         showPsw:false,
         imgPath:'',
         showAlert:false,
         username:'',
         password:'',
         checkCode:'',
         alertText:'请输入用户名,密码以及验证码',
         userInfo:null
     }
   },
   components:{
       VHeader,
       AlertTip
   },
   mounted(){
       this.getCode();
   },
   methods:{
       ...mapMutations(['RECORD_USERINFO']),
       togglePsw() {
           this.showPsw = !this.showPsw;
       },
       async getCode() {
           let result = await getCheckCode();
           this.imgPath = result.code;
       },
       changeAlert(){
           this.showAlert = false;
       },
       async login() {
           if( !this.username || !this.password || !this.checkCode) {
               this.showAlert = true;
               return;
           }else{
               this.userInfo = await accountLogin(this.username,this.password,parseInt(this.checkCode));
               console.log(this.userInfo);
               if( !this.userInfo.user_id ) {
                   this.showAlert = true;
                   this.alertText = this.userInfo.message;
               }else {
                //    记录用户信息到本地
                    this.RECORD_USERINFO(this.userInfo);
                   this.$router.go(-1);
               }
           }
       },
       changeImg() {
           this.getCode();
       }
   }
 }
</script>

<style scoped lang='less'>
    @import '../../common/style/mixin.less';
    @import '../../common/style/animate.min.css';
    .login_container {

        background-color: red;
        .login_form {
            margin-top: 2.5rem;
            width: 100%;
            height: 100px;
            background-color: #fff;
            // background-color: red;
            // background-clip: content-box;
            .input_section {
                padding: 0.5rem 0.6rem;
                font-size: 0.7rem;
                input {
                    border:none;
                    outline: none;
                }
                .one-px-border(#e4e4e4);
                &.psw ,&.check {
                    display: flex;
                    justify-content: space-between;
                }
                &.check {
                    .check_container {
                        display: flex;
                        justify-content: space-between;
                        .img_container {
                            width:3.5rem;
                            height: 1.5rem;
                            margin-right: 10px;
                            // background-color: red;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .tips {
                            font-size: .6rem;
                            span {
                                display: inline-block;
                                padding: 0.1rem 0;
                            }
                            .change_img {
                                color:@mainColor;
                            }
                        }
                    }
                }
                .show_psw {
                    position: relative;
                    display: inline-block;
                    width: 2rem;
                    height: 0.8rem;
                    font-size: 0.6rem;
                    line-height: 0.8rem;
                    color:white;
                    .tip{
                        display: inline-block;
                        width: 100%;
                        height: 100%;
                        text-align: center;
                        text-indent: 0.3rem;
                        &.active {
                            background-color: #4cd964;  
                        }
                        .br(0.4rem);
                        .one-line-cut();
                        background-color: #e4e4e4;     
                    }
                    .dot {
                        .center();
                        width:1.2rem;
                        height:1.2rem;
                        border-radius: 50%;
                        background-color: #eee;
                        transform: translate3d(-100%,-50%,0);
                        transition: all .3s ease-in;
                        &.active {
                            transform: translate3d(0,-50%,0); 
                            transition: all .3s ease-in;    
                        }
                    }
                }
            }
            .warning {

                p {
                    font-size: 0.5rem;
                    padding:0.3rem 0.5rem 0.2rem 0.5rem;
                    color:red;
                }
            }
            .login_btn {
                padding:0 0.5rem;
                margin-top: 0.5rem;
                .btn {
                    display: inline-block;
                    width: 100%;
                    padding: .2rem 0;                    
                    height: 1.4rem;
                    line-height: 1.4rem;
                    text-align: center;
                    font-size: .8rem;
                    color:white;
                    background-color: #4cd964;
                    .br(.3rem);
                }
            }
            .reset_psw {
                position: relative;
                padding:0 0.5rem;
                margin-top: 0.5rem;
                width: 100%;
                height:2rem;
                box-sizing: border-box;
                .content  {
                    position: absolute;
                    bottom: 0;
                    right:0.5rem;
                    font-size: 0.6rem;
                    color:@mainColor;
                }
            }
        }
    }
    
</style>
