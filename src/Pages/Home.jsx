import React, { useState } from 'react';
import Feed from '../Components/Feed/Feed';
import RightPart from '../Components/RightPart/RightPart';
import Layout from '../Layout';
import './Home.css';

function Home() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleFeedScroll = (e) => {
        const scrollTop = e.target.scrollTop;
        setScrollPosition(scrollTop);
    };

    return (
        <div className="home">
            <Feed onScroll={handleFeedScroll} />
            <div className="widgetsHomePage">
                <RightPart scrollPosition={scrollPosition} />
            </div>
        </div>
    );
}

export default Home;
