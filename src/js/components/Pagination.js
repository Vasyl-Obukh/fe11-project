import React from 'react';
import { NavLink } from 'react-router-dom';

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

export default function Pagination({ paginationSettings }) {
  const fetchPageNumbers = () => {
    const { pagesAmount, currentPage, pageNeighbours } = paginationSettings;

    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (pagesAmount > totalBlocks) {
      let pages = [];

      const leftBound = currentPage - pageNeighbours;
      const rightBound = currentPage + pageNeighbours;
      const beforeLastPage = pagesAmount - 1;

      const startPage = leftBound > 2 ? leftBound : 2;
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

      pages = range(startPage, endPage);

      const pagesCount = pages.length;
      const singleDotsOffset = totalNumbers - pagesCount - 1;

      const leftDots = startPage > 2;
      const rightDots = endPage < beforeLastPage;

      if (leftDots && !rightDots) {
        const extraPages = range(startPage - singleDotsOffset, startPage - 1);
        pages = [DOTS, ...extraPages, ...pages];
      } else if (!leftDots && rightDots) {
        const extraPages = range(endPage + 1, endPage + singleDotsOffset);
        pages = [...pages, ...extraPages, DOTS];
      } else if (leftDots && rightDots) {
        pages = [DOTS, ...pages, DOTS];
      }

      return [1, ...pages, pagesAmount];
    }
    return range(1, pagesAmount);
  };

  const {
    pagesAmount,
    urlTemplate,
    currentPage,
    queryString
  } = paginationSettings;
  if (!pagesAmount || pagesAmount === 1) return null;

  const DOTS = '...';

  const pages = fetchPageNumbers();

  const prev = `${urlTemplate}/${
    currentPage - 1 !== 1 ? `page-${currentPage - 1}` : ''
  }${queryString}`;
  const next = `${urlTemplate}/page-${currentPage + 1}${queryString}`;

  return (
    <ul className='pagination'>
      {currentPage !== 1 ? (
        <li className='pagination__list-item'>
          <NavLink
            className='pagination__item pagination__item_arrow'
            to={prev}
          >
            <i className='fas fa-chevron-left' />
          </NavLink>
        </li>
      ) : null}

      {pages.map((page, index) => (
        <li key={index} className='pagination__list-item'>
          {page === DOTS ? (
            <span className='pagination__item pagination__item_dots'>
              ...
            </span>
          ) : page === currentPage ? (
            <span className='pagination__item pagination__item_current'>
              {page}
            </span>
          ) : (
            <NavLink
              className='pagination__item pagination__item_link'
              to={`${urlTemplate}${
                page !== 1 ? `/page-${page}` : '/'
              }${queryString}`}
            >
              {page}
            </NavLink>
          )}
        </li>
      ))}

      {currentPage !== pagesAmount ? (
        <li className='pagination__list-item'>
          <NavLink
            className='pagination__item pagination__item_arrow'
            to={next}
          >
            <i className='fas fa-chevron-right' />
          </NavLink>
        </li>
      ) : null}
    </ul>
  );
}
