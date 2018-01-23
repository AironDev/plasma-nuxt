<template>
  <section class="container">
    <div class="post-list">
      <div v-for="post in posts">
        <i-col span="11">
          <Card style="margin:20px">
            <p slot="title">{{ post.title }}</p>
            <p>{{ post.body }}</p>
          </Card>
        </i-col>
      </div>
    </div>
  </section>
</template>

<script>
  export default {

    name: 'page-posts',

    data() {
      return {
        posts: null
      }
    },

    async asyncData({app, store, redirect}) {
      if (store.state.auth) {
        try {
          let posts = await app.$axios.$get('posts')
          return {posts}
        } catch (err) {
          console.log('no posts: ' + err)
        }
      } else {
        redirect(301, '/account/login')
      }
    },


  }
</script>
