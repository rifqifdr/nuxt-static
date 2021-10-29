<template>
  <nav class="nav">
    <ul class="flex space-x-3">
      <li>
        <app-link to="index">HOME</app-link>
      </li>
      <li>
        <app-link to="about">ABOUT</app-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import AppLink from '~/components/elements/AppLink'

export default {
  components: { AppLink }
}
</script>
