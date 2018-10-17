import React from 'react';
import {postDataFunc} from '../js/login.js';

class UserDetail extends React.Component {
  constructor(props) {
    super(props)
    this.loginPerson = this.loginPerson.bind(this);
  }

  loginPerson() {
    console.log('div clicked');
    var postData ={
      'familyName': this.props.person.family_name,
      'givenName': this.props.person.given_name,
      'emailId': this.props.person.email,
      'phone': this.props.person.phone_number
    }
    console.log('post data',postData);
    var postDataStr = JSON.stringify(postData);
    postDataFunc(postDataStr);
  }

  render() {
    return (<div className="cardDiv" onClick={this.loginPerson}>
      <div className="container">
        <div className="row">
          <div className="col">{this.props.person.given_name}</div>
          <div className="col">{this.props.person.family_name}</div>
          <div className="col">{this.props.person.email}</div>
        </div>
      </div>
    </div>);
  }
}

export default UserDetail;
