import React, {Component} from 'react';
//import logo from './logo.svg';
//import './App.css';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : "Kenny",
            todoItems : [{action:"Go to Ncore"},
                         {action:"Get Quaters for laundry"},
                         {action:"Pack my bags for my trip"},
                         {action:"Get a Drink with Abel"}],
            newItemText: ""
        }
    }

    updateNewTextValue = (event) =>{
        this.setState({newItemText : event.target.value});

    }

    createNewToDo = () =>{
        if(this.state.todoItems
            .find(item => item.action === this.state.newItemText)){
            this.setState({
                todoItems:[...this.state.todoItems, {action: this.state.newItemText, done: false}],
                newItemText: ""
            })
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
              ({this.state.todoItems.filter(t => !t.done).length} items to do)
          </h4>
            <div className="container-fluid">
                <div className="my-1">
                    <input className="form-control"
                           value={this.state.newItemText}
                           onChange={this.updateNewTextValue}/>
                    <button className="btn btn-primary mt-1"
                            onClick={this.createNewTodo}>Add</button>
                </div>
            </div>
        </div>
    )

  };
}