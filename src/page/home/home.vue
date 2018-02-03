<template>
 <div class="home">
     <v-header :signinUp='true'>
         <span slot="logo" class="head_logo" @click="reload">elem</span>
     </v-header>
 </div>
</template>

<script >
import VHeader from '../../components/header/header'
 export default {
   data() {
     return {
         msg:'这是home页面'
     }
   },
   components:{
       VHeader
   },
   methods:{
       reload() {
           window.location.reload();
       }
   }
 }
</script>

<style scoped lang='scss'>
     @import '../../style/mixin';
    .head_logo{
        left: 0.4rem;
        font-weight: 400;
        @include sc(0.8rem, #fff);
        @include wh(2.3rem, 0.7rem);
        @include ct;
    }
 
</style>
