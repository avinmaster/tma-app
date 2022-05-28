<template>
  <div class="custom-card" :style="{ backgroundColor: color, boxShadow: `0 7px 20px ${color}02` }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    color: {
      type: String,
      default: '#ffffff'
    }
  }
}
</script>

<style scoped>
.custom-card {
  border-radius: 20px;
  padding: 25px;
}
</style>
