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

export default class Pagination extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log(this.props);
    return (
      <>
        {range(1, this.props.pages).map(_ => (
          <NavLink key={_} to={`/page-${_}`} >{_}</NavLink>
        ))}
      </>
    );
  }
}
