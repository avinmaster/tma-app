<template lang="pug">
  button(@click="toggleTheme" :class="{ 'light': !isDark }").theme-switcher
    span(v-if="isDark").dark 🌞
    span(v-else).light 🌙
</template>

<script>
export default {
  name: 'ThemeSwitcher',
  data: () => ({
    isDark: false
  }),
  mounted () {
    const initUserTheme = this.getTheme() || this.getMediaPreference()
    this.setTheme(Boolean(Number(initUserTheme)))
  },
  methods: {
    getTheme () {
      return localStorage.getItem('dark-theme')
    },
    getMediaPreference () {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    },
    setTheme (isDark) {
      this.isDark = isDark
      localStorage.setItem('dark-theme', Number(isDark))
      document.documentElement.className = isDark ? 'dark' : ''
    },
    toggleTheme () {
      this.setTheme(!this.isDark)
    }
  }
}
</script>

<style scoped lang="scss">
.theme-switcher {
  padding: 10px;
  background-color: #f2f3f5;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #FFFFFF;
  font-size: 20px;
  transition: all .3s;

  &:hover {
    background: #ffffff;
  }

  &.light {
    background: #3b3b3b;

    &:hover {
      background: #2b2b2b;
    }
  }
}

.theme-switcher span {
  cursor: pointer;
  padding-right: 3px;
}
</style>
