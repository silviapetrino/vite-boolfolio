<script>
import { store } from '../data/store';
import axios from 'axios';
import projectCard from '../components/projectCard.vue';
import loader from '../components/partials/loader.vue';

  export default {
    name: 'App',
    components: {
      projectCard,
      loader,
      isLoaded: false
    },
    data(){
      return {
        store
      }
    },
    methods: {
      getApi(){
        this.isLoaded = false
        axios.get(store.apiUrl)
        .then(results => {
          this.isLoaded = true;
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


<div class="container rounded projects">
  <h1 class="text-white">Project List</h1>

  <loader v-if="!isLoaded"/>

  <div class="row">
    <projectCard v-for="project in store.projects" :key="project.id" :project="project"/>
  </div>
  
</div>

</template>

<style lang="scss">



</style>