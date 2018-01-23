'use strict'

const Post = use('App/Models/Post')
const Logger = use('Logger')

class PostApiController {

  /**
   * Fetch all posts from database.
   */
  async index () {
    try {
      return await Post.all()
    } catch (err) {
      Logger.error('fetch all Posts %s', err)
    }
  }
}

module.exports = PostApiController
