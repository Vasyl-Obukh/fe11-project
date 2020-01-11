import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import paths from '../../constants/paths';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.interval;
    this.mounted = true;
    this.time = 7000;
    this.slidesAmount = props.articles.length || 0;
    this.state = {
      currentSlide: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.moveRight();
    }, this.time);
  }

  componentWillUnmount() {
    this.mounted = false;
    clearInterval(this.interval);
  }

  moveLeft = () => {
    const { currentSlide } = this.state;
    this.setState({
      currentSlide: currentSlide > 0 ? currentSlide - 1 : this.slidesAmount - 1
    });
  };

  moveRight = () => {
    const { currentSlide } = this.state;
    this.mounted
      ? this.setState({
          currentSlide:
            currentSlide < this.slidesAmount - 1 ? currentSlide + 1 : 0
        })
      : null;
  };

  render() {
    const { articles } = this.props;
    return this.slidesAmount ? (
      <div
        className='slider'
        onMouseEnter={() => clearInterval(this.interval)}
        onMouseLeave={() =>
          (this.interval = setInterval(() => {
            this.moveRight();
          }, this.time))
        }
      >
        <i
          className='fas fa-chevron-left slider__btn slider__btn_left'
          onClick={this.moveLeft}
        />
        <i
          className='fas fa-chevron-right slider__btn slider__btn_right'
          onClick={this.moveRight}
        />
        <div className='slider__images'>
          {articles.map((_, id) => (
            <Link key={id} to={paths.ARTICLE_PAGE.replace(/:\w*/, _.id)}>
              <div
                className={`slider__image slider__image_${
                  this.state.currentSlide === id ? 'active' : 'hidden'
                }`}
                style={{ backgroundImage: `url('${_.thumbnailUrl}')` }}
              >
                <span className='slider__text' title={_.title}>
                  {_.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    ) : null;
  }
}

Slider.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      title: PropTypes.string
    })
  )
};
