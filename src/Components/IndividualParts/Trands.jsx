import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import React, { useState } from 'react';
import './Trends.css';

const Trend = ({ post, onDelete }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMoreClick = () => {
        setIsModalOpen(true);
    };

    const handleDelete = () => {
        setIsModalOpen(false);
        onDelete(post.id);
    };

    return (
        <div className="post">
            <div className="exploreContent">
                <div className="exploreBoxTrends">
                    <div className="exploreTextTrends">
                        <p>{post.content}</p>
                        <h4>{post.title}</h4>
                        <p>{post.likes}</p>
                    </div>
                    <div className="exploreTrendsIcon" onClick={handleMoreClick}>
                        <MoreHorizIcon />
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="modalTrends">
                    <div className="modalContentTrends">
                        <SentimentVeryDissatisfiedIcon />
                        <p onClick={handleDelete}>Not interested in this</p>
                    </div>
                    <div className="modal-overlay" onClick={() => setIsModalOpen(false)} />
                </div>
            )}
        </div>
    );
};

export default Trend;
