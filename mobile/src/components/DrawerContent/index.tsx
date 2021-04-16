import React from 'react';
import { Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { 
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome,
    AntDesign,
    Feather,
    Ionicons,
   } from '@expo/vector-icons';
import {
    Drawer,
    Title,
    Avatar,
    Caption,
 } from 'react-native-paper';
import { 
    Container,
    EmailText,
    AccountsView,
    WrapperEmail,
    TextAcc,
    Separe,
    WrapperAccounts,
 } from './styles';
    
export function DrawerContent(props: any){
  return (
    <>
        <DrawerContentScrollView  style={{backgroundColor: '#000009'}}>
            <Container>
                <Title style={{ padding: 10, color: '#fff'}}>Accounts</Title>
                <WrapperAccounts>
                    <AccountsView style={{marginLeft: 10,}}>
                        <Avatar.Image 
                            source={{
                                uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'  }}
                            size={50} />
                        <WrapperEmail>
                            <EmailText>caique.nunes@ymail.com</EmailText>
                            <Caption style={{color: '#b3b3b3'}}>caique.nunes@ymail.com</Caption>
                            <TextAcc>Accounts Key</TextAcc>
                        </WrapperEmail>
                    </AccountsView>
                </WrapperAccounts>

                <Separe></Separe>
            <Drawer.Section>
                <DrawerItem onPress={() => {}} inactiveTintColor="#fff" icon={({color, size}) => (
                    <AntDesign name="plus" color='#fff' size={size}/>
                    )}
                    label="Add another mailbox" />
                <DrawerItem onPress={() => {}} inactiveTintColor="#fff" icon={({color, size}) => (
                    <MaterialCommunityIcons name="account-circle" color='#fff' size={size}/>
                    )}
                    label="Manage accounts" />
                <DrawerItem onPress={() => {}} inactiveTintColor="#fff" icon={({color, size}) => (
                    <Ionicons name="md-notifications-outline" color='#fff' size={size}/>
                    )}
                    label="Notifications" />
                <DrawerItem onPress={() => {}} inactiveTintColor="#fff" icon={({color, size}) => (
                    <Ionicons name="ios-settings-outline" color='#fff' size={size}/>
                    )}
                    label="Settings" />
            </Drawer.Section>
            <Separe style={{marginTop: 0}}></Separe>
            <Drawer.Section>
                <DrawerItem onPress={() => {}} inactiveTintColor="#fff" icon={({ color, size }) => (
                    <AntDesign name="Safety" color={color} size={size}/>
                )} label="Upgrade to PRO"/>
            </Drawer.Section>
            <Separe style={{marginTop: 0}}></Separe>
            <Drawer.Section>
                <DrawerItem onPress={() => {}} labelStyle={{fontSize: 12}} inactiveTintColor="#fff" icon={({ color, size }) => (
                    <MaterialIcons name="feedback" color={color} size={size}/>
                )} label="FeedBack"/>
            </Drawer.Section>
            </Container>
        </DrawerContentScrollView>
        <Drawer.Section style={{backgroundColor: '#000', marginBottom: 0}} >
            <DrawerItem  inactiveTintColor="#fff" onPress={() => {}}
                icon={({color, size}) => (
                    <MaterialIcons name="exit-to-app" size={size} color={color}/>
                )}
                label="Sair"
            />
        </Drawer.Section>
    </>
  );
}