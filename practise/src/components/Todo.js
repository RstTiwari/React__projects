import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super()
        this.setUserInput= this.setUserInput.bind(this)
        this.state({
            userInput:""
        })
    }

    // Defining the userinput value should
    setUserInput (e){
        this.setState({
            userInput: e.target.value
        })


    }
  render() {
    return (
      <div>
          <form>
              <input 
              type="text"
              Placeholder="Add Task"
              value={this.userInput}
              onChange={this.setUserInput}
              
              />
          </form>
      </div>
    )
  }
}
