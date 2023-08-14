import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Avatar } from '@mui/material';
import React from 'react';
import CommentsIcon from '../IndividualParts/CommentsIconSet';
import CommentSection from '../IndividualParts/CommentsList';
import Like from '../IndividualParts/LikeButton';
import './Post.css';

function Post({ displayName, userName, verified, text, image, avatar }) {
    return (
        <div className="postCard">
            <div className="postAvatar">
                <Avatar src={avatar} />
            </div>

            <div className="postBody">
                <div className="postHeaderText">
                    <p className="postUserName">
                        {displayName}{' '}
                        <span className="postHeaderSpecial">
                            {verified && <VerifiedIcon className="postVerified" />} {userName}
                        </span>
                    </p>
                </div>

                <div className="postDescription">
                    <p>{text}</p>
                </div>

                <div className="postMain">{<img src={image} alt="" />}</div>
                <div className="postFooter">
                    <div className="mediaIconsComm">
                        <CommentsIcon className="chatIcon" />
                        <span className="hideComm">Replay</span>
                    </div>
                    <div className="mediaIconsComm">
                        <CachedRoundedIcon className="reTweet" />
                        <span className="hideComm">ReTweet</span>
                    </div>
                    <div className="mediaIconsComm">
                        <Like className="likeIcon" />
                        {/* <span className="hideComm">Like</span> */}
                    </div>
                    <div className="mediaIconsComm">
                        <EqualizerRoundedIcon className="chartIcon" />
                        <span className="hideComm">View</span>
                    </div>
                    <div className="mediaIconsComm">
                        <FileUploadOutlinedIcon className="shareIcon" />
                        <span className="hideComm">Share</span>
                    </div>
                </div>
                <div className="commentsSectionPost">
                    <CommentSection />
                </div>
            </div>
        </div>
    );
}

export default Post;
