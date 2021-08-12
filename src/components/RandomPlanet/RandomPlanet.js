import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import './RandomPlanet.css';

export default class RandomPlanet extends Component {
  constructor() {
    super()    
    this.updatePlanet()
  }
  state = {
    id: 10,
    planetName: null,
    population: null,
    diameter: null,
    period: null
  }
  
  swapi = new SwapiService();

  updatePlanet = () => {
    const id = Math.floor(Math.random()*25) + 2
    this.swapi.getPlanet(id)
    .then((planet) => {
      this.setState({
        id,
        planetName: planet.name,
        population: planet.population,
        diameter: planet.diameter,
        period: planet.rotation_period
      })
    })
  }

  render() {
    const {
      id,
      planetName,
      population,
      period,
      diameter,
    } = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
             alt="planet img"/>
        <div>
          <h4>{planetName}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{period}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}