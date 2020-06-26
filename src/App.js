import React from 'react'
import { Route } from 'wouter'

import './App.css'
import GifsList from './components/gifslist/GifsList'

const App = () =>
  (
    <div className="App">
      <section>
        <h1>App</h1>
        <Route path='/gif/:keyword' component={GifsList} />
      </section>
    </div>
  )

export default App
