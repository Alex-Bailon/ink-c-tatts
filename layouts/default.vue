<template>
  <div class="min-h-screen flex flex-col">
    <header class="fixed top-0 left-0 right-0 z-50 shadow-md backdrop-blur-sm bg-black/95">
      <nav class="w-full px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20 sm:h-28">
          <!-- Logo Section -->
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/" class="hover:opacity-90 transition-opacity" @click="isMenuOpen = false">
              <img alt="Ink.C.Tatts logo" class="h-16 w-16 sm:h-24 sm:w-24 object-cover rounded" src="/logo.webp" />
            </NuxtLink>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden sm:flex sm:space-x-8">
            <NuxtLink 
              to="/" 
              class="text-gray-300 hover:text-white px-4 py-3 text-xl font-medium transition-colors"
              exact-active-class="!text-blue-400"
            >
              Home
            </NuxtLink>
            <NuxtLink 
              to="/booking" 
              class="text-gray-300 hover:text-white px-4 py-3 text-xl font-medium transition-colors"
              active-class="!text-blue-400"
            >
              Book Now
            </NuxtLink>
            <NuxtLink 
              to="/aftercare" 
              class="text-gray-300 hover:text-white px-4 py-3 text-xl font-medium transition-colors"
              active-class="!text-blue-400"
            >
              Aftercare
            </NuxtLink>
            <NuxtLink 
              to="/gallery" 
              class="text-gray-300 hover:text-white px-4 py-3 text-xl font-medium transition-colors"
              active-class="!text-blue-400"
            >
              Gallery
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="text-gray-300 hover:text-white px-4 py-3 text-xl font-medium transition-colors"
              active-class="!text-blue-400"
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
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4"
        >
          <div 
            v-show="isMenuOpen" 
            class="sm:hidden fixed inset-0 top-20 bg-black/95 backdrop-blur-sm z-40 shadow-md"
          >
            <div class="pt-2 pb-3 space-y-1 px-2 bg-black">
              <NuxtLink 
                to="/" 
                class="block px-3 py-2 text-base font-medium text-gray-400 hover:text-blue-400 transition-colors"
                exact-active-class="!text-blue-400"
                @click="isMenuOpen = false"
              >
                Home
              </NuxtLink>
              <NuxtLink 
                to="/booking" 
                class="block px-3 py-2 text-base font-medium text-gray-400 hover:text-blue-400 transition-colors"
                active-class="!text-blue-400"
                @click="isMenuOpen = false"
              >
                Book Now
              </NuxtLink>
              <NuxtLink 
                to="/aftercare" 
                class="block px-3 py-2 text-base font-medium text-gray-400 hover:text-blue-400 transition-colors"
                active-class="!text-blue-400"
                @click="isMenuOpen = false"
              >
                Aftercare
              </NuxtLink>
              <NuxtLink 
                to="/gallery" 
                class="block px-3 py-2 text-base font-medium text-gray-400 hover:text-blue-400 transition-colors"
                active-class="!text-blue-400"
                @click="isMenuOpen = false"
              >
                Gallery
              </NuxtLink>
              <NuxtLink 
                to="/contact" 
                class="block px-3 py-2 text-base font-medium text-gray-400 hover:text-blue-400 transition-colors"
                active-class="!text-blue-400"
                @click="isMenuOpen = false"
              >
                Contact
              </NuxtLink>
            </div>
          </div>
        </Transition>
      </nav>
    </header>

    <!-- Spacer to prevent content from being hidden under fixed header -->
    <div class="h-20 sm:h-28"></div>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="mt-auto py-6 bg-black">
      <p class="text-center text-gray-400">
        Made with ❤️<a href="https://www.instagram.com/ink.c.tatts/" target="_blank" class="text-blue-400 hover:text-blue-300 transition-colors">@ink.c.tatts</a>
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)
</script>

<style scoped>
/* Any custom styles that can't be handled by Tailwind can go here */
</style>
