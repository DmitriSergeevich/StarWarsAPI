import React from 'react';
import { Header } from '../Header/Header';
import SwapiService from '../../services/SwapiService';
import './app.css'
import { SwappiServiceProvider } from '../SwappiServiceContext/SwappiServiceContext';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import PeoplePage from '../pages/PeoplePage';
import PlanetPage from '../pages/PlanetPage';
import StarshipPage from '../pages/StarshipPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import StarshipDetails from '../Details/StarshipDetails';
import MainContainer from '../pages/Main';
import PersonDetails from '../Details/PersonDetails';

export default class App extends React.Component {

  swappi = new SwapiService();

  state = {
    term: "",
    foundPeople: [],
    nextPage: null,
    prevPage: null,
    foundCount: null,
  }  

  setAppState = (settings) => {
    this.setState(settings)
  }

  render() {
    return (      
      <SwappiServiceProvider value={{appState: this.state, swapi: this.swappi, setAppState : this.setAppState}}>
        <Router>
          <div className="stardb-app">
            <Header />
            <RandomPlanet/>
            <Route path='/' component={({history}) => {
              return <MainContainer appState={this.state} setAppState={this.setAppState} history={history}/>}} exact></Route>
            <Route path='/people' exact component={PeoplePage}></Route>
            <Route path='/people/:id' render={({ match }) => {
              const { id } = match.params;
              return <PersonDetails itemId={id} />
            }}></Route>
            <Route path='/planets' component={PlanetPage}></Route>
            <Route path='/starships' exact component={StarshipPage}></Route>
            <Route path='/starships/:id' render={({ match }) => {
              const { id } = match.params;
              return <StarshipDetails itemId={id} />
            }}></Route>
          </div>
        </Router>
      </SwappiServiceProvider>
    )
  }
}

// <Route path='/' component={MainContainer} exact></Route>

//<Route path='/' component={() => {
//  return <MainContainer appState={this.state} setAppState={this.setAppState}/>}} exact></Route>