import React, { useState, useEffect } from 'react';
import api from './services/api'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import DevForm from './Components/DevForm'
import DevItem from './Components/DevItem'

function App() {
  const [devs, setDevs] = useState([])

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs')

      setDevs(response.data)
    }
    loadDevs()
  }, [])

   async function handleAddDev(data) {

    const response = await api.post('/devs', data)

    setDevs([...devs, response.data])
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
<<<<<<< HEAD
          <li key={dev._id} className="dev-item">
            <header>
              <img src={dev.avatar_url} alt={dev.name}/>
              <div className="user-info">
                <strong>{dev.name}</strong>
                <img className="profile-edit" src="https://img.icons8.com/material-sharp/24/000000/edit-user-male.png" alt="Edit Profile"/>
                <span>{dev.techs.join(', ')}</span>
              </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil no Github</a>
          </li>
=======
            <DevItem key={dev._id} dev={dev}/>
>>>>>>> cd82bff0d21ecd229a1ebb3b9bd08b94a50ec7f9
          ))}          
        </ul>
      </main>
    </div>
  )
}

export default App;
