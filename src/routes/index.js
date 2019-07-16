import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorBoundary from 'Components/ErrorBoundary';

const Feed = lazy(() => import(/* webpackChunkName: "feed-page" */ 'Pages/Feed'));

const categories = ['husky', 'labrador', 'hound', 'pug'];

const routes = () => (
  <ErrorBoundary>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" component={Feed} exact />
      </Switch>
    </Suspense>
  </ErrorBoundary>
);

export { categories };

export default routes;
