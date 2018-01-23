<template>
  <section class="container">
    <div class="confirm-box">
      <h1>Confirm Account</h1>
      <div class="confirm-success" v-if="confirmMessage">
        {{ confirmMessage }}
      </div>
      <div class="confirm-error" v-if="confirmErr">
        Confirm Error
      </div>
    </div>
  </section>
</template>

<script>
  export default {

    data() {
      return {
        confirmErr: null,
        confirmMessage: null
      };
    },

    async asyncData({app, route}) {
      try {
        let confirm = await app.$axios.$post('confirm', {token: route.query.token})
        return {confirmMessage: confirm}
      }
      catch (err) {
        return {confirmErr: true, confirmMessage: err}
      }
    },

  }
</script>
