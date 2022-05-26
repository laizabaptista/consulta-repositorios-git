import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [ usuario, setUsuario] = useState('');
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(Response => console.log(Response.data));
  }
  return (
    <>
      <input className="usuario" placeholder="Usuário" value={usuario} onChange={ e => setUsuario(e.target.value)} />
      <button type="button" onClick= {handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default App;
