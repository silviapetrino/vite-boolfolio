<script>

export default {
  name: 'projectCard',

  props: {
    project: Object, 
    slug: ''
  }
}
</script>

<template>

  <div class="card-sp">
    <ul>
      <li>
        <router-link :to="{ name: 'ProjectDetail', params: { slug: project.slug }}">
          <p>{{ project.title }} </p>
          <i class=" rounded p-1 fa-solid fa-right-long"></i>
        </router-link>
      </li>
    </ul>
  </div>
  

</template>



<style lang="scss" scoped>

  i {
    color: black;
    background-color:  #E9B006;
    &:hover {
      color:  #E9B006;
      background-color: black;
    }
  }

</style>