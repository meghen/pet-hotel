import React, {Component} from 'react';

class ManageOwners extends Component {

  handleClick = () => {
    alert('you clicked go to Dashboard!');
    //CHANGE LOCATION???
    console.log(this.props)
    this.props.history.push('/Dashboard')
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <button onClick={this.handleClick}>GO TO Dashboard</button>
      </div>
    )
  }
}

export default ManageOwners;