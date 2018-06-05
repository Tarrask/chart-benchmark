// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/chart-benchmark/'
  }
} : {}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'chart benchmark',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A chart time-series benchmark' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  build: {
    extend(config, { isClient }) {
      if(isClient) {
        config.plugins.forEach(plugin => {
          if(plugin.constructor.name === 'UglifyJsPlugin') {
            plugin.options.uglifyOptions.mangle = {
              reserved: ['$super']
            }
          }
        });
      }
    }
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.scss'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  ...routerBase
};

