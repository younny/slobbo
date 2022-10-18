const Post = ({ id, post }) => {
    return (
        <li>
            <div className="view">
                <div className="post-title">{post.title}</div>
            </div>
        </li>
    )
}

export default Post