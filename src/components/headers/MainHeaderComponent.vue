<template lang="html">
  <header>
    <div id="navbar">
      <!-- Logo section -->
      <nav class="flex items-center justify-between py-5 px-10 bg-white shadow-md">
        <router-link to="/" class="no-underline">
          <h1 class="text-3xl font-bold text-gray-600">
            Recip<span class="text-green-600">Ebook</span>
          </h1>
        </router-link>

        <!-- Mobile menu icon -->
        <div class="md:hidden ml-auto">
          <button @click="toggleMobileMenu" class="relative">
            <font-awesome-icon
              icon="fa-solid fa-bars"
              :class="isMobileMenuOpen ? 'scale-0 opacity-0' : ''"
              class="text-gray-500 text-3xl transition duration-300 ease-in-out absolute right-0"
            />
            <font-awesome-icon
              icon="fa-solid fa-close"
              :class="!isMobileMenuOpen ? 'scale-0 opacity-0' : ''"
              class="text-gray-500 text-3xl transition duration-300 ease-in-out"
            />
          </button>
        </div>

        <!-- Desktop menu links -->
        <div class="hidden md:flex gap-8">
          <router-link
            to="/"
            class="no-underline font-semibold text-gray-600 text-lg hover:text-green-700 transition duration-300 ease-in-out"
            >Home</router-link
          >
          <router-link
            to="/recipes"
            class="no-underline font-semibold text-gray-600 text-lg hover:text-green-700 transition duration-300 ease-in-out"
            >Library</router-link
          >
          <router-link
            to="/manageRecipes"
            class="no-underline font-semibold text-gray-600 text-lg hover:text-green-700 transition duration-300 ease-in-out"
            >Recipes</router-link
          >
        </div>

        <!-- Search and Sign Out -->
        <div class="md:flex gap-8 items-center">
          <div class="relative hidden md:block">
            <label class="relative block">
              <span class="sr-only">Search</span>
              <span class="absolute inset-y-0 left-0 flex items-center pl-3 pr-8">
                <font-awesome-icon icon="fa-solid fa-search" class="text-gray-500" />
              </span>
              <input
                class="text-center w-full py-2 pl-3 pr-10 placeholder-gray-400 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                placeholder="Find recipes"
                type="text"
                name="search"
              />
            </label>
          </div>

          <button
            @click="logOut"
            class=" hidden md:block no-underline font-semibold text-gray-600 text-lg hover:text-green-700 transition duration-300 ease-in-out"
          >
            Sign Out
          </button>
        </div>
      </nav>

      <!-- Mobile menu -->
      <transition
        enter-active-class="transition-all duration-500 ease-in-out"
        leave-active-class="transition-all duration-300 ease-in-out"
        enter-class="opacity-0 transform -translate-y-2"
        leave-to-class="opacity-0 transform -translate-y-2"
      >
        <div
          v-show="isMobileMenuOpen"
          class="flex flex-col gap-8 absolute bg-white top-[75px] w-full z-10 left-0 px-10 border-t py-10 h-full transition duration-300 ease-in-out"
        >
          <router-link
            to="/"
            class="no-underline text-gray-600 text-3xl hover:text-green-700 transition duration-300 ease-in-out"
            @click="toggleMobileMenu"
            >Home</router-link
          >
          <router-link
            to="/recipes"
            class="no-underline text-gray-600 text-3xl hover:text-green-700 transition duration-300 ease-in-out"
            @click="toggleMobileMenu"
            >Library</router-link
          >
          <router-link
            to="/manageRecipes"
            class="no-underline text-gray-600 text-3xl hover:text-green-700 transition duration-300 ease-in-out"
            @click="toggleMobileMenu"
            >Recipes</router-link
          >
          <button
            @click="logOut"
            class="no-underline text-gray-600 text-3xl hover:text-green-700 transition duration-300 ease-in-out text-left"
          >
            Sign Out
          </button>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
import { signOut } from 'firebase/auth';
import { auth } from '@/firebaseConfig';

export default {
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    logOut() {
      signOut(auth)
        .then(() => {
          this.$emit('loggedOut'); // Emit the 'loggedOut' event to notify the parent component
        })
        .catch((error) => {
          console.error('Sign Out Error', error);
        });
    },
  },
};
</script>

<style scoped>
</style>
