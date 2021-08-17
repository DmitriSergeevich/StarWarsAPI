import React from 'react';
import { Header } from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import PersonSection from '../PersonSection/PersonSection';

export default class App extends React.Component {

    

  render() {
    return (
      <div>
        <Header/>
        <RandomPlanet />
        <PersonSection/>
      </div>
    )
  }
}