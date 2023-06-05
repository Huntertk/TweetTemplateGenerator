import React, { useState } from 'react'
import './App.scss'
import Tweet from './components/Tweet'
import Form from './components/Form'
const App = () => {
  const [isTweetGenerate, setIsTweetGenerate] = useState(false)

  const [userInput, setUserInput] = useState({
    name: "",
    userName:"",
    tweet:""
  })
console.log(userInput);
  const handleChange = (e) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsTweetGenerate(true)
  }
  const handleTweetGenerate = () =>{
    if(isTweetGenerate){
      setIsTweetGenerate(false)
      setUserInput((prev) => {
        return {
          name: "",
          userName:"",
          tweet:""
        }
      })
    }

  }

  return (
    <div className='main'>

      {
        isTweetGenerate ?
        <>
        <Tweet userInput={userInput} />
        <button className='btn create-new-btn' onClick={handleTweetGenerate}>Create New Tweet</button>
        </> :
        <Form handleChange={handleChange} userInput={userInput} handleSubmit={handleSubmit}/> 

      }
      
    </div>
  )
}

export default App
