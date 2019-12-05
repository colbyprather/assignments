import React, { Component } from 'react';
import {withProvider} from './MainProvider'


class Search extends Component {
    constructor(props) {
        super(props)
        // console.log(props)
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        this.props.getPokeSearch()
        // this.props.getInfo()
    }

    filterList = (event) => {
        let items = this.props.content;
        let {value} = event.target
        this.setState({items: items.filter((item) => item.name.toLowerCase().search(value.toLowerCase()) !== -1)})
    }

    // handleChange = () => {
    //     this.setState({
    //         initialItems: this.props.content,
    //         item: this.props.content
    //     })
    // }

    

    render() {
        return (
            <div>
                <form>
                    <input className='searchBox' type='text' placeholder='Search' onChange={this.filterList}/>
                </form>
                <div>
                    {
                        this.state.items.map(function(item) {
                            return <Link key={item.name} onClick={() => this.props.getInfo(item.url)}>{item.name}</Link>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default withProvider(Search);