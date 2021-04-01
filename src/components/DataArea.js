import React, { Component } from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";
import API from "../utils/API";

export default class DataArea extends Component {
  constructor() {
    super();
    this.state = {
      users: [{}],
      order: "descend",
      filteredUsers: [{}],
      headings: [
        { name: "Name", width: "10%" },
        { name: "Image", width: "10%" },
        { name: "Email", width: "20%" },
        { name: "Phone", width: "20%" },
        { name: "DOB", width: "10%" }
      ],

      handleSort: heading => {

        if (this.state.order === "descend") {
          this.setState({
            order: "ascend"
          })
        } else {
          this.setState({
            order: "descend"
          })
        }

        const sortedUsers = this.state.filteredUsers.sort();
        this.setState({ filteredUsers: sortedUsers });
      },
      handleSearchChange: event => {
        console.log(event.target.value);
        const filter = event.target.value;
        const filteredList = this.state.users.filter(item => {

          let values = Object.values(item)
            .join("")
            .toLowerCase();
          return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ filteredUsers: filteredList });
      }
    };
  }

  componentDidMount() {
    API.getUsers().then(results => {
      this.setState({
        users: results.data.results,
        filteredUsers: results.data.results
      });
    });
  }

  render() {
    return (
      <>
        <Nav handleSearchChange={this.state.handleSearchChange} />
        <div className="data-area">
          <DataTable
            headings={this.state.headings}
            users={this.state.filteredUsers}
            handleSort={this.state.handleSort}
          />
        </div>
      </>
    );
  }
}