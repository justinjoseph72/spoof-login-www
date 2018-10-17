import React from 'react';
import { getLoggedInPeople } from '../js/people.js';
class UserListDisplay extends React.Component{
  state = { 'data':[]};
  constructor(){
    super();
    this.state ={
      data: []
    };
    this.getPeople = this.getPeople.bind(this);
  }

 getPeople(){

var item = getLoggedInPeople().then(function(peopleData){
  console.log('people item ',peopleData);
  //this.state = peopleData;
  return peopleData;
});
console.log('item final ',item);
this.setState({data: item});

}

  render(){
    return(
      <div>
 <div>
<button className=".btn-lg" onClick={this.getPeople}></button>
 </div>
</div>
    );
  }
}

export default UserListDisplay;
