import paths from './constants/paths';
import sortTypes from './constants/sortTypes';

export const formatDate = (date, showMinutes = false) => {
  date = new Date(date);
  let day = date.getDate();
  if (day < 10) day = `0${day}`;
  let month = date.getMonth() + 1;
  if (month < 10) month = `0${month}`;
  let year = date.getFullYear() % 100;
  if (year < 10) year = `0${year}`;
  let time = '';
  if (showMinutes) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (hours < 10) minutes = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    time = `${hours}:${minutes}`;
  }
  return `${time} ${day}/${month}/${year}`;
};

export const getBreadcrumbs = ({
  path,
  currentPage,
  categoryName,
  title,
  page
}) => {
  let breadcrumbs = [
    {
      name: 'Home',
      url: paths.MAIN_FIRST_PAGE,
      last: path === paths.MAIN_FIRST_PAGE
    }
  ];
  if (categoryName && (path === paths.CATEGORY_FIRST_PAGE || path === paths.CATEGORY_N_PAGE)) {
    breadcrumbs.push({
      name:
        categoryName.length >= 12
          ? categoryName.slice(0, 10) + '...'
          : categoryName,
      url: paths.CATEGORY_FIRST_PAGE.replace(/:\w*/, categoryName),
      last: currentPage === 1
    });
  }
  if (page) {
    breadcrumbs.push({
      name: page,
      last: true
    });
  }
  if (currentPage && currentPage !== 1) {
    breadcrumbs.push({
      name: `Page-${currentPage}`,
      last: true
    });
  }
  if (path === paths.ARTICLE_PAGE) {
    breadcrumbs.push(
      {
        name: 'Articles',
        url: paths.MAIN_FIRST_PAGE
      },
      {
        name: title.length > 30 ? title.slice(0, 30) + '...' : title,
        last: true
      }
    );
  }
  return breadcrumbs;
};

export const linkCategories = (articles, categories) =>
  articles.map(article => ({
    ...article,
    categoriesName: categories
      .filter(category => article.categoriesId.includes(category._id))
  }));

export const linkUserName = (comment, users) => ({
  ...comment,
  //userName: 'test'//users.find(_ => _._id === comment.userId).name
});

export const linkArticleTitle = (comment, articles) => ({
  ...comment,
  articleTitle: articles.find(_ => _._id === comment.articleId).title
});

export const getSortType = query => {
  const sortType = new URLSearchParams(query).get('sort');
  return Object.values(sortTypes).includes(sortType)
    ? sortType
    : sortTypes.LATEST;
};

export const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

export default {
  formatDate,
  getBreadcrumbs,
  linkCategories,
  getSortType,
  range
};
