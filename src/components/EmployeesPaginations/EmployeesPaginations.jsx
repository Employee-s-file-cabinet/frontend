import React, { useEffect, useState } from 'react';

export default function EmployeesPaginations({
  isCurrentPage,
  setIsCurrentPage,
  lastPage,
}) {
  const [isPaginationsButtons, setIsPaginationsButtons] = useState('');
  const handlePreviousPagination = (event) => {
    event.preventDefault();
    if (isCurrentPage !== 1) setIsCurrentPage(isCurrentPage - 1);
  };

  const handleNextPagination = (event) => {
    event.preventDefault();
    if (isCurrentPage !== lastPage) setIsCurrentPage(isCurrentPage + 1);
  };

  const handlePageButtonsClick = (event) => {
    event.preventDefault();
    const targetElement = event.target;
    // eslint-disable-next-line no-console
    console.log(Number(targetElement.textContent));
    setIsCurrentPage(Number(targetElement.textContent));
    if (isCurrentPage < 4) {
      targetElement.classList.add('is-current');
    }
  };

  const renderPaginationButtons = () => {
    switch (true) {
      // Case when to low pages - from 1 to 6
      case lastPage < 7:
        setIsPaginationsButtons(
          <ul className="pagination-list">
            {lastPage > 1 && (
              <li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  className={`pagination-link ${
                    isCurrentPage === 1 ? 'is-current' : ''
                  }`}
                  href="#"
                  onClick={handlePageButtonsClick}
                >
                  1
                </a>
              </li>
            )}
            {lastPage > 2 && (
              <li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  className={`pagination-link ${
                    isCurrentPage === 2 ? 'is-current' : ''
                  }`}
                  href="#"
                  onClick={handlePageButtonsClick}
                >
                  2
                </a>
              </li>
            )}
            {lastPage > 3 && (
              <li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  className={`pagination-link ${
                    isCurrentPage === 3 ? 'is-current' : ''
                  }`}
                  href="#"
                  onClick={handlePageButtonsClick}
                >
                  3
                </a>
              </li>
            )}
            {lastPage > 4 && (
              <li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  className={`pagination-link ${
                    isCurrentPage === 4 ? 'is-current' : ''
                  }`}
                  href="#"
                  onClick={handlePageButtonsClick}
                >
                  4
                </a>
              </li>
            )}
            {lastPage > 5 && (
              <li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  className={`pagination-link ${
                    isCurrentPage === 5 ? 'is-current' : ''
                  }`}
                  href="#"
                  onClick={handlePageButtonsClick}
                >
                  5
                </a>
              </li>
            )}
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className={`pagination-link ${
                  isCurrentPage === lastPage ? 'is-current' : ''
                }`}
                href="#"
                onClick={handlePageButtonsClick}
              >
                {lastPage}
              </a>
            </li>
          </ul>
        );
        break;

      // Case when chose one of lasts pages
      case isCurrentPage > lastPage - 3:
        setIsPaginationsButtons(
          <ul className="pagination-list">
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className="pagination-link"
                href="#"
                onClick={handlePageButtonsClick}
              >
                1
              </a>
            </li>
            <li>
              <span className="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className={`pagination-link ${
                  isCurrentPage === lastPage - 3 ? 'is-current' : ''
                }`}
                href="#"
                onClick={handlePageButtonsClick}
              >
                {lastPage - 3}
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className={`pagination-link ${
                  isCurrentPage === lastPage - 2 ? 'is-current' : ''
                }`}
                aria-current="page"
                href="#"
                onClick={handlePageButtonsClick}
              >
                {lastPage - 2}
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className={`pagination-link ${
                  isCurrentPage === lastPage - 1 ? 'is-current' : ''
                }`}
                href="#"
                onClick={handlePageButtonsClick}
              >
                {lastPage - 1}
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className={`pagination-link ${
                  isCurrentPage === lastPage ? 'is-current' : ''
                }`}
                href="#"
                onClick={handlePageButtonsClick}
              >
                {lastPage}
              </a>
            </li>
          </ul>
        );
        break;

      // Case when chose middle of pages list
      case isCurrentPage > 3:
        setIsPaginationsButtons(
          <ul className="pagination-list">
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className="pagination-link"
                href="#"
                onClick={handlePageButtonsClick}
              >
                1
              </a>
            </li>
            <li>
              <span className="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className="pagination-link"
                href="#"
                onClick={handlePageButtonsClick}
              >
                {isCurrentPage - 1}
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className="pagination-link is-current"
                aria-current="page"
                href="#"
                onClick={handlePageButtonsClick}
              >
                {isCurrentPage}
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className="pagination-link"
                href="#"
                onClick={handlePageButtonsClick}
              >
                {isCurrentPage + 1}
              </a>
            </li>
            <li>
              <span className="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className="pagination-link"
                href="#"
                onClick={handlePageButtonsClick}
              >
                {lastPage}
              </a>
            </li>
          </ul>
        );
        break;

      // Case when chose one of first pages - start state
      default:
        setIsPaginationsButtons(
          <ul className="pagination-list">
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className={`pagination-link ${
                  isCurrentPage === 1 ? 'is-current' : ''
                }`}
                href="#"
                onClick={handlePageButtonsClick}
              >
                1
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className={`pagination-link ${
                  isCurrentPage === 2 ? 'is-current' : ''
                }`}
                href="#"
                onClick={handlePageButtonsClick}
              >
                2
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className={`pagination-link ${
                  isCurrentPage === 3 ? 'is-current' : ''
                }`}
                aria-current="page"
                href="#"
                onClick={handlePageButtonsClick}
              >
                3
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className="pagination-link"
                href="#"
                onClick={handlePageButtonsClick}
              >
                4
              </a>
            </li>
            <li>
              <span className="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className="pagination-link"
                href="#"
                onClick={handlePageButtonsClick}
              >
                {lastPage}
              </a>
            </li>
          </ul>
        );
        break;
    }
  };

  useEffect(() => {
    renderPaginationButtons();
    // eslint-disable-next-line no-console
    console.log('change');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCurrentPage]);

  return (
    <div className="employees-pagination">
      <nav
        className="pagination is-centered employees-pagination_container"
        role="navigation"
        aria-label="pagination"
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          className="pagination-previous"
          href="#"
          onClick={handlePreviousPagination}
        >
          Предыдущая
        </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="pagination-next" href="#" onClick={handleNextPagination}>
          Следующая
        </a>
        {isPaginationsButtons}
      </nav>
    </div>
  );
}
