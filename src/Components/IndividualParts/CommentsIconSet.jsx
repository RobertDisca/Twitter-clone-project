// import React, { useState } from 'react';
// import Comment from './CommentsInput';
// import FormComment from './FormComment';

// const Comments = () => {
//     const [comments, setComments] = useState([
//         { id: 1, autor: 'Utilizator1', content: 'Acesta este un comentariu!' },
//         { id: 2, autor: 'Utilizator2', content: 'Mulțumesc pentru aplicație!' },
//     ]);

//     const addComment = (commentNew) => {
//         setComments([...comments, commentNew]);
//     };

//     return (
//         <div>
//             <h2>Comentarii</h2>
//             {comments.map((comment) => (
//                 <Comment key={comment.id} comment={comment} />
//             ))}
//             <FormComment addComment={addComment} />
//         </div>
//     );
// };

// export default Comments;

import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import React, { useState } from 'react';
import './CommentsIconSet.css';

const CommentsIcon = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleIconClick = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="commentIcon">
            <div onClick={handleIconClick}>
                <ChatBubbleOutlineRoundedIcon className="chatIcon" />
                <span className="hideComm">Replay</span>
            </div>
        </div>
    );
};

export default CommentsIcon;
