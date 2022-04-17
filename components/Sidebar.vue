<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <h3>{{ title }}</h3>
    </div>
    <div class="sidebar-body">
      <ul class="nav nav-pills nav-stacked">
        <li v-for="item in items" :class="{ active: item.active }">
          <a :href="item.href">{{ item.text }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      title: 'Sidebar',
      items: [
        {
          text: 'Home',
          href: '/',
          active: true
        },
        {
          text: 'About',
          href: '/about'
        },
        {
          text: 'Contact',
          href: '/contact'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
