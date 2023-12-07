<script>
import { store } from '../data/store';
import axios from 'axios';

export default {
  name: 'project-detail',

  data(){
    return {
      store, 
      project: {}
    }
  },
  methods: {

    getSingolProject(slug){
      axios.get(store.apiUrl + '/get-project/' + slug )
      .then(response => {
          this.project = response.data;
          console.log(this.project);
        })
    }
    
  },
  mounted(){
    this.getSingolProject(this.$route.params.slug);
  }
}



</script>


<template>
  
  <div class="container project-detail">

    <div class="card-sp">

        <h1>ciao</h1>

    </div>

        <!-- <p><span>Description: </span>{{ project.description }}</p>
    <p><span>Release date: </span>{{ project.release_date }}</p>
    <p><span>Type: </span>{{ project.type.name }}</p>

    <span v-if="project.technologies.length > 0">Technologies:</span>
    <ul>
      <li class="bedge bg-warning rounded" v-for="technology in project.technologies" :key="technology.id">
       {{ technology.name }}
      </li>
    </ul> -->

  </div>



</template>


<style lang="scss">

</style>