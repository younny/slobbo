import React, { Component } from 'react'  
import {
    Link
} from 'react-router-dom'

import LatestPostItem from './components/LatestPostItem'
import { formatDate, sortByDate } from '../../utils'

import './PostPage.css'


class PostPage extends Component {
    
    render() {
        const posts = this.props.posts
        const sorted = sortByDate(posts)
        const latestPost = sorted[0]
        return (
            <div className="PostPage sd">
                <div className="main-column sd">
                    <p className="date sd text">{formatDate(latestPost.updatedAt)}</p>
                    <h1 className="title sd text">{latestPost.title}</h1>
                    <Link className="image sd" to="/" style={{
                                        backgroundImage: `url(${latestPost.thumbnail})`
                                    }}
                    />
                    <div className="article-container sd">
                        <p className="article sd text">{latestPost.body}</p>
                    </div>
                    <div className="author-container sd">
                        <p className="author-name sd text">{latestPost.author}</p>
                        <p className="author-about sd text">Working smoothly, Lifetime peace.</p>
                        {/* <PostList posts={posts} />
                        <Button onClick={() => navigate("/editpost")} text="Add" />
                        <Button onClick={() => console.log("Edit Post!!")} text="Edit" />
                        <Button onClick={() => console.log("Delete Post!!")} text="Delete" /> */}
                    </div>
                </div>
                <div className="side-column sd">
                    <h5 className="column-header text sd">Recent Post</h5>
                    <div className="recent-contents sd"> 
                        {sorted.filter((post) => post.id !== latestPost.id)
                                .slice(0, 3)
                                .map((post) => <LatestPostItem nothumb key={post.id} post={post} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default PostPage