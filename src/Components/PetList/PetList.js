import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class PetList extends Component {
    componentDidMount() {
        console.log( "PetList: in componentDidMount !");
        // use component did mount to dispatch an action to request the petList from the API
        this.getPets();
    }

    getPets() {
        console.log("PetList: in getPets !");
        this.props.dispatch({
            type: 'FETCH_PETS'
        })
    }

    render() {
        return (
            <div>
                <h3>History:</h3>
                {/* {JSON.stringify(this.props.reduxState.petList)} */}
                {/* <ul>
                    {this.props.reduxState.petList.map((pet) => 
                    <li key={pet.id}> Owner: {pet.owner} Pet: {pet.pet} Breed: {pet.breed} Color: {pet.color} Checked in: {pet.checkedIn}</li>    
                )}</ul> */}
            </div>
        );
    }
}

export default connect(mapStateToProps)(PetList);
