const Post = (props) => {
    const { userId, photo, title, comment, postId, createdAt } = props.post
    return (
        <div>
            {userId}
        </div>
    )
}

export default Post