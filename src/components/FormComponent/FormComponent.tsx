import { ChangeEvent, useState } from "react";

export const FormComponent = () => {
        const[values,setValues] = useState ({
            email: "",
            nombre: "",
            edad :0,
        });

        const{email, nombre, edad}=values;

    const handleSubmiForm = () => {
        console.log({email, nombre, edad});
    };

    const handleChange= (event:ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;
        if(name != "edad"){
            setValues({...values,[`${name}`]:value})
        } else {
            setValues({...values,[`${name}`]:parseInt(value)})
        }
    };

  return (
    <div>
        <div>
            <h2>Formulario</h2>
        </div>

        <div style={{display:"flex", flexDirection: "column", gap:"2vh"}}>
        
          <input value={email} name="email" onChange={handleChange} type="email" placeholder="example@gmail.com"/>

          <input value={nombre} name="nombre" onChange={handleChange} type="text" placeholder="Nombre"/>
         
         <input value={edad} name="edad" onChange={handleChange} type="number" placeholder="Edad"/>
        </div>

        <div>
            <button onClick={handleSubmiForm}>Enviar</button>
        </div>


    </div>
  );
};

