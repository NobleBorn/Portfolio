<script setup lang="ts">
import { ref } from 'vue'
import BottomBar from '@/components/bottom-bar.vue'
import { useCurrentDateTime } from '@/composables/useCurrentDateTime'
import '@/assets/contact.css'

const { currentDateTime } = useCurrentDateTime()

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const isSending = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

async function sendMessage() {
  successMessage.value = ''
  errorMessage.value = ''

  if (!name.value || !email.value || !subject.value || !message.value) {
    errorMessage.value = 'Please fill in all fields.'
    return
  }

  isSending.value = true

  try {
    const response = await fetch('http://localhost:8080/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to send message')
    }

    successMessage.value = 'Message sent successfully.'
    name.value = ''
    email.value = ''
    subject.value = ''
    message.value = ''
  } catch {
    errorMessage.value = 'Something went wrong. Please try again.'
  } finally {
    isSending.value = false
  }
}
</script>

<template>
  <main class="contact-page">
    <section class="contact-scene">
      <header class="contact-header">
        <h1>CONTACT</h1>
        <span class="contact-sparkle">✦</span>
      </header>

      <section class="contact-layout">
        <div class="contact-info">
          <p class="contact-eyebrow">NobleBorn</p>

          <h2>Let’s build something together.</h2>

          <p>
            Fill in your details and send me a message about projects,
            collaboration, opportunities, or anything software related.
          </p>

        </div>

        <form class="contact-form" @submit.prevent="sendMessage">
          <div class="form-row">
            <label for="name">Name</label>
            <input
              id="name"
              v-model="name"
              type="text"
              placeholder="Your name"
            />
          </div>

          <div class="form-row">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="your.email@example.com"
            />
          </div>

          <div class="form-row">
            <label for="subject">Subject</label>
            <input
              id="subject"
              v-model="subject"
              type="text"
              placeholder="What is this about?"
            />
          </div>

          <div class="form-row">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="message"
              rows="6"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <p v-if="successMessage" class="form-success">
            {{ successMessage }}
          </p>

          <p v-if="errorMessage" class="form-error">
            {{ errorMessage }}
          </p>

          <button type="submit" class="contact-button" :disabled="isSending">
            <span>{{ isSending ? 'Sending...' : 'Send message' }}</span>
            <font-awesome-icon :icon="['fas', 'paper-plane']" />
          </button>
        </form>
      </section>
    </section>

    <section class="contact-bottom-bar">
      <BottomBar :current-date-time="currentDateTime" />
    </section>
  </main>
</template>