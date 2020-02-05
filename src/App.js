// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Addmodule from './Addmodule.js';
// import Deletemodule from './Deletemodule.js';
// import { Component } from 'react';
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.addonclick = this.addonclick.bind(this);
//     this.state = {
//       items: []
//     };
//   }
//   addonclick = (e) => {
//     if (this._inputElement.value != "") {
//       var newitem = {
//         text: this._inputElement.value,
//         key:Date.now()
//       };

//       this.setState((prevState) => {
//         return {
//           items: prevState.items.concat(newitem)
//         };
//       }
//       )
//     }
//       this._inputElement.value="";
//       console.log(this.state.items);
//       e.preventDefault();
//     }
//   render() {
//     return (
//       <div className="App">
//         <h1>To-Do List</h1>
//         <input type="text" ref={(a) => this._inputElement = a} id="k" placeholder="add task" />
//         <button type="submit" onClick={this.addonclick}>Add</button>
//         <Addmodule entries={this.state.items}/>
//       </div>
//     );
//   }
// }

// export default App;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  state = {
    item: '',
    list: [],
  }
  inputChangeHandler = (input) => {
    this.setState({
      item: input
    });
  }
  addToList = (input) => {
    if(input!=""){
    let it = {
      value: input,
      done: false,
      edit: false
    }
    let newList = [
      ...this.state.list,
      it
    ]
    this.setState({
      item: '',
      list: newList
    })
  }}
handleDelete = (itemIndex) => {
  this.state.list.splice(itemIndex, 1);
  this.setState({ list: this.state.list });
}
handleDone = (itemIndex) => {
  let newList=this.state.list.map((value, index) => {
    if (index === itemIndex){
      return {
        ...value,
       done: true
      }
    }
    else
    return{...value}
  })
  this.setState({
    list:newList
  })
}
handleEdit=(itemIndex)=>{
  let newList=this.state.list.map((value,index)=>{
    if(index===itemIndex){
      return {
        ...value,
       edit: true
      }
    }
    else
    return{...value}
    }
  )
  this.setState({
    list:newList
  })
}
handleSave=(itemIndex)=>{
  let newList=this.state.list.map((value,index)=>{
    if(index===itemIndex){
      return {
        ...value,
       edit: false
      }
    }
    else
    return{...value}
    }
  )
  this.setState({
    list:newList
  })
}
render() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="App-title">TODO APP</h1>
      </header>
      <div>
        <input
          className="input"
          onChange={(e) => this.inputChangeHandler(e.target.value)}
          value={this.state.item}
          type="text"
          placeholder="Add your task"
        >
        </input>
        <button
          className="Add"
          type="submit"
          onClick={() => this.addToList(this.state.item)}
        >Add</button>
        {this.state.list.map((item, index) =>
          // <li className="List">
          <div className="txtb" style={{textDecoration: this.state.list[index].done ? 'line-through' : 'none'}}>
          <span contentEditable ={this.state.list[index].edit? "true" : "false" }>
            {" " + item.value}</span>
            <button className="delete" onClick={(event) => this.handleDelete(index)}>Delete</button>
            <button className="edit" onClick={(event) => this.handleEdit(index)} onDoubleClick={(event) => this.handleSave(index)}>Edit</button>
            <button className="done" onClick={(event) => this.handleDone(index)}>Done</button>
          </div>
        )}
      </div>
    </div>
  );
}
}
export default App;
