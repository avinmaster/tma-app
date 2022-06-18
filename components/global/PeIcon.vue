<template>
  <span class="icon" :class="`pe pe-7s-${name}`" />
</template>

<script>
export default {
  name: 'PeIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
