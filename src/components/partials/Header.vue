<script>
  export default {
    name: 'Header'
   
  }
</script>

<template>
  <header >
    <nav class="d-flex justify-content-center align-items-center h-100">
      <ul>
        <li>
          <router-link :to="{name: 'home'}">home</router-link>
        </li>
        <li>
          <router-link :to="{name: 'projects'}">projects list</router-link>
        </li>
        <li>
          <router-link :to="{name: 'contacts'}">Contacts</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>


<style lang="scss" scoped>

header {

  background-color: black;
  position: fixed;
  width: 100%;
  height: 60px;
  padding: 15px;
  
  ul{
    list-style:none;
    li{
      margin: 0px 10px;
      padding-top: 10px;
      display:inline-block;
      a{
        color:white;
        text-decoration: none;
        text-transform:uppercase;
        &.active{
          font-weight: bold;
          color:rgb(255, 174, 0);
  }
        }
       
        &:hover{
          text-decoration:underline;
        }
      }
    }
    
  }



</style>