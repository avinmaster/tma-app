<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link :to="{ name: user ? 'home' : 'welcome' }" class="navbar-brand">
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
  })
}
</script>

<style scoped>
.profile-photo {
  width: 2rem;
  height: 2rem;
  margin: -.375rem 0;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 55px;
  box-shadow: none;
  background: #fff;
  padding: 0 50px;
}
</style>
