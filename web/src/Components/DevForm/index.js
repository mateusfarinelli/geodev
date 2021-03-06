import React, {useEffect, useState} from 'react';

import './style.css'

function DevForm( { onSubmit }) {

  const [github_username, setGithubUserName] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords

        setLatitude(latitude)
        setLongitude(longitude)
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000,
      }
    )
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()

    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude
    })
    
    setGithubUserName('');
    setTechs('');
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="input-block">
      <label htmlFor="github_username">Usuario do Github</label>
      <input 
      name="github_username" 
      id="username_github" 
      required
      vaule={github_username}
      onChange={e =>setGithubUserName(e.target.value)}
      />
    </div>

    <div className="input-block">
      <label htmlFor="techs">Tecnologias</label>
      <input 
      name="techs" 
      id="techs" 
      required             
      vaule={techs}
      onChange={e =>setTechs(e.target.value)}
      />
    </div>

    <div className="input-group">
      <div className="input-block">
        <label htmlFor="latitude">Latitude</label>
        <input 
        type="Number"
        name="latitude" 
        id="latitude" 
        required
        value={latitude}
        onChange={e =>setLatitude(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="logintude">Logintude</label>
        <input 
        type="Number"
        name="logintude" 
        id="logintude" 
        required
        value={longitude} 
        onChange={e =>setLongitude(e.target.value)}
        />
      </div>         
    </div>

    <button type="submit">Salvar</button>
  </form>
  )
}

export default DevForm