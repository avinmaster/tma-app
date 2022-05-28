<template>
  <div class="layout">
    <navbar />
    <sidebar />

    <main class="content">
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
  padding-top: 55px;
}

.content {
  width: 100%;
}
</style>
