import { reactive } from "vue";

export const store = reactive({
  
  apiUrl: 'http://127.0.0.1:8000/api/projects',
  apiUrlMail: 'http://127.0.0.1:8000/api/send-email',
  projects: []

})