import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import ErrorBoundary from 'Components/ErrorBoundary';

import { FullScreenLoading } from 'Components/Loading';

const Feed = lazy(() => import(/* webpackChunkName: "feed-page" */ 'Pages/Feed/index'));

const categories = [
  { query: 'husky', name: 'Husky', default: true },
  { query: 'labrador', name: 'Labrador' },
  { query: 'hound', name: 'Hound' },
  { query: 'pug', name: 'Pug' }
];

const routes = () => (
  <ErrorBoundary>
    <Suspense fallback={<FullScreenLoading />}>
      <Switch>
        <Route path="/feed" component={FullScreenLoading} exact />
        <Route path="*" render={() => <Redirect to="/feed" />} />
      </Switch>
    </Suspense>
  </ErrorBoundary>
);

export { categories };

export default routes;
