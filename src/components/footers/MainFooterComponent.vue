<template lang="html">
  <footer class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 py-20 max-w-[1600px] mx-auto gap-10 border-t px-5">
    <div class="flex flex-col gap-4 md:col-span-4">
      <h4 class="text-5xl font-bold text-gray-600">
        Recip<span class="text-green-600">Ebook</span>
      </h4>
      <p>RecipEbook is an application to find <br>a variety of famous and delicious recipes</p>
    </div>
    <div class="flex flex-col gap-4 md:col-span-2 text-center">
      <h4 class="text-3xl font-bold text-gray-700">
        Company
      </h4>
      <div class="flex flex-col gap-3">
        <router-link to="/" class="no-underline font-semibold text-gray-600 text-lg hover:text-green-600 transition duration-300 ease-in-out">Home</router-link>
        <router-link to="/manageRecipes" class="no-underline font-semibold text-gray-600 text-lg hover:text-green-600 transition duration-300 ease-in-out">My Recipes</router-link>
        <router-link to="/recipes" class="no-underline font-semibold text-gray-600 text-lg hover:text-green-600 transition duration-300 ease-in-out">Recipes</router-link>
      </div>
    </div>
    <div class="flex flex-col gap-4 md:col-span-2 text-center">
      <h4 class="text-3xl font-bold text-gray-700">
        Support
      </h4>
      <div class="flex flex-col gap-3">
        <router-link to="/" class="no-underline font-semibold text-gray-600 text-lg hover:text-green-600 transition duration-300 ease-in-out">Home</router-link>
        <router-link to="/manageRecipes" class="no-underline font-semibold text-gray-600 text-lg hover:text-green-600 transition duration-300 ease-in-out">My Recipes</router-link>
        <router-link to="/recipes" class="no-underline font-semibold text-gray-600 text-lg hover:text-green-600 transition duration-300 ease-in-out">Recipes</router-link>
      </div>
    </div>
    <div class="flex flex-col gap-4 md:col-span-2 text-center">
      <h4 class="text-3xl font-bold text-gray-700">
        About
      </h4>
      <div class="flex flex-col gap-3">
        <router-link to="/" class="no-underline font-semibold text-gray-600 text-lg hover:text-green-600 transition duration-300 ease-in-out">FAQ</router-link>
        <router-link to="/manageRecipes" class="no-underline font-semibold text-gray-600 text-lg hover:text-green-600 transition duration-300 ease-in-out">Subscribe</router-link>
        <router-link to="/recipes" class="no-underline font-semibold text-gray-600 text-lg hover:text-green-600 transition duration-300 ease-in-out">Videos</router-link>
      </div>
    </div>
    <div class="flex flex-col gap-4 md:col-span-2 text-center">
      <h4 class="text-3xl font-bold text-gray-700">
        Get in Touch
      </h4>
      <div class="flex flex-col gap-3">
        <router-link to="/" class="no-underline font-semibold text-gray-600 text-lg hover:text-green-600 transition duration-300 ease-in-out">Inquire with or Contact us</router-link>
        <router-link to="/manageRecipes" class="no-underline font-semibold text-gray-600 text-lg hover:text-green-600 transition duration-300 ease-in-out">Loved our Service?</router-link>
      </div>
    </div>
  </footer>
  <div class="bg-green-600 text-white text-center py-3 px-5">
    <p>&copy; RecipEbook by <a href="https://ahmahi.github.io" class="no-underline text-white font-bold">AHMahi</a> - {{ new Date().getFullYear() }}. <span>Inspiration drawn from <a href="https://dribbble.com/shots/15223754-Food-Cooking-Inspiration-Website/attachments/6970440?mode=media" class="no-underline text-white font-bold">Maulana Lufti's FoodMood</a></span></p>
  </div>
</template>
<script>
export default {
  // Component logic
}
</script>
<style lang="">
  /* Component-specific styles */
</style>
