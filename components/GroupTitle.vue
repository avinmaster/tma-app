<template>
  <div @click="hide" class="group-title">
    <PeIcon :name="icon" />
    <span>{{ title }}</span>
    <PeIcon :name="`angle-${iconToggled ? 'up' : 'down'}`" class="angle-icon" />
  </div>
</template>

<script>
export default {
  name: 'GroupTitle',
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      iconToggled: false
    }
  },
  methods: {
    hide () {
      this.iconToggled = !this.iconToggled
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
.group-title {
  display: block;
  line-height: 40px;
  padding-left: 10px;
  border-radius: 2px;
  border: 1px solid transparent;
  transition: background 0.1s;
  margin-bottom: 10px;
  font-weight: bold;
  color: #43475e;
  position: relative;
  cursor: pointer;

  span {
    display: inline-block;
    position: absolute;
    margin-top: 0px;
    font-size: 14px;
  }

  ::v-deep .icon {
    margin: 0;
    position: static;
    width: 25px;
    font-size: 17px;
    line-height: 40px;
  }

  ::v-deep .angle-icon {
    position: absolute;
    right: 10px;
    font-size: 25px;
    line-height: 40px;
  }
}
</style>
