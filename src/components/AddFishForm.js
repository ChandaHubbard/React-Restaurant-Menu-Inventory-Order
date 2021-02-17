import React, { Component } from 'react'

export default class AddFishForm extends Component {
    nameRef
    priceRef
    statusRef
    descRef
    imageRef
    
    createFish = (event) => {
        // 1. stop the form from submitting
        event.preventDefault();
        console.log("Making a Fish")
    }
    render() {
        return (
          <form className="fish-edit" onSubmit={this.createFish}>
            <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
            <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
            <select name="status"ref={this.statusRef} >
              <option value="available">Fresh!</option>
              <option value="unavailable">Sold Out!</option>
            </select>
            <textarea name="desc" ref={this.descRef} placeholder="Desc" />
            <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
            <button type="submit">+Add Fish</button>
          </form>
        );
    }
}
