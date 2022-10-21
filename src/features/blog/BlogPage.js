import React from "react"

import ReadMoreButton from "../../components/readmorebutton"
import { sortByDate } from "../../utils"
import BlogItem from "./components/blogitem"

import "./BlogPage.css"

const BlogPage = ({ posts }) => {
  var sorted = sortByDate(posts)

  return (
    <div id="BlogPage" className="sd">
      <div id="blog-top" className="sd">
        <div id="blog-top-container" className="sd">
          <h1 id="blog-page-header" className="sd text">
            Blog
          </h1>
          <p id="blog-page-description" className="sd text">
            Ac tempor mauris vehicula. Quisque in suscipit eros, aliquet
            elementum mi.
          </p>
        </div>
      </div>
      <div id="blog-cat-container" className="sd">
        <div id="blog-cat-section" className="sd">
          <h2 id="cat" className="sd text">
            Category 0
          </h2>
          <p id="cat-description" className="sd text">
            Ac tempor mauris vehicula. Quisque in suscipit eros, aliquet
            elementum mi.
          </p>
          <ReadMoreButton text="See all" utl={`/blog/${0}`} />
        </div>
        <div id="blog-article-section" className="sd">
          {sorted
            .filter((post) => post.category == 0)
            .slice(0, 3)
            .map((post) => (
              <BlogItem key={post.id} post={post} />
            ))}
        </div>
      </div>
      <div id="blog-cat-container" className="sd">
        <div id="blog-cat-section" className="sd">
          <h2 id="cat" className="sd text">
            Category 1
          </h2>
          <p id="cat-description" className="sd text">
            Integer scelerisque lectus at nunc semper semper. Nunc in ipsum eu
            turpis condimentum maximus. Pellentesque eu ultricies est.
          </p>
        </div>
        <div id="blog-article-section" className="sd">
          {sorted
            .filter((post) => post.category == 1)
            .map((post) => (
              <BlogItem key={post.id} post={post} />
            ))}
        </div>
      </div>

      <div id="blog-cat-container" className="sd">
        <div id="blog-cat-section" className="sd">
          <h2 id="cat" className="sd text">
            Category 2
          </h2>
          <p id="cat-description" className="sd text">
            Integer scelerisque lectus at nunc semper semper. Nunc in ipsum eu
            turpis condimentum maximus. Pellentesque eu ultricies est.
          </p>
        </div>
        <div id="blog-article-section" className="sd">
          {sorted
            .filter((post) => post.category == 2)
            .map((post) => (
              <BlogItem key={post.id} post={post} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage
