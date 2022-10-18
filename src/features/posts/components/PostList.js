import React from 'react'

import Post from './Post'

const PostList = ({ posts }) => {
    const renderedPosts = posts.map(post => {
        return <Post key={post.id} post={post} />
    })

    return <ul className="post-list">{renderedPosts}</ul>
}

export default PostList