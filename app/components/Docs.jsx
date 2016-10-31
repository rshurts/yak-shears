import React from 'react';

import Hero from './Hero';
import Footer from './Footer';

const Docs = () => (
  <div>
    <Hero
      title={'Documentation'}
      subtitle={'Learn all about Yak Shears.'}
    />
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Getting Started with Yak Shears</h1>
          <ol>
            <li>Ensure <code>yarn</code> is <a href="https://yarnpkg.com/en/docs/install">installed</a>.</li>
            <li>
              Clone the {' '}
              <a href="https://github.com/rshurts/yak-shears">
                Yak Shears git repository
              </a>
              .
            </li>
            <li><code>cd</code> into the <code>yak-shears</code> directory.</li>
            <li>Run <code>npm install</code>.</li>
            <li>Run <code>npm start</code>.</li>
            <li>Open <a href="http://localhost:8080">localhost:8080</a> in your browser.</li>
          </ol>

          <hr />
          <h1>Making Yak Shears Your Own</h1>
          <p>
            Yak Shears is easily modified by adding or removing packages {' '}
            through <a href="https://www.npmjs.com/">npm</a>. However, {' '}
            what follows are a few things you will probably want to do out of the box.
          </p>
          <h2>What Needs to Stay</h2>
          <p>
            You can change a lot in Yak Shears without breaking things, {' '}
            but the basic structure does count on a few things:
            <ul>
              <li>
                <code>app/index.js</code> needs to exist has references to {' '}
                the root component and reducer. This file also sets up everything {' '}
                for working with hot reload and the redux dev tools. The only thing {' '}
                you may need to change are the paths to the <code>rootReducer</code> {' '}
                and <code>Root</code> component if you make changes to the directory structure.
              </li>
              <li>
                <code>app/reducers/index.js</code> is where you combine all your {' '}
                redux reducers. You will need to keep around the routing import {' '}
                and have <code>routing</code> in your <code>combineReducers</code> {' '}
                for <code>react-redux-router</code> to work.
              </li>
              <li>
                <code>app/components/Root.jsx</code> is the where you define all your {' '}
                routes. If you change the location of this file, make sure to change {' '}
                the import in <code>app/index.js</code>.
              </li>
              <li>
                The <code>assets</code> directory and child directories are used {' '}
                by webpack. If you change the directory structure, you will need {' '}
                to modifiy the <code>PATHS</code> in <code>webpack.config.js</code> {' '}
                to reflect your changes.
              </li>
            </ul>
          </p>
          <h2>Create Your Own Git History</h2>
          <ol>
            <li>Remove the <code>.git</code> directory.</li>
            <li>Run <code>git init</code> to create a fresh git history.</li>
          </ol>
          <h2>Changing the Deploy URI</h2>
          <p>
            When using surge to deploy your app, you will need a unique name. {' '}
            Update the <code>deploy</code> command in <code>package.json</code> {' '}
            to use your unique domain name.
          </p>
          <h2>Changing the Favicon</h2>
          <p>
            Simply replace the <code>favicon.ico</code> in {' '}
            <code>app/assets/favicon</code> with your <code>favicon.ico</code>.
          </p>

          <hr />
          <h1>Warnings and Issues</h1>
          <p>Please be aware of the following when working with Yak Shears.</p>
          <h2>Setting Bulma Variables</h2>
          <p>
            The <a href="http://bulma.io/documentation/overview/start/">bulma docs</a> {' '}
            show that you can reference bulma variables before they are defined. {' '}
            For example, using <code>$orange</code> without first defining {' '}
            <code>$orange</code>. As in {' ' }
            <code>$danger: $orange // Use the existing orange</code>. {' '}
            This won&apos;t work. You will need to define {' '}
            <code>$orange: #f68b39</code> before using it.
          </p>
          <h2>React Router v2</h2>
          <p>
            React router has undergone a number of rewrites and recently released {' '}
            <a href="https://github.com/ReactTraining/react-router/blob/v4/README.md">
              version 4
            </a>
            , a complete rewrite and breaking change from version 2. {' '}
            Please ensure you are referencing v2 documentation when working with react router.
          </p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Docs;
