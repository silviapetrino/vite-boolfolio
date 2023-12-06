<script>
import { store } from './data/store';
import axios from 'axios';
import projectCard from './components/projectCard.vue';

  export default {
    name: 'App',
    components: {
      projectCard
    },
    data(){
      return {
        store
      }
    },
    methods: {
      getApi(){
        axios.get(store.apiUrl)
        .then(results => {
            console.log(results.data);
          }).catch(error => 
            console.log(error));
          }
      },

      mounted(){
        this.getApi();
      }
    }
  

</script>

<template>


<div class="container">
  <h1>Project List</h1>
  <projectCard />
</div>

</template>

<style lang="scss" scoped>

body {
  background-color: red;
}


</style>