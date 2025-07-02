<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useFirebase } from '@/composables/useFirebase'

const bookingForm = ref({
  name: '',
  email: '',
  phone: '',
  tattooType: '',
  size: '',
  placement: '',
  description: '',
  preferredDate: '',
  additionalInfo: ''
})

const formatPhoneNumber = (value: string) => {
  // Remove all non-digits
  const cleaned = value.replace(/\D/g, '')
  
  // Format the number
  if (cleaned.length === 0) return ''
  if (cleaned.length <= 3) return `(${cleaned}`
  if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`
  return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`
}

const handlePhoneInput = (e: Event) => {
  const input = e.target as HTMLInputElement
  const cursorPosition = input.selectionStart || 0
  
  // Only allow numbers
  const numbersOnly = input.value.replace(/\D/g, '')
  if (numbersOnly.length > 10) return // Limit to 10 digits
  
  const formatted = formatPhoneNumber(numbersOnly)
  bookingForm.value.phone = formatted

  // Restore cursor position
  nextTick(() => {
    let newPosition = cursorPosition
    
    // Adjust cursor based on where formatting characters were added
    if (numbersOnly.length <= 3) {
      // Inside or right after area code
      newPosition = cursorPosition + (cursorPosition === 1 ? 1 : 0)
    } else if (numbersOnly.length === 4) {
      // Just added first number after area code
      newPosition = 7
    } else if (numbersOnly.length <= 6) {
      // In the middle group of numbers
      newPosition = cursorPosition + (cursorPosition >= 4 ? 2 : 0)
    } else if (numbersOnly.length === 7) {
      // Just added first number after hyphen
      newPosition = 11
    } else {
      // In the last group of numbers
      newPosition = cursorPosition + (cursorPosition >= 9 ? 3 : 0)
    }
    
    input.setSelectionRange(newPosition, newPosition)
  })
}

const handlePhoneKeyDown = (e: KeyboardEvent) => {
  // Allow: backspace, delete, tab, escape, enter
  if ([46, 8, 9, 27, 13].includes(e.keyCode) ||
    // Allow: Ctrl+A, Command+A
    (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
    // Allow: home, end, left, right, down, up
    (e.keyCode >= 35 && e.keyCode <= 40)) {
    return
  }
  // Block any key that isn't a number
  if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
    e.preventDefault()
  }
}

const isValidPhone = (phone: string) => {
  return phone.replace(/\D/g, '').length === 10
}

const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)
const { submitForm } = useFirebase()

