<script setup lang="ts">
import { onMounted, ref } from 'vue'
import '@/assets/top-bar.css'

defineProps<{
  currentDateTime: string
}>()

interface BatteryManager extends EventTarget {
  charging: boolean
  level: number
  chargingTime: number
  dischargingTime: number

  addEventListener(
    type: 'levelchange' | 'chargingchange' | 'chargingtimechange' | 'dischargingtimechange',
    listener: () => void
  ): void
}

const batteryLevel = ref(70)
const batteryClass = ref('battery-high')
 
function updateBatteryInfo(battery: BatteryManager) {
  const level = Math.round(battery.level * 100)

  batteryLevel.value = level

  if (level <= 20) {
    batteryClass.value = 'battery-low'
  } else if (level <= 50) {
    batteryClass.value = 'battery-medium'
  } else {
    batteryClass.value = 'battery-high'
  }
}

onMounted(async () => {
  const nav = navigator as Navigator & {
    getBattery?: () => Promise<BatteryManager>
  }

  if (!nav.getBattery) {
    return
  }

  const battery = await nav.getBattery()

  updateBatteryInfo(battery)

  battery.addEventListener('levelchange', () => {
    updateBatteryInfo(battery)
  })
})

</script>

<template>
  <div class="topbar-wrapper">
    <div class="glass-container topbar-glass">
      <div class="glass-filter"></div>
      <div class="glass-overlay"></div>
      <div class="glass-specular"></div>

      <div class="glass-content topbar-content">
        <!-- LEFT: OS / BRAND -->
        <div class="topbar-left">
          <span class="os-dot"></span>
          <span class="os-title">NobleBorn</span>
        </div>

         <div></div>

        <!-- RIGHT: OS STATUS AREA -->
        <div class="topbar-right">

          <font-awesome-icon :icon="['fas', 'wifi']" />

          <font-awesome-icon :icon="['fas', 'volume-high']" />

          <div class="battery">
            <div
              class="battery-level"
              :class="batteryClass"
              :style="{ width: `${batteryLevel}%` }"
            ></div>
          </div>

          <span class="topbar-time">{{ currentDateTime }}</span>
        </div>
      </div>
    </div>

    <svg style="display: none">
      <filter id="lg-dist" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.008 0.008"
          numOctaves="2"
          seed="92"
          result="noise"
        />
        <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
        <feDisplacementMap
          in="SourceGraphic"
          in2="blurred"
          scale="70"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  </div>
</template>