import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import './CommentsInput.css';

const CommentForm = ({ addComment }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addComment(content);
        setContent('');
    };

    return (
        <div className="commentsModal">
            <div className="commentsModalContent">
                <form onSubmit={handleSubmit}>
                    <div className="formComments">
                        <div className="commentsBoxInput">
                            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkYUjg_CBCVcYfZHVeBLwI9p9lBWp5TdXow&usqp=CAU" />
                            <input
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Post your comment!"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="commentsMediaBox">
                        <Button disabled={!content} type="submit" className="commentsBoxButton">
                            Post
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CommentForm;
