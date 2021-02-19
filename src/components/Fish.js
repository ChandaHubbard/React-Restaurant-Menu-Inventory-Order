import React, { Component } from 'react'
import {formatPrice} from '../helpers'

export default class Fish extends Component {
 
    render() {
        const {name, image, desc, status, price} = this.props.details;
        const isAvailable = status === 'available'
       
        return (
            <li className="menu-fish">
                <img src={image} alt={name}/>
                <h3 className="fish-name">{name}</h3>
                <span className="price">{formatPrice(price)}</span>
                <p>{desc}</p>
                <button 
                disabled={!isAvailable}
                onClick={() => {
        this.props.addToOrder(this.props.index)
    }}>{isAvailable ? 'Add To Order' :  'Sold Out!'}</button>
            </li>
        )
    }
}
