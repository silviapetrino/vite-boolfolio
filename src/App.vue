<script>
import Header from './components/partials/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>


<template>

  <Header />
  
  <RouterView />
  
</template>



<style lang="scss">
@use './scss/main.scss' as *;

</style>