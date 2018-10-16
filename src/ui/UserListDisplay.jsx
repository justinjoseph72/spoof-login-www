import React from 'react';
import { getLoggedInPeople,fetchLoggedInPeopleFromApi,simpleFetch } from '../js/people.js';
class UserListDisplay extends React.Component{
  constructor(props){
    super(props);
    this.getPeople = this.getPeople.bind(this);
  }

 getPeople(){
   // fetchLoggedInPeopleFromApi().then((people)=>{
   //   console.log('people in button call ' + people);
   //   var peopleList = JSON.stringify(people);
   //   console.log('people list btn call ' + peopleList);
   // });

// var peopleList = getLoggedInPeople();
// console.log('the button people list is ' + peopleList);
//  alert(people);
fetchLoggedInPeopleFromApi().then(function(data) {
  console.log(data);
});

}

  render(){
    return(
 <div>
<button className=".btn-lg" onClick={this.getPeople}></button>
 </div>

    );
  }
}

export default UserListDisplay;
