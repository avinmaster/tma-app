<template>
  <div>
    <h1>Timers</h1>
    <p v-if="timers && timers.length === 0">
      There are no timers
    </p>
    <ul>
      <li v-for="(timer, i) in timers" :key="i">
        <a href="">{{ timer }}</a>
      </li>
    </ul>
    <form
      @submit.prevent="post"
      @keydown="newTimer.onKeydown($event)"
    >
      <alert-success :form="newTimer" :message="'New timer created'" />

      <!-- New Timer -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">New Timer</label>
        <div class="col-md-7">
          <input v-model="newTimer.time" :class="{ 'is-invalid': newTimer.errors.has('time') }" type="time" name="time" class="form-control">
          <has-error :form="newTimer" field="time" />
        </div>
      </div>

      <!-- Submit Button -->
      <div class="form-group row">
        <div class="col-md-9 ml-md-auto">
          <v-button :loading="newTimer.busy" type="success">
            Create
          </v-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import Form from 'vform'

export default {
  data: () => ({
    timers: null,
    newTimer: new Form({
      time: ''
    })
  }),

  head () {
    return { title: 'Timers' }
  },

  async created () {
    try {
      const { data } = await axios.get('/timers')
      this.timers = data
      // console.log(this.timers)
    } catch (e) {
      // console.log(e)
    }
  },

  methods: {
    createNew () {
      this.form.post('/timers').then(() => {
        this.form.reset()
      })
    }
  }
}
</script>
