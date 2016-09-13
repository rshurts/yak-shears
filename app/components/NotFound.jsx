import React from 'react';

import Hero from './Hero';
import Footer from './Footer';

const NotFound = () => (
  <div>
    <Hero
      title={'404'}
      subtitle={'There are no yaks here.'}
    />
    <Footer />
  </div>
);

export default NotFound;
