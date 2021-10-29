<template>
  <figure :class="classFigure">
    <picture :class="classPicture" :style="aspectRatioStyle">
      <source
        v-if="urlXxl"
        :data-srcset="lazy ? urlXxl : null"
        :srcset="!lazy ? urlXxl : null"
        :media="mediaXxl"
        :type="typeXxl ? typeXxl : type"
      />
      <source
        v-if="urlXl"
        :data-srcset="lazy ? urlXl : null"
        :srcset="!lazy ? urlXl : null"
        :media="mediaXl"
        :type="typeXl ? typeXl : type"
      />
      <source
        v-if="urlLg"
        :data-srcset="lazy ? urlLg : null"
        :srcset="!lazy ? urlLg : null"
        :media="mediaLg"
        :type="typeLg ? typeLg : type"
      />
      <source
        v-if="urlMd"
        :data-srcset="lazy ? urlMd : null"
        :srcset="!lazy ? urlMd : null"
        :media="mediaMd"
        :type="typeMd ? typeMd : type"
      />
      <source
        v-if="urlSm"
        :data-srcset="lazy ? urlSm : null"
        :srcset="!lazy ? urlSm : null"
        :media="mediaSm"
        :type="typeSm ? typeSm : type"
      />
      <img
        :data-src="lazy ? url : null"
        :src="!lazy ? url : null"
        :class="classImg + lazyClass"
        :alt="alt"
        :draggable="draggable"
      />
    </picture>
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
      required: true,
      validator: val => {
        const [width, height] = val.split(':').map(val => parseInt(val))
        return !Number.isNaN(width) && !Number.isNaN(height)
      }
    },

    classFigure: {
      type: String,
      default: 'overflow-hidden'
    },
    classPicture: {
      type: String,
      default: 'relative block'
    },
    classImg: {
      type: String,
      default: 'absolute top-0 left-0 w-full h-full object-cover'
    },

    alt: {
      type: String,
      default: 'AppPicture'
    },
    draggable: {
      type: String,
      validator: val => ['true', 'false'].includes(val),
      default: 'false'
    },

    // Url
    url: {
      type: String,
      required: true
    },
    urlSm: {
      type: String,
      default: null
    },
    urlMd: {
      type: String,
      default: null
    },
    urlLg: {
      type: String,
      default: null
    },
    urlXl: {
      type: String,
      default: null
    },
    urlXxl: {
      type: String,
      default: null
    },

    // Media
    mediaSm: {
      type: String,
      default() {
        return `(min-width: ${this.$config.breakpoints.sm})`
      }
    },
    mediaMd: {
      type: String,
      default() {
        return `(min-width: ${this.$config.breakpoints.md})`
      }
    },
    mediaLg: {
      type: String,
      default() {
        return `(min-width: ${this.$config.breakpoints.lg})`
      }
    },
    mediaXl: {
      type: String,
      default() {
        return `(min-width: ${this.$config.breakpoints.xl})`
      }
    },
    mediaXxl: {
      type: String,
      default() {
        return `(min-width: ${this.$config.breakpoints.xxl})`
      }
    },

    // Type
    type: {
      type: String,
      default: 'image/jpeg'
    },
    typeSm: {
      type: String,
      default: null
    },
    typeMd: {
      type: String,
      default: null
    },
    typeLg: {
      type: String,
      default: null
    },
    typeXl: {
      type: String,
      default: null
    },
    typeXxl: {
      type: String,
      default: null
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
