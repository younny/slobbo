import React, { Component } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { connect } from "react-redux"

import HomePage from "./features/home/HomePage"
import PostPage from "./features/posts/PostPage"
import AboutPage from "./features/about/AboutPage"
import BlogPage from "./features/blog/BlogPage"
import AdminPage from "./features/admin/AdminPage"
import EditPostPage from "./features/editpost/EditPostPage"
import NavHeader from "./components/navheader"
import { loadPosts } from "../src/actions"

import "./App.css"

class App extends Component {
  componentDidMount() {
    this.props.loadPosts()
  }

  render() {
    return (
      <Router>
        <div>
          <div id="App">
            <div id="main" className="sd">
              <NavHeader />
              <Routes>
                <Route
                  exact
                  path="/"
                  element={<HomePage posts={this.props.posts.posts} />}
                />
                <Route
                  exact
                  path="/posts"
                  element={<PostPage posts={this.props.posts.posts} />}
                />
                <Route
                  exact
                  path="/posts/:id"
                  element={<PostPage posts={this.props.posts.posts} />}
                />
                <Route
                  exact
                  path="/blog"
                  element={<BlogPage posts={this.props.posts.posts} />}
                />
                <Route exact path="/admin" element={<AdminPage />} />
                <Route
                  exact
                  path="/admin/edit/:id"
                  element={<EditPostPage />}
                />
                <Route exact path="/about" element={<AboutPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps, {
  loadPosts,
})(App)
