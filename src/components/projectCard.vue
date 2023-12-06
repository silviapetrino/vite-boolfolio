<script>
import {store} from '../data/store';

export default {
  name: 'projectCard',
  props: {
    project: Object
  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>

  <div class="card-sp">
    <h2>{{ project.title }}</h2>
    <p><span>Description: </span>{{ project.description }}</p>
    <p><span>Release date: </span>{{ project.release_date }}</p>
  </div>
  


</template>



<style lang="scss" scoped>

.card-sp {
  border: 1px solid white;
  border-radius: 5px;
  margin: .5rem;
  width: 300px;

  span {
    font-weight: 800;
  }
}

</style>