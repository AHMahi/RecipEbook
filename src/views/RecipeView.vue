<template>
  <div class="container mx-auto my-10 px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-5xl sm:text-6xl font-bold text-gray-600 py-8">
        Recip<span class="text-green-600 text-5xl sm:text-6xl font-bold">Elibrary</span>
      </h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10">
      <div class="relative">
        <label for="recipeName" class="relative block">
          <span class="sr-only">Search</span>
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <font-awesome-icon icon="fa-solid fa-search" class="text-gray-400" />
          </span>
          <input
            type="text"
            id="recipeName"
            v-model="recipeName"
            class="block text-center w-full py-2 pl-3 pr-10 placeholder-gray-400 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
            placeholder="Recipe Name"
            name="search"
          />
        </label>
      </div>
      <div class="relative">
        <label for="cuisineType" class="relative block">
          <span class="sr-only">Search</span>
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <font-awesome-icon icon="fa-solid fa-search" class="text-gray-400" />
          </span>
          <input
            type="text"
            id="cuisineType"
            v-model="cuisineType"
            class="block text-center w-full py-2 pl-3 pr-10 placeholder-gray-400 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
            placeholder="Cuisine Type"
            name="search"
          />
        </label>
      </div>
    </div>
    <div class="pt-10 pb-20 flex flex-wrap justify-center">
      <button
        v-for="category in categories"
        :key="category"
        @click="toggleCategory(category)"
        :class="{
          'bg-green-600 text-white': selectedCategories.includes(category),
          'text-green-600 bg-white border border-green-600': !selectedCategories.includes(category)
        }"
        class="px-4 py-2 rounded hover:text-white mr-2 mb-2 hover:bg-green-700 transition duration-300 ease-in-out"
      >
        {{ category }}
      </button>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="recipe in filteredRecipes"
        :key="recipe.idMeal"
        class="bg-white border border-gray-100 shadow-md rounded-lg p-6"
      >
        <h2 class="text-2xl font-semibold mb-2 text-green-600 text-center pb-4">{{ recipe.strMeal }}</h2>
        <h3 class="text-m font-semibold text-gray-800 mb-2 text-center">Cuisine Type: {{ recipe.strArea }}</h3>
        <h3 class="text-m font-medium text-gray-800 mb-2 text-center italic">Category: {{ recipe.strCategory }}</h3>
        <p class="text-gray-700" v-show="recipe.showInstructions">{{ recipe.strInstructions }}</p>
        <div class="flex justify-center mt-10">
          <button
            @click="toggleInstructions(recipe)"
            class="px-4 py-3 rounded text-white bg-green-600 border hover:bg-green-700 hover:text-white transition duration-300 ease-in-out"
          >
            {{ recipe.showInstructions ? 'Hide Instructions' : 'Show Instructions' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipeName: '',
      cuisineType: '',
      recipes: [],
      categories: [],
      selectedCategories: []
    };
  },
  mounted() {
    this.loadRecipes();
    this.loadCategories();
  },
  methods: {
    async loadRecipes() {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const data = await response.json();
        this.recipes = data.meals || [];
      } catch (error) {
        console.error('Error loading recipes:', error);
      }
    },
    async loadCategories() {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        this.categories = data.categories.map(category => category.strCategory);
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    },
    toggleInstructions(recipe) {
      recipe.showInstructions = !recipe.showInstructions;
    },
    toggleCategory(category) {
      if (this.selectedCategories.includes(category)) {
        // Category is already selected, so remove it from the selectedCategories array
        const index = this.selectedCategories.indexOf(category);
        this.selectedCategories.splice(index, 1);
      } else {
        // Category is not selected, so add it to the selectedCategories array
        this.selectedCategories.push(category);
      }
    }
  },
  computed: {
    filteredRecipes() {
      const filtered = this.recipes.filter(recipe => {
        const nameMatch = recipe.strMeal.toLowerCase().includes(this.recipeName.toLowerCase());
        const cuisineMatch = recipe.strArea.toLowerCase().includes(this.cuisineType.toLowerCase());
        const categoryMatch =
          this.selectedCategories.length === 0 || this.selectedCategories.includes(recipe.strCategory);
        return nameMatch && cuisineMatch && categoryMatch;
      });
      return filtered;
    }
  }
};
</script>

<style>
/* Add any custom styles here */
</style>
