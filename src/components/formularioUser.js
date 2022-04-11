import Input  from '../components/input'
import Button  from '../components/button'
import useFormulario from '../hooks/useFormulario'

const FormularioUser = ({submit}) => {

    const [formulario,handleChange,reset] = useFormulario({name:'', apellido: '', correo: ''})
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        submit(formulario)
        reset();

    }
    return (
        <form onSubmit={handleSubmit} >
      <Input 
          label='Nombre:'
          name='name'
          placeholder='Nombre'
          value={formulario.name}
          onChange={handleChange}
       />
      <Input 
          label="Apellido"
          name='apellido'
          placeholder='Apellido'
          value={formulario.apellido}
          onChange={handleChange}
       />
      <Input 
          label="Correo:"
          name='correo'
          placeholder='Correo'
          value={formulario.correo}
          onChange={handleChange}
       />
       <Button  > Enviar </Button>
    </form>
    )
}

export default FormularioUser;