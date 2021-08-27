import React from 'react';
import { WithSwappiService } from '../HOChelpers/WithSwappiService';
import ItemDetails, { Record } from "../ItemDetails/ItemDetails";



const PersonDetails = (props) => {  
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender:"/>
      <Record field="eyeColor" label="Eye color:"/>
    </ItemDetails>
  )
};

const mapMethodsToProps = (swappi) => {
  return {
    getData: swappi.getPerson,
    getImageURL: swappi.getPersonImage
  }
}

export default WithSwappiService(PersonDetails, mapMethodsToProps);