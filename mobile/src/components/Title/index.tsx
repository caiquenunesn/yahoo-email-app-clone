import React from 'react';

import { Container, TitleText } from './styles';

const Title: React.FC = ({ children }) => {
  return (
    <Container>
      <TitleText>{children}</TitleText>
    </Container>
  );
}

export default Title;