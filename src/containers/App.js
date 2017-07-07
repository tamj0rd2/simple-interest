import React, { Component } from 'react'
import { Results, Settings } from '../components'

class App extends Component {
  render () {
    return (
      <form className="container">
        <Settings />
        <Results />
      </form>
    )
  }
}

export default App
