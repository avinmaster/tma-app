<template>
  <div class="layout">
    <sidebar />

    <main class="content">
      <navbar />
      <nuxt />
    </main>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Sidebar from '~/components/Sidebar'

export default {
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  min-height: 100vh;
}

.content {
  width: 100%;
}
</style>
