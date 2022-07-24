import React from 'react'

const Comments = ({ commentId, comment, originalPostId }) => {
    return (
        <div>{comment.comment}</div>
    )
}

export default Comments