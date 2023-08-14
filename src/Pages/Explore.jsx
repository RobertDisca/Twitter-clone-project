import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import React, { useState } from 'react';
import ExploreWidgets from '../Components/IndividualParts/ExploreWidgets';
import Trend from '../Components/IndividualParts/Trands';
import './Explore.css';

function Explore() {
    const initialPosts = [
        { id: 1, content: 'Entertainment · Trending', title: '#モニタリング', likes: '59K posts' },
        { id: 2, content: 'Business & finance · Trending', title: '#top', likes: '899K posts' },
        { id: 3, content: 'Politics · Trending', title: 'Musk', likes: '59K posts' },
        { id: 4, content: 'Sports · Trending', title: '#Kane', likes: '159K posts' },
        { id: 5, content: 'Trending in Italy', title: 'La Puglia', likes: '32K posts' },
        { id: 6, content: 'Politics · Trending', title: 'Topolino', likes: '138K posts' },
        { id: 7, content: 'Travel · Trending', title: 'Zuck', likes: '566K posts' },
        { id: 8, content: 'Sports · Trending', title: '#Haaland', likes: '8K posts' },
        { id: 9, content: 'Trending in Football', title: 'Belly', likes: '70K posts' },
        { id: 11, content: 'Trending in Italy', title: 'La Puglia', likes: '32K posts' },
        { id: 12, content: 'Politics · Trending', title: 'Topolino', likes: '138K posts' },
        { id: 13, content: 'Travel · Trending', title: 'Zuck', likes: '566K posts' },
        { id: 14, content: 'Sports · Trending', title: '#Haaland', likes: '8K posts' },
        { id: 15, content: 'Trending in Football', title: 'Belly', likes: '70K posts' },
        {
            id: 10,
            content: 'Trending in Italy',
            title: '#RedWhiteAndRoyalBlue',
            likes: '177K posts',
        },
        { id: 16, content: 'Entertainment · Trending', title: '#モニタリング', likes: '59K posts' },
        { id: 17, content: 'Business & finance · Trending', title: '#top', likes: '899K posts' },
        { id: 18, content: 'Politics · Trending', title: 'Musk', likes: '59K posts' },
        { id: 19, content: 'Sports · Trending', title: '#Kane', likes: '159K posts' },
        { id: 20, content: 'Trending in Italy', title: 'La Puglia', likes: '32K posts' },
        { id: 21, content: 'Politics · Trending', title: 'Topolino', likes: '138K posts' },
        { id: 22, content: 'Travel · Trending', title: 'Zuck', likes: '566K posts' },
        { id: 23, content: 'Sports · Trending', title: '#Haaland', likes: '8K posts' },
        { id: 24, content: 'Trending in Football', title: 'Belly', likes: '70K posts' },
        { id: 25, content: 'Trending in Italy', title: 'La Puglia', likes: '32K posts' },
        { id: 26, content: 'Politics · Trending', title: 'Topolino', likes: '138K posts' },
        { id: 27, content: 'Travel · Trending', title: 'Zuck', likes: '566K posts' },
        { id: 28, content: 'Sports · Trending', title: '#Haaland', likes: '8K posts' },
        { id: 29, content: 'Trending in Football', title: 'Belly', likes: '70K posts' },
        {
            id: 30,
            content: 'Trending in Italy',
            title: '#RedWhiteAndRoyalBlue',
            likes: '177K posts',
        },
    ];

    const [posts, setPosts] = useState(initialPosts);

    const handleDelete = (postId) => {
        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
    };
    return (
        <div className="explore">
            <div className="exploreContentPage">
                <div className="backgroundSearch">
                    <div className="widgetsInput">
                        <SearchOutlinedIcon className="widgetsSearchIcon" />
                        <input placeholder="Search Twitter" type="text" />
                    </div>
                    <div className="exploreSettings">
                        <SettingsOutlinedIcon />
                    </div>
                </div>
                <div className="exploreTitle">
                    <h3>Trends for you</h3>
                </div>
                <div className="exploreBoxPage">
                    <div className="explorePostPage">
                        {posts.map((post) => (
                            <Trend key={post.id} post={post} onDelete={handleDelete} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="exploreWidgetsMedia">
                <ExploreWidgets />
            </div>
        </div>
    );
}

export default Explore;
