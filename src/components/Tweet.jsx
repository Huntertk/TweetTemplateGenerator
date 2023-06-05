import React from 'react';
import './tweet.scss';
import { FaTwitter,FaRetweet } from "react-icons/fa"
import { MdVerified } from "react-icons/md"
import { BiMessageRounded } from "react-icons/bi"
import { AiOutlineHeart } from "react-icons/ai"
import { FiShare } from "react-icons/fi"

import userImg from '../assets/pngegg.png'



const Tweet = (props) => {
    const time = new Date()
    // console.log(time.toLocaleTimeString());
  return (
    <div className='main-container'>
      <div className="wrapper">
        <div className="account-details">
            <img src={userImg} alt="user-img" className='img' />
            <div className="details">
                <p className='name'>{props.userInput.name} <MdVerified className='verified logo' /></p>
                <p className="username">@{props.userInput.userName}</p>
            </div>
        </div>
        <FaTwitter className='twitter logo' />
      </div>
      <div className="tweets-container">
        <p className="tweets">{props.userInput.tweet}</p>
      </div>
        <div className="bottom-container">
            <div className="date-section">
                <p>{time.toLocaleTimeString()}</p>
                <p>{time.toLocaleDateString()}</p>
            </div>
            <div className="botton-icon-container">
                <BiMessageRounded className='icon'/>
                <FaRetweet className='icon'/>
                <AiOutlineHeart className='icon'/>
                <FiShare className='icon'/>
            </div>
        </div>
    </div>
  )
}

export default Tweet
