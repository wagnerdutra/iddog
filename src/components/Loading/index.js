import React from 'react';
import gifLoading from 'Root/assets/loader.gif';

import { Container, ImageStyle } from './styles';

const Loading = props => <ImageStyle src={gifLoading} alt="loading" {...props} />;

const FullScreenLoading = () => (
  <Container>
    <p>Loading...</p>
  </Container>
);

export { FullScreenLoading };

export default Loading;
