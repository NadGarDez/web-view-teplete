import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
     <WebView source={{ uri: 'https://www.google.com/?hl=es' }} style={{ marginTop: 20 }} />
  );
}


