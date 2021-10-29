export default {
  isDev: process.env.NODE_ENV === 'development',

  nuxt: {
    routerBase: '/',
    globalName: 'nuxt',
    publicPath: '/_nuxt/',

    filename: {
      app: 'scripts',
      chunk: 'scripts',
      css: 'styles',
      img: 'images',
      font: 'fonts',
      video: 'videos',
      icon: 'icons'
    }
  },

  app: {
    name: 'Nuxt Static Boilerplate',
    shortName: 'Nuxt Static',
    description:
      'A well-organized Nuxt template for creating fast static applications.',
    author: 'namesurname',

    title: 'Nuxt Static Boilerplate',
    titleSeparator: ' — ',
    titleTemplate:
      'A well-organized Nuxt template for creating fast static applications',

    charset: 'utf-8',
    lang: 'en-US',
    locale: 'en_US',
    type: 'website',
    themeColor: '#00c58e',
    backgroundColor: '#f5f8f9'
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1440px'
  }
}
