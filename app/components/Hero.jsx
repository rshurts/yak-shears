import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';

const Hero = ({ title, subtitle }) => (
  <section className="hero is-large is-primary is-bold">
    <div className="hero-head">
      <header className="nav">
        <div className="container">
          <div className="nav-right nav-menu">
            <IndexLink to={'/'} className="nav-item" activeClassName="is-active">
              Home
            </IndexLink>
            <Link to={'documentation'} className="nav-item" activeClassName="is-active">
              Documentation
            </Link>
            <span className="nav-item">
              <a
                href="https://github.com/rshurts/yak-shears"
                className="button is-primary is-inverted"
              >
                <span className="icon">
                  <i className="fa fa-github" />
                </span>
                <span>
                  Download
                </span>
              </a>
            </span>
          </div>
        </div>
      </header>
    </div>
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title is-1">
          {title}
        </h1>
        <h2 className="subtitle is-4">
          {subtitle}
        </h2>
      </div>
    </div>
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Hero;
