<template>
  <div class="main-sidebar">
    <div class="menu">
      <unicon name="car-wash" />
    </div>
    <div class="bottom-menu">
      <theme-switcher />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ThemeSwitcher from '@/components/theme-switcher'

export default {
  name: 'Sidebar',
  components: {
    ThemeSwitcher
  },

  data () {
    return {
      title: 'Sidebar'
    }
  },
  computed: mapGetters({
    user: 'auth/user'
  })
}
</script>

<style scoped lang="scss">
.main-sidebar {
  width: 90px;
  background: var(--bg-primary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 18px 0;
  margin: 20px 30px 20px 15px;

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    height: 45px;
    line-height: 45px;
    cursor: pointer;
    font-size: 17px;
    font-weight: 600;
    text-decoration: none;
    transition: all .3s;
    border-radius: 8px;

    &.active {
      background: #F2F4F5;
    }

    a {
      color: #333;
    }
  }
}
</style>