const handleSubmit = async () => {
  // Check for complete phone number
  if (!isValidPhone(bookingForm.value.phone)) {
    showError.value = true
    return
  }

  isSubmitting.value = true
  showError.value = false
  
  try {
    const result = await submitForm(bookingForm.value, 'bookings')
    
    if (result.success) {
      showSuccess.value = true
      bookingForm.value = {
        name: '',
        email: '',
        phone: '',
        tattooType: '',
        size: '',
        placement: '',
        description: '',
        preferredDate: '',
        additionalInfo: ''
      }
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
    <!-- Booking Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-100 mb-4">Book Your Session</h1>
      <p class="text-gray-300 max-w-2xl mx-auto">
        Ready to start your tattoo journey? Fill out the form below to request a booking. I'll get back to you within 48 hours to discuss your ideas and schedule your session.
      </p>
    </div>

    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Booking Information -->
      <div class="space-y-6">
        <!-- Process Section -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-semibold text-gray-100 mb-6">Booking Process</h2>
          <div class="space-y-4">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 class="text-gray-100 font-medium">Submit Request</h3>
                <p class="text-gray-300 text-sm">Fill out the booking form with your tattoo ideas and preferences.</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 class="text-gray-100 font-medium">Consultation</h3>
                <p class="text-gray-300 text-sm">We'll discuss your design, placement, and answer any questions you have.</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 class="text-gray-100 font-medium">Confirmation</h3>
                <p class="text-gray-300 text-sm">Once details are finalized, we'll schedule your appointment and collect a deposit.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Policies Section -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-semibold text-gray-100 mb-6">Booking Policies</h2>
          <div class="space-y-4 text-gray-300">
            <p>• A deposit is required to secure your booking</p>
            <p>• 48-hour cancellation notice required</p>
            <p>• Please arrive 15 minutes before your appointment</p>
            <p>• Bring a valid ID</p>
            <p>• Must be 18+ for any tattoo services</p>
          </div>
        </div>
      </div>

      <!-- Booking Form -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold text-gray-100 mb-6">Booking Request</h2>
        
        <div v-if="showSuccess" class="text-center">
          <div class="mb-6">
            <svg class="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-2xl font-semibold text-gray-100 mb-4">Booking Request Sent!</h3>
          <p class="text-gray-300 mb-6">Thank you for your booking request. I'll review your details and get back to you within 48 hours to discuss your tattoo and schedule your session.</p>
        </div>

        <form v-else @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-300">Full Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="bookingForm.name"
              required
              class="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 leading-none"
            >
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="bookingForm.email"
              required
              class="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 leading-none"
            >
          </div>

          <div>
            <label for="phone" class="block text-sm font-medium text-gray-300">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              :value="bookingForm.phone"
              @input="handlePhoneInput"
              @keydown="handlePhoneKeyDown"
              maxlength="14"
              placeholder="(555) 555-5555"
              required
              pattern="\(\d{3}\)\s\d{3}-\d{4}"
              title="Please enter a complete phone number: (XXX) XXX-XXXX"
              class="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 leading-none"
            >
            <p v-if="bookingForm.phone && !isValidPhone(bookingForm.phone)" class="mt-1 text-sm text-red-500">
              Please enter a complete 10-digit phone number
            </p>
          </div>

          <div>
            <label for="tattooType" class="block text-sm font-medium text-gray-300">Type of Tattoo</label>
            <input 
              type="text" 
              id="tattooType" 
              v-model="bookingForm.tattooType"
              required
              placeholder="e.g., Traditional, Realistic, Custom Design"
              class="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 leading-none"
            >
          </div>

          <div>
            <label for="size" class="block text-sm font-medium text-gray-300">Approximate Size</label>
            <input 
              type="text" 
              id="size" 
              v-model="bookingForm.size"
              required
              placeholder="e.g., 3x3 inches, palm size"
              class="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 leading-none"
            >
          </div>

          <div>
            <label for="placement" class="block text-sm font-medium text-gray-300">Placement</label>
            <input 
              type="text" 
              id="placement" 
              v-model="bookingForm.placement"
              required
              placeholder="e.g., Forearm, Back, Ankle"
              class="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 leading-none"
            >
          </div>

          <div>
            <label for="description" class="block text-sm font-medium text-gray-300">Design Description</label>
            <textarea 
              id="description" 
              v-model="bookingForm.description"
              rows="4"
              required
              placeholder="Please describe your tattoo idea in detail"
              class="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 leading-normal"
            ></textarea>
          </div>

          <div>
            <label for="preferredDate" class="block text-sm font-medium text-gray-300">Preferred Date</label>
            <input 
              type="date" 
              id="preferredDate" 
              v-model="bookingForm.preferredDate"
              required
              :min="'2025-07-14'"
              class="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 [color-scheme:dark] [&:not(:placeholder-shown)]:text-gray-100 px-3 leading-none"
            >
          </div>

          <div>
            <label for="additionalInfo" class="block text-sm font-medium text-gray-300">Additional Information</label>
            <textarea 
              id="additionalInfo" 
              v-model="bookingForm.additionalInfo"
              rows="3"
              placeholder="Any additional details or questions?"
              class="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 leading-normal"
            ></textarea>
          </div>

          <button 
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors disabled:opacity-50"
          >
            <span v-if="isSubmitting">Submitting...</span>
            <span v-else>Submit Booking Request</span>
          </button>

          <!-- Privacy Notice -->
          <div class="mt-4 text-sm text-gray-400 bg-gray-900 p-4 rounded-md">
            <h4 class="font-medium text-gray-300 mb-2">Privacy Notice</h4>
            <p class="mb-2">
              Your privacy matters. The information you provide (name, email, phone) will only be used to:
            </p>
            <ul class="list-disc list-inside space-y-1 mb-2">
              <li>Contact you about your tattoo request</li>
              <li>Schedule and manage your appointment</li>
              <li>Send important information about your booking</li>
            </ul>
            <p>
              Your data is securely stored and never sold or shared with third parties. By submitting this form, you consent to being contacted about your tattoo request.
            </p>
          </div>

          <!-- Error Message -->
          <div 
            v-if="showError"
            class="mt-4 p-4 bg-red-800 text-red-100 rounded-md"
          >
            There was an error submitting your request. Please try again or contact us directly.
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any custom styles here */
input, select {
  line-height: 1 !important;
  height: 2.25rem;
}

textarea {
  line-height: 1.2;
}
</style>