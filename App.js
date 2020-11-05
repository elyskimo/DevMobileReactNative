import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import List from '@screens/List/index';
import Info from '@screens/Info/index';
import MainNavigation from '@navigation/MainNavigation';

export default function App() {

  return (
    <View style={styles.container}>
      {/*<List/>*/}
      <MainNavigation />
        {/*<Info/>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // minHeight: '100%',
    backgroundColor: '#ecf0f1',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
