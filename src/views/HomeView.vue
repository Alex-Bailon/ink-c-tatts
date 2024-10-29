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
  <main>
    <h1>Tattoo Aftercare Guide</h1>
    <ul>
      <li v-for="instruction in careInstructions" :key="instruction">
        {{ instruction }}
      </li>
    </ul>
    <p><b>Important:</b> Seek professional attention if you notice any signs of infection, such as redness, swelling, unusual warmth, or discharge.</p>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}
li {
  margin-bottom: 1rem;
}
p {
  margin-top: 2rem;
  text-align: center;
}
</style>