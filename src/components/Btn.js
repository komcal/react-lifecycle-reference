import React, {Component} from 'react'

let Mixin = InnerComponent => class Mixed extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 0
    }
    this.update = this.update.bind(this)
  }
  update () {
    this.setState({value: this.state.value + 1*this.state.m})
  }
  componentWillMount () {
    console.log('Mounting')
    this.setState({m: this.props.m})
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
  render() {
    return <InnerComponent
      update={this.update}
      {...this.state}
      {...this.props} />
  }
}
const Button = (props) => <button
                            onClick={props.update}>
                            {props.txt} - {props.value}
                          </button>

let ButtonMixed = Mixin(Button)
let TestMixed = Mixin(Button)
class Btn extends Component {
  render () {
    console.log('rendering')
    return (
      <div>
        <ButtonMixed txt='Button' m={2}/>
        <TestMixed txt='Test' m={3}/>
      </div>
    )
  }
}
export default Btn
