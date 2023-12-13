<script>
import axios from 'axios';
import { store } from '../../data/store';

export default {
  name: 'ContactForm',

  data(){
    return{
      name: '',
      email: '',
      message: '',
      success: true,
      errors: {
        name: [],
        email: [],
        message: [],
      } 
    }
  },

  methods: {
    sendForm(){
      const data = {
        name: this.name,
        email: this.email,
        message: this.message
      }
      axios.post(store.apiUrlMail , data)
        .then(response => {
          console.log(response.data);
          this.success = response.data.success;
          if(!this.success){
            this.errors = response.data.errors
          }
        })
        .catch(error => {
        console.error('Error', error);
        })
    }
  }
}
</script>

<template>

  <div class="container form text-white pb-5 d-flex flex-column align-items-center">
    <h2 class="pb-2">Contacts:</h2>

    <form @submit.prevent="sendForm()">
      <div class="mb-3">
        <label class="mx-3" for="name">Name</label>
        <input v-model="name" type="text" name="name" id="name"  />
        <p class="error text-danger mx-3" v-for="error in errors.name" :key="error.id">{{ error }}</p>
      </div>
      <div class="mb-3">
        <label class="mx-3" for="email">Email</label>
        <input v-model="email" type="text" name="email" id="email" />
        <p class="error text-danger mx-3" v-for="error in errors.email" :key="error.id">{{ error }}</p>
      </div>
      <div class="mb-3">
        <label class="mx-1" for="message">Message</label>
        <textarea v-model="message" type="text" name="message" id="message" ></textarea>
        <p class="error text-danger mx-3" v-for="error in errors.message" :key="error.id">{{ error }}</p>
      </div>
      <button class="btn btn-warning" type="submit">invia</button>
    </form>
    
    
  </div>

</template>



<style>

</style>