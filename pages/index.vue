<template>
  <div class="hero">
    <!-- Optional: Overlay to ensure text readability -->
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    
    <div class="content-container">
      <!-- Main Content -->
      <div class="space-y-6">
        <h1 class="text-5xl md:text-6xl font-bold text-white leading-tight">
          Ink That Tells <span class="text-white">Your Story</span>
        </h1>
        <h2 class="text-xl md:text-2xl text-gray-200 font-light">
          Creating art that captures who you are, one tattoo at a time.
        </h2>
        <p class="text-gray-300 text-lg max-w-2xl">
          Welcome to Ink-C-Tatts, where your story becomes our canvas. Specializing in custom designs and styles tailored to each client, we're dedicated to turning your vision into a piece of art that stays with you.
        </p>
        
        <!-- Call to Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 pt-4">
          <NuxtLink 
            to="/booking" 
            class="primary-button"
          >
            Book Now
            <svg 
              class="w-5 h-5 ml-2 inline-block" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
          <NuxtLink 
            to="/gallery" 
            class="secondary-button"
          >
            View Gallery
            <svg 
              class="w-5 h-5 ml-2 inline-block" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Optional: Quick Stats or Highlights -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 text-center">
          <div class="bg-black bg-opacity-50 p-4 rounded-lg">
            <div class="text-white text-2xl font-bold">5+</div>
            <div class="text-gray-300 text-sm">Years Experience</div>
          </div>
          <div class="bg-black bg-opacity-50 p-4 rounded-lg">
            <div class="text-white text-2xl font-bold">500+</div>
            <div class="text-gray-300 text-sm">Happy Clients</div>
          </div>
          <div class="hidden sm:block bg-black bg-opacity-50 p-4 rounded-lg">
            <div class="text-white text-2xl font-bold">100%</div>
            <div class="text-gray-300 text-sm">Custom Designs</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Optional: Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg 
        class="w-6 h-6 text-white opacity-75" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </div>

  <!-- Bio Section -->
  <section class="container mx-auto px-4 py-16">
    <div class="flex flex-col md:flex-row gap-8">
      <div class="md:w-1/3">
        <img 
          src="" 
          alt="Tattoo Artist" 
          class="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>
      <div class="md:w-2/3">
        <h2 class="text-3xl font-bold mb-6 text-gray-100">Meet Your Artist</h2>
        <div class="prose prose-invert">
          <p class="text-gray-300 mb-4">
            Art has always been my way of expressing what words couldn't. Growing up, it wasn't seen as a 'career,' so I pushed it aside—but I never stopped drawing. At my lowest points, I'd retreat to my safe space, cry, and let my emotions flow onto the page. Over time, doodling became a quiet joy in the chaos. I remember selling my first piece for $30 as a kid—just a small step, but it sparked something in me. As I grew, I explored more, painting with acrylics and even using my fingers to bring color and life to owls. Each creation reminded me that beauty could come from pain, and art would always be a part of me.
          </p>
          <p class="text-gray-300">
            Tattooing became the ultimate form of this connection—a way to collaborate, to turn emotions into something tangible, and to lose track of time in the process. Today, I bring that same passion and authenticity to every tattoo. My space is open, judgment-free, and full of good energy, where we can create something meaningful together. Let's tell your story through art.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Specialties Section -->
  <section class="bg-gray-800 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-gray-100 mb-12">My Specialties</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
          <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-100 text-center mb-2">Custom Designs</h3>
          <p class="text-gray-300 text-center">Unique, personalized artwork tailored to your vision and story.</p>
        </div>

        <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
          <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-100 text-center mb-2">Fine Line Work</h3>
          <p class="text-gray-300 text-center">Delicate, precise lines and intricate details that stand the test of time.</p>
        </div>

        <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
          <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-100 text-center mb-2">Black & Grey</h3>
          <p class="text-gray-300 text-center">Stunning monochromatic pieces with depth and dimension.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Work Preview -->
  <section class="container mx-auto px-4 py-16">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-100 mb-4">Featured Work</h2>
      <p class="text-gray-300 max-w-2xl mx-auto">
        A glimpse of my recent tattoo creations. Each piece tells a unique story.
      </p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Replace src with actual images -->
      <div class="relative group overflow-hidden rounded-lg">
        <img src="/hero.jpg" alt="Featured Tattoo 1" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110">
        <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">

          <NuxtLink to="/gallery" class="text-white hover:text-blue-400 transition-colors">View Gallery</NuxtLink>
        </div>
      </div>
      <div class="relative group overflow-hidden rounded-lg">
        <img src="/hero.jpg" alt="Featured Tattoo 2" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110">

        <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <NuxtLink to="/gallery" class="text-white hover:text-blue-400 transition-colors">View Gallery</NuxtLink>
        </div>
      </div>
      <div class="relative group overflow-hidden rounded-lg">
        <img src="/hero.jpg" alt="Featured Tattoo 3" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110">

        <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <NuxtLink to="/gallery" class="text-white hover:text-blue-400 transition-colors">View Gallery</NuxtLink>
        </div>
      </div>
    </div>
    <div class="text-center mt-8">
      <NuxtLink to="/gallery" class="inline-block bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors">
        View Full Gallery
      </NuxtLink>
    </div>
  </section>

  <!-- Client Reviews -->
  <section class="bg-gray-800 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-gray-100 mb-12">Client Stories</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
          <div class="flex items-center mb-4">
            <div class="text-yellow-400">
              ★★★★★
            </div>
          </div>
          <p class="text-gray-300 mb-4">"Amazing experience from start to finish. The attention to detail and care for my vision was incredible. I couldn't be happier with my tattoo!"</p>
          <p class="text-gray-400 font-medium">- Sarah M.</p>
        </div>

        <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
          <div class="flex items-center mb-4">
            <div class="text-yellow-400">
              ★★★★★
            </div>
          </div>
          <p class="text-gray-300 mb-4">"Such a comfortable and professional environment. The artist took the time to understand exactly what I wanted and delivered beyond my expectations."</p>
          <p class="text-gray-400 font-medium">- Mike R.</p>
        </div>

        <div class="bg-gray-900 p-6 rounded-lg shadow-lg">
          <div class="flex items-center mb-4">
            <div class="text-yellow-400">
              ★★★★★
            </div>
          </div>
          <p class="text-gray-300 mb-4">"The level of artistry and creativity is outstanding. My custom design came out perfect, and the whole experience was great!"</p>
          <p class="text-gray-400 font-medium">- Emily K.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="container mx-auto px-4 py-16 text-center">
    <h2 class="text-3xl font-bold text-gray-100 mb-4">Ready to Start Your Journey?</h2>
    <p class="text-gray-300 max-w-2xl mx-auto mb-8">
      Let's create something meaningful together. Book your consultation today and bring your vision to life.
    </p>
    <div class="flex justify-center space-x-4">
      <NuxtLink to="/booking" class="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors">
        Book Now
      </NuxtLink>
      <NuxtLink to="/gallery" class="bg-gray-700 text-white py-2 px-6 rounded-md hover:bg-gray-600 transition-colors">
        View Gallery
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background-image: url('/hero.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 1;
}

.primary-button {
  @apply bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center w-full sm:w-auto;
}

.secondary-button {
  @apply bg-gray-800 text-white py-3 px-6 rounded-md hover:bg-gray-700 transition-colors flex items-center justify-center w-full sm:w-auto border border-gray-600;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>