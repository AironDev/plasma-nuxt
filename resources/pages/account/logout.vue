<template>
  <section class="container">
    <div>Logout processing...</div>
  </section>
</template>

<script>
  export default {

    name: 'page-logout',

    asyncData({store, redirect, app}) {
      store.dispatch('logout')
      redirect(301, '/')
    },
  }
</script>
