import React, { useState } from 'react';

import Title from 'Components/AppTitle';
import Loading from 'Components/Loading';

import { Form } from './styles/styles';

import { useAuth } from './context/auth-context';

function UnauthenticatedApp() {
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    register({ email });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Title />
      <label htmlFor="email">
        <input
          type="email"
          id="email"
          placeholder="Insert your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
      {isLoading && <Loading height={50} />}
    </Form>
  );
}

export default UnauthenticatedApp;
