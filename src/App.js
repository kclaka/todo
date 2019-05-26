import React, {Component} from 'react';
//import logo from './logo.svg';
//import './App.css';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : "Kenny"
        }
    }

    changeStateData = ()=>{
        this.setState({
            username : this.setState.username === "Kenny" ? "Claka" : "Eekne"
        })
}
  render(){
    return(
        <div>
          <h4 className="bg-primary text-white text-center p-2">
              {this.state.username}'s To Do List
          </h4>
            <button className="btn btn-primary m-2" onClick={this.changeStateData}>
                Change
            </button>
        </div>
    )

  };
}