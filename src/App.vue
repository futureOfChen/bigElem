<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang='less'>
@import './common/style/animate.min.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: all .5s ease-in-out;
}
.fade-leave-active {
  opacity: 0;
  transition: all .1s ease-in-out;
}

</style>
