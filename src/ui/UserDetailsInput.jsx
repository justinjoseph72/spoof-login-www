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
      <div class="container">

          <div class="row align-items-start">
            <div class="col">
              Given Name
            </div>
            <div class="col">
              <input id ="givenName" className="form-control" value={this.state.givenName} onChange = {this.updateGivenName}/>
            </div>
          </div>
          <div class="row">
            <div class="col">
              Family Name
            </div>
            <div class="col">
              <input id ="familyName" className="form-control" value={this.state.familyName} onChange = {this.updateFamilyName}/>
            </div>
          </div>
          <div class="row">
            <div class="col">
              Email
            </div>
            <div class="col">
              <input id ="emailId" className="form-control" value={this.state.emailId} onChange = {this.updateEmailId}/>
            </div>
          </div>
          <div class="row">
            <div class="col">
              Phone
            </div>
            <div class="col">
              <input id ="phoneNumber" className="form-control" value={this.state.phone} onChange = {this.updatePhone}/>
            </div>
          </div>
          <div class="row">
            <div class="col">
              Remember Me Id
            </div>
            <div class="col">
              <input id ="rememberMeId" className="form-control" value={this.state.rememberMeId} onChange = {this.updateRememberMeId}/>
            </div>
          </div>
      </div>
      <div>
        <button class="btn btn-success btn-lg btn-block" onClick={this.btnClicked.bind(this)}>Login</button>
      </div>
</div>
    );
  }
}


export default UserDetailsInput;
