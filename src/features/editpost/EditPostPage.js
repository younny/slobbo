import React, { Component } from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

import { editPost } from "../../actions"
import CategoryFilter from "../home/components/CategoryFilter"

import "./EditPostPage.css"
const categories = [
  { id: 0, name: "Yoga" },
  { id: 1, name: "Programming" },
  { id: 2, name: "Daily" },
  { id: 3, name: "Workshop" },
  { id: 4, name: "All" },
]

class EditPostPage extends Component {
  state = {
    complete: false,
    title: "",
    subTitle: "",
    category: 0,
    body: "",
  }

  componentDidMount() {
    const post = this.props.selectedPost
    if (post != undefined)
      this.setState({
        title: post.title,
        subTitle: post.sub_title,
        category: post.category,
        body: post.body,
      })
  }

  onSubmit(event) {
    const newPost = {
      title: this.state.title,
      sub_title: this.state.subTitle,
      category: this.state.category,
      body: this.state.body,
    }
    event.preventDefault()
    this.props.editPost(this.props.selectedPost.id, newPost)
    console.log(this.props.history)
    this.navigateBack()
  }

  navigateBack() {
    this.setState({
      complete: true,
    })
  }

  onCategoryChange(event) {
    this.setState({
      category: event.target.value,
    })
  }

  onBodyChange(event) {
    this.setState({
      body: event.target.value,
    })
  }

  onTitleChange(event) {
    this.setState({
      title: event.target.value,
    })
  }

  onSubTitleChange(event) {
    this.setState({
      subTitle: event.target.value,
    })
  }

  render() {
    return (
      <div id="EditPostPage" className="sd">
        {this.state.complete && <Navigate to={`/admin`} replace />}
        <form
          id="edit-form"
          className="sd"
          autoComplete="off"
          onSubmit={(e) => this.onSubmit(e)}
        >
          <div id="form-container" className="sd">
            <label id="cat-label" htmlFor="category" className="sd text">
              Category
            </label>
            <CategoryFilter
              selected={this.state.category}
              categories={categories}
              onFilterChange={this.onCategoryChange}
            />
            <div id="form-group" className="sd">
              <label htmlFor="title" className="sd text">
                Title
              </label>
              <input
                name="title"
                type="text"
                id="title"
                placeholder="Title Here"
                onChange={(e) => this.onTitleChange(e)}
                value={this.state.title}
              />
            </div>
            <div id="form-group" className="sd">
              <label htmlFor="sub_title" className="sd text">
                Subtitle
              </label>
              <input
                name="sub_title"
                type="text"
                id="sub_title"
                placeholder="Subtitle Here"
                onChange={(e) => this.onSubTitleChange(e)}
                value={this.state.subTitle}
              />
            </div>
            <div id="form-group" className="sd">
              <label htmlFor="body" className="sd text">
                Body
              </label>
              <textarea
                value={this.state.body}
                onChange={(e) => this.onBodyChange(e)}
              />
            </div>
            <input id="submit-button" type="submit" value="Save" />
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedPost: state.posts.selectedPost,
  }
}

export default connect(mapStateToProps, {
  editPost,
})(EditPostPage)
