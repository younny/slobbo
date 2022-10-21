import React from "react"
import { useParams, Link } from "react-router-dom"

import LatestPostItem from "./components/latestpostitem"
import { formatDate, sortByDate } from "../../utils"

import "./PostPage.css"
import ReadMoreButton from "../../components/readmorebutton"

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
    <div id="PostPage" className="sd">
      <div id="post-main-container" className="sd">
        <p id="post-date" className="sd text">
          {formatDate(selectedPost.updatedAt)}
        </p>
        <h1 id="post-title" className="sd text">
          {selectedPost.title}
        </h1>
        <Link
          id="post-main-image"
          className="sd"
          to="/"
          style={{
            backgroundImage: `url(${selectedPost.thumbnail})`,
          }}
        />
        <div id="article-container" className="sd">
          <p id="article-body" className="sd text">
            {selectedPost.body}
          </p>
        </div>
        <div id="author-section" className="sd">
          <p id="author-name" className="sd text">
            {selectedPost.author}
          </p>
          <p id="author-about" className="sd text">
            Working smoothly, Lifetime peace.
          </p>
        </div>
      </div>
      <div id="post-side-container" className="sd">
        <h5 className="column-header border sd text">Recent Post</h5>
        <div id="recent-posts-column" className="sd">
          {sorted
            .filter((post) => post.id !== selectedPost.id)
            .slice(0, 4)
            .map((post) => (
              <LatestPostItem nothumb key={post.id} post={post} />
            ))}
        </div>
        <div id="see-more">
          <ReadMoreButton
            text="See more posts"
            url={`/posts/${selectedPost.id}`}
          />
        </div>
      </div>
    </div>
  )
}

export default PostPage
