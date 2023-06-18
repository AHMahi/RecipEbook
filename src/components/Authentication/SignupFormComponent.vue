<template>
  <div id="signUpFormContainer" class="grid grid-cols-1 sm:grid-cols-2 py-20 px-40 bg-gray-100">
    <!-- Left Column -->
    <div class="relative">
      <!-- Image Section -->
      <div class="aspect-w-3 aspect-h-2 sm:aspect-w-1 sm:aspect-h-1 lg:aspect-w-3 lg:aspect-h-4 h-full">
        <img src="../../assets/lemons.jpg" class="object-cover login-image" alt="Pizza Image">
      </div>
      <h1 class="text-2xl font-semibold text-gray-600 absolute top-0 left-0 ml-16 mt-10">
        Recip<span class="text-green-600 font-bold">Ebook</span>
      </h1>
    </div>

    <!-- Right Column -->
    <div class="pt-10 px-20 bg-white">
      <!-- Inputs Section -->
      <div class="py-10 pt-15 px-10">
        <form @submit.prevent="signUp">
          <h2 class="text-3xl font-bold mb-2 text-center text-gray-800">Sign Up</h2>
          <p class="text-gray-500 text-sm mb-6 sm:text-md text-center">Let's get started with your free RecipEbook account</p>
          <p class="text-lg font-semibold mb-1 text-gray-800">Name</p>
          <div class="mb-4 text-md">
            <input type="text" placeholder="Enter your name" v-model="username" class="w-full py-3 px-5 border border-gray-300 rounded-md">
            <p v-if="registerClicked && !userNameIsValid()" class="text-red-500 text-sm">Please enter your name</p>
          </div>
          <p class="text-lg font-semibold mb-1 text-gray-800">Email</p>
          <div class="mb-4 text-md">
            <input type="text" placeholder="Enter your Email" v-model="email" class="w-full py-3 px-5 border border-gray-300 rounded-md">
            <p v-if="registerClicked && !emailIsValid()" class="text-red-500 text-sm">Please enter a valid email address</p>
            <p v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</p>
          </div>
          <p class="text-lg font-semibold mb-1 text-gray-800">Password</p>
          <div class="mb-3 text-md">
            <input type="password" placeholder="Create Password" v-model="password" :class="{ 'border-red-500': passwordError }" class="w-full py-3 px-5 border border-gray-300 rounded-md">
            <p v-if="registerClicked && !passwordIsValid()" class="text-red-500 text-sm">Must be at least 8 characters long and have a special character</p>
          </div>
          <div v-if="registerClicked && !termsAccepted" class="text-red-500 text-sm mb-4">
            <p>Please accept the Terms of Use and Privacy Polic.</p>
          </div>
          <div class="mb-8">
            <input type="checkbox" v-model="termsAccepted" class="form-checkbox border border-gray-400 rounded-none focus:border-green-500 checked:bg-green-500" />
            <span class="text-sm text-gray-600">
              I accept the <a href="#" class="text-green-600 font-semibold">Terms of Use</a> &amp; <a href="#" class="text-green-600 font-semibold">Privacy Policy</a>
            </span>
          </div>
          <button type="submit" class="w-full bg-green-600 text-white font-medium py-3 rounded-md transition duration-300 hover:bg-green-700" @click="registerClicked = true">Register</button>
        </form>
        <p class="mt-20 text-center text-md font-medium text-gray-500">Already have an account?
          <span @click="$emit('showLogin')" class="text-green-600 hover:text-green-700 cursor-pointer font-semibold">Sign in</span>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import { createUserWithEmailAndPassword, updateProfile, fetchSignInMethodsForEmail } from 'firebase/auth'
import { auth } from '@/firebaseConfig'

export default {
  emits: ['loggedIn'],
  data() {
    return {
      username: '',
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      errorMessages: [],
      termsAccepted: false,
      registerClicked: false,
    }
  },

  methods: {
    signUp() {
      // Reset error messages
      this.errorMessages = [];

      // Validate User Name
      if (!this.userNameIsValid()) {
        this.errorMessages.push('Please enter your name');
      }

      // Validate email
      if (!this.emailIsValid()) {
        this.errorMessages.push('Please enter a valid email address');
      }

      // Validate password
      if (!this.passwordIsValid()) {
        this.errorMessages.push('Password must be at least 8 characters and have a special character');
      }

      // Check if email already exists
      fetchSignInMethodsForEmail(auth, this.email)
        .then((methods) => {
          if (methods.length > 0) {
            this.errorMessages.push('Email address is already in use. Please choose another one.');
          }

          // Check if terms are accepted
          if (!this.termsAccepted) {
            this.errorMessages.push('Please accept the Terms of Use and Privacy Policy');
          }

          // Register new user if no errors
          if (this.errorMessages.length === 0) {
            createUserWithEmailAndPassword(auth, this.email, this.password)
              .then(() => {
                // Registered and signed in
                updateProfile(auth.currentUser, {
                  displayName: this.username
                })
                .then(() => {
                  this.$emit('loggedIn');
                });
              })
              .catch((error) => {
                console.log(error.message);
              });
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    },

    userNameIsValid() {
        const isValid = this.username.trim() !== '';
        return isValid;
    },

    emailIsValid() {
      // Add your email validation logic here
      // Example: Check if the email is in a valid format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.email);
    },

    passwordIsValid() {
      // Add your password validation logic here
      // Example: Check if the password meets the requirements

    },
  }
}
</script>

<style>
/* Add any custom styles here */
</style>
