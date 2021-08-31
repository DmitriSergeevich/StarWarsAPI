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
export default class App extends React.Component {

  swappi = new SwapiService();
  
  render() {
    return (      
      <SwappiServiceProvider value={this.swappi}>
        <Router>
          <div className="stardb-app">
            <Header />
            <RandomPlanet/>
            
            <Route path='/' render={() => <h2>Welcome to star wars library</h2>} exact></Route>
            <Route path='/people/:id?' component={PeoplePage}></Route>
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