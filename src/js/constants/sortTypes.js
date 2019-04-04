const sortTypes = {
  DATE_DOWN: 'DATE_DOWN',
  DATE_UP: 'DATE_UP',
  COMMENTS_NUMBER: 'COMMENTS_NUMBER'
};

export default sortTypes;

export const compareFunctions = {
  [sortTypes.DATE_DOWN]: (a, b) => new Date(b.date) - new Date(a.date),
  [sortTypes.DATE_UP]: (a, b) => new Date(a.date) - new Date(b.date),
  [sortTypes.COMMENTS_NUMBER]: (a, b) => b.commentsNumber - a.commentsNumber
};
