import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import BlogItem from "../blog/components/blogitem"
import { deletePost, selectPost } from "../../actions"
import { sortByDate, withNavigate } from "../../utils"

import "./AdminPage.css"

class AdminPage extends Component {
  componentDidMount() {}

  onEdit(post) {
    this.props.selectPost(post)
    this.props.navigate(`/admin/edit/${post.id}`)
  }

  render() {
    let posts = this.props.posts

    const icons = [
      {
        label: "Edit",
        icon: "",
        onClick: (p) => this.onEdit(p),
      },
      { label: "Delete", icon: "", onClick: this.props.deletePost },
    ]
    return (
      <div id="AdminPage" className="sd">
        <div id="admin-container" className="sd">
          <div id="admin-menu" className="sd">
            <Link id="admin-menu-item" className="sd text" to="/newpost">
              New Post
            </Link>
          </div>
          <div id="admin-main" className="sd">
            {sortByDate(posts)
              .slice(0, 10)
              .map((post) => {
                return (
                  <BlogItem
                    key={post.id}
                    post={post}
                    maxLine="1"
                    icons={icons}
                  />
                )
              })}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  }
}

export default withNavigate(
  connect(mapStateToProps, {
    deletePost,
    selectPost,
  })(AdminPage)
)
