// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import { initializeApp } from 'firebase/app'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
// import DataTable from 'primevue/datatable'
// import Column from 'primevue/Column'

import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRQGN7HShoYo5GlijmOvB4cSShjhtOWVI",
  authDomain: "fit5032-b0d92.firebaseapp.com",
  projectId: "fit5032-b0d92",
  storageBucket: "fit5032-b0d92.firebasestorage.app",
  messagingSenderId: "899679514659",
  appId: "1:899679514659:web:e1a1e953508938c4f88196"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })

// app.component('DataTable', DataTable)
// app.component('Column', Column)

app.use(router)
app.mount('#app')
