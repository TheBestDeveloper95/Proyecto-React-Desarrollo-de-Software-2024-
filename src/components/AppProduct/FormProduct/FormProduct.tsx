import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"
import { useForm } from "../../../hooks/useForm"


export const FormProduct = () => {
 
    const {handleChange, values, resetForm}= useForm(
        {
            nombre:"",
            imagen:"",
            precio:0
        });

        const handleSubmitForm = () => {
        }
    return (
    <Form className="p-4 border rounded m-3">
        <FormGroup controlId="forNombre">
            <FormLabel>Nombre</FormLabel>
            <FormControl 
            type="text" 
            name= "nombre" 
            placeholder="Ingrese Nombre Del Producto"
            value={values.nombre}
            onChange={handleChange}
            />
        </FormGroup>

        <FormGroup controlId="forNombre">
            <FormLabel>Imagen</FormLabel>
            <FormControl 
            type="text" 
            name= "imagen" 
            placeholder="Ingrese Imagen Del Producto"
            value={values.imagen}
            onChange={handleChange}
            />
        </FormGroup>


        <FormGroup controlId="forNombre">
            <FormLabel>Precio</FormLabel>
            <FormControl 
            type="number" 
            name= "precio" 
            placeholder="Ingrese El Precio Del Producto"
            value={values.precio}
            onChange={handleChange}
            />
        </FormGroup>


    </Form>
  )
}
