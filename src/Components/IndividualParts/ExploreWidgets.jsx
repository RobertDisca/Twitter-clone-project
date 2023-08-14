import React from 'react';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';
import './ExploreWidgets.css';

function ExploreWidgets() {
    return (
        <div className="widgets">
            <div className="widgetsContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={' '} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="ESPNFC"
                    options={{ height: 400 }}
                />
            </div>
            <div className="widgetsContainer">
                <TwitterTweetEmbed tweetId={' '} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="MrBeast"
                    options={{ height: 400 }}
                />
            </div>
            <div className="widgetsContainer">
                <TwitterTweetEmbed tweetId={' '} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="GordonRamsay"
                    options={{ height: 400 }}
                />
            </div>
            <div className="widgetsContainer">
                <TwitterTweetEmbed tweetId={' '} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="PSG_inside"
                    options={{ height: 400 }}
                />
            </div>
            <div className="widgetsContainer">
                <TwitterTweetEmbed tweetId={' '} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="Tesla"
                    options={{ height: 400 }}
                />
            </div>
            <div className="widgetsContainer">
                <TwitterTweetEmbed tweetId={' '} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="realDonaldTrump"
                    options={{ height: 400 }}
                />
            </div>
        </div>
    );
}

export default ExploreWidgets;
