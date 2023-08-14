import React, { useState } from 'react';

import Comment from '../IndividualParts/Comment';
import CommentForm from '../IndividualParts/CommentsInput';
import './CommentsList.css';
const CommentSection = () => {
    const [comments, setComments] = useState([]);

    const addComment = (content) => {
        const newComment = { content };
        setComments([...comments, newComment]);
    };

    return (
        <div className="commentsSection">
            <div className="commentsInput">
                <CommentForm addComment={addComment} />
            </div>
            <div className="commentsList">
                {comments.length > 0 && <h4>Comments {comments.length}</h4>}
                <div className="commentImport">
                    {comments.map((comment, index) => (
                        <Comment key={index} content={comment.content} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CommentSection;
