<template>
  <div id="home" class="px-4 py-4 sm:px-8 sm:py-8 lg:px-32 lg:py-32">
    <!-- section-1 -->
    <div class="grid grid-rows-1 gap-4 sm:grid-rows-3">
      <div class="row-span-1">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <!-- section-1 vertical section-1 -->
          <div class= "mt-20">
            <h2>Welcome {{ displayName }}</h2>
            <span class="text-5xl sm:text-6xl font-bold text-green-600">
              Discover Amazing Recipes
            </span>
            <div class="pt-1"></div>
            <span class="text-gray-600 text-4xl sm:text-5xl font-bold">
              Cook Like a Chef
            </span>
            <div class="pt-10"></div>
              <span class="text-gray-600 text-lg sm:text-md font-medium">
                Want to learn to cook something new and amaze yourself?
              </span>
              <br>
              <span class="text-gray-600 text-lg sm:text-md font-medium">
                Explore our wide range of recipes and unleash your culinary creativity<br>
                Get ready to embark on a delicious food journey!
              </span>
              <div class="pt-8"></div>
              <div class="flex space-x-2">
                <button class="px-4 py-3 rounded text-white bg-green-600 border hover:bg-green-700 hover:text-white transition duration-300 ease-in-out">
                  Browse Recipes
                </button>
                <button class="px-4 py-3 rounded text-green-600 bg-white border border-green-600 hover:bg-green-700 hover:text-white transition duration-300 ease-in-out">
                  Get App
                </button>
              </div>    
          </div>
          <!-- section-1 vertical section-2 -->
          <div class="aspect-w-3 aspect-h-2 sm:aspect-w-1 sm:aspect-h-1 lg:aspect-w-3 lg:aspect-h-4">
            <img src="../assets/home.jpg" class="shadow-lg rounded-lg object-cover custom-image" alt="Pizza Image">
          </div>
        </div>
      </div>  
      <!-- section-2 -->
      <div class="row-span-1 bg-gray-50 px-10">
        <div class="flex justify-center flex-col items-center mt-10">
          <div class="text-center">
            <span class="text-gray-600 text-6xl sm:text-5xl font-semibold">
              Popular Recipes
            </span>
          </div>
          <div class="mt-6 text-center">
            <span class="text-gray-600 text-base sm:text-md font-medium">
              Our website covers recipes inspired by food found from all over the world.
            </span>
          </div>
          <div class="text-center">
            <span class="text-gray-600 text-base sm:text-md font-medium">
              Try out some of our most popular recipes
            </span>
          </div>
        </div>
        <div class= "p-8">
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-12">
            <div>
              <img src="../assets/Shrimp.jpg" class="[clip-path:circle()] shadow-lg" alt="Pizza Image">
            </div>
            <div>
              <img src="../assets/lambRack.jpg" class="[clip-path:circle()]" alt="Pizza Image">
            </div>
            <div>
              <img src="../assets/waffle.jpg" class="[clip-path:circle()]" alt="Pizza Image">
            </div>
            <div>
              <img src="../assets/riceBowl.jpg" class="[clip-path:circle()]" alt="Pizza Image">
            </div>
          </div>
        </div>  
      </div>

      <!-- section-3 -->
      <div class="row-span-1 mt-40">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <!-- section-3 vertical section-1 -->
          <div class="aspect-w-3 aspect-h-2 sm:aspect-w-1 sm:aspect-h-1 lg:aspect-w-3 lg:aspect-h-4">
            <img src="../assets/seafoodPasta.jpg" class="shadow-lg rounded-lg object-cover custom-image" alt="Pizza Image">
          </div>
          <!-- section-3 vertical section-2 -->
          <div class="pt-40">
            <span class="text-4xl sm:text-5xl font-semibold text-gray-600">
              This Month's
            </span>
            <div class="pt-1"></div>
            <span class="text-green-600 text-4xl sm:text-5xl font-semibold">
              Favourite Recipe
            </span>
            <div class="pt-4">
              <span>
                Delicious and Tangy Tomyum Seafood Pasta
              </span>
              <div class="pt-4"></div>
              <div class="flex space-x-2">
                <button class="px-4 py-3 rounded text-white bg-green-600 border hover:bg-green-700 hover:text-white transition duration-300 ease-in-out">
                  Browse Recipes
                </button>
                <button class="px-4 py-3 rounded text-green-600 bg-white border border-green-600 hover:bg-green-700 hover:text-white transition duration-300 ease-in-out">
                  Get App
                </button>
              </div>    
            </div>
          </div>
        </div>
      </div>  
    </div>  
  </div>
</template>

<script>
export default {
  props: {
    displayName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      firstName: ''
    };
  },
};
</script>
