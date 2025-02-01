<script setup lang="ts">
// Array of gallery images
// Each image object contains url, title, and description
const galleryImages = ref([
  // Example structure (commented out for now)
  // {
  //   url: '/hero.jpg',
  //   title: 'Custom Owl Design',
  //   description: 'Black and grey realism'
  // }
])

// State for modal/lightbox
const selectedImage = ref(null)
const isModalOpen = ref(false)

// Functions to handle modal
const openModal = (image: any) => {
  selectedImage.value = image
  isModalOpen.value = true
}

const closeModal = () => {
  selectedImage.value = null
  isModalOpen.value = false
}
</script>

<template>
  <div class="min-h-screen p-4 sm:p-6 lg:p-8">
    <!-- Gallery Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-100 mb-4">Gallery</h1>
      <p class="text-gray-300 max-w-2xl mx-auto">
        Explore my portfolio of custom tattoo designs. Each piece tells a unique story and represents a collaborative journey with my clients.
      </p>
    </div>

    <!-- Gallery Grid -->
    <div v-if="galleryImages.length > 0" 
         class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="(image, index) in galleryImages" 
           :key="index"
           class="group relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
           @click="openModal(image)">
        <img :src="image.url" 
             :alt="image.title"
             class="w-full h-full object-cover"
             loading="lazy" />
        <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div class="p-4 w-full">
            <h3 class="text-white font-semibold">{{ image.title }}</h3>
            <p class="text-gray-200 text-sm">{{ image.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-20">
      <div class="text-gray-400 mb-4">
        <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p class="text-xl">Gallery Coming Soon</p>
        <p class="mt-2">Check back later for amazing tattoo designs!</p>
      </div>
    </div>

    <!-- Modal/Lightbox -->
    <div v-if="isModalOpen" 
         class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
         @click="closeModal">
      <div class="relative max-w-4xl w-full" @click.stop>
        <button 
          @click="closeModal"
          class="absolute -top-12 right-0 text-white hover:text-gray-300 focus:outline-none"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img 
          v-if="selectedImage"
          :src="selectedImage.url" 
          :alt="selectedImage.title"
          class="w-full h-auto rounded-lg shadow-2xl"
        />
        <div class="mt-4 text-white">
          <h3 class="text-xl font-semibold">{{ selectedImage?.title }}</h3>
          <p class="text-gray-300">{{ selectedImage?.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any custom styles here */
.grid {
  /* Optional: Add masonry-like behavior with CSS columns for smaller screens */
  @media (max-width: 640px) {
    column-count: 1;
    column-gap: 1rem;
  }
}
</style> 