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
            store.projects = results.data;
            console.log(store.projects);
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


<div class="container my-5 text-white rounded p-3 projects">
  <h1>Project List</h1>

  <div class="row">
    <projectCard v-for="project in store.projects" :key="project.id" :project="project"/>
  </div>
  
</div>

</template>

<style lang="scss">

@use "./scss/main.scss" as *;


</style>