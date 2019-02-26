import React from "react";
import classNames from "classnames";

function PaginationItem({ onClick, data, selected }) {
  const cssClass = classNames("pagination__item", {
    "pagination__item--active": data === selected
  });
  return (
    <li className={cssClass} onClick={() => onClick(data)}>
      {data}
    </li>
  );
}

export default PaginationItem;
