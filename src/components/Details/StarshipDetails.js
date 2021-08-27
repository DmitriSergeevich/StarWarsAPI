import React from 'react';
import { WithSwappiService } from '../HOChelpers/WithSwappiService';
import ItemDetails, { Record } from "../ItemDetails/ItemDetails";


const StarshipDetails = (props) => {  
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model:"/>
      <Record field="length" label="Length:"/>
      <Record field="costInCredits" label="Cost:"/>
    </ItemDetails>
  )
  
}

const mapMethodsToProps = (swappi) => {
  return {
    getData: swappi.getStarship,
    getImageURL: swappi.getStarshipImage
  }
}

export default WithSwappiService(StarshipDetails, mapMethodsToProps);