import React from "react";

import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";

export default function Pagination({ data, size, page, handlePage }) {
  const range = Math.ceil(data.length / size);
  const result = [];

  for (let index = 1; index < range + 1; index++) {
    result.push(index);
  }

  return (
    <ul className="pagination-list">
      <button
        className={`pagination-list__arrow-btn ${
          page < 1 || page === 1 ? "pagination-list__arrow-btn--disable" : ""
        }`}
        onClick={() => (page > 1 ? handlePage(page - 1) : "")}
      >
        <ArrowLeft />
      </button>
      {result.map((item,index) => (
        <li key={index} className="pagination-list__item">
          <button
            className={`pagination-list__btn ${
              item === page ? "pagination-list__btn--active" : ""
            }`}
            onClick={() => handlePage(item)}
          >
            {item}
          </button>
        </li>
      ))}
      <button
        className={`pagination-list__arrow-btn ${
          page > range || page === range
            ? "pagination-list__arrow-btn--disable"
            : ""
        }`}
        onClick={() => (page < range ? handlePage(page + 1) : "")}
      >
        <ArrowRight />
      </button>
    </ul>
  );
}
