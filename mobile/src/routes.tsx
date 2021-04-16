import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inbox from './screens/Inbox';
import Inbox2 from './screens/Inbox2';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './components/DrawerContent';
import {  } from '@react-navigation/drawer';
import { 
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
  Feather,
} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function HomeScreen() {

    const icons = {
        Inbox: {
            lib: MaterialIcons,
            name: 'email',
        },
        Attachments: {
            lib: FontAwesome,
            name: 'paperclip',
        },
        MultiEmail: {
            lib: MaterialCommunityIcons,
            name: 'email-multiple-outline',
        },
        Deals: {
            lib: AntDesign,
            name: 'tagso'
        },
        More: {
            lib: Feather,
            name: 'more-vertical',
        }

    }
    return (
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({focused, size, color}) => {
              const { lib: Icon, name } = icons[route.name];
              return <Icon name={name} size={size} color={color}/>
          }
      })}
      tabBarOptions={{
          style: {
              backgroundColor: '#10100a',
              borderTopColor: 'rgba(255,255,255,0.2)',
          },
          activeTintColor: '#ddd',
          inactiveTintColor: '#92929c',
        }}
      >
          <Tab.Screen name="Inbox" options={{title: 'Caixa'}} component={Inbox} />
          <Tab.Screen name="Attachments" component={Inbox2} />
          <Tab.Screen name="MultiEmail" component={Inbox2} />
          <Tab.Screen name="Deals" component={Inbox2} />
          <Tab.Screen name="More" options={{title: 'Mais'}} component={Inbox2} />
      </Tab.Navigator>
    );
  }

  const AppDrawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <AppDrawer.Navigator 
          drawerContent={props => <DrawerContent {...props} />}
           initialRouteName="Home"
           >
          <AppDrawer.Screen 
            name="Email"
            component={HomeScreen} />
          <AppDrawer.Screen
            name="Settings"
            component={HomeScreen} />
          <AppDrawer.Screen
            name="SecondPage"
            component={Inbox} />
          <AppDrawer.Screen
            name="TPage"
            component={Inbox} />
          <AppDrawer.Screen
            name="QPage"
            component={Inbox} />
        </AppDrawer.Navigator>
    </NavigationContainer>
  );
}