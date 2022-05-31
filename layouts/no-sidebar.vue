<template>
  <div class="layout">
    <navbar />

    <main class="container content">
      <nuxt />
    </main>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
.layout {
  min-height: 100vh;
}

.content {
  width: 100%;
}
</style>
