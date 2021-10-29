<template>
  <nuxt-link v-if="to" :aria-label="ariaLabel" :to="{ name: to }">
    <slot />
  </nuxt-link>
  <a v-else :rel="rel" :target="target" :aria-label="ariaLabel" :href="href">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    ariaLabel: {
      type: String,
      default: 'AppLink'
    },
    to: {
      type: String,
      default: null
    },

    rel: {
      type: String,
      default: 'noopener noreferrer'
    },
    target: {
      type: String,
      default: '_blank'
    },
    href: {
      type: String,
      default: null
    }
  }
}
</script>
