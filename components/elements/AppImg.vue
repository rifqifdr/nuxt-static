<template>
  <figure :class="classFigure" :style="aspectRatioStyle">
    <img
      :data-src="lazy ? url : null"
      :src="!lazy ? url : null"
      :class="classImg + lazyClass"
      :alt="alt"
      :draggable="draggable"
    />
  </figure>
</template>

<script>
export default {
  props: {
    lazy: {
      type: Boolean,
      default: true
    },
    aspectRatio: {
      type: String,
      required: true
    },
    classFigure: {
      type: String,
      default: 'relative block overflow-hidden'
    },
    classImg: {
      type: String,
      default: 'absolute top-0 left-0 w-full h-full object-cover'
    },
    alt: {
      type: String,
      default: 'AppImage'
    },
    draggable: {
      type: String,
      validator: val => ['true', 'false'].includes(val),
      default: 'false'
    },
    url: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      width: null,
      height: null
    }
  },

  computed: {
    aspectRatioStyle() {
      return {
        'padding-top': (this.height / this.width) * 100 + '%'
      }
    },
    lazyClass() {
      return this.lazy ? ' lazyload' : ''
    }
  },

  created() {
    const [width, height] = this.aspectRatio
      .split(':')
      .map(val => parseInt(val))

    this.width = width
    this.height = height
  }
}
</script>
