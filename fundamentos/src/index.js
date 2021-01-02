import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

ReactDOM.render(
    <div>
        <Primeiro />
        <ComParametro 
            titulo="Segundo Componente" 
            aluno="José Renato"
            nota={9.0}
        />
        <Fragmento />
    </div>, 
    document.getElementById('root')
)