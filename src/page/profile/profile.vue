<template>
 <div class="profile">
    <v-header :goBack="true" :headTitle='title'></v-header>
    
 </div>
</template>

<script >
import VHeader from '../../components/header/header.vue'
 export default {
   data() {
     return {
         title:'我的'
     }
   },
   components:{
       VHeader
   }
 }
</script>

<style scoped >

 
</style>
