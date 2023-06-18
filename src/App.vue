<template>
  <div>
    <div v-if="!isLoggedIn" class="bg-gray-100 min-h-screen flex justify-center items-center">
      <!-- Login -->
      <template v-if="showLogin">
        <div>
          <LoginFormComponent @loggedIn="isLoggedIn = true" @showSignUp="showLogin = false" />
        </div>
      </template>
      <!-- Register -->
      <template v-else>
        <div>
          <SignUpFormComponent @loggedIn="isLoggedIn = true" @showLogin="showLogin = true" />
        </div>
      </template>
    </div>
    <!-- Is logged in -->
    <div v-else>
      <div id="app">
        <DefaultLayout :isLoggedIn="isLoggedIn" :displayName="displayName" @loggedOut="handleLogout"></DefaultLayout>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultLayout from './components/layouts/DefaultLayout.vue'
import LoginFormComponent from './components/Authentication/LoginFormComponent.vue'
import SignUpFormComponent from './components/Authentication/SignupFormComponent.vue'
import { auth } from '@/firebaseConfig'

export default {
  name: 'App',
  components: {
    DefaultLayout,
    LoginFormComponent,
    SignUpFormComponent
  },
  
  data() {
    return {
      isLoggedIn: false,
      showLogin: true,
      displayName: ''
    }
  },
  beforeUpdate() {
    if (auth.currentUser) {
      this.displayName = auth.currentUser.displayName
    }
  },
  methods: {
    handleLogout() {
      this.isLoggedIn = false
    },
    showSignUp() {
      this.showLogin = false;
    },
    switchToLogin() {
      this.showLogin = true;
    }
  }
}
</script>

<style>

</style>
