import React from 'react';
import ReactDOM from 'react-dom';
import { getLoggedInPeople } from '../js/people.js';
import UserDetail from './UserDetail.jsx';
class UserListDisplay extends React.Component{
  state = { 'data':[]};
  constructor(){
    super();
    this.state ={
      data: {}
    };
  }

componentDidMount(){
  console.log('component did mount');
  var item = getLoggedInPeople().then((peopleData) => {
    // const arr = this.state.data;
    // arr.push(peopleData.people);
    this.setState({data: peopleData}, () => {
      console.log(this.state);
    });
    console.log('done')
  })
  .catch(err => console.error(err));

  //this.setState({data: item});
  // item.then(function(peopleData){
  //   return peopleData.people;
  //   })
  //   .then(function(people){
  //     console.log('item sdfsfsf',people);
  //     people.forEach(function(person) {
  //       console.log(person);
  //     //  ReactDOM.render(<UserDetail person={person}/>, document.getElementById('people'));
  //     });
  // });
}

getPeople() {
  if (this.state.data.people && this.state.data.people.length) {
    return true;
  }

  return false;
}

render(){
  {
    console.log('sf');
  var item = this.state.data.people;
}
console.log('this.state.data', this.state.data);
  return(
  <div>
   <div>
      These are the logged in people
   </div>
{this.getPeople() && this.state.data.people.map((person)=>{
  console.log('person', person);
    return <UserDetail givenName={person.given_name} familyName={person.family_name} />
})
}
  </div>
    );
  }
}

export default UserListDisplay;
