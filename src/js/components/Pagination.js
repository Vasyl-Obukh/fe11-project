import React, { Component } from 'react';
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

      const dots = '...';

      if (leftDots && !rightDots) {
        const extraPages = range(startPage - singleDotsOffset, startPage - 1);
        pages = [dots, ...extraPages, ...pages];
      } else if (!leftDots && rightDots) {
        const extraPages = range(endPage + 1, endPage + singleDotsOffset);
        pages = [...pages, ...extraPages, dots];
      } else if (leftDots && rightDots) {
        pages = [dots, ...pages, dots];
      }

      return [1, ...pages, pagesAmount];
    }
    return range(1, pagesAmount);
  };

  const { pagesAmount, urlTemplate, currentPage } = paginationSettings;
  if (!pagesAmount || pagesAmount === 1) return null;

  const pages = fetchPageNumbers();

  return (
    <nav className='pagination'>
      <ul>
        {currentPage !== 1 ? (
          <li>
            <NavLink to={`${urlTemplate}/page-${currentPage - 1}`}>{'<'}</NavLink>
          </li>
        ) : null}
        {pages.map((page, index) => (
          <li key={index}>
            {page === '...' ? (
              <span>...</span>
            ) : page === currentPage ? (
              <span>{page}</span>
            ) : (
              <NavLink to={`${urlTemplate}/page-${page}`}>{page}</NavLink>
            )}
          </li>
        ))}
        {currentPage !== pagesAmount ? (
          <li>
            <NavLink to={`${urlTemplate}/page-${currentPage + 1}`}>{'>'}</NavLink>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}
