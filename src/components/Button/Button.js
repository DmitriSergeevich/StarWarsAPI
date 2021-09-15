import React from 'react';

export const Button = ({keys, onClick, lable, isDisabled = false}) => {
  return (
    <button
      key={keys}
      type="button"
      onClick={onClick}
      className="btn btn-info"
      disabled={isDisabled}
    >
      {lable}
    </button>
  );
}