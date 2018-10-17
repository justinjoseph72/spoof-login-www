import React from 'react';

class UserDetail extends React.Component {
  constructor(props) {
    super(props)
    this.loginPerson = this.loginPerson.bind(this);
  }

  loginPerson() {
    console.log('div clicked');
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
