import { connect } from 'react-redux';
import { logOut } from '../actions/currentUser';
import Header from '../components/header/Header';
import Slider from '../components/other/Slider';
import Sidebar from '../components/sidebar/Sidebar';
import Footer from '../components/footer/Footer';
import sortTypes, { compareFunctions } from '../constants/sortTypes';

export const HeaderContainer = connect(
  ({ categories, currentUser }) => ({
    categories,
    currentUser
  }),
  dispatch => ({
    logOut: () => dispatch(logOut())
  })
)(Header);

export const SliderContainer = connect(
  ({ articles, settings: { slidesNumber = 5 } }) => ({
    articles: articles
      .sort(compareFunctions[sortTypes.POPULAR])
      .slice(0, slidesNumber)
  })
)(Slider);

export const SidebarContainer = connect(({ articles, categories }) => ({
  articles: articles.sort(compareFunctions[sortTypes.POPULAR]).slice(0, 3),
  categories: categories.sort(compareFunctions[sortTypes.ALPHABETIC])
}))(Sidebar);

export const FooterContainer = connect(
  ({ settings: { copyright, socialLinks } }) => ({
    socialLinks,
    copyright
  })
)(Footer);
