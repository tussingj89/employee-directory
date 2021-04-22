import React, { Component } from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";
import API from "../utils/API";

export default class DataArea extends Component {
  state = {
    users: [{}],
    order: "descend",
    filtered: [{}]
  }
  headings = [
    { name: "Name", width: "10%" },
    { name: "Image", width: "10%" },
    { name: "Email", width: "10%" },
    { name: "Gender", width: "10%"},
    { name: "Phone", width: "20%" },
    { name: "DOB", width: "10%" },
    { name: "Location", width: "10%"}
  ]

  handleSort = heading => {
    if (this.state.order === "descend") {
      this.setState({
        order: "ascend"
      })
    } else {
      this.setState({
        order: "descend"
      })
    }

    const sortedUsers = this.state.filtered.sort();
    this.setState({ filtered: sortedUsers });
  }

  handleSearchChange = event => {
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.users.filter(item => {
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filtered: filteredList });
  }


  componentDidMount() {
    API.getUsers().then(results => {
      this.setState({
        users: results.data.results,
        filtered: results.data.results
      });
    });
  }

  render() {
    return (
      <>
        <Nav handleSearchChange={this.handleSearchChange} />
        <div className="data-area">
          <DataTable
            headings={this.headings}
            users={this.state.filtered}
            handleSort={this.handleSort}
          />
        </div>
      </>
    );
  }
}