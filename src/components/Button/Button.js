import React from 'react';

export const Button = ({keys, onClick, lable}) => {
  return (
    <button
      key={keys}
      type="button"
      onClick={onClick}
      className="btn btn-info"
    >
      {lable}
    </button>
  );
}