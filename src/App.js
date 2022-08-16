import React, { Component } from "react";
import List from "./Components/List";
import "./App.css";
class App extends Component {
  state = {
    articles: [
      {
        id: 0,
        name: "PC portable",
        price: 55,
        qte: 0,
        image:
          "https://www.affariyet.com/54419-large_default/pc-portable-lenovo-ip-3-15iil05-i5-1135g7-8go1to-256-nvme-gris-81x8009yfe8go1to256.jpg",
      },
      {
        id: 1,
        name: "ipod",
        price: 20,
        qte: 0,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTE1odpYScY7-cBex7JBx1VNLa9AnT6OpL9A&usqp=CAU",
      },
    ],
    sum: 0,
  };
  incrementQuantity = (id) => {
    this.setState({
      articles: this.state.articles.map((elt) => {
        if (elt.id == id) {
          return { ...elt, qte: elt.qte + 1 };
        } else {
          return elt;
        }
      }),
    });
  };
  decrementQuantity = (id) => {
    this.setState({
      articles: this.state.articles.map((elt) => {
        if (elt.id == id && elt.qte > 0) {
          return { ...elt, qte: elt.qte - 1 };
        } else {
          return elt;
        }
      }),
    });
  };
  delete = (article) => {
    this.setState({
      articles: this.state.articles.filter((elt) => elt.id!==article.id),
      sum: this.state.sum- article.qte*article.price
    });
  };
handleTotalIncrement=(article)=>{
 this.setState({sum: this.state.sum + article.price})
};

handleTotalDecrement = (x) => {
  if (this.state.sum > 0||x.qte>0) {
    this.setState({ sum: this.state.sum - x.price });
  }
};
  render() {
    const { articles, sum } = this.state;
    return (
      <div className="App">
        <List
          articles={articles}
          sum={sum}
          incrementQuantity={this.incrementQuantity}
          decrementQuantity={this.decrementQuantity}
          delete={this.delete}
          handleTotalIncrement={this.handleTotalIncrement}
          handleTotalDecrement={this.handleTotalDecrement}

        />
      </div>
    );
  }
}
export default App;
