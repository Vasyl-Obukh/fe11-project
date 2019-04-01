import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import paths from '../constants/paths';

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
  }

  fetchPageNumbers = () => {
    const totalPages = this.props.pages;
    const currentPage = this.props.currentPage;
    const pageNeighbours = 1;

    const totalNumbers = 1 * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      let pages = [];

      const leftBound = currentPage - pageNeighbours;
      const rightBound = currentPage + pageNeighbours;
      const beforeLastPage = totalPages - 1;

      const startPage = leftBound > 2 ? leftBound : 2;
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

      pages = range(startPage, endPage);

      const pagesCount = pages.length;
      const singleSpillOffset = totalNumbers - pagesCount - 1;

      const leftSpill = startPage > 2;
      const rightSpill = endPage < beforeLastPage;

      const leftSpillPage = LEFT_PAGE;
      const rightSpillPage = RIGHT_PAGE;

      if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1);
        pages = [leftSpillPage, ...extraPages, ...pages];
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset);
        pages = [...pages, ...extraPages, rightSpillPage];
      } else if (leftSpill && rightSpill) {
        pages = [leftSpillPage, ...pages, rightSpillPage];
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  render() {
    const { path } = this.props;
    const template =
      path === (paths.CATEGORY_FIRST_PAGE || path === paths.CATEGORY_N_PAGE)
        ? this.props.path
          .replace(':categoryName', this.props.url.split('/')[2])
          .split('/')
          .slice(0, -1)
          .join('/')
        : '';

    if (!this.props.pages) return null;

    if (this.props.pages === 1) return null;

    const { currentPage } = this.props;
    const pages = this.fetchPageNumbers();

    return (
      <>
        <nav aria-label="Countries Pagination">
          <ul className="pagination">
            {pages.map((page, index) => {
              if (page === LEFT_PAGE)
                return (
                  <li key={index} className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">...</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                );

              if (page === RIGHT_PAGE)
                return (
                  <li key={index} className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      aria-label="Next"
                    >
                      <span aria-hidden="true">...</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                );

              return (
                <li
                  key={index}
                  className={`page-item${
                    currentPage === page ? " active" : ""
                    }`}
                >
                  <NavLink to={`${this.props.url.split('/').slice(0, -1).join('/')}/page-${page}`}>{page}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </>
    );
  }
}
