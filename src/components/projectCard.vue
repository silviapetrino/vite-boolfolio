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
     <li><router-link :to="{ name: 'ProjectDetail', params: { slug: project.slug }}">{{ project.title }}</router-link></li>
    </ul>
    
  </div>
  


</template>



<style lang="scss">


</style>