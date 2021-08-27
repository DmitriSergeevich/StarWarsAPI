import React from 'react';
import { WithSwappiService } from '../HOChelpers/WithSwappiService';
import ItemDetails, { Record } from "../ItemDetails/ItemDetails";


const PlanetDetails = (props) => {
  return (
   <ItemDetails {...props}>          
      <Record field="population" label="Population:"/>
      <Record field="period" label="Rotation period:"/>
      <Record field="diameter" label="Diameter:"/>  
    </ItemDetails>
  )

}

const mapMethodsToProps = (swappi) => {
  return {
    getData: swappi.getPlanet,
    getImageURL: swappi.getPlanetImage
  }
}

export default WithSwappiService(PlanetDetails, mapMethodsToProps);