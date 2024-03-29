import React from 'react';
import PropTypes from 'prop-types';

const Main = (props) => {
  const {places, onCardHeaderClick} = props;
  return (<main className="page__main page__main--index">
    <h1 className="visually-hidden">Cities</h1>
    <div className="cities tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Paris</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Cologne</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Brussels</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item tabs__item--active">
              <span>Amsterdam</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Hamburg</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Dusseldorf</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
    <div className="cities__places-wrapper">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex="0">
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex="0">Popular</li>
              <li className="places__option" tabIndex="0">Price: low to high</li>
              <li className="places__option" tabIndex="0">Price: high to low</li>
              <li className="places__option" tabIndex="0">Top rated first</li>
            </ul>
            <select className="places__sorting-type" id="places-sorting">
              <option className="places__option" value="popular">Popular</option>
              <option className="places__option" value="to-high">Price: low to high</option>
              <option className="places__option" value="to-low">Price: high to low</option>
              <option className="places__option" value="top-rated">Top rated first</option>
            </select>
          </form>
          <div className="cities__places-list places__list tabs__content">
            <article className="cities__place-card place-card">
              <div className="place-card__mark">
                <span>Premium</span>
              </div>
              <div className="cities__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image"/>
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;120</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                  <button className="place-card__bookmark-button button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{width: `93%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name place-card__name--test">
                  <a href="#" onClick={onCardHeaderClick}>{places[0]}</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>

            <article className="cities__place-card place-card">
              <div className="cities__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image"/>
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;80</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                  <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">In bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{width: `80%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#" onClick={onCardHeaderClick}>{places[1]}</a>
                </h2>
                <p className="place-card__type">Private room</p>
              </div>
            </article>

            <article className="cities__place-card place-card">
              <div className="cities__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place image"/>
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;132</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                  <button className="place-card__bookmark-button button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{width: `80%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#" onClick={onCardHeaderClick}>{places[3]}</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>

            <article className="cities__place-card place-card">
              <div className="place-card__mark">
                <span>Premium</span>
              </div>
              <div className="cities__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="img/apartment-03.jpg" width="260" height="200" alt="Place image"/>
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;180</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                  <button className="place-card__bookmark-button button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{width: `100%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#" onClick={onCardHeaderClick}>{places[2]}</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>

            <article className="cities__place-card place-card">
              <div className="cities__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image"/>
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;80</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                  <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark-active"></use>
                    </svg>
                    <span className="visually-hidden">In bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{width: `80%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#" onClick={onCardHeaderClick}>{places[0]}</a>
                </h2>
                <p className="place-card__type">Private room</p>
              </div>
            </article>
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"></section>
        </div>
      </div>
    </div>

  </main>);
};

Main.propTypes = {
  places: PropTypes.array,
  onCardHeaderClick: PropTypes.func
};


export default Main;
