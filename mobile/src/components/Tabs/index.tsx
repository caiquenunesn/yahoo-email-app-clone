import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Inbox2 from '../../screens/Inbox2';
// import { Container } from './styles';

interface Props{
    children: React.FC;
    Title: string;
}

const Arquivos = () => (
    <>
        <View>
            <Text>Arquivos</Text>
        </View>
    </>
)

const Fotos = () => (
    <>
        <View>
            <Text>Fotos</Text>
        </View>
    </>
)

const Email = () => (
    <>
        <View>
            <Text>Email</Text>
        </View>
    </>
)

const TabNavigator = createMaterialTopTabNavigator(
    {
        Sarquivos: {
            screen: Arquivos
        },
        Sfotos: {
            screen: Fotos
        },
        Semail: {
            screen: Email
        },
        },
        {
            swipeEnabled: false,
            tabBarComponent: Inbox2,
            tabBarOptions: {activeTintColor: "#1BA1F3",
            inactiveTintColor: "#000"
        },
            initialRouteName: "Sarquivos"
        }
);

const Navigation = createAppContainer(TabNavigator)

export default Navigation;