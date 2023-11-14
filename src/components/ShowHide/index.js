// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isShowHide: true, isLastName: true}

  onShowHideFirstName = () => {
    this.setState(prevState => ({isShowHide: !prevState.isShowHide}))
  }

  onShowHideLastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isShowHide, isLastName} = this.state

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="names-container">
            <button
              className="first-name"
              type="button"
              onClick={this.onShowHideFirstName}
            >
              Show/Hide Firstname
            </button>
            {!isShowHide && <p className="firstName"> Joe </p>}
          </div>
          <div className="names-container">
            <button
              className="first-name"
              type="button"
              onClick={this.onShowHideLastName}
            >
              Show/Hide Lastname
            </button>
            {!isLastName && <p className="firstName"> Jonas </p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
