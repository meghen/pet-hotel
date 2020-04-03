import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class NewPetForm extends Component {
    state = {
        newPet: {
            owner: '',
            pet: '',
            breed: '',
            color: '',
            checkedIn: '',
        }
    }

    handleNameChange = (event, propertyValue) => {
        console.log( "NewPetForm: in handleNameChange");
        console.log(`Adding ${event.target.value} to state`)
        this.setState({
            newPet: {
                ...this.state.newPet,
                [propertyValue]: event.target.value,
            }
        });
    }

    addNewPet = event => {
        console.log( "NewPetForm: in addNewPet !", "color:Green" );
        console.log(`adding plant: ${this.state.newPet}`)
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_PET', payload: this.state.newPet })
    }

    render() {
        return (
            <div>
                <h3>Add Pet:</h3>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                <form onSubmit={this.addNewPlant}>
                    <input placeholder="owner" type='text' value={this.state.newPet.owner} onChange={(event) => this.handleNameChange(event, 'owner')} />
                    <input placeholder="pet" type='text' value={this.state.newPet.pet} onChange={(event) => this.handleNameChange(event, 'pet')} />
                    <input placeholder="breed" type='text' value={this.state.newPet.breed} onChange={(event) => this.handleNameChange(event, 'breed')} />
                    <input placeholder="color" type='text' value={this.state.newPet.color} onChange={(event) => this.handleNameChange(event, 'color')} />
                    <input placeholder="checkedIn" type='text' value={this.state.newPet.checkedIn} onChange={(event) => this.handleNameChange(event, 'checkedIn')} />
                   <button onClick={this.addNewPet}>ADD PET</button>
                </form>
            </div>
        );
    }
    
}


export default connect(mapStateToProps)(NewPetForm);
