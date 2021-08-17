import React from 'react';
import { ErrorIndicator } from '../../ErrorIndicator/ErrorIndicator';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetail/PersonDetail';

export default class PersonSection extends React.Component {
  state = {
    selectedPerson: 5,
    hasError: false
  }
  
  onItemSelected = (id) => {
    this.setState({selectedPerson: id})
  }
  
  componentDidCatch() {
    this.setState({hasError: true})
  }

  render() {
    if(this.state.hasError) {
      return <ErrorIndicator/>
    }
    return (
      <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onItemSelected}/>
          </div>
          <div className="col-md-6">
            <PersonDetails selectedPerson={this.state.selectedPerson} />
          </div>
        </div>
    )
  }

}