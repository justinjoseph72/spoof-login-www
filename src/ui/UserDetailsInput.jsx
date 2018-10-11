import React from 'react';
import {postDataFunc} from '../js/login.js';

class UserDetailsInput extends React.Component{
  render(){
    return(
      <div>
        <UserDetailsInputTable/>
      </div>
    );
  }
}

class UserDetailsInputTable extends React.Component{
  constructor(props) {
    super(props);

    this.state ={
      givenName: "",
      familyName: "",
      emailId: "",
      phone: "",
      rememberMeId: ""
    }
    this.updateGivenName = this.updateGivenName.bind(this);
    this.updateFamilyName = this.updateFamilyName.bind(this);
    this.updateEmailId = this.updateEmailId.bind(this);
    this.updatePhone = this.updatePhone.bind(this);
    this.updateRememberMeId = this.updateRememberMeId.bind(this);
  }

  btnClicked() {
    var postDataStr = JSON.stringify(this.state);
  postDataFunc(postDataStr);
  }

  updateGivenName(e){
    this.setState({givenName: e.target.value});
  }
  updateFamilyName(e){
    this.setState({familyName: e.target.value});
  }
  updateEmailId(e){
    this.setState({emailId: e.target.value});
  }
  updatePhone(e){
    this.setState({phone: e.target.value});
  }
  updateRememberMeId(e){
    this.setState({rememberMeId: e.target.value});
  }

  render(){
    return(
      <div>
      <div className="form-group">
        <table className="table table-hover">
          <tbody>
          <tr>
            <td >
              Given Name
            </td>
            <td >
              <input id ="givenName" className="form-control" value={this.state.givenName} onChange = {this.updateGivenName}/>
            </td>
          </tr>
          <tr>
            <td >
              Family Name
            </td>
            <td >
              <input id ="familyName" className="form-control" value={this.state.familyName} onChange = {this.updateFamilyName}/>
            </td>
          </tr>
          <tr>
            <td >
              Email
            </td>
            <td >
              <input id ="emailId" className="form-control" value={this.state.emailId} onChange = {this.updateEmailId}/>
            </td>
          </tr>
          <tr>
            <td >
              Phone
            </td>
            <td >
              <input id ="phoneNumber" className="form-control" value={this.state.phone} onChange = {this.updatePhone}/>
            </td>
          </tr>
          <tr>
            <td >
              Remember Me Id
            </td>
            <td >
              <input id ="rememberMeId" className="form-control" value={this.state.rememberMeId} onChange = {this.updateRememberMeId}/>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button onClick={this.btnClicked.bind(this)}>Login</button>
      </div>
      </div>
    );
  }
}


export default UserDetailsInput;
