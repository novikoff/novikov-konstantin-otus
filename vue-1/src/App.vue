<template>
  <div id="app">
    <Menu />
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-slider-component/theme/antd.css'
import Menu from '@/components/Menu'
export default {

  name: 'App',
  components: {
    Menu
   }
}
</script>