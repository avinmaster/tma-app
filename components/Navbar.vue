<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link :to="{ name: user ? 'home' : 'welcome' }">
      {{ appName }}
    </router-link>

    <ul class="navbar-nav ml-auto">
      <!-- Guest -->
      <template v-if="!user">
        <li class="nav-item">
          <router-link :to="{ name: 'login' }" class="nav-link" active-class="active">
            {{ $t('login') }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'register' }" class="nav-link" active-class="active">
            {{ $t('register') }}
          </router-link>
        </li>
      </template>
      <locale-dropdown />
      <li class="nav-item">
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
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from './LocaleDropdown'

export default {
  components: {
    LocaleDropdown
  },

  data: () => ({
    appName: process.env.appName
  }),

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

<style scoped>
.profile-photo {
  width: 2rem;
  height: 2rem;
  margin: -.375rem 0;
}

.navbar {
  width: 100%;
  height: 55px;
  box-shadow: none;
  padding: 0 50px;
}
</style>
