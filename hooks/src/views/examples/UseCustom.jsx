import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../myHooks/useCounter'
import { useFetch } from '../../myHooks/useFetch'

const UseRef = (props) => {
    const [counter, inc, dec] = useCounter()
    const url = 'http://files.cod3r.com.br/curso-react/estados.json'

    const response = useFetch(url)

    function showStates(states) {
        return states.map(state => <li key={state.nome}>{state.nome} - {state.sigla}</li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exercicío #01" />
            <div className="center">
                <span className="text">{counter}</span>
                <div>
                    <button className="btn" onClick={() => dec()}> -1 </button>
                    <button className="btn" onClick={() => inc()}> +1 </button>
                </div>
            </div>

            <SectionTitle title="Exercicío #02" />
            <div className="center">
                <ul>
                    {response.data ? showStates(response.data) : 'Vazio'}
                </ul>
            </div>
        </div>
    )
}

export default UseRef
