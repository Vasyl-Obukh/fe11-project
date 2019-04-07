import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchResults from '../components/SearchResults';

const mapStateToProps = (state, props) => {
  const {
    history: {
      location: { search }
    }
  } = props;
  const filter = search
    .slice(1)
    .split('&')
    .map(p => p.split('='))
    .reduce((obj, pair) => {
      const [key, value] = pair.map(decodeURIComponent);
      return { ...obj, [key]: value };
    }, {});
  let { query } = filter;
  const regs = query.split(' ').map(_ => new RegExp(_, 'i'));
  const articles = state.articles.filter(article =>
    regs.some(_ => _.test(article.title) || _.test(article.overview))
  );
  articles.forEach(article => {
    article.categoriesName = state.categories
      .filter(category => article.categoriesId.includes(category.id))
      .map(category => category.name);
    return article;
  });
  return {
    query,
    articles
  };
};

export default withRouter(connect(mapStateToProps)(SearchResults));
