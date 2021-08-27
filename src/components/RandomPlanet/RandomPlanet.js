import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import { ErrorRender } from '../ErrorRender/ErrorRender';
import { Spiner } from '../Spiner/Spiner';
import './RandomPlanet.css';

export default class RandomPlanet extends Component {
  
  state = {
    planet: {},
    loading: true,
    error: false,
  }
  
  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
    });
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    });
  }

  swapi = new SwapiService();

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 3;
    this.swapi.getPlanet(id)
    .then(this.onPlanetLoaded)
    .catch(this.onError)
  }

  render() {
    const {planet, loading, error} = this.state;
    const hasData = !(loading || error);
    const loader = loading ? <Spiner/> : null;
    const planetInfo = hasData ? <PlanetView planet={planet}/> : null;
    const errorLoading = error ? <ErrorRender/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {loader}
        {planetInfo}
        {errorLoading}
      </div>
    );    
  }
}

function PlanetView({ planet }) {
  const {  
    id,
    name,
    population,
    period,
    diameter
  } = planet;

  return (
    <React.Fragment>
      <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
             alt="planet img"/>
      <div>
        <h4>{name}</h4>
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
    </React.Fragment>
  )
}