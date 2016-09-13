import React from 'react';

import Hero from './Hero';
import Footer from './Footer';
import TodoFilter from './TodoFilter';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const Home = () => (
  <div>
    <Hero
      title={'Yak Shears'}
      subtitle={'A React, Redux, Webpack boilerplate and sample application.'}
    />
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Why Use Yak Shears</h1>
          <p>Yak Shears focuses on a good developer experience. It does this by:</p>
          <ul>
            <li>Ensuring working hot module loading works and state is kept whenever possible.</li>
            <li>Applying a standard react and redux implementation, {' '}
            with support for Redux DevTools.</li>
            <li>Providing a css framework and icons pack.</li>
            <li>Packing in linting with best practice style guides.</li>
            <li>Using a sample application to demonstrate how things work.</li>
          </ul>
          <p>Yak Shears also provides a hashed modular build output for {' '}
          a maintainable performant web app.</p>
          <h1>Yak Shears is Built On</h1>
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child notification">
                    <p className="title">Bulma</p>
                    <p className="subtitle">Great looking modern CSS</p>
                  </article>
                  <article className="tile is-child notification">
                    <p className="title">Fontawesome</p>
                    <p className="subtitle"><i className="fa fa-battery-full" />'s included</p>
                  </article>
                </div>
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child notification">
                    <p className="title">React</p>
                    <p className="subtitle">ES2015 and JSX are your friends</p>
                  </article>
                  <article className="tile is-child notification">
                    <p className="title">ESLint and Stylelint</p>
                    <p className="subtitle">Code that is beautiful and consistent</p>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification">
                  <p className="title">Webpack</p>
                  <p className="subtitle">Hot module load everything with great builds</p>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification">
                <p className="title">Redux</p>
                <p className="subtitle">State management, as shown here</p>
                <div className="content">
                  <AddTodo />
                  <VisibleTodoList />
                  <TodoFilter />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Home;
