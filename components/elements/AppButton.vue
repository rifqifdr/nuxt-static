<template>
  <nuxt-link v-if="to" :role="role" :aria-label="ariaLabel" :to="{ name: to }">
    <slot />
  </nuxt-link>
  <a
    v-else-if="href"
    :role="role"
    :rel="rel"
    :target="target"
    :aria-label="ariaLabel"
    :href="href"
  >
    <slot />
  </a>
  <button
    v-else
    class="outline-none focus:outline-none"
    :type="type"
    :name="name"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    role: {
      type: String,
      default: 'button'
    },
    ariaLabel: {
      type: String,
      default: 'AppButton'
    },
    to: {
      type: String,
      default: null
    },

    href: {
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

    type: {
      type: String,
      default: 'button'
    },
    name: {
      type: String,
      default: 'AppButton'
    }
  }
}
</script>
