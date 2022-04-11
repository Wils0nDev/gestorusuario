import { useState } from 'react'
import Card  from './components/card'
import  Layout from './components/layout'
import FormularioUser from './components/formularioUser'

 

function App() {

  const [usuarios, setUsuarios] = useState([])

  const submit = (usuario) => {
    
    setUsuarios([
      ...usuarios,
      usuario
    ])

  }


  console.log(usuarios)

  return (
    <Layout>
    <Card>
      <FormularioUser submit={submit}  />
    </Card>
    <Card>
      <ul>
        {usuarios.map(u => 
          
        <li key={u.correo}> {u.name} {u.apellido} - {u.correo} </li>
          )}
      </ul>
    </Card>
    </Layout>

  );
}

export default App;
