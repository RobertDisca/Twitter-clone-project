import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React from 'react';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';
import './Widgets.css';

function Widgets() {
    return (
        <div className="widgets">
            <div className="backgroundSearch">
                <div className="widgetsInput">
                    <SearchOutlinedIcon className="widgetsSearchIcon" />
                    <input placeholder="Search Twitter" type="text" />
                </div>
            </div>

            <div className="widgetsContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={' '} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="cristiano"
                    options={{ height: 400 }}
                />
            </div>
        </div>
    );
}

export default Widgets;
