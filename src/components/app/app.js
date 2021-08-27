import React from 'react';
import { Header } from '../Header/Header';
import SwapiService from '../../services/SwapiService';
import './app.css'
import { SwappiServiceProvider } from '../SwappiServiceContext/SwappiServiceContext';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import PeoplePage from '../pages/PeoplePage';
import PlanetPage from '../pages/PlanetPage';
import StarshipPage from '../pages/StarshipPage';

export default class App extends React.Component {

  swappi = new SwapiService();
  
  render() {
    return (      
      <SwappiServiceProvider value={this.swappi}>
        <div className="stardb-app">
          <Header />
          <RandomPlanet/>
          <PeoplePage />     
          <PlanetPage />     
          < StarshipPage />     
          
        </div>
      </SwappiServiceProvider>      
    )
  }
}