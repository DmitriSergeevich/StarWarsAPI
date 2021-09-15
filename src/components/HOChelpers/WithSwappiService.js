import React from 'react';
import { SwappiSeviceConsumer } from '../SwappiServiceContext/SwappiServiceContext';


export const WithSwappiService = (Wrapped, mapMethodsToProps) => {
  return (props)=>{
    return (
      <SwappiSeviceConsumer >
        {
          ({swapi}) => {
            const serviceProps = mapMethodsToProps(swapi)
            return (
            <Wrapped {...props} {...serviceProps} />
            )
          }
        }
      </SwappiSeviceConsumer>
    )
  } 
}