import React, { Component } from "react";
import axios from "axios";

class User extends Component {
  state = {
    people: []
  };

  componentDidMount() {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then(response => {
        this.successShow(response);
      })
      .catch(error => {
        this.successShow(error);
      });
  }

  successShow(response) {
    this.setState({
      people: response.data.data
    });
  }

  render() {


    return (
        <ul class="list-group">

          {this.state.people.map(({id, first_name,
          email}) => (

            <li key={id} class="list-group-item">
              First Name:{first_name}
              <br/>
               email {email}
            </li>))
          }
        </ul>
      );
  }
}
export default User;