import React, { Component } from 'react';

class InitialView extends React.Component {

    render() {
        return (
            <div className="InitialView">
                <img style={{ color: "red", height: "100px", width: "200px", textAlign: "center" }} src={require('../logo.png')} />
                <input style={{ color: "red", height: "100px", width: "200px", textAlign: "center" }}></input>
                <button>search</button>
            </div>
        )
    }
}

export default InitialView