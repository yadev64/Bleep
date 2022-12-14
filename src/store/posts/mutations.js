export function updateModalStatus(state, value) {
  state.modal_status = value
}

export function storePostData(state, post) {
  if (post) {

    let postTempObject = {}
    postTempObject.content = post.content ? post.content : ''
    postTempObject.image = post.image ? post.image : null
    postTempObject.is_public = post.is_public ? post.is_public : false

    postTempObject.likes = false
    postTempObject.id = state.posts.length

    state.posts = state.posts.reverse()
    state.posts.push(postTempObject)
    state.posts = state.posts.reverse()
  }
}
