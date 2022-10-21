import React from "react"
import { Link } from "react-router-dom"
import LinesEllipsis from "react-lines-ellipsis"

import { formatDate } from "../../../../utils"

import "./BlogItem.css"

const BlogItem = ({ maxLine, post, icons }) => {
  return (
    <div id="BlogItem" className="sd">
      <div id="blog-item-container" className="sd">
        <Link id="blog-title-row" className="row sd" to={`/posts/${post.id}`}>
          <div id="blog-item-title" className="text sd">
            {post.title}
          </div>
          <p id="blog-item-date" className="text sd">
            {formatDate(post.updatedAt)}
          </p>
        </Link>
        <div id="blog-body-row" className="row sd">
          <Link className="noline" to={`/posts/${post.id}`}>
            <LinesEllipsis
              id="blog-item-body"
              className="article-body"
              text={post.body}
              maxLine={maxLine ?? "2"}
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </Link>
          {icons !== undefined ? (
            <div id="icon-container">
              {icons.map((icon, i) => {
                return (
                  <div
                    key={`${i}-icon-${icon.name}`}
                    id="icon"
                    className="sd"
                    onClick={() => {
                      icon.onClick(post)
                    }}
                  >
                    {icon.label}
                  </div>
                )
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default BlogItem
