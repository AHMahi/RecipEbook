<template>
  <div id="loginFormContainer" class="grid grid-cols-1 sm:grid-cols-2 py-20 px-40 bg-gray-100">
    <!-- Left Column -->
    <div class="pt-10 px-20 bg-white">
      <h1 class="text-2xl font-semibold text-gray-600">
        Recip<span class="text-green-600 font-bold">Ebook</span>
      </h1>
      <!-- Inputs Section -->
      <div class="py-10 pt-20 px-10">
        <form @submit.prevent="login">
          <h2 class="text-3xl font-bold mb-2 text-center text-gray-800">Welcome Back!</h2>
          <p class="text-gray-500 text-sm mb-6 sm:text-md text-center">Login with your registered Email and Password</p>
          <p class="text-lg font-semibold mb-1 text-gray-800">Email</p>
          <div class="mb-4 text-md">
            <input type="email" placeholder="Enter your Email" required v-model="email" class="w-full py-3 px-5 border border-gray-300 rounded-md">
          </div>
          <p class="text-lg font-semibold mb-1 text-gray-800">Password</p>
          <div class="mb-6 text-md">
            <input type="password" placeholder="*********" required v-model="password" class="w-full py-3 px-5 border border-gray-300 rounded-md">
          </div>
          <button type="submit" class="w-full bg-green-600 text-white font-medium py-3 rounded-md transition duration-300 hover:bg-green-700">Sign In</button>
        </form>
        <p class="mt-40 text-center text-md font-medium text-gray-500">Don't have an Account?
          <span @click="$emit('showSignUp')" class="text-green-600 hover:text-green-700 cursor-pointer font-semibold">Sign up</span>
        </p>
      </div>
    </div>
    
    <!-- Right Column -->
    <div class=''>
      <!-- Image Section -->
      <div class="aspect-w-3 aspect-h-2 sm:aspect-w-1 sm:aspect-h-1 lg:aspect-w-3 lg:aspect-h-4 h-full">
        <img src="../../assets/login.jpg" class="object-cover login-image" alt="Pizza Image">
      </div>
    </div>
  </div>
</template>


<script>
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebaseConfig'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$emit('loggedIn')
        })
      console.log(this.email);
    }
  }
}
</script>

<style scoped>
/* Add any custom styles here */
</style>
