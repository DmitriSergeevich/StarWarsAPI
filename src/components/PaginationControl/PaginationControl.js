import React from 'react';
import { Button } from '../Button/Button';
import './PaginationControl.css';

export  const PaginationControl = ({nextPage, prevPage, foundCount, loading, onChangePage}) => {
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
  
  return  foundCount > 10 && !loading ? (
    <div className="btn-group btn-group_pagination">
      {prevButton}
      {nextButton}
    </div>
  ) : null;
}