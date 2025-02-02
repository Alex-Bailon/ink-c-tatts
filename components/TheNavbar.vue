<script setup lang="ts">
const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <div>
    <nav class="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/" class="text-white font-bold text-xl" @click="closeMenu">
              Ink.C.Tatts
            </NuxtLink>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden sm:flex sm:items-center sm:space-x-4">
            <NuxtLink
              v-for="(link, index) in ['Home', 'Gallery', 'Booking', 'Contact']"
              :key="index"
              :to="link === 'Home' ? '/' : `/${link.toLowerCase()}`"
              class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              {{ link }}
            </NuxtLink>
          </div>

          <!-- Mobile menu button -->
          <div class="sm:hidden flex items-center">
            <button
              @click="toggleMenu"
              class="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  v-if="!isOpen"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  v-else
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isOpen"
        class="sm:hidden fixed inset-0 top-16 bg-gray-900 bg-opacity-95 backdrop-blur-sm"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink
            v-for="(link, index) in ['Home', 'Gallery', 'Booking', 'Contact']"
            :key="index"
            :to="link === 'Home' ? '/' : `/${link.toLowerCase()}`"
            class="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
            @click="closeMenu"
          >
            {{ link }}
          </NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Spacer to prevent content from being hidden under fixed navbar -->
    <div class="h-16"></div>
  </div>
</template> 