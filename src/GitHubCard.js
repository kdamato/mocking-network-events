import React, { useEffect, useState } from 'react'
import './App.css'


function GitHubCard() {
  const [gitHubName, setGitHubName] = useState('')     
  const [gitHubURL, setGitHubURL] = useState('')   
  const [gitHubBio, setGitHubBio] = useState('')
  const [gitHubImageURL, setGitHubImageURL] = useState('')              


  useEffect(() => {
      fetch('https://api.github.com/users/kdamato')
      .then(res => res.json())
      .then(data => {
        setGitHubName(data.name)
        setGitHubURL(data.html_url)
        setGitHubBio(data.bio)
        setGitHubImageURL(data.avatar_url)
      })
  }, [])

  return (
    <div className="App">
      <div>
        <h1>Github Profile Info:</h1>
        <h2>{gitHubName}</h2>
        <p>{gitHubBio}</p>
        <a href={gitHubURL}><button>Link to GitHub profile</button></a>
      </div>
      <div className="pt-5">
        <img src={gitHubImageURL} alt='Github profile image' width='200' height='200'/>
      </div>
    </div>
  );
}

export default GitHubCard