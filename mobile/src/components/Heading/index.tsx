import React from 'react';
import { View } from 'react-native';

 import { 
  Container,
  HeadingText,
  Box,
  Wrapper,
  Separe,
} from './styles';

const Heading: React.FC = ({ children }) => {
  return (
  <Container>
    <Wrapper>
      <Box></Box>
      <HeadingText>{children}</HeadingText>
    </Wrapper>
    <Separe></Separe>
  </Container>
  );
}

export default Heading;