import { useState } from "react";

import Perfil from "./components/Perfil";
import ReposList from "./components/RepoList";
import InputNome from "./components/InputNome";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      <InputNome setNomeUsuario={setNomeUsuario} />
      {nomeUsuario.length >=4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
    </>
  )
    
}

export default App
