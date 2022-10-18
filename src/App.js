import React, { Component} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { connect } from 'react-redux'

import HomePage from './features/home/HomePage'
import PostPage from './features/posts/PostPage'
import NavHeader from './components/NavHeader'
import { loadPosts } from '../src/actions'

import './App.css'

class App extends Component {
  
  componentDidMount() {
    this.props.loadPosts()
  } 
  
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <div className="main sd">
              <NavHeader />
              <Routes>
                <Route 
                  exact 
                  path="/" 
                  element={<HomePage posts={this.props.posts} />}
                />
                <Route 
                  exact 
                  path="/posts" 
                  element={<PostPage posts={this.props.posts} />} 
                />
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
    posts: state.posts
  }
}

export default connect(mapStateToProps, {
  loadPosts
})(App)
