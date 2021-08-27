import React from "react";

export const Row = ({ leftItem, rightItem }) => {
  return (
    <div className="row mb2 item-section">
        <div className="col-md-6">
          {leftItem}
        </div>
        <div className="col-md-6">
          {rightItem}
        </div>
    </div>
  )
}