import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
    justify-content: center;
    align-items: center;
`;

export const ButtonTabs = styled.TouchableOpacity`
  border-bottom-width: ${props => props.border === 0 ? 1 : 0};
  border-bottom-color: #fff;
  justify-content: center;
  align-items: center;
`;
export const ButtonTabs2 = styled.TouchableOpacity`
  border-bottom-width: ${props => props.border2 === 1 ? 1 : 0};
  border-bottom-color: #fff;
  margin-left: 16;
`;

export const ButtonTabs3 = styled.TouchableOpacity`
  border-bottom-width: ${props => props.border3 === 2 ? 1 : 0};
  border-bottom-color: #fff;
  margin-left: 16;
`;
export const TextTabs = styled.Text`
  opacity: ${props => props.colorText === 0 ? 1 : 0.5};
  color: #fff;
  font-size: 16;
`;
export const TextTabs2 = styled.Text`
  opacity: ${props => props.colorText2 === 1 ? 1 : 0.5};
  color: #fff;
  font-size: 16;
`;

export const TextTabs3 = styled.Text`
  opacity: ${props => props.colorText3 === 2 ? 1 : 0.5};
  color: #fff;
  font-size: 16;
`;