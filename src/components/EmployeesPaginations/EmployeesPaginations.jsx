import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function EmployeesPaginations({ lastPage }) {
  const { pageNumber, filterTeg } = useParams();
  const currentPage = parseInt(pageNumber, 10);
  const navigate = useNavigate();

  const handlePreviousPagination = (event) => {
    event.preventDefault();
    if (currentPage !== 1) {
      const previousPage = currentPage - 1;
      navigate(`/employees/${filterTeg}/${previousPage}`);
    }
  };

  const handleNextPagination = (event) => {
    event.preventDefault();
    if (currentPage !== lastPage) {
      const nextPage = currentPage + 1;
      navigate(`/employees/${filterTeg}/${nextPage}`);
    }
  };

  const handlePageButtonsClick = (event) => {
    event.preventDefault();
    const targetElement = event.target;
    navigate(`/employees/${filterTeg}/${Number(targetElement.textContent)}`);
  };

  const renderPaginationButtons = () => {
    // make layouts from basic massive
    const mapPaginationMassive = (mass) => {
      const pageElements = mass.map((page) => {
        if (page === '.') {
          return <span className="pagination-ellipsis">&hellip;</span>;
        }

        return (
          <a
            className={`pagination-link ${
              page === currentPage ? 'is-current' : ''
            }`}
            href={`/employees/${filterTeg}/${Number(page)}`}
            onClick={handlePageButtonsClick}
          >
            {page}
          </a>
        );
      });

      // insert layouts to jsx
      return (
        <ul className="pagination-list">
          {/* eslint-disable react/no-array-index-key */}
          {pageElements.map((pageElement, index) => (
            <li key={index}>{pageElement}</li>
          ))}
        </ul>
      );
    };

    // Make basic massive for different case pagination buttons positions
    switch (true) {
      // Case when to low pages - from 1 to 6
      case lastPage < 7:
        return mapPaginationMassive(
          Array.from({ length: lastPage }, (_, index) => index + 1)
        );
      // Case when chose one of lasts pages
      case currentPage > lastPage - 3:
        return mapPaginationMassive([
          1,
          '.',
          lastPage - 3,
          lastPage - 2,
          lastPage - 1,
          lastPage,
        ]);
      // Case when chose middle of pages list
      case currentPage > 3:
        return mapPaginationMassive([
          1,
          '.',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '.',
          lastPage,
        ]);
      // Case when chose one of first pages - start state
      default:
        return mapPaginationMassive([1, 2, 3, 4, '.', lastPage]);
    }
  };

  return (
    <div className="employees-pagination">
      {lastPage !== 1 && (
        <nav
          className="pagination is-centered employees-pagination_container"
          role="navigation"
          aria-label="pagination"
        >
          <a
            className="pagination-previous"
            href={`/employees/${filterTeg}/${currentPage - 1}`}
            onClick={handlePreviousPagination}
            aria-label="previous page"
          >
            <span className="icon is-small">
              <i className="fas fa-angle-left" />
            </span>
          </a>
          <a
            className="pagination-next"
            href={`/employees/${filterTeg}/${currentPage + 1}`}
            onClick={handleNextPagination}
            aria-label="next page"
          >
            <span className="icon is-small">
              <i className="fas fa-angle-right" />
            </span>
          </a>
          {renderPaginationButtons()}
        </nav>
      )}
    </div>
  );
}
