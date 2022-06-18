<template>
  <div class="main-sidebar">
    <MenuItem
      v-for="(menuItem, j) in menuItems"
      :key="`j-${j}`"
      :menu-item-data="menuItem"
    />
    <hr>
    <div v-for="(group, i) in groups" :key="`i-${i}`" class="group-container">
      <GroupList
        :group-items="group.items"
        :group-title="group.title"
        :group-title-icon="group.titleIcon"
      />
      <hr>
    </div>
    <div class="bottom-menu">
      <theme-switcher />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import GroupList from '@/components/GroupList'
import MenuItem from '@/components/MenuItem'

export default {
  name: 'Sidebar',
  components: {
    ThemeSwitcher,
    GroupList,
    MenuItem
  },

  data () {
    return {
      title: 'Sidebar',
      menuItems: [
        {
          title: 'Today',
          icon: 'alarm',
          link: ''
        },
        {
          title: 'Uncategorized',
          icon: 'box1',
          link: '/asd'
        }
      ],
      groups: [
        {
          title: 'Projects',
          titleIcon: 'photo-gallery',
          items: [
            {
              type: 'circle',
              color: '#fff',
              title: 'White'
            },
            {
              type: 'circle',
              color: '#000',
              title: 'Gray'
            },
            {
              type: 'circle',
              color: 'red',
              title: 'Light Gray'
            },
            {
              type: 'circle',
              color: 'yellow',
              title: 'Light Gray 2'
            },
            {
              type: 'circle',
              color: '#21c7c7',
              title: 'Light Gray 3'
            }
          ]
        }
      ]
    }
  },
  computed: mapGetters({
    user: 'auth/user'
  })
}
</script>

<style scoped lang="scss">
.main-sidebar {
  left: 0;
  border-right: 1px solid #EDEDEE;
  min-width: 210px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  width: 20%;
  background: var(--bg-primary);
  padding: 20px;
}
hr {
  background: #EDEDEE;
  border: none;
  height: 1px;
  margin-bottom: 20px;
}
</style>
