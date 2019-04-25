import { connect } from 'react-redux';
import ArticlePage from '../components/pages/ArticlePage';
import paths from '../constants/paths';

const getBreadcrumbs = ({path, currentPage, categoryName, title}) => {
  const breadcrumbs = [{
    name: 'Home',
    url: paths.MAIN_FIRST_PAGE,
    last: path === paths.MAIN_FIRST_PAGE ? true : false
  }];
  if(path === paths.CATEGORY_FIRST_PAGE || path === paths.CATEGORY_N_PAGE) {
    breadcrumbs.push({
      name: 'Categories',
      url: paths.MAIN_FIRST_PAGE
    },
    {
      name: categoryName,
      url: paths.CATEGORY_FIRST_PAGE.replace(/:\w*/, categoryName),
      last: currentPage === 1 ? true : false
    });
  }
  if(currentPage && currentPage !== 1) {
    breadcrumbs.push({
      name: `Page-${currentPage}`,
      last: true
    });
  }
  if(path === paths.ARTICLE_PAGE) {
    breadcrumbs.push({
      name: 'Articles',
      url: paths.MAIN_FIRST_PAGE,
    },
    {
      name: title.slice(0, 30) + '...',
      last: true
    });
  }
  return breadcrumbs;
};

const mapStateToProps = (state, ownProps) => {
  const article = state.articles.find(
    article => ownProps.match.params.articleId === article.id
  );
  return {
    article: article,
    categories: article ? state.categories.filter(category =>
      article.categoriesId.includes(category.id)
    ) : [],
    breadcrumbs: getBreadcrumbs({path: ownProps.match.path, title: article.title})
  };
};

export default connect(mapStateToProps)(ArticlePage);
