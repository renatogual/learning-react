import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './Content.css'
import Home from '../../views/examples/Home'
import About from '../../views/examples/About'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </main>
)

export default Content