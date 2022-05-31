<template>
  <div class="custom-card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style scoped>
.custom-card {
  border-radius: 20px;
  padding: 25px;
  background: var(--bg-panel);
}
</style>
