import React, {useState} from "react";
/* Imports dos cadastros */
import { CadastroCliente } from "./componentes/CadastroCliente";
import { CadastroSuporte } from "./componentes/CadastroSuporte";
import { CadastroAdm } from "./componentes/CadastroAdm";
import "./styles/registro.css"

const Cadastro = () =>{
    const [tipoCadastro, setTipoCadastro] = useState(null);

    const EscolherCadastro = (tipo:any) =>{
        setTipoCadastro(tipo);
    }
    return(
        
        <div className="bodyCadUser">

            <div className="tipoCad">
                <h2>Escolha o tipo de cadastro: </h2> 
                <button className="buttonCadUser" onClick={() => EscolherCadastro('cliente') }>Cliente</button>
                <button className="buttonCadUser" onClick={()=> EscolherCadastro('suporte')}>Suporte</button>
                <button className="buttonCadUser" onClick={() => EscolherCadastro('adm')}>Administrador</button>
                <button className="buttonCadUser"  >Equipamentos</button>
            </div>
            

            {tipoCadastro === 'cliente' && <CadastroCliente/>}
            {tipoCadastro === 'suporte' && <CadastroSuporte/>}
            {tipoCadastro === 'adm' && <CadastroAdm/>}
        </div>
    )
}

export default Cadastro;

