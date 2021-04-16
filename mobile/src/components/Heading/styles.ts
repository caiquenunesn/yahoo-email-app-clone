import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #181b18;
    width: 100%;
`;

export const Wrapper = styled.View`
    flex-direction: row;
    padding-top: 10px;
    padding-bottom: 10px;
    padding: 10px 25px;
`;

export const HeadingText = styled.Text`
    color: #ddd;
    font-size: 14px;
    margin-left: 17px;
`;

export const Separe = styled.View`
    width: 900px;
    height: 0.2px;
    background-color: #000;
    margin: 0;
    padding: 0;
`;

export const Box = styled.TouchableOpacity`
    border-width: 1px;
    height: 17px;
    width: 17px;
    border-color: #ddd;
`;