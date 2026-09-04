<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1>Member Login</h1>

        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input
              id="username"
              v-model="username"
              type="text"
              class="form-control"
              required
            />
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              id="password"
              v-model="password"
              type="password"
              class="form-control"
              required
            />
          </div>

          <div v-if="error" class="text-danger mb-3">
            {{ error }}
          </div>

          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../auth'

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')

const handleLogin = () => {
  if (login(username.value, password.value)) {
    router.push('/about')
  } else {
    error.value = 'Invalid username or password.'
  }
}
</script>