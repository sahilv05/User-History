import React, { Component } from 'react'

export default class ConditionalRenderComponent extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            character: {}

        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    isLoading: false,
                    character: data
                })
            })
        // setTimeout(() => {
        //     this.setState(
        //         { isLoading: false }
        //     )
        // }, 2000)
    }
    render() {
        if (this.state.isLoading) {
            return (
                <p>Loading ... Please Wait!!</p>
            )
        } else {
            return (
                <div><h5><font color="red">Hello {this.state.character.name}, Have a good day.</font></h5></div>
            )
        }

    }
}