import { defineConfig } from 'umi'

const base = process.env.ROUTE_BASE || '/'

export default defineConfig({
  title: 'Registry Station',
  theme: {
    'primary-color': '#004089',
  },
  routes: [
    {
      path: '/', component: '@/layouts/index',
      layout: false,
      routes: [
        { path: '/', component: 'home' },
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
  manifest: {},
  base: base,
  publicPath: `${base}public/`,
  outputPath: 'dist'
})
