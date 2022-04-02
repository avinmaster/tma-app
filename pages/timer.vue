<template>
  <div>
    <h1>{{ showNow }} - {{ generalDuration }}</h1>
    <button :disabled="paused" @click="pause()">
      Pause
    </button>
    <button :disabled="!paused" @click="resume()">
      Resume
    </button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      generalDuration: 0,
      duration: 0,
      startedAt: 0,
      paused: false,
      now: 0
    }
  },
  computed: {
    showNow () {
      return this.now - this.startedAt
    }
  },

  async created () {
    try {
      const { data } = await axios.get('/time')
      console.log(data)
    } catch (e) {
      console.log(e)
    }

    setInterval(() => {
      if (!this.paused) {
        this.now += 1
      }
    }, 1000)
  },

  methods: {
    pause () {
      this.paused = true
    },

    resume () {
      this.paused = false
    }
  }
}
</script>

<style>

</style>
