<script setup lang="ts">
import { ref, onMounted } from 'vue'
import songUrl from '@/assets/audio/song.mp3'

const audioRef = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)
const progress = ref(0)

function togglePlay() {
  const audio = audioRef.value
  if (!audio) return

  if (audio.paused) {
    audio.play()
    isPlaying.value = true
  } else {
    audio.pause()
    isPlaying.value = false
  }
}

function updateProgress() {
  const audio = audioRef.value
  if (!audio || !audio.duration) return

  progress.value = (audio.currentTime / audio.duration) * 100
}

onMounted(() => {
  const audio = audioRef.value
  if (!audio) return

  audio.addEventListener('timeupdate', updateProgress)

  audio.addEventListener('ended', () => {
    isPlaying.value = false
    progress.value = 0
  })
})
</script>

<template>
    <div class="social-card">
        <div class="panel-header">
            <h2>SOCIALS</h2>
            <font-awesome-icon :icon="['fas', 'share-nodes']" />
        </div>

        <div class="social-list">
            <a href="https://github.com/NobleBorn" target="_blank" class="social-item">
                <div class="social-icon">
                    <font-awesome-icon :icon="['fab', 'github']" />
                </div>

                <div class="social-text">
                    <strong>GitHub</strong>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/mojtaba-alizade-6b0a8b294/" target="_blank" class="social-item">
                <div class="social-icon">
                    <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                </div>

                <div class="social-text">
                    <strong>LinkedIn</strong>
                </div>
            </a>

        </div>
    </div>

        <!-- MUSIC CARD -->
    <div class="music-card">
        <audio ref="audioRef" :src="songUrl"></audio>

        <div class="music-cover">
            <font-awesome-icon :icon="['fas', 'music']" />
        </div>

        <div class="music-info">
            <span class="music-label">NOW PLAYING</span>
            <strong>Night Drive</strong>
            <p>Portfolio Radio</p>
        </div>

        <div class="music-progress">
            <span :style="{ width: `${progress}%` }"></span>
        </div>

        <div class="music-controls">
            <button type="button">
            <font-awesome-icon :icon="['fas', 'backward-step']" />
            </button>

            <button type="button" class="music-play" @click="togglePlay">
            <font-awesome-icon :icon="['fas', isPlaying ? 'pause' : 'play']" />
            </button>

            <button type="button">
            <font-awesome-icon :icon="['fas', 'forward-step']" />
            </button>
        </div>
    </div>
</template>