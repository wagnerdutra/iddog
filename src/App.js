import React, { Suspense, lazy } from 'react';

import { useUser } from './context/user-context';

import { FullScreenLoading } from './components/Loading';

const AuthenticatedApp = lazy(() =>
  import(/* webpackChunkName: "authenticated-page" */ './AuthenticatedApp')
);
const UnauthenticatedApp = lazy(() =>
  import(/* webpackChunkName: "unauthenticated-page" */ './UnauthenticatedApp')
);

function App() {
  const user = useUser();
  return (
    <Suspense fallback={<FullScreenLoading />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  );
}

export default App;
