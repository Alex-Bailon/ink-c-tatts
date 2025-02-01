<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)
const { submitForm } = useFirebase()

const handleSubmit = async () => {
  isSubmitting.value = true
  showError.value = false
  
  try {
    const result = await submitForm(form.value, 'contacts')
    
    if (result.success) {
      showSuccess.value = true
      // Reset form after success
      setTimeout(() => {
        form.value = {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
        showSuccess.value = false
      }, 3000)
    } else {
      showError.value = true
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    showError.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="min-h-screen p-4 sm:p-6 lg:p-8">
    <!-- Contact Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-100 mb-4">Contact Me</h1>
      <p class="text-gray-300 max-w-2xl mx-auto">
        Have questions or ready to start your tattoo journey? Get in touch and let's create something amazing together.
      </p>
    </div>

    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Contact Information -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold text-gray-100 mb-6">Get in Touch</h2>
        
        <div class="space-y-6">
          <div class="flex items-center space-x-4">
            <div class="text-blue-400 flex-shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-gray-100 font-medium">Location</h3>
              <p class="text-gray-300 mt-1">Schaumburg, IL</p>
            </div>
          </div>

          <!-- Email -->
          <div class="flex items-center space-x-4">
            <div class="text-blue-400 flex-shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 class="text-gray-100 font-medium">Email</h3>
              <a 
                href="mailto:citlalli.tattoo@gmail.com" 
                class="text-gray-300 mt-1 hover:text-blue-400 transition-colors inline-block"
              >
                ink.c.tatts@gmail.com
              </a>
            </div>
          </div>

          <!-- Social -->
          <div class="flex items-center space-x-4">
            <div class="text-blue-400 flex-shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" stroke-width="2" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <div>
              <h3 class="text-gray-100 font-medium">Social</h3>
              <a 
                href="https://www.instagram.com/citlalli.tattoo" 
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-300 mt-1 hover:text-blue-400 transition-colors inline-block"
              >
                @ink.c.tatts
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold text-gray-100 mb-6">Send a Message</h2>
        
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-300">Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name"
              required
              class="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email"
              required
              class="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
          </div>

          <div>
            <label for="subject" class="block text-sm font-medium text-gray-300">Subject</label>
            <input 
              type="text" 
              id="subject" 
              v-model="form.subject"
              required
              class="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-300">Message</label>
            <textarea 
              id="message" 
              v-model="form.message"
              rows="4"
              required
              class="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>

          <button 
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors disabled:opacity-50"
          >
            <span v-if="isSubmitting">Sending...</span>
            <span v-else>Send Message</span>
          </button>

          <!-- Success Message -->
          <div 
            v-if="showSuccess"
            class="mt-4 p-4 bg-green-800 text-green-100 rounded-md"
          >
            Message sent successfully! We'll get back to you soon.
          </div>

          <!-- Error Message -->
          <div 
            v-if="showError"
            class="mt-4 p-4 bg-red-800 text-red-100 rounded-md"
          >
            There was an error sending your message. Please try again or contact us directly.
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any custom styles here */
</style> 