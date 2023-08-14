import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import React, { useState } from 'react';
import './LikeButton.css';

function Like() {
    const [like, setLike] = useState(false);
    const [count, setCount] = useState(205);

    const setupLike = () => {
        if (!like) {
            setLike(true);
            setCount(count + 1);
        } else {
            setLike(false);
            setCount(count - 1);
        }
    };

    return (
        <div className="card-footer">
            {like ? (
                <FavoriteOutlinedIcon style={{ color: '#FF0000' }} onClick={setupLike} />
            ) : (
                <FavoriteBorderOutlinedIcon onClick={setupLike} />
            )}
            <span className="hideCom">Like</span>
            <span style={{ color: like ? '#ed5a9c' : '' }}>{count}</span>
        </div>
    );
}

export default Like;
