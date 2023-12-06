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
    <p><span>Type: </span>{{ project.type.name }}</p>

    <span v-if="project.technologies.length > 0">Technologies:</span>
    <ul>
      <li class="bedge bg-warning rounded" v-for="technology in project.technologies" :key="technology.id">
       {{ technology.name }}
      </li>
    </ul>

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

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
      display: inline-block;
      margin: 2px 5px;
      padding: 4px;
      color: black;
    }
  }
}

</style>