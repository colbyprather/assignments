import React, { Component } from 'react';
import { withProvider } from './MainProvider';
import {Link} from 'react-router-dom';
import './profilesItemsStyles.css'


class Item extends Component {
    constructor() {
        super()
        this.state = {
            itemInfo: {},
        }
    }

    render() {
        let {name, _id} = this.props;
        return (
            <div className="productinfo">
                <Link className='productName' to={`/details/${_id}`}>
                    <h2 className="nameItem">{name}</h2>
                </Link>
            </div>
        )
    }
}


export default withProvider(Item);