<script>
import axios from 'axios';
import { store } from '../../data/store';
import Loader from '../partials/loader.vue';

export default {
  name: 'ContactForm',
  components: {
    Loader
  },

  data(){
    return{
      name: '',
      email: '',
      message: '',
      success: false,
      isLoading: false,
      errors: {
        name: [],
        email: [],
        message: [],
      } 
    }
  },

  methods: {
    sendForm(){
      this.isLoading = true;
      const data = {
        name: this.name,
        email: this.email,
        message: this.message
      }
      axios.post(store.apiUrlMail , data)
        .then(response => {
          this.isLoading = false;
          this.success = response.data.success;
          if(!this.success){
            this.errors = response.data.errors
          }
        })
        .catch(error => {
          console.log(error);
        })
        
    }
  }
}
</script>

<template>

  <div class="container form text-white pb-5 d-flex flex-column align-items-center">
    <h2 class="pb-2">Contacts:</h2>


    <form v-if="!success" @submit.prevent="sendForm()">
      <Loader v-if="isLoading"/>
     
      <div class="mb-3">
        <label class="mx-3" for="name">Name</label>
        <input v-model="name" type="text" name="name" id="name" placeholder="name" />
        <p class="error text-danger mx-3" v-for="error in errors.name" :key="error.id">{{ error }}</p>
      </div>
      <div class="mb-3">
        <label class="mx-3" for="email">Email</label>
        <input v-model="email" type="text" name="email" id="email" placeholder="email" />
        <p class="error text-danger mx-3" v-for="error in errors.email" :key="error.id">{{ error }}</p>
      </div>
      <div class="mb-3">
        <label class="mx-1" for="message">Message</label>
        <textarea v-model="message" type="text" name="message" id="message" placeholder="message" ></textarea>
        <p class="error text-danger mx-3" v-for="error in errors.message" :key="error.id">{{ error }}</p>
      </div>
      <button class="btn btn-warning" type="submit">invia</button>
    </form>
    

    <div v-else class="alert alert-success" role="alert">
      <span>Mail was successfully sent</span>
    </div>
    
  </div>

</template>



<style>

</style>