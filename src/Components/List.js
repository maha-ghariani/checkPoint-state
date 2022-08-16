import React, { Component } from "react";
import SingleItem from "./SingleItem";

class List extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
      <div>
      <div style={{display:'flex',margin:"80px auto 40px 1170px"}}>
          <h2>Total Sum : </h2>
          <h3>{this.props.sum}</h3>
          <h3> $</h3>
        </div>

        {this.props.articles.map(elt=>(
            <SingleItem key={elt.id}  
                         elt={elt} 
                         incrementQuantity={this.props.incrementQuantity} 
                         decrementQuantity={this.props.decrementQuantity} 
                         delete={this.props.delete} 
                         handleTotalIncrement={this.props.handleTotalIncrement}
                         handleTotalDecrement={this.props.handleTotalDecrement}
                         
                         
                         />
        ))}
     



        
      </div>
    );
  }
}
export default List;
