import React from 'react';
class UserDetailsInput extends React.Component{
  render(){
    return(
      <div>
        <UserDetailsInputTable/>
        <SubmitPersonDetails/>
      </div>
    );
  }
}

class UserDetailsInputTable extends React.Component{
  constructor(props) {
    super(props);

    this.state ={
      givenName: "Given Name",
      familyName: "Family Name",
      emailId: "Email",
      phone: "Phone",
      rememberMeId: "Remeber Me Id"
    }
  }
  render(){
    return(
      <div className="form-group">
        <table className="table table-hover">
          <tbody>
          <tr>
            <td >
              {this.state.givenName}
            </td>
            <td >
              <input id ="givenName" className="form-control"/>
            </td>
          </tr>
          <tr>
            <td >
              {this.state.familyName}
            </td>
            <td >
              <input id ="familyName" className="form-control"/>
            </td>
          </tr>
          <tr>
            <td >
              {this.state.emailId}
            </td>
            <td >
              <input id ="emailId" className="form-control"/>
            </td>
          </tr>
          <tr>
            <td >
              {this.state.phone}
            </td>
            <td >
              <input id ="phoneNumber" className="form-control"/>
            </td>
          </tr>
          <tr>
            <td >
              {this.state.rememberMeId}
            </td>
            <td >
              <input id ="rememberMeId" className="form-control"/>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

    );
  }
}

class SubmitPersonDetails extends React.Component{
  btnClicked() {
    var postData ={
      "givenName": "sdf"
    };
    alert("button clicked" + postData);
  }
  render(){
    return(
      <div>
        <button onClick={this.btnClicked}>Login</button>
      </div>
    );
  }
}

export default UserDetailsInput;
