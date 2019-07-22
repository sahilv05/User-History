import React, { Component } from "react"

export default class LoginTest extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        return (
            < div >
                <h1>You are currently logged {this.state.isLoggedIn ? "IN" : "OUT"}</h1>
            </div >

        )

    }
}

