import React, { Component } from 'react';
import ErrorButton from '../../ErrorButton/ErrorButton';
import SwapiService from '../../services/SwapiService';

import './PersonDetail.css';

export default class PersonDetails extends Component {
  
  swapi = new SwapiService();

  state = {
    currentPerson: null
  }
  
  componentDidMount() {
    this.updatePerson();
  }
  
  componentDidUpdate(prevProps) {
    if(this.props.selectedPerson !== prevProps.selectedPerson) {
      this.updatePerson();
    }
  }

  updatePerson = () => {
    const { selectedPerson } = this.props;
    if(!selectedPerson) {
      return
    }
    this.swapi.getPerson(selectedPerson)
    .then( (currentPerson) => this.setState({ currentPerson }));
  }

  render() {

    if(!this.state.currentPerson) {
      return <span>Select a person from a list</span>
    }

    const {
      id,
      name,
      gender,
      birthYear,
      eyeColor,
    } = this.state.currentPerson;     
    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="person img"/>
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender:</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year:</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color:</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
          <ErrorButton/>
        </div>        
      </div>
      
    )
  }
}
