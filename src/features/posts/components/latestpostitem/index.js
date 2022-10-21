import React from "react"
import { Link } from "react-router-dom"
import LinesEllipsis from "react-lines-ellipsis"

import { formatDate } from "../../../../utils"
import ReadMoreButton from "../../../../components/readmorebutton"

import "./LatestPostItem.css"

const LatestPostItem = ({ nothumb, post }) => {
  return (
    <div className="post-container border">
      {!nothumb ? (
        <Link
          className="post-thumbnail"
          to={`/posts/${post.id}`}
          style={{
            backgroundImage: `url(${post.thumbnail})`,
          }}
        />
      ) : null}
      <div className="post-article">
        <p id="article-date" className="text sd">
          {formatDate(post.updatedAt)}
        </p>
        <Link id="article-title" className="text sd" to={`/posts/${post.id}`}>
          {post.title}
        </Link>
        <LinesEllipsis
          className="article-body"
          text={post.body}
          maxLine="3"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
        <ReadMoreButton text="Read more.." url={`/posts/${post.id}`} />
      </div>
    </div>
  )
}

export default LatestPostItem
