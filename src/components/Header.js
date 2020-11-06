import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function Header({props}) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/img/tugra.png')} style={styles.img} />
      <Text style={styles.headerTitle}>{props}</Text>
      <Image source={require('../assets/img/tugra.png')} style={styles.img} />
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
  img: {marginRight: 10, marginLeft: 10, width: 36, height: 36},
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E58E0A',
  },
});
