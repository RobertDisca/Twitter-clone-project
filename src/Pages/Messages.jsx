import CloseIcon from '@mui/icons-material/Close';
import GroupsIcon from '@mui/icons-material/Groups';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import './Messages.css';

function Messages() {
    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <div className="messagesBoxContainer">
            <div className="messagesContainer">
                <div className="messagesMedia">
                    <div className="MessagesTitle">
                        <h3>Messages</h3>
                    </div>
                    <div className="messagesIcons">
                        <SettingsOutlinedIcon />
                        <MarkEmailUnreadOutlinedIcon />
                    </div>
                </div>
                <div className="messagesText">
                    <h1>Welcome to your inbox!</h1>
                    <p>
                        Drop a line, share Tweets and more with private conversations between you
                        and others on Twitter.
                    </p>
                    <Button onClick={handleButtonClick} className="messagesBoxButton">
                        Write a message
                    </Button>
                </div>
            </div>
            <div className="messagesSecondContainer">
                <div className="messagesNewContainer">
                    <div className="messagesText">
                        <h1>Select a message</h1>
                        <p>
                            Choose from your existing conversations, start a new one, or just keep
                            swimming.
                        </p>
                        <Button onClick={handleButtonClick} className="messagesBoxButton">
                            New message
                        </Button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="textModal">
                            <div className="newMessage">
                                <CloseIcon onClick={closeModal} />
                                <h2>New message</h2>
                            </div>
                            <div className="messagesNextButton">
                                <p>Next</p>
                            </div>
                        </div>
                        <div className="searchPeopleMessage">
                            <div className="messagesSearch">
                                <SearchOutlinedIcon className="iconSearchPeople" />
                                <input placeholder="Search people" type="text" />
                            </div>
                        </div>
                        <div className="messageGroup">
                            <GroupsIcon />
                            <span>Create a group</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Messages;
