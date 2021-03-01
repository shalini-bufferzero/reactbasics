import React, { Component } from "react";
import "./app.css";

class Demo extends Component {
  styles = {
    fontSize: 50,
    fontWeight: "bold",
    color: "orange",
  };

  render() {
    return (
      <div>
        {/* <marquee behavior="" direction="rtl"> */}
          <span style={this.styles}> HelloWorld </span>
        {/* </marquee> */}
      </div>
    );
  }
}

export default Demo;
