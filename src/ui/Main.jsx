import React from 'react';
import HeaderInfo from './HeaderInfo.jsx';
import UserDetailsInput from './UserDetailsInput.jsx';
class Main extends React.Component {
  render(){
    return(
      <div>
        <HeaderInfo/>
        <div align="center" className="userDetailsInputDiv">
          <UserDetailsInput/>
        </div>

      </div>
    );
  }
}

export default Main;
