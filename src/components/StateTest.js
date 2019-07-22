import React, { Component } from 'react'

export default class StateTest extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler() {
        console.log(" button pressed here!")
        this.setState((preState) => {
            return {
                count: preState.count + 1
            }
        })
    }


    render() {
        return (
            <div>
                <h1>Number : {this.state.count}</h1>
                <br />
                <button onClick={this.changeHandler}>Change</button>
            </div>
        )
    }
}