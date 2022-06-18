<template>
  <div class="group-list-item">
    <ColorItem
      :type="groupItemData.type"
      :color="groupItemData.color"
    />
    <span>{{ groupItemData.title }}</span>
  </div>
</template>

<script>
import ColorItem from '@/components/ColorItem'

export default {
  name: 'GroupListItem',
  components: {
    ColorItem
  },
  props: {
    groupItemData: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped lang="scss">
.group-list-item {
  display: block;
  line-height: 40px;
  border-radius: 2px;
  border: 1px solid transparent;
  transition: background 0.1s;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 14px;
  color: #595f7c;
  padding-left: 35px;
  position: relative;
  cursor: pointer;

  ::v-deep .color-item {
    top: 16px;
    left: 13.5px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    display: inline-block;
  }

  &:hover {
    border-color: #EDEDEE;
    background: #fefeff;
    color: #6d6ddb;
  }
}
</style>
