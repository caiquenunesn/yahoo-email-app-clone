import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Constants from 'expo-constants';


const statusBar = Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Container = styled.View`
    background-color: #181b18;
`;

export const EmailContainer = styled.View`
`;
export const Wrapper = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const LeftSide = styled.View`
    flex-direction: row;
    padding: 10px;
    align-items: center;
`;

export const WrapperDesc = styled.View`
    justify-content: center;
    width: 80%;
`;

export const Avatar = styled.View`
    border-radius: 40px;
    border-width: 1px;
    background-color: #000;
    height: 40px;
    width: 40px;
`;

export const Info = styled.Text`
    padding-left: 20px;
    font-weight: bold;
    color: #fff;
`;

export const RightSide = styled.View`
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    
`;

export const Description = styled.Text`
    color: #fff;
`;

export const Button = styled.TouchableOpacity`
    margin-top: 24px;
`;

export const Separe = styled.View`
    width: 100%;
    height: 1px;
    background-color: #2c3a2c;
`;