import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
    padding-left: 20px;
    padding-top: 20px;
    position: absolute;
    width: 100%;
    background-color: #10100a;
`;
export const Wrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    padding-top: 22px;
    padding-right: 14px;
`;

export const Avatar = styled.TouchableOpacity`
    background: ${colors.tag};
    margin-left: 0px;
    width: 32px;
    height: 32px;
    border-radius: 21px;
`;

export const OnlineStatus = styled.View`
    background: ${colors.green};

    width: 10px;
    height: 10px;
    border-radius: 10px;
    border: 2px solid ${colors.primary};

    position: absolute;
    bottom: 0;
    right: 0;
`;

export const RightSide = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    margin-left: 20px;
`;
