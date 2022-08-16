import React, { Component } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

 class SingleItem extends Component {
    constructor(props){
        super(props);
    }
    handleIncrement=()=>{
      this.props.incrementQuantity(this.props.elt.id);
      this.props.handleTotalIncrement(this.props.elt);
    }
    handleDecrement=()=>{
      this.props.decrementQuantity(this.props.elt.id);
      this.props.handleTotalDecrement(this.props.elt);
    }
    handleDelete=()=>{
      this.props.delete(this.props.elt)
    }
  render() {
    return (
        <div style={{ height:500,width:650,display:'flex',alignItems:'center',justifyContent:'center',marginBottom: "10px", border:'1px solid black',marginLeft:400}}>
        <div>
          <Card.Text>
          <img src={this.props.elt.image} alt={this.props.elt.name} width="350px"/>
          <Card.Title>{this.props.elt.name}</Card.Title>
            {this.props.elt.price}
          </Card.Text>
          <Button variant="primary" onClick={this.handleDelete}>Delete</Button>
          </div>
          <div style={{display:'flex',marginLeft:100}}>
          <Button variant="success" onClick={this.handleIncrement}> + </Button>
          <span style={{fontSize:30}}>{this.props.elt.qte}</span>
          <Button variant="danger" onClick={this.handleDecrement} > - </Button>{' '}
          </div>
        
      </div>
    )
  }
}

export default SingleItem;