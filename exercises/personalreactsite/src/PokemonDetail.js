import React, { Component } from 'react';
import {withProvider} from './MainProvider'
import SearchBar from './SearchBar'

class SearchPage extends Component {
    componentDidMount() {
        this.props.getInfo()
    }
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

export default withProvider(SearchPage);