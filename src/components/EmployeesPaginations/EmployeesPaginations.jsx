import React from 'react';

export default function EmployeesPaginations() {
  return (
    <nav
      className="pagination is-centered employees-pagination"
      role="navigation"
      aria-label="pagination"
    >
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        className="pagination-previous"
        href="#"
        onClick={(e) => e.preventDefault()}
      >
        Предыдущая
      </a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        className="pagination-next"
        href="#"
        onClick={(e) => e.preventDefault()}
      >
        Следующая
      </a>
      <ul className="pagination-list">
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className="pagination-link"
            aria-label="Goto page 1"
            href="#"
            onClick={(e) => e.preventDefault()}
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
            aria-label="Goto page 45"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            45
          </a>
        </li>
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className="pagination-link is-current"
            aria-label="Page 46"
            aria-current="page"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            46
          </a>
        </li>
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className="pagination-link"
            aria-label="Goto page 47"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            47
          </a>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className="pagination-link"
            aria-label="Goto page 86"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            86
          </a>
        </li>
      </ul>
    </nav>
  );
}
