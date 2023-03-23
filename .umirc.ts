import { defineConfig } from 'umi'

export default defineConfig({
  title: 'registry-web (dev)',
  theme: {
    'primary-color': '#004089',
  },
  routes: [
    {
      path: '/', component: '@/layouts/index',
      layout: false,
      routes: [
        { path: '/', component: 'index' },
        { path: '/repo/:user/:repo', component: 'repo', },
        { path: '/repo/:user/:repo/:cat', component: 'repo', },
        { path: '/*', component: '404', },
      ],
    },
  ],
  layout: false,
  antd: {
    import: true
  },
  history: { type: 'hash' },
  publicPath: '/public/',
  outputPath: 'dist'
})
