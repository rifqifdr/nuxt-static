<template>
  <div id="__default">
    <the-header />
    <nuxt />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '~/components/templates/TheHeader'
import TheFooter from '~/components/templates/TheFooter'
import { canonical, facebook, twitter, appLdJson } from '~/utils/getHeadData'

export default {
  components: { TheHeader, TheFooter },

  head() {
    const { path } = this.$route
    const pathWithSlash = path.endsWith('/') ? path : `${path}/`

    return {
      meta: [...facebook(pathWithSlash), ...twitter()],

      link: [...canonical(pathWithSlash)],

      script: [...appLdJson(pathWithSlash)]
    }
  }
}
</script>
