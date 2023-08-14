import BallotIcon from '@mui/icons-material/Ballot';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import { Avatar, Button } from '@mui/material';

import { addDoc, collection, Timestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../Data/Database';
import './TweetBox.css';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');
    const now = new Date();
    const postsCollectionRef = collection(db, 'posts');
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };
    const createPost = async () => {
        if (tweetMessage.length === 0) {
            alert('Ups, ai uitat sa introduci o imagine sau un text!');
            return;
        }
        await addDoc(postsCollectionRef, {
            displayName: 'Disca Robert',
            userName: '@discarobert',
            verified: true,
            text: tweetMessage,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkYUjg_CBCVcYfZHVeBLwI9p9lBWp5TdXow&usqp=CAU',
            image: tweetImage,
            timestamp: Timestamp.fromDate(now),
        });
        window.location.reload();
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBoxInput">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkYUjg_CBCVcYfZHVeBLwI9p9lBWp5TdXow&usqp=CAU" />
                    <input
                        value={tweetMessage}
                        onChange={(e) => {
                            setTweetMessage(e.target.value);
                        }}
                        onKeyDown={handleKeyPress}
                        placeholder="What is happening?!"
                        type="text"
                    />
                </div>
                <div className="tweetBoxInputImage">
                    <input
                        value={tweetImage}
                        onChange={(e) => {
                            setTweetImage(e.target.value);
                        }}
                        className="tweetBox_imageInput"
                        placeholder="Optional: Enter image URL"
                        type="text"
                    />
                </div>
                <div className="mediaBox">
                    <div className="mediaBoxIcons">
                        <PhotoOutlinedIcon />
                        <span className="hide">Media</span>
                    </div>
                    <div className="mediaBoxIcons">
                        <GifBoxOutlinedIcon />
                        <span className="hide">GIF</span>
                    </div>
                    <div className="mediaBoxIcons">
                        <BallotIcon />
                        <span className="hide">Poll</span>
                    </div>
                    <div className="mediaBoxIcons">
                        <InsertEmoticonIcon />
                        <span className="hide">Emoji</span>
                    </div>
                    <div className="mediaBoxIcons calendarMedia">
                        <CalendarMonthIcon />
                        <span className="hide">Calendar</span>
                    </div>
                    <div className="mediaBoxIcons mediaLocation">
                        <LocationOnIcon />
                        <span className="hide">Location</span>
                    </div>

                    <Button type="button" onClick={createPost} className="tweetBoxButton">
                        Tweet
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default TweetBox;
