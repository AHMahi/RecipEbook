<template>
  <div class="container mx-auto my-10 px-4 sm:px-6 lg:px-8">
    <div class="text-center pb-10">
      <h1 class="text-5xl sm:text-6xl font-bold text-gray-600 py-8">
        Recip<span class="text-green-600 text-5xl sm:text-6xl font-bold">EManager</span>
      </h1>
    </div>

    <!-- Display recipes -->
    <p class="text-3xl font-semibold text-gray-600 py-4">
      My Recipes
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      <div v-for="recipe in recipes" :key="recipe.id" class="bg-white border border-gray-100 shadow-md rounded-lg py-10">
        <h2 class="text-2xl font-semibold mb-2 text-green-600 text-center pb-4">{{ recipe.recipeName }}</h2>
        <h3 class="text-m font-semibold text-gray-800 mb-2 text-center">Cuisine Type: {{ recipe.cuisineType }}</h3>
        <h3 class="text-m font-medium text-gray-800 mb-2 text-center italic">Category: {{ recipe.category }}</h3>
        <div class="flex justify-center">
          <button @click="deleteRecipe(recipe.id)" class="px-4 py-3 text-md rounded text-white bg-red-600 border hover:bg-red-700 hover:text-white transition duration-300 ease-in-out mt-4">
            Delete Recipe
          </button>
        </div>  
      </div>
    </div>

    <!-- Create recipes -->
    <p class="text-3xl font-semibold text-gray-600 pt-20 pb-4">
      Create Recipes
    </p>
    <div class="pb-8">
      <div class="bg-white border border-gray-100 shadow-md rounded-lg p-6">
        <div class="relative">
          <label for="recipeName" class="relative block py-3">
            <span class="sr-only">Recipe Name</span>
            <input
              type="text"
              id="recipeName"
              v-model="recipeName"
              class="block w-full py-4 pl-5 pr-10 placeholder-gray-400 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 sm:text-lg"
              placeholder="Recipe Name"
              name="recipeName"
            />
          </label>
        </div>
        <div class="relative">
          <label for="cuisineType" class="relative block py-3">
            <span class="sr-only">Cuisine Type</span>
            <input
              type="text"
              id="cuisineType"
              v-model="cuisineType"
              class="block w-full py-4 pl-5 pr-10 placeholder-gray-400 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 sm:text-lg"
              placeholder="Cuisine Type"
              name="cuisineType"
            />
          </label>
        </div>
        <div class="relative">
          <label for="category" class="relative block py-3">
            <span class="sr-only">Category</span>
            <input
              type="text"
              id="category"
              v-model="category"
              class="block w-full py-4 pl-5 pr-10 placeholder-gray-400 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 sm:text-lg"
              placeholder="Cuisine Category"
              name="category"
            />
          </label>
        </div>
        <button @click="createRecipe" class="px-4 py-3 text-lg rounded text-white bg-green-600 border hover:bg-green-700 hover:text-white transition duration-300 ease-in-out mt-4">
          Create Recipe
        </button>
        <p v-if="errorMessage" class="error mt-4">{{ errorMessage }}</p>
      </div>
    </div>

    <!-- Update recipe -->
    <p class="text-3xl font-semibold text-gray-600 pt-20 pb-4">
      Update Recipe
    </p>
    <div class="pb-8">
      <div class="bg-white border border-gray-100 shadow-md rounded-lg p-6">
        <div class="relative">
          <label for="oldRecipeName" class="relative block py-3">
            <span class="sr-only">Old Recipe Name</span>
            <input
              type="text"
              id="oldRecipeName"
              v-model="oldRecipeName"
              class="block w-full py-4 pl-5 pr-10 placeholder-gray-400 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 sm:text-lg"
              placeholder="Old Recipe Name"
              name="oldRecipeName"
            />
          </label>
        </div>
        <div class="relative">
          <label for="newRecipeName" class="relative block py-3">
            <span class="sr-only">New Recipe Name</span>
            <input
              type="text"
              id="newRecipeName"
              v-model="newRecipeName"
              class="block w-full py-4 pl-5 pr-10 placeholder-gray-400 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 sm:text-lg"
              placeholder="New Recipe Name"
              name="newRecipeName"
            />
          </label>
        </div>
        <div class="relative">
          <label for="newCuisineType" class="relative block py-3">
            <span class="sr-only">New Cuisine Type</span>
            <input
              type="text"
              id="newCuisineType"
              v-model="newCuisineType"
              class="block w-full py-4 pl-5 pr-10 placeholder-gray-400 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 sm:text-lg"
              placeholder="New Cuisine Type"
              name="newCuisineType"
            />
          </label>
        </div>
        <div class="relative">
          <label for="newCategory" class="relative block py-3">
            <span class="sr-only">New Category</span>
            <input
              type="text"
              id="newCategory"
              v-model="newCategory"
              class="block w-full py-4 pl-5 pr-10 placeholder-gray-400 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 sm:text-lg"
              placeholder="New Category"
              name="newCategory"
            />
          </label>
        </div>
        <button @click="updateRecipe" class="px-4 py-3 text-lg rounded text-white bg-blue-600 border hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out mt-4">
          Update Recipe
        </button>
        <p v-if="updateErrorMessage" class="error mt-4">{{ updateErrorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import db from '../firebaseConfig.js';

export default {
  async mounted() {
    await this.getAllRecipes();
  },

  data() {
    return {
      recipeName: '',
      cuisineType: '',
      category: '',
      recipes: [],
      errorMessage: '',
      updatedRecipeName: '',
      updateRecipeId: '',
      updateErrorMessage: ''
    };
  },

  methods: {
    async createRecipe() {
      if (this.recipeName && this.cuisineType && this.category) {
        const colRef = collection(db, 'recipes');
        const dataObj = {
          recipeName: this.recipeName,
          cuisineType: this.cuisineType,
          category: this.category
        };
        const docRef = await addDoc(colRef, dataObj);
        console.log('Recipe was created with ID:', docRef.id);

        this.recipeName = '';
        this.cuisineType = '';
        this.category = '';
        this.errorMessage = '';

        await this.getAllRecipes();
      } else {
        this.errorMessage = 'Please enter all fields.';
      }
    },

    async getAllRecipes() {
      const colRef = collection(db, 'recipes');
      const querySnapshot = await getDocs(colRef);

      const recipes = [];
      querySnapshot.forEach((doc) => {
        recipes.push({ id: doc.id, ...doc.data() });
      });

      this.recipes = recipes;
    },

    async deleteRecipe(recipeId) {
      try {
        const recipeRef = doc(db, 'recipes', recipeId);
        await deleteDoc(recipeRef);
        console.log('Recipe with ID:', recipeId, 'was deleted.');

        await this.getAllRecipes();
      } catch (error) {
        console.error('Error deleting recipe:', error);
      }
    },

    async updateRecipe() {
      if (this.oldRecipeName && this.newRecipeName && this.newCuisineType && this.newCategory) {
        try {
          const colRef = collection(db, 'recipes');
          const querySnapshot = await getDocs(colRef);
          let recipeId = '';

          querySnapshot.forEach((doc) => {
            const recipe = doc.data();
            if (recipe.recipeName === this.oldRecipeName) {
              recipeId = doc.id;
              return;
            }
          });

          if (recipeId) {
            const recipeRef = doc(db, 'recipes', recipeId);
            await updateDoc(recipeRef, {
              recipeName: this.newRecipeName,
              cuisineType: this.newCuisineType,
              category: this.newCategory
            });
            console.log('Recipe with ID:', recipeId, 'was updated with new details.');

            this.oldRecipeName = '';
            this.newRecipeName = '';
            this.newCuisineType = '';
            this.newCategory = '';
            this.updateErrorMessage = '';

            await this.getAllRecipes();
          } else {
            this.updateErrorMessage = 'Recipe not found.';
          }
        } catch (error) {
          console.error('Error updating recipe:', error);
        }
      } else {
        this.updateErrorMessage = 'Please enter all fields.';
      }
    },
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
