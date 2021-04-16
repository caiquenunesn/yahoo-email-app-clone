
import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar style='light' backgroundColor='black'/>
      <Routes />

    </>
  );
}