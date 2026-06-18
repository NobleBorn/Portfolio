<script setup lang="ts">
    import InputText from 'primevue/inputtext';
    import '@/assets/regexPage.css';
    import axios from 'axios';
    import { ref, computed } from 'vue';

    const pattern = ref('');
    const testText = ref('');
    const regexResponse = ref<RegexResponse>({ matchIndices: [], errorMessage: undefined })

    interface RegexResponse {
      matchIndices: number[][];
      errorMessage?: string
    }

    let timeout: number | undefined

    const container = ref<HTMLElement | null>(null)
    let isDragging = false

    function sendInput() {
      if (timeout) clearTimeout(timeout)

      // wait 300ms after last keystroke
      timeout = window.setTimeout(async () => {
        try {
          const response: { data: RegexResponse } = await axios.post('http://localhost:8080/api/regex/test', { pattern: pattern.value, testText: testText.value, flags: 'g' })
          console.log('Backend response:', response.data)
          regexResponse.value = response.data
        } catch (error) {
          console.error('Error sending data:', error)
        }
      }, 300)
    }

    // Start dragging
  function startDrag() {
    isDragging = true
    window.addEventListener('mousemove', onDrag)
    window.addEventListener('mouseup', stopDrag)
  }

  // Handle dragging
  function onDrag(e: MouseEvent) {
    if (!isDragging || !container.value) return
    const rect = container.value.getBoundingClientRect()
    let leftWidth = e.clientX - rect.left
    // set min/max width to prevent collapsing
    leftWidth = Math.max(150, Math.min(leftWidth, rect.width - 150))
    const rightWidth = rect.width - leftWidth
    container.value.style.gridTemplateColumns = `${leftWidth}px 6px ${rightWidth}px`
  }

  // Stop dragging
  function stopDrag() {
    isDragging = false
    window.removeEventListener('mousemove', onDrag)
    window.removeEventListener('mouseup', stopDrag)
  }

  const matchMessage = computed(() => {
    if (regexResponse.value.matchIndices.length === 0 && regexResponse.value.errorMessage === undefined) return 'Matches will appear here.'

    if (regexResponse.value.errorMessage) return `Error: ${regexResponse.value.errorMessage}`
 
    if (regexResponse.value.matchIndices.length === 0) return 'No matches found.'
    
    const testTextValue = testText.value // the text you sent to backend
    return regexResponse.value.matchIndices
      .map((pair: number[], index: number) => {
        const [start, end] = pair
        const matchedText = testTextValue.slice(start, end)
        return `Match ${index + 1}: ${start}-${end} -> ${matchedText}`
      })
      .join('\n')
  })
</script>

<template>
  <div ref="container" class="regex-container">

    <div class="left-panel">

      <div class="regex-input">
        <h3>Regular Expression</h3>
        <InputText v-model="pattern" @input="sendInput"  placeholder="Enter regex" />
      </div>

      <div class="test-string">
        <h3 style="color: white;">Test String</h3>
        <textarea v-model="testText"></textarea>
      </div>

    </div>

    <div class="divider" @mousedown="startDrag"></div>

    <div class="right-panel">

      <div class="panel">
        <h3>Explanation</h3>
        <p>Explanation of regex will appear here.</p>
      </div>

      <div class="panel">
        <h3>Match Information</h3>
        <p style="white-space: pre-wrap">{{ matchMessage }}</p>
      </div>

      <div class="panel">
        <h3>Examples</h3>
        <p>Helpful regex examples.</p>
      </div>

    </div>

  </div>
</template>

<style>
  @media (max-width: 900px) {
    .regex-container {
      grid-template-columns: 1fr; /* stack panels vertically */
    }

    .divider {
      display: none; /* hide the vertical divider on small screens */
    }
  }
</style>