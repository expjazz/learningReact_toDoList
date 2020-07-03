import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoInput from "./components/ToDoInput";
import ToDoItem from "./components/ToDoItem";
import ToDoList from "./components/ToDoList";

class App extends Component {
  state = {
    items: [
      { id: 1, title: "wakeup" },
      { id: 2, title: "making breakfast" },
    ],
    id: uuidv4(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    console.log("handlechange");
  };
  handleSubmit = (e) => {
    console.log("handle submit0");
  };
  clearList = () => {
    console.log("clearList ");
  };
  handleEdit = (id) => {
    console.log("handle edit " + id);
  };
  handleDelete = (id) => {
    console.log("handle delete" + id);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <ToDoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <ToDoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
