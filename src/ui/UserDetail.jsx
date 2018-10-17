import React from 'react';

class UserDetail extends React.Component {
constructor(props){
  super(props)
  console.log(props);
}
render(){
  return(
    <div>
      <div className="row">
    <div className="column">{this.props.givenName}</div>
    <div className="column">{this.props.familyName}</div>
    </div>
    </div>
  );
}
}

export default UserDetail;
