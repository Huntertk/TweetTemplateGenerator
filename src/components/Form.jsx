import React from 'react'
import './form.scss'

const Form = (props) => {
    

  return (
    <form onSubmit={(e) => props.handleSubmit(e)}  className='form-container'>
        <h1>Create New Tweet</h1>
        <input 
        onChange={(e) => {props.handleChange(e)}} 
        type="text" 
        value={props.userInput.name} 
        name='name'
        className="user-input"
        placeholder="Enter Your Name"
        required
        />

        <input 
        onChange={(e) => {props.handleChange(e)}} 
        type="text" 
        value={props.userInput.userName} 
        name='userName'
        className="user-input"
        placeholder="Enter User Name"
        required
        />
        
        <textarea 
        onChange={(e) => {props.handleChange(e)}} 
        type="text" 
        value={props.userInput.tweet} 
        name='tweet'
        className="user-input tweet-input"
        placeholder="Write Tweets...."
        required
        />
        <button className='btn create-btn'>Generate Tweeet</button>
      </form>
  )
}

export default Form
