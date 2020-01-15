import React from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input name="github_username" id="username_github" required/>
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div class="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>

            <div class="input-block">
              <label htmlFor="logintude">Logintude</label>
              <input name="logintude" id="logintude" required/>
            </div>         
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/45761238?s=460&v=4" alt="Mateus Farinelli"/>
              <div className="user-info">
                <strong>Mateus Farinelli</strong>
                <span>Node.js, React Native, ReactJs</span>
              </div>
            </header>
            <p>Um cara muito engraçado</p>
            <a href="https://github.com/mateusfarinelli">Acessar Perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default App;
