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
      phone: ""
    }
    this.updateGivenName = this.updateGivenName.bind(this);
    this.updateFamilyName = this.updateFamilyName.bind(this);
    this.updateEmailId = this.updateEmailId.bind(this);
    this.updatePhone = this.updatePhone.bind(this);
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

  render(){
    return(
      <div>
      <div className="container">

          <div className="row ">
            <div className="col">
              Given Name
            </div>
            <div className="col">
              <input id ="givenName" className="form-control" value={this.state.givenName} onChange = {this.updateGivenName}/>
            </div>
          </div>
          <div className="row ">
            <div className="col">
              Family Name
            </div>
            <div className="col">
              <input id ="familyName" className="form-control" value={this.state.familyName} onChange = {this.updateFamilyName}/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              Email
            </div>
            <div className="col">
              <input id ="emailId" className="form-control" value={this.state.emailId} onChange = {this.updateEmailId}/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              Phone
            </div>
            <div className="col">
              <input id ="phoneNumber" className="form-control" value={this.state.phone} onChange = {this.updatePhone}/>
            </div>
          </div>
      </div>
      <div>
        <button className="btn btn-primary" onClick={this.btnClicked.bind(this)}>Login</button>
      </div>
</div>
    );
  }
}


export default UserDetailsInput;
