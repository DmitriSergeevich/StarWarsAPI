import React from 'react';
import { SwappiSeviceConsumer } from '../SwappiServiceContext/SwappiServiceContext';


export const WithSwappiService = (Wrapped, mapMethodsToProps) => {
  return (props)=>{
    return (
      <SwappiSeviceConsumer >
        {
          (swappi) => {
            const serviceProps = mapMethodsToProps(swappi)
            return (
            <Wrapped {...props} {...serviceProps} />
            )
          }
        }
      </SwappiSeviceConsumer>
    )
  } 
}