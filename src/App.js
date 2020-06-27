import React from 'react'
import { Route } from 'wouter'

import './App.css'
import Home from './pages/home'
import SearchResults from './pages/search-results'
import Details from './pages/details'
import { GifsContextProvider } from './context/GifsContext'

const App = () =>
  (
    <div className="App">
      <section className="App-content">
        <h1>Gifo</h1>
        <GifsContextProvider>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword" component={SearchResults} />
          <Route path="/gif/:id" component={Details} />
          <Route path="/404" component={() => <h1>404 ERROR :(</h1>} />
        </GifsContextProvider>
      </section>
    </div>
  )

export default App
