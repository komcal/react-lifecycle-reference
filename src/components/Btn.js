import React, {Component} from 'react'

class Btn extends Component {
  constructor () {
    super()
    this.state = {
      value: 0
    }
    this.update = this.update.bind(this)
  }
  update () {
    this.setState({value: this.state.value + 1})
  }
  componentWillMount () {
    console.log('Mounting')
    this.setState({m: 2})
  }
  componentDidMount () {
    console.log('Mounted')
    this.intervalId = setInterval(this.update, 500)
  }
  componentWillUnmount () {
    console.log('Delete')
    clearInterval(this.intervalId)
  }
  shouldComponentUpdate (nextProps, nextState) {
    return nextState.value % 5 === 0
  }
  componentDidUpdate (prevProps, prevState) {
    console.log('prevState', prevState)
  }
  render () {
    console.log('rendering')
    return (
      <button onClick={this.update}>
        {this.state.value * this.state.m}
      </button>
    )
  }
}
export default Btn
