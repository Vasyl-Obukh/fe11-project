const sortTypes = {
  LATEST: 'latest',
  FIRSTS: 'firsts',
  POPULAR: 'popular',
  ALPHABETIC: 'alphabetic'
};

export default sortTypes;

export const compareFunctions = {
  [sortTypes.LATEST]: (a, b) => new Date(b.date) - new Date(a.date),
  [sortTypes.FIRSTS]: (a, b) => new Date(a.date) - new Date(b.date),
  [sortTypes.POPULAR]: (a, b) => b.commentsNumber - a.commentsNumber,
  [sortTypes.ALPHABETIC]: (a, b) => a.name > b.name ? 1 : -1
};
