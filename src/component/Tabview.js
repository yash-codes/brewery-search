import React, { Component } from 'react';


class Tabview extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      arry: [], show1: true,
    }
  }

  addcard = () => {

    this.setState({ show1: !this.state.show1 });

  }

  showcard = () => {

    if (this.state.show1 == false) {

      return <div style={{ height: "50px", width: "100%", background: "green" }}>{this.props.text == ' ' ? '1 container' : this.props.text + "container"}</div>
    }

  }

  hide = () => {

    this.setState({ show1: true });
  }


  render() {
    return (
      <div className="Tabview">
        <div onClick={this.addcard}
          style={{ height: "80px", width: "100%", background: "red" }}>
          {this.props.text == " " ? "1" : this.props.text}

        </div>
        <div style={{ marginTop: "20px", marginBottom: "20px" }} onClick={this.hide}>{this.showcard()}</div>

      </div>
    );
  }
}

export default Tabview;
