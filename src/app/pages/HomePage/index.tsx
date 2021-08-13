import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export const HomePage = () => (
  <>
    <Helmet>
      <title>Home Page</title>
      <meta name="description" content="A Boilerplate application homepage" />
    </Helmet>
    <span>HomePage container</span>
  </>
);

export default HomePage;
