import React from 'react';
import PlanetDetails from '../Details/PlanetDetails';
import { PlanetList } from '../ListOfItems/ListOfItems';
import { Row } from '../Row/Row';

export default class PlanetPage extends React.Component {
  
  state = {
    selectedItem: null
  }
  
  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  }

  render() {
    const { selectedItem } = this.state;
    return (
      <Row 
        leftItem={<PlanetList onItemSelected={this.onItemSelected}/>}
        rightItem={< PlanetDetails itemId={selectedItem}/>}
      />
    )
  }  
}