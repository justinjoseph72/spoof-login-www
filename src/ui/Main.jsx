import React from 'react';
import HeaderInfo from './HeaderInfo.jsx';
import UserDetailsInput from './UserDetailsInput.jsx';
class Main extends React.Component {
  render(){
    return(
      <div className="mainDiv">
        <div className="spoof-header">
        <HeaderInfo/>
        </div>
        <div className="userDetailsInputDiv">
          <UserDetailsInput/>
        </div>

      </div>
    );
  }
}

export default Main;
