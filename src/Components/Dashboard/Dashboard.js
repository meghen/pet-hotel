import React, {Component} from 'react';

class Dashboard extends Component {

  handleClick = () => {
    alert('you clicked go to ManageOwners!');
    //CHANGE LOCATION???
    console.log(this.props)
    this.props.history.push('/ManageOwners')
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <button onClick={this.handleClick}>GO TO Manage Owners</button>
      </div>
    )
  }
}

export default Dashboard;