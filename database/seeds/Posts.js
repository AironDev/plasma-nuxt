'use strict'

const Post = use('App/Models/Post')

const postsSeedData = require('../seed-data/Posts')

class PostsSeeder {

  async run () {
    for (let post of postsSeedData) {
      await Post.create(post)
    }
    console.log('Seeded Posts')
  }

}

module.exports = PostsSeeder
