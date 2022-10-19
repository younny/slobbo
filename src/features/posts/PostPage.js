import React, { Component } from "react"
import { useParams, Link } from "react-router-dom"

import LatestPostItem from "./components/LatestPostItem"
import { formatDate, sortByDate } from "../../utils"

import "./PostPage.css"

function PostPage({ posts }) {
  const postId = useParams().id
  const sorted = sortByDate(posts)

  var selectedPost
  if (postId !== undefined) {
    selectedPost = posts.find((post) => post.id == postId)
  } else {
    selectedPost = sorted[0]
  }
  return (
    <div className="PostPage sd">
      <div className="main-column sd">
        <p className="date sd text">{formatDate(selectedPost.updatedAt)}</p>
        <h1 className="title sd text">{selectedPost.title}</h1>
        <Link
          className="image sd"
          to="/"
          style={{
            backgroundImage: `url(${selectedPost.thumbnail})`,
          }}
        />
        <div className="article-container sd">
          <p className="article sd text">{selectedPost.body}</p>
        </div>
        <div className="author-container sd">
          <p className="author-name sd text">{selectedPost.author}</p>
          <p className="author-about sd text">
            Working smoothly, Lifetime peace.
          </p>
          {/* <PostList posts={posts} />
                        <Button onClick={() => navigate("/editpost")} text="Add" />
                        <Button onClick={() => console.log("Edit Post!!")} text="Edit" />
                        <Button onClick={() => console.log("Delete Post!!")} text="Delete" /> */}
        </div>
      </div>
      <div className="side-column sd">
        <h5 className="column-header text sd">Recent Post</h5>
        <div className="recent-contents sd">
          {sorted
            .filter((post) => post.id !== selectedPost.id)
            .slice(0, 3)
            .map((post) => (
              <LatestPostItem nothumb key={post.id} post={post} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default PostPage
