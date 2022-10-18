import React from 'react'
import { Link } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'

import { formatDate } from '../../../utils'

import './LatestPostItem.css'

const LatestPostItem = ({ nothumb, post }) => {
    return (
        <div className="post-container border">
            {!nothumb ? <Link className="post-thumbnail" to="/posts" style={{
                backgroundImage: `url(${post.thumbnail})`
            }}
            /> : null}
            <div className="post-article">
                <p className="article-date text sd">{formatDate(post.updatedAt)}</p>
                <Link className="article-title text sd">{post.title}</Link>
                <LinesEllipsis className="latest-article-body" text={post.body}
                            maxLine="3"
                            ellipsis="..."
                            trimRight
                            basedOn='letters'/>
                <div className="read-more-button">
                    <Link className="read-more text sd">Read More..</Link>
                </div>
            </div>
        </div>
    )
}

export default LatestPostItem