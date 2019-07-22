import React from 'react';

class FormTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            point: 0
        }
        this.updateState = this.updateState.bind(this);
    };
    updateState(e) {
        this.setState(
            { [e.target.name]: e.target.value }
        );

    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.data} name="data"
                    onChange={this.updateState} />
                <h4>{this.state.data}</h4>
                <input type="number" value={this.state.point} name="point"
                    onChange={this.updateState} />
                <h4>{this.state.point}</h4>
            </div>
        );
    }
}
export default FormTest;