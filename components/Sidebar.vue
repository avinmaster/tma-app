<template>
  <div class="main-sidebar">
    <ul>
      <li v-for="(item, i) in items" :key="i">
        <nuxt-link :to="item.href">
          <font-awesome-icon :icon="`fa-thin ${item.icon}`" />
          {{ item.text }}
        </nuxt-link>
      </li>
    </ul>
    <div v-if="user" class="bottom-nav dropdown">
      <a class="nav-link dropdown-toggle text-dark"
         href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
      >
        <img :src="user.photo_url" class="rounded-circle profile-photo mr-1">
        {{ user.name }}
      </a>
      <div class="dropdown-menu">
        <router-link :to="{ name: 'settings.profile' }" class="dropdown-item pl-3">
          {{ $t('settings') }}
        </router-link>

        <div class="dropdown-divider" />
        <a class="dropdown-item pl-3" href="#" @click.prevent="logout">
          {{ $t('logout') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  data () {
    return {
      title: 'Sidebar',
      items: [
        {
          text: 'Home',
          href: '/',
          icon: 'fa-house-blank'
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
  },
  computed: mapGetters({
    user: 'auth/user'
  }),
  methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to log in page.
      await this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped lang="scss">
.main-sidebar {
  bottom: 0;
  height: 100vh;
  border-radius: 8px;
  width: 300px;
  background: #fff;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
  justify-content: space-between;

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
    padding: 0 20px;

    &.active {
      background: #F2F4F5;
    }

    a {
      color: #333;
    }
  }
}
</style>
