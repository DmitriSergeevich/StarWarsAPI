import React from 'react'
import { Button } from '../Button/Button'

export  const PaginationControl = (nextPage, prevPage, foundCount, onChangePage) => {
  const prevButton = prevPage ? (
    <Button
      key={"prev"}
      onClick={() => onChangePage(prevButton)}
      lable="&lt; Prev"
    />
  ) : (
    <Button
      key={"prev"}
      onClick={() => onChangePage(prevButton)}
      lable="&lt; Prev"
      isDisabled={true}
    />
  );
  
  const nextButton = nextPage ? (
    <Button
      key={"next"}
      onClick={() => onChangePage(nextButton)}
      lable="Next &gt;"    
    />
  ) : (
    <Button
      key={"next"}
      onClick={() => onChangePage(nextButton)}
      lable="Next &gt;"
      isDisabled={true}
    />
  );
  
  return  foundCount > 10 ? (
    <div className="btn-group">
      {prevButton}
      {nextButton}
    </div>
  ) : null;
}












/*
const prevButton = prevPage ? (
  <Button
    key={"prev"}
    onClick={() => onChangePage(prevButton)}
    lable="&lt; Prev"
  />
) : (
  <Button
    key={"prev"}
    onClick={() => onChangePage(prevButton)}
    lable="&lt; Prev"
    isDisabled={true}
  />
);

const nextButton = nextPage ? (
  <Button
    key={"next"}
    onClick={() => onChangePage(nextButton)}
    lable="Next &gt;"    
  />
) : (
  <Button
    key={"next"}
    onClick={() => onChangePage(nextButton)}
    lable="Next &gt;"
    isDisabled={true}
  />
);

const paginationControl = foundCount > 10 ? (
  <div className="btn-group">
    {prevButton}
    {nextButton}
  </div>
) : null;
*/


/*
export default class PaginationControl extends React.Component {
  constructor(nextPage, prevPage, foundCount, onChangePage){
    super()
    this.nextPage = nextPage
    this.prevPage = prevPage
    this.foundCount = foundCount
    this.onChangePage = onChangePage
  }
  

  nextButton = this.nextPage ? (
    <Button
      key={"next"}
      onClick={() => this.onChangePage(this.nextButton)}
      lable="Next &gt;"    
    />
  ) : (
    <Button
      key={"next"}
      onClick={() => this.onChangePage(this.nextButton)}
      lable="Next &gt;"
      isDisabled={true}
    />
  );
  
  prevButton = this.prevPage ? (
    <Button
      key={"prev"}
      onClick={() => this.onChangePage(this.prevButton)}
      lable="&lt; Prev"
    />
  ) : (
    <Button
      key={"prev"}
      onClick={() => this.onChangePage(this.prevButton)}
      lable="&lt; Prev"
      isDisabled={true}
    />
  );

  paginationControl = this.foundCount > 10 ? (
    <div className="btn-group">
      {this.prevButton}
      {this.nextButton}
    </div>
  ) : null;
  
  render() {
    return this.paginationControl
  }
 
}

*/