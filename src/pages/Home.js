import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import axios from 'axios';
import {BASE_API} from '../../helper';

function Home({navigation}) {
  const [sultans, setSultans] = useState([]);

  useEffect(() => {
    getSultans();
  }, [1]);

  const getSultans = () => {
    axios
      .get(`${BASE_API}`)
      .then((res) => {
        setSultans(res.data);
      })
      .catch((err) => console.log('Hata', err));
  };

  const Item = ({sultan}) => (
    <View style={styles.cardsView}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Detail', {sultanID: sultan._id});
        }}
        style={styles.cards}>
        <Image style={styles.cardsImage} source={{uri: sultan.avatar}} />
        <Text style={styles.cardTitle}>{sultan.title}</Text>
        <View style={styles.cardBottom}>
          <Text style={styles.periodText}>{sultan.period}</Text>
          <Text style={styles.dateText}>
            {sultan.firstDate}-{sultan.lastDate}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderSultan = ({item}) => <Item sultan={item} />;
  return (
    <View style={styles.container}>
      <FlatList renderItem={renderSultan} data={sultans} numColumns={2} />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {backgroundColor: 'orange', flex: 1},
  cardsView: {flex: 1, margin: 5},
  cards: {
    padding: 10,
    backgroundColor: '#742D1B',
    borderRadius: 5,
  },
  cardsImage: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardTitle: {
    color: '#fff',
    padding: 5,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
  },
  cardBottom: {flex: 1, flexDirection: 'row'},
  periodText: {
    flex: 1,
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'justify',
  },
  dateText: {
    fontSize: 10,
  },
});
