<template>
  <div>
    <h1>Home</h1>
    <router-link to="/timers">
      Timers
    </router-link>
    <card>
      HEHE
    </card>
  </div>
</template>

<script>
export default {
  middleware: 'auth',

  head () {
    return { title: this.$t('home') }
  }
}
</script>
