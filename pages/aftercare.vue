<script setup lang="ts">
import { ref } from 'vue'
const careInstructions = ref<string[]>([
  'Remove Bandage (1-3 Hours): Carefully remove the bandage. Only re-cover if your artist advises.',
  'Gentle Cleaning (Days 1-3): Wash hands before touching the tattoo. Clean it gently once or twice a day with lukewarm water and a fragrance-free, antibacterial soap. Use hands, not a washcloth, and pat dry with a clean paper towel.',
  'Apply Ointment (Days 1-3): After each wash, apply a thin layer of tattoo-specific ointment as recommended by your artist to keep the tattoo moisturized.',
  'Switch to Moisturizer (After Day 3): Once initial healing begins, apply an unscented, light moisturizer daily to prevent dryness. Avoid heavy creams or petroleum jelly, as these can trap moisture and irritate the skin.',
  'Protect from Sun & Water (First 2-3 Weeks): Avoid direct sunlight and soaking the tattoo in water (no swimming, hot tubs, or baths). Continue to protect it from UV exposure even after healing to prevent fading.',
  'Avoid Picking and Scratching: Itching and peeling are normal. Refrain from scratching or picking at scabs, as this can damage the tattoo.'
]);
</script>

<template>
  <div class="min-h-screen p-4 sm:p-6 lg:p-8">
    <!-- Aftercare Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-100 mb-4">Tattoo Aftercare</h1>
      <p class="text-gray-300 max-w-2xl mx-auto">
        Proper aftercare is crucial for your tattoo's healing and final appearance. Follow these instructions carefully to ensure the best results.
      </p>
    </div>

    <div class="max-w-6xl mx-auto space-y-8">
      <!-- First 24 Hours -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div class="flex items-center space-x-4 mb-6">
          <div class="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 class="text-2xl font-semibold text-gray-100">First 24 Hours</h2>
        </div>
        <div class="space-y-4 text-gray-300">
          <p>• Leave the bandage on for 2-4 hours after getting your tattoo</p>
          <p>• Gently wash the tattoo with lukewarm water and unscented antibacterial soap</p>
          <p>• Pat dry with a clean paper towel - do not rub</p>
          <p>• Apply a thin layer of recommended aftercare ointment</p>
          <p>• Do not re-bandage the tattoo</p>
        </div>
      </div>

      <!-- First Week -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div class="flex items-center space-x-4 mb-6">
          <div class="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 class="text-2xl font-semibold text-gray-100">First Week</h2>
        </div>
        <div class="space-y-4 text-gray-300">
          <p>• Wash your tattoo 2-3 times daily with lukewarm water and unscented soap</p>
          <p>• Apply a thin layer of aftercare product after each wash</p>
          <p>• Do not soak the tattoo (no baths, swimming, etc.)</p>
          <p>• Wear loose-fitting, clean clothing over the tattoo</p>
          <p>• Avoid direct sunlight</p>
        </div>
      </div>

      <!-- Long Term Care -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div class="flex items-center space-x-4 mb-6">
          <div class="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 class="text-2xl font-semibold text-gray-100">Long Term Care</h2>
        </div>
        <div class="space-y-4 text-gray-300">
          <p>• Keep the tattoo moisturized with unscented lotion</p>
          <p>• Always protect your tattoo from sun exposure with SPF 50+ sunscreen</p>
          <p>• Avoid tanning beds and prolonged sun exposure</p>
          <p>• Maintain good skin health through proper hydration and care</p>
        </div>
      </div>

      <!-- Important Notes -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div class="flex items-center space-x-4 mb-6">
          <div class="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 class="text-2xl font-semibold text-gray-100">Important Notes</h2>
        </div>
        <div class="space-y-4">
          <div class="bg-red-900/50 p-4 rounded-lg">
            <h3 class="text-red-200 font-medium mb-2">DO NOT:</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-300">
              <li>Pick or scratch at scabs</li>
              <li>Expose tattoo to direct sunlight while healing</li>
              <li>Swim, soak in hot tubs, or take long baths</li>
              <li>Apply harsh chemicals or fragranced products</li>
              <li>Wear tight or abrasive clothing over the tattoo</li>
            </ul>
          </div>
          
          <div class="bg-green-900/50 p-4 rounded-lg">
            <h3 class="text-green-200 font-medium mb-2">Signs of Normal Healing:</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-300">
              <li>Mild redness and swelling in the first few days</li>
              <li>Light scabbing</li>
              <li>Mild itching</li>
              <li>Slight tenderness</li>
            </ul>
          </div>

          <div class="bg-yellow-900/50 p-4 rounded-lg">
            <h3 class="text-yellow-200 font-medium mb-2">Seek Medical Attention If:</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-300">
              <li>Severe redness, swelling, or warmth</li>
              <li>Pus or excessive discharge</li>
              <li>Fever or chills</li>
              <li>Severe pain or discomfort</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <p class="text-gray-300 mb-4">
          If you have any concerns about your healing tattoo, please don't hesitate to reach out.
        </p>
        <NuxtLink 
          to="/contact" 
          class="inline-block bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
        >
          Contact Me
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any custom styles here */
</style>