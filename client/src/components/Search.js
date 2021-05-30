import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);



    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  render() {
    return (
      <form>
        <div>
        <input
          id="nameInput"
          onChange={this.onHandleChange}
          placeholder="name"
          type="text"
        />
        <input
          id="contentInput"
          onChange={this.onHandleChange}
          placeholder="content"
          type="text"
        />
        <input
          id="dateInput"
          onChange={this.onHandleChange}
          placeholder="date"
          type="date"
        />
        <select id="status">
            <option>status</option>
        </select>
        <br></br>
        <select id="author">
            <option>author</option>
        </select>
        <select id="assign">
            <option>assign</option>
        </select>
        <select id="category">
            <option>category</option>
        </select>
        </div>
        <br></br>
        <button onClick={this.onHandleClear} >
          Clear
        </button>
        <button onClick={this.onHandleSubmit} type="submit">
          Filter
        </button>

      </form>
    );
  }

  onHandleChange(e) {
    this.setState({
      city: e.target.value
    });
  }

  onHandleSubmit(e) {
    e.preventDefault();

  }
  onHandleSubmit(e) {
    e.preventDefault();

    this.nameInput.value = "";
  }
}

export default Search;