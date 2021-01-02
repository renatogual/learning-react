import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDOM.render(
    <div>
        <Primeiro />
        <ComParametro 
            titulo="Segundo Componente" 
            aluno="José Renato"
            nota={9.0}
        />
    </div>, 
    document.getElementById('root')
)