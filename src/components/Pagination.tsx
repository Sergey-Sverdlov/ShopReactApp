import React from "react";

import "@styles/Pagination.scss";
interface TypePagination {
  productsPerPage: number;
  totalProducts: number;
  paginate: (number: number) => void;
}
const Pagination: React.FC<TypePagination> = ({
  productsPerPage,
  totalProducts,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <div className="pagination">
        {pageNumbers.map((number: number) => (
          <li className="page_item" key={number}>
            <button className="page-link" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
