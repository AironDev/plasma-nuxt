{{{{raw}}}}
<template>
  <section class="container">
    <h1 class="title">
      This page is loaded from the {{ name }}
    </h1>
    <h2 class="info" v-if="name === 'client'">
      Please refresh the page
    </h2>
  </section>
</template>
{{{{/raw}}}}
<script>
  export default {
    asyncData({req}) {
      return {
        name: req ? 'server' : 'client'
      }
    },
    head() {
      return {
        title: `About Page (${this.name}-side)`
      }
    }
  }
</script>
