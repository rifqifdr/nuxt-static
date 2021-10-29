<template>
  <svg
    :xmlns="xmlns"
    :viewBox="viewBox"
    :width="width"
    :height="height"
    :fill="fill"
    :stroke="stroke"
  >
    <slot />
  </svg>
</template>

<script>
export default {
  props: {
    xmlns: {
      type: String,
      default: 'http://www.w3.org/2000/svg'
    },
    viewBox: {
      type: String,
      default: null
    },
    width: {
      type: String,
      default: null
    },
    height: {
      type: String,
      default: null
    },
    fill: {
      type: String,
      default: 'currentColor'
    },
    stroke: {
      type: String,
      default: 'none'
    }
  }
}
</script>
