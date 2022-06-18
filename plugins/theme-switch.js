const initUserTheme = localStorage.getItem('dark-theme') || window.matchMedia('(prefers-color-scheme: dark)').matches

localStorage.setItem('dark-theme', String(Number(Boolean(Number(initUserTheme)))))
document.documentElement.className = Number(initUserTheme) ? 'dark' : ''
