import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

function reducer(state, action) {
    switch (action.type) {
        case 'addNumber':
            return { ...state, number: state.number + 1 }
        case 'subNumber':
            return { ...state, number: state.number - 1 }
        case 'addEspecialNumber':
            return { ...state, number: state.number + action.n }
        case 'login':
            return { ...state, user: 'renato' }
        default:
            return state
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ?
                    <span className="text">{state.user}</span>
                    : <span className="text">Não logado</span>
                }
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => dispatch({ type: 'login' })}>Login</button>
                    <button className="btn" onClick={() => dispatch({ type: 'addNumber' })}>+1</button>
                    <button className="btn" onClick={() => dispatch({ type: 'subNumber' })}>-1</button>
                    <button className="btn" onClick={() => dispatch({ type: 'addEspecialNumber', n: 10})}>+10</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
