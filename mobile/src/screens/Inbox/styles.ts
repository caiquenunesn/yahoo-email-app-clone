import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

const statusBar = Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
    background: #000;
    flex: 1;
    padding-top: ${statusBar + 'px'};
`;

export const Container = styled.View`
  
`;

export const Main = styled.View`

`;