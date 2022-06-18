<template>
  <router-link :to="menuItemData.link" class="menu-item">
    <PeIcon :name="menuItemData.icon" />
    <span>{{ menuItemData.title }}</span>
  </router-link>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    menuItemData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.menu-item {
  line-height: 40px;
  padding-left: 10px;
  border-radius: 2px;
  border: 1px solid transparent;
  transition: background 0.1s;
  margin-bottom: 10px;
  font-weight: bold;
  color: #43475e;
  cursor: pointer;
  display: flex;
  align-items: center;

  span {
    font-size: 14px;
  }

  ::v-deep .icon {
    width: 25px;
    font-size: 17px;
    line-height: 40px;
    display: inline-block;
  }

  &:hover, &.router-link-active {
    border-color: #EDEDEE;
    background: #fefeff;
    color: #6d6ddb;
  }
}
</style>
