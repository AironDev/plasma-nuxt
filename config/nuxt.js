'use strict'

const resolve = require('path').resolve

module.exports = {

  mode: 'spa',

  build: {
    analyze: {
      analyzerMode: 'static',
      generateStatsFile: true,
      statsFilename: 'webpack-stats.json'
    },
    vendor: [
      'axios',
      'iview'
    ]
  },

  modules: [
    '@nuxtjs/axios',
  ],

  plugins: [
    '~/plugins/iview',
    '~/plugins/axios',
    { src: '~/plugins/nuxt-client-init.js', ssr: false }
  ],

  axios: {
    prefix: '/api',
    proxy: true,
    credentials: true,
    retry: { retries: 3 }
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Adonuxt',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Adonuxt project'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      }
    ],
    noscript: [{ innerHtml: `
      <h1>Javascript Disabled</h1>
      <p>It appears that you do not have Javascript enabled. This application relies on Javascript for most of our features.<p>
      <p>Please enable Javascript and <a href=".">reload</a> in order to use this site.</p>
    `}]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#4688ff',
    height: '3px'
  },
  /*
  ** Point to resources
  */
  srcDir: resolve(__dirname, '..', 'resources')
}
