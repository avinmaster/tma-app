<template>
  <div class="group-list">
    <GroupTitle
      :title="groupTitle"
      :icon="groupTitleIcon"
      @click="hide"
    />
    <div v-show="visible" class="group-list-items">
      <GroupListItem
        v-for="(groupItem, i) in groupItems"
        :key="i"
        :group-item-data="groupItem"
      />
      <p v-if="!groupItems.length">
        There are no items
      </p>
    </div>
  </div>
</template>

<script>
import GroupListItem from '@/components/GroupListItem'
import GroupTitle from '@/components/GroupTitle'

export default {
  name: 'GroupList',
  components: {
    GroupListItem,
    GroupTitle
  },
  props: {
    groupItems: {
      type: Array,
      default: () => []
    },
    groupTitle: {
      type: String,
      default: ''
    },
    groupTitleIcon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      visible: true
    }
  },
  methods: {
    hide () {
      this.visible = !this.visible
    }
  }
}
</script>

<style scoped lang="scss">
</style>
