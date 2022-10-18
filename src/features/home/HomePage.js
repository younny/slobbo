import React, { Component} from 'react'
import {
    Link
} from 'react-router-dom'

import LatestPostItem from '../posts/components/LatestPostItem'
import { sortByDate } from '../../utils'

import './HomePage.css'

const categories = ["yoga", "programming", "daily", "workshop"]


class HomePage extends Component {

    render() {
        const posts = this.props.posts

        return (<div className="HomePage sd">
            <div className="banner sd" style={{ 
                backgroundImage: `url(https://i.picsum.photos/id/1035/1500/420.jpg?hmac=XTpthW15eqF_b9kS6ONfy0cQLHiCacPUW4Obsw9a7n0)`

            }} />
            <div className="contents-container sd">
                <div className="left-columns sd">
                    <div className="left-side">
                        <h5 className="category-header">{categories[2].toUpperCase()}</h5>
                        <div className="left-side-content">
                        {Array.from(posts).filter((post) => post.category === 2).map((post) => <LatestPostItem key={post.id} post={post} />)}
                        </div>
                    </div>
                    <div className="right-side sd">
                        <div className="right-side-content sd">
                            <h5 className="category-header noborder">Latest Posts</h5>
                            {sortByDate(posts).slice(0, 3).map((post, i) => <LatestPostItem nothumb={i > 0} key={post.id} post={post} />)}
                        </div>
                    </div>
                </div>
                <div className="right-column sd">
                    <div className="right-column-top sd">
                        <p className="category-header small noborder">Workshops</p>
                        <h2 className="category-header big noborder text sd">Oskar, the Chief Mauser</h2>
                        <h5 className="category-header noborder">Pet him now!</h5>
                        <p className="article-body text sd">He hates to be outside. He's sleeping most of time because he's tired of sleeping. Pet him now when he's awake!</p>
                        <div className="news-column sd">
                            <div className="news-container">
                                <div className="news-container-contents sd">
                                    <h5 className="news-container-header text sd">Workshop 1</h5>
                                    <p className="news-container-header sub text sd">Subtitle</p>
                                    <p className="news-container-body text sd">Integer scelerisque lectus at nunc semper semper. Nunc in ipsum eu turpis condimentum maximus. Pellentesque eu ultricies est. Nunc cursus enim augue, vel finibus nulla fermentum sed. Curabitur enim nibh, viverra at nibh vitae, interdum faucibus magna. Morbi dapibus metus vel ex imperdiet, ac tempor mauris vehicula. Quisque in suscipit eros, aliquet elementum mi.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-section sd">
                        <Link className="profile" to="/posts" style={{
                                    backgroundImage: `url(https://i.picsum.photos/id/652/345/250.jpg?hmac=hKcyEdM5WbMi3Z0MqkoBfn8jgMucMoD7KOp7mSxKgG4)`
                                }}
                        />
                        <h3 className="about-header">Yuna</h3>
                        <p className="about-body text sd">Some interesting inspirations and camera settings during photo sessions in the studio. Thanks to this, your photos will be even better. We have create...</p>
                        <div className="read-more-button">
                            <Link className="read-more text sd">Read More..</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }

}

export default HomePage