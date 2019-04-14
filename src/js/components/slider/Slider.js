import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.interval;
    this.slidesAmount = props.articles.length || 0;
    this.state = {
      currentSlide: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.moveRight();
    }, 7000);
  }

  componentWillUnmount() {
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
    this.setState({
      currentSlide: currentSlide < this.slidesAmount - 1 ? currentSlide + 1 : 0
    });
  };

  render() {
    const { articles } = this.props;
    let imgArray = [];
    for (let article of articles) {
      imgArray.push(article.thumbnailUrl);
    }
    return (
      <div
        className='slider'
        onMouseEnter={() => clearInterval(this.interval)}
        onMouseLeave={() =>
          (this.interval = setInterval(() => {
            this.moveRight();
          }, 7000))
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
            <Link key={id} to={`/articles/${_.id}`}>
              <div
                role='img'
                className={`slider__image slider__image_${
                  this.state.currentSlide === id ? 'active' : 'hidden'
                }`}
                style={{ backgroundImage: `url('${_.thumbnailUrl}')` }}
              >
                <span
                  className='slider__text'
                  title={_.title}
                >
                  {_.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
