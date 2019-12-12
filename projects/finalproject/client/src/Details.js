import React, { Component } from 'react'
import axios from 'axios'
import './detailStyles.css'
import { withRouter } from 'react-router-dom';

class Details extends Component {
    constructor() {
        super()
        this.state = {
            storage: []
        }
    }

    componentDidMount() {
        let {_id} = this.props.match.params
        axios.get(`/profileItems/${_id}`).then(res => {
            this.setState({storage: res.data})
        })
    }

    render() {
        let {name} = this.state.storage
        return (
            <div>
            <button onClick={this.props.history.goBack}>Back</button>
                <h1>{name}</h1>
            </div>
        )
    }
}

export default withRouter(Details)