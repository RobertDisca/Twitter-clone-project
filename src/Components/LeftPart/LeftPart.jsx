import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CloseIcon from '@mui/icons-material/Close';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MessageIcon from '@mui/icons-material/Message';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import TwitterIcon from '@mui/icons-material/Twitter';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TweetBox from '../Feed/TweetBox';
import LeftOptions from './LeftOptions';
import './LeftPart.css';

export default function LeftPart() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenProfile, setIsOpenProfile] = useState(false);
    const [activeIcon, setActiveIcon] = useState(null);
    const [activeMore, setActiveMore] = useState(false);
    const [activeComm, setActiveComm] = useState(false);

    const handleIconClick = (iconName) => {
        if (iconName === activeIcon) {
            setActiveIcon(null);
        } else {
            setActiveIcon(iconName);
        }
    };
    const handleClickProfile = () => {
        setIsOpenProfile(true);
    };

    const closeProfile = () => {
        setIsOpenProfile(false);
    };
    const handleButtonClick = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const IconCommClick = () => {
        setActiveComm(true);
    };

    const closeIconComm = () => {
        setActiveComm(false);
    };

    const moreIconClick = () => {
        setActiveMore(true);
    };
    return (
        <div className="leftPart">
            <Link to="/">
                <TwitterIcon className="twitterIcon" />
            </Link>
            <Link to="/">
                <LeftOptions
                    Icon={HomeIcon}
                    text="Home"
                    iconName="icon1"
                    isActive={activeIcon === 'icon1'}
                    onClick={handleIconClick}
                />
                <span className="hideMe">Home</span>
            </Link>
            <Link to="/explore">
                <LeftOptions
                    Icon={SearchIcon}
                    text="Explore"
                    iconName="icon2"
                    isActive={activeIcon === 'icon2'}
                    onClick={handleIconClick}
                />
                <span className="hideMe">Explore</span>
            </Link>
            <div className="componentsMenu">
                <LeftOptions
                    Icon={NotificationsNoneIcon}
                    text="Notifications"
                    iconName="icon3"
                    isActive={activeIcon === 'icon3'}
                    onClick={handleIconClick}
                />
                <span className="hideMe">Notifications</span>
            </div>
            <Link to="/messages">
                <LeftOptions
                    active
                    Icon={MessageIcon}
                    text="Messages"
                    iconName="icon4"
                    isActive={activeIcon === 'icon4'}
                    onClick={handleIconClick}
                />
                <span className="hideMe">Messages</span>
            </Link>
            <div className="componentsMenu">
                <LeftOptions
                    Icon={ListAltIcon}
                    text="Lists"
                    iconName="icon5"
                    isActive={activeIcon === 'icon5'}
                    onClick={handleIconClick}
                />
                <span className="hideMe">Lists</span>
            </div>
            <div className="componentsMenu">
                <LeftOptions
                    Icon={BookmarkBorderIcon}
                    text="Bookmarks"
                    iconName="icon6"
                    isActive={activeIcon === 'icon6'}
                    onClick={handleIconClick}
                />
                <span className="hideMe">Bookmarks</span>
            </div>
            <div onClick={handleButtonClick} className="componentsMenu">
                <LeftOptions
                    active
                    Icon={VerifiedIcon}
                    text="Verified"
                    iconName="icon7"
                    isActive={activeIcon === 'icon7'}
                    onClick={handleIconClick}
                />
                <span className="hideMe">Verified</span>
            </div>

            <div className="componentsMenu">
                <LeftOptions
                    Icon={PersonOutlineIcon}
                    text="Profile"
                    iconName="icon8"
                    isActive={activeIcon === 'icon8'}
                    onClick={handleIconClick}
                />
                <span className="hideMe">Profile</span>
            </div>

            <div className="componentsMenu" onClick={moreIconClick}>
                <div className="moreOptions">
                    <LeftOptions
                        Icon={MoreHorizIcon}
                        text="More"
                        iconName="icon9"
                        isActive={activeIcon === 'icon9'}
                        onClick={handleIconClick}
                    />
                </div>
                <span className="hideMe">More</span>
            </div>

            <Button
                onClick={IconCommClick}
                className="buttonTweet buttonTweetAfter"
                variant="outlined"
                fullWidth
            >
                Tweet <HistoryEduIcon />
            </Button>

            {activeComm && (
                <div className="modalBackground">
                    <div className="modalTweetDirect">
                        <div className="closeIconComm">
                            <CloseIcon onClick={closeIconComm} />
                        </div>
                        <TweetBox />
                    </div>
                </div>
            )}

            {activeMore && (
                <div className="modalMore">
                    <div className="modalMoreContent">
                        <div className="moreContentText">
                            <BookmarkBorderIcon />
                            <h3>Bookmarks</h3>
                        </div>
                        <div className="moreContentText">
                            <ConnectWithoutContactOutlinedIcon />
                            <h3>Connect</h3>
                        </div>
                        <div className="moreContentText">
                            <HistoryEduIcon />
                            <h3>Drafts</h3>
                        </div>
                        <div className="moreContentText">
                            <CurrencyExchangeRoundedIcon />
                            <h3>Monetization</h3>
                        </div>
                        <hr />
                        <h4>Create Studio</h4>
                        <h4>Professional Tools</h4>
                        <h4>Settings and Support</h4>
                    </div>
                    <div className="modalOverlayProfile" onClick={() => setActiveMore(false)} />
                </div>
            )}
            {isOpen && (
                <div className="modalVerified">
                    <div className="modalContentVerified">
                        <div className="closeIconVerified">
                            <CloseIcon onClick={closeModal} />
                        </div>
                        <div className="boxVerifiedContent">
                            <div className="textModalVerified">
                                <h1>Who are you?</h1>
                                <p>Choose the right Verified subscription for you:</p>
                            </div>
                            <div className="descriptionVerified">
                                <div className="descriptionVerifiedContent">
                                    <p>Premium</p>
                                    <h4>I am an individual</h4>
                                    <p>For individuals and creators</p>
                                </div>
                                <div className="descriptionVerifiedContent">
                                    <p>Verified Organizations</p>
                                    <h4>I am an organization</h4>
                                    <p>For businesses, government agencies, and non-profits</p>
                                </div>
                            </div>
                            <div className="verifiedButton">
                                <p>Subscribe</p>
                            </div>
                            <div className="verifiedBottom">
                                <span>
                                    Learn more about <a href="#">Premium</a> and{' '}
                                    <a href="#">Verified Organizations</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="profileUser" onClick={handleClickProfile}>
                <div className="avatarProfile">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkYUjg_CBCVcYfZHVeBLwI9p9lBWp5TdXow&usqp=CAU" />
                </div>
                <div className="textProfile">
                    <p className="nameProfile">Disca Robert</p>
                    <p className="userProfile">@discarobert</p>
                </div>
                <MoreHorizIcon />
            </div>

            {isOpenProfile && (
                <div className="modalProfile">
                    <div>
                        <p onClick={closeProfile}>Add an existing account</p>
                        <p onClick={closeProfile}>Log out @DiscaRobert</p>
                    </div>
                    <div className="modalOverlayProfile" onClick={() => setIsOpenProfile(false)} />
                </div>
            )}
        </div>
    );
}
