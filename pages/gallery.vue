<script setup lang="ts">
import { categories, galleryImages } from '@/data/gallery'
import type { GalleryImage } from '@/data/gallery'

const selectedCategory = ref('All')

// Filtered images based on selected category
const filteredImages = computed(() => {
  if (selectedCategory.value === 'All') return galleryImages
  return galleryImages.filter((image: GalleryImage) => image.category === selectedCategory.value)
})

// State for modal/lightbox
const selectedImage = ref<GalleryImage | null>(null)
const isModalOpen = ref(false)

// Functions to handle modal
const openModal = (image: GalleryImage) => {
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
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold text-gray-100 mb-4">Gallery</h1>
      <p class="text-gray-300 max-w-2xl mx-auto">
        Explore my portfolio of custom tattoo designs. Each piece tells a unique story and represents a collaborative journey with my clients.
      </p>
    </div>

    <!-- Category Filters -->
    <div class="mb-8">
      <div class="flex flex-wrap gap-2 justify-center">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-4 py-2 rounded-md text-sm font-medium transition-colors',
            selectedCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          ]"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <!-- Gallery Grid -->
    <div v-if="filteredImages.length > 0" 
         class="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
      <div v-for="(image, index) in filteredImages" 
           :key="index"
           class="group relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02] aspect-square"
           @click="openModal(image)">
        <img :src="image.url" 
             :alt="image.title"
             class="w-full h-full object-cover"
             loading="lazy"
             decoding="async"
             fetchpriority="low" />
        <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div class="p-3 w-full">
            <h3 class="text-white font-semibold text-sm sm:text-base">{{ image.title }}</h3>
            <p class="text-gray-200 text-xs sm:text-sm">{{ image.description }}</p>
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
        <p class="text-xl">No images found</p>
        <p class="mt-2">Try selecting a different category.</p>
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
        
        <div class="relative">
          <img 
            v-if="selectedImage"
            :src="selectedImage.url" 
            :alt="selectedImage.title"
            class="w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
          />
          
          <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 backdrop-blur-sm p-4 rounded-b-lg text-center">
            <h3 class="text-xl font-semibold text-white">{{ selectedImage?.title }}</h3>
            <p class="text-gray-300">{{ selectedImage?.description }}</p>
          </div>
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