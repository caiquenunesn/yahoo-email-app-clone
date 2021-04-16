import React from 'react';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { Caption } from 'react-native-paper';
import {AntDesign} from '@expo/vector-icons';
import { 
    Container,
    EmailContainer,
    LeftSide,
    Avatar,
    Info,
    RightSide,
    Description,
    WrapperDesc,
    Button,
    Wrapper,
    Separe,
} from './styles';
export default () => {

    const EmailList = () => (
        <EmailContainer>
            <Wrapper>
                <LeftSide>
                    <Avatar />
                    <WrapperDesc>
                        <Info>Email Recebido</Info>
                        <Caption style={{paddingLeft: 20, color: '#fff'}}>Você foi adicionado em um grupo</Caption>
                        <Caption style={{paddingLeft: 20, lineHeight: 15, color: '#fff' }} numberOfLines={1} >Você foi adicionado em um grupo ksaooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo</Caption>
                    </WrapperDesc>
                </LeftSide>

                <RightSide>
                    <Description>3h</Description>
                    <Button>
                        <AntDesign name="staro" size={24} color='#999900'/>
                    </Button>
                </RightSide>
            </Wrapper>
            <Separe></Separe>
        </EmailContainer>
    )
    
    return (
        <Container>      
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />
        <EmailList />

    </Container>
  );
}