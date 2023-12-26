import React from 'react';

export default function EmployeesPaginations({
  isCurrentPage,
  setIsCurrentPage,
  lastPage,
}) {
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
    console.log(Number(targetElement.textContent));
    setIsCurrentPage(Number(targetElement.textContent));
    if (isCurrentPage < 4) {
      targetElement.classList.add('is-current');
    }
  };

  return (
    <div className="employees-pagination">
      {isCurrentPage > lastPage - 3 ? (
        <div>
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
            <a
              className="pagination-next"
              href="#"
              onClick={handleNextPagination}
            >
              Следующая
            </a>
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
          </nav>
        </div>
      ) : (
        <div>
          {isCurrentPage > 3 ? (
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
              <a
                className="pagination-next"
                href="#"
                onClick={handleNextPagination}
              >
                Следующая
              </a>
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
            </nav>
          ) : (
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
              <a
                className="pagination-next"
                href="#"
                onClick={handleNextPagination}
              >
                Следующая
              </a>
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
            </nav>
          )}
        </div>
      )}
    </div>
  );
}
