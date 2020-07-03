import React, { Component } from 'react'

export default class ToDoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props
    return (
      <div className='d-flex justify-content-between border'>
        <div className="item">
          {title}
        </div>
        <div className="buttons">
        <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
        <button type="button" className="btn btn-danger" onClick={handleEdit}>Edit</button>

        </div>
      </div>
    )
  }
}
