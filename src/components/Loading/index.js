import React from 'react';
import gifLoading from 'Root/assets/loader.gif';

import { Container } from './styles';

const Loading = () => <img src={gifLoading} alt="loading" />;

const FullScreenLoading = () => (
  <Container>
    <p>Carregando...</p>
  </Container>
);

export { FullScreenLoading };

export default Loading;
