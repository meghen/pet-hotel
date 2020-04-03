import React, {Component} from 'react';
import NewPetForm from '../NewPetForm/NewPetForm';
import PetList from '../PetList/PetList';


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
        <h2>This is the Pet Hotel!</h2>
        <NewPetForm />
        <PetList />
      </div>
    )
  }
}

export default Dashboard;