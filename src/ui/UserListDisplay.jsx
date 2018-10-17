import React from 'react';
import ReactDOM from 'react-dom';
import {getLoggedInPeople} from '../js/people.js';
import UserDetail from './UserDetail.jsx';
class UserListDisplay extends React.Component {
  state = {
    'data': []
  };
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    console.log('component did mount');
    var item = getLoggedInPeople().then((peopleData) => {
      this.setState({
        data: peopleData
      }, () => {});
    }).catch(err => console.error(err));
  }

  getPeople() {
    if (this.state.data.people && this.state.data.people.length) {
      return true;
    }
    return false;
  }

  render() {
    return (<div>
      <div>
        These are the logged in people
      </div>
      <div className="container">
        {
          this.getPeople() && this.state.data.people.map((person) => {
            return <UserDetail person={person}/>
          })
        }
      </div>
    </div>);
  }
}

export default UserListDisplay;
