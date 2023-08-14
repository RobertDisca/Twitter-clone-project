import { Avatar } from '@mui/material';
import React from 'react';
import './Comment.css';

const Comment = ({ content }) => {
    return (
        <div className="commentPost">
            <div className="commentBox">
                <div className="commentAvatar">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkYUjg_CBCVcYfZHVeBLwI9p9lBWp5TdXow&usqp=CAU" />
                </div>
            </div>

            <div className="commentsText">
                <div className="commentUserProfile">
                    <p className="commentDisplayName"> Disca Robert </p>
                    <span className="commentUserName">@discarobert</span>
                </div>
                <div className="commentContent">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default Comment;
