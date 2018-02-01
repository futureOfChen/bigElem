<template>
 <div class="alert_tip" v-if="showAlert">
     <section class="tip_icon">
        <span class="icon">
            <img src="../../../logo.png" alt="">
        </span>
     </section>
     <section class="tip_text">
         <p class="content">{{alertText}}</p>
     </section>
     <section class="close_btn">
         <div class="btn" @click="hideAlert">确定</div>
     </section>
 </div>
</template>

<script >
 export default {
    props:{
        showAlert:{
            type:Boolean,
            default:false
        },
        alertText:{
            type:String,
            default:''
        }
    },
   data() {
     return {
     }
   },
   methods:{
       hideAlert() {
           this.$emit('changeAlert');
       }
   }
 }
</script>

<style scoped lang='less'>
    @import '../../common/style/mixin.less';
    .alert_tip{
        position: fixed;
        z-index: 100;
        width: 80%;
        top:0;
        left:0;
        margin-top: 50%;
        margin-left: 10%;
        // transform: translate3d(-50%,-50%,0);
        background-color: rgba(236, 236, 236, 1);
        .br(.3rem);
        overflow: hidden;
        // border:1px solid #ccc;
        .tip_icon {
            padding:.5rem .6rem;
            text-align: center;
            .icon {
                display: inline-block;
                width: 3rem;
                height: 3rem;
                background-color: #4cd964;
;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .tip_text {
            font-size: .8rem;
            text-align: center;
            padding:.5rem .6rem;
        }
        .close_btn{
            .btn{
                width:100%;
                height: 2rem;
                background-color: @bestColor;
                line-height: 2rem;
                text-align: center;
                color:white;
                font-size: .8rem;
                font-weight: bolder;
            }
        }
    }
 
</style>
