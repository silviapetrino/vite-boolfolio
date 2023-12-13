<script>
export default {
  name: 'ContactForm'
}
</script>

<template>

  <div class="container form text-white pb-5 d-flex flex-column align-items-center">
    <h2 class="pb-2">Contacts:</h2>
    <form>
      <div class="mb-3">
        <label class="mx-3" for="name">Name</label>
        <input type="text" name="name" id="name" placeholder="name" />
      </div>
      <div class="mb-3">
        <label class="mx-3" for="email">Email</label>
        <input type="text" name="email"  id="email" placeholder="email"/>
      </div>
      <div class="mb-3">
        <label class="mx-1" for="message">Message</label>
        <textarea type="text" name="message" id="message" placeholder="message"></textarea>
      </div>
      <button class="btn btn-warning" type="submit">invia</button>
    </form>
    
  </div>

</template>



<style>

</style>