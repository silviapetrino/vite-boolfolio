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
  },

  computed: {
    technologiesList(){
      return this.project.technologies?.map(technology => technology.name).join(", ") || ' - ';
    }
  }
}



</script>


<template>
  
  <div class="container project-detail pb-2">

    <div class="card-sp text-white p-2">
      
      <h2 class="text-white">{{ project.title }}</h2>
      <p><span>Description:</span>{{ project.description }}</p>
      <p><span>Release date:</span>{{ project.description }}</p>
      <p><span>Type: </span>{{ project.type?.name || ' - ' }}</p>

      <p><span>Technologies: </span> {{ technologiesList }}</p>
     

    </div>



  </div>



</template>


<style lang="scss">

// <!-- <p><span>Description: </span>{{ project.description }}</p>
//     <p><span>Release date: </span>{{ project.release_date }}</p>
//     <p><span>Type: </span>{{ project.type.name }}</p>

   

</style>