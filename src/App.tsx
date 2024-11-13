import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter";
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect";
import { MiPrimerComponent } from "./components/MiPrimerComponent/MiPrimerComponent";

export const App = () => {

  return (
    <div style={{display:"flex", flexDirection:"column", gap:"2v" }}> 
    <MiPrimerComponent 
    text={"Texto desde propiedades"} 
    color="red" 
    fontSize={6}
    />
    <ComponentCounter />
    <ComponentUseEffect/>
    </div>
  );
};
