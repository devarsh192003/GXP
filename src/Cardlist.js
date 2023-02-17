import Data from "./data.json"
import Card from "./Card";
import React, { Component} from "react";

export default class Cardlist extends Component {
  render() {
    return (
        <section className="card">
        <div className="row">
          {Data.data.map((data) => {
            return(<Card
              title={data.title}
              body={data.body}
              imageUrl={data.imageUrl}
            />)
          })}
        </div>
      </section>
    );
  }
}