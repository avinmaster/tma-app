<template>
  <span class="color-item" :class="type" :style="{'background-color': color}" />
</template>

<script>
export default {
  name: 'ColorItem',
  props: {
    type: {
      type: String,
      default: 'circle'
    },
    color: {
      type: String,
      default: '#fff'
    }
  }
}
</script>

<style scoped>
.color-item {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  border: 1px solid #cfd2e2;
}
</style>
