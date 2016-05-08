import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Btn from './Btn'
class App extends Component {
  constructor () {
    super()
  }
  mount () {
    ReactDOM.render(<Btn />, document.getElementById('a'))
  }
  unmount () {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render () {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>UnMount</button>
        <div id='a'></div>
      </div>
    )
  }
}
export default App
