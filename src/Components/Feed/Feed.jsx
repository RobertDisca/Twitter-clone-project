import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../Data/Database';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';

function Feed() {
    const [posts, setPosts] = useState([]);
    const postsCollectionRef = collection(db, 'posts');
    useEffect(() => {
        const getPosts = async () => {
            const q = query(postsCollectionRef, orderBy('timestamp', 'desc'));
            const data = await getDocs(q);
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts();
    }, []);
    console.log(posts);
    return (
        <div className="feed">
            <div className="feedHeader">
                <h2>Home</h2>
                <div className="functionalHome">
                    <div className="forYou">
                        <p>For you</p>
                    </div>
                    <div className="following">
                        <p>Following</p>
                    </div>
                </div>
            </div>
            <TweetBox />

            {posts.map((post) => {
                return (
                    <Post
                        displayName={post.displayName}
                        userName={post.userName}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                        timestamp={post.timestamp}
                    />
                );
            })}
        </div>
    );
}
export default Feed;
