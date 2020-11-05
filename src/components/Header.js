import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Header({props}) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>{props}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E58E0A',
  },
});
