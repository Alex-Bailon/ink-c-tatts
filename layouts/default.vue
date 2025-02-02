<template>
  <div class="min-h-screen flex flex-col">
    <header class="sticky top-0 z-50 shadow-md backdrop-blur-sm bg-black/95">
      <nav class="w-full px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20 sm:h-28">
          <!-- Logo Section -->
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/" class="hover:opacity-90 transition-opacity">
              <img alt="Ink.C.Tatts logo" class="h-16 w-16 sm:h-24 sm:w-24 object-cover" src="/logo.webp" />
            </NuxtLink>
          </div>


          <!-- Desktop Navigation -->
          <div class="hidden sm:flex sm:space-x-8">
            <NuxtLink 
              to="/" 
              class="text-gray-300 hover:text-white px-4 py-3 text-xl font-medium transition-colors"
              active-class="text-blue-400"
            >
              Home
            </NuxtLink>
            <NuxtLink 
              to="/booking" 
              class="text-gray-300 hover:text-white px-4 py-3 text-xl font-medium transition-colors"
              active-class="text-blue-400"
            >
              Book Now
            </NuxtLink>
            <NuxtLink 
              to="/aftercare" 
              class="text-gray-300 hover:text-white px-4 py-3 text-xl font-medium transition-colors"
              active-class="text-blue-400"
            >
              Aftercare
            </NuxtLink>
            <NuxtLink 
              to="/gallery" 
              class="text-gray-300 hover:text-white px-4 py-3 text-xl font-medium transition-colors"
              active-class="text-blue-400"
            >
              Gallery
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="text-gray-300 hover:text-white px-4 py-3 text-xl font-medium transition-colors"
              active-class="text-blue-400"
            >
              Contact
            </NuxtLink>
          </div>

          <!-- Mobile menu button -->
          <div class="sm:hidden">
            <button 
              @click="isMenuOpen = !isMenuOpen"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Icon when menu is closed -->
              <svg 
                v-if="!isMenuOpen"
                class="block h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <!-- Icon when menu is open -->
              <svg 
                v-else
                class="block h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div 
          v-show="isMenuOpen" 
          class="sm:hidden"
        >
          <div class="pt-2 pb-3 space-y-1">
            <NuxtLink 
              to="/" 
              class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              active-class="text-blue-400"
            >
              Home
            </NuxtLink>
            <NuxtLink 
              to="/booking" 
              class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              active-class="text-blue-400"
            >
              Book Now
            </NuxtLink>
            <NuxtLink 
              to="/aftercare" 
              class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              active-class="text-blue-400"
            >
              Aftercare
            </NuxtLink>
            <NuxtLink 
              to="/gallery" 
              class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              active-class="text-blue-400"
            >
              Gallery
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              active-class="text-blue-400"
            >
              Contact
            </NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="mt-auto py-6 bg-black">
      <p class="text-center text-gray-400">
        Made with ❤️ by <a href="https://www.instagram.com/ink.c.tatts/" target="_blank" class="text-blue-400 hover:text-blue-300 transition-colors">@ink.c.tatts</a>
      </p>
    </footer>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false)
</script>

<style scoped>
/* Any custom styles that can't be handled by Tailwind can go here */
</style>
