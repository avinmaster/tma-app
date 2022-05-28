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
  display: flex;
  min-height: 100vh;
  padding-top: 55px;
}

.content {
  width: 100%;
}
</style>
