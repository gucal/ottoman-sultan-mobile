import React, {useState, useEffect} from 'react';
import {Text, View, Image, ScrollView, StyleSheet} from 'react-native';
import axios from 'axios';

import {BASE_API} from '../../helper';

import {Header} from '../components';

function Detail({route}) {
  const {sultanID} = route.params;

  const [sultanDetail, setSultanDetail] = useState([]);
  const [aboutSultan, setAboutSultan] = useState([]);

  useEffect(() => {
    getSultanDetails();
  }, [1]);

  const getSultanDetails = () => {
    axios
      .get(`${BASE_API}/${sultanID}`)
      .then((res) => {
        setSultanDetail(res.data[0]);
        setAboutSultan(res.data[0].desc);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header props={sultanDetail.title} />
      </View>
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image style={styles.image} source={{uri: sultanDetail.avatar}} />
          <View style={styles.aboutView}>
            <Text style={styles.aboutTitle}>Yaptıkları</Text>
            {aboutSultan.map((i) => (
              <Text style={styles.aboutText}>* {i}</Text>
            ))}
          </View>
          <View style={styles.otherView}>
            <Text style={styles.otherTitle}>Diğer Bilgileri</Text>
            <View style={styles.doubleTextView}>
              <Text style={styles.otherListTitle}>
                Tahtta kaldığı tarihler:{' '}
              </Text>
              <Text style={styles.info}>
                {sultanDetail.firstDate} - {sultanDetail.lastDate}
              </Text>
            </View>
            <View style={styles.doubleTextView}>
              <Text style={styles.otherListTitle}>Dönemi: </Text>
              <Text style={styles.info}>{sultanDetail.period}</Text>
            </View>
            <View style={styles.doubleTextView}>
              <Text style={styles.otherListTitle}>Babası:</Text>
              <Text style={styles.info}>{sultanDetail.father}</Text>
            </View>
            <View style={styles.doubleTextView}>
              <Text style={styles.otherListTitle}>Annesi:</Text>
              <Text style={styles.info}>{sultanDetail.mother}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Detail;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  header: {
    flex: 0.1,
    flexDirection: 'row',
  },
  body: {flex: 1, marginHorizontal: 10, marginBottom: 10},
  image: {
    alignSelf: 'center',
    height: 250,
    width: 340,
    borderRadius: 10,
    margin: 10,
  },
  aboutView: {paddingBottom: 10},
  aboutTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'serif',
    color: '#480E68',
    textAlign: 'center',
    marginBottom: 5,
  },
  aboutText: {
    fontSize: 13.5,
    textAlign: 'left',
    fontWeight: '500',
    fontFamily: 'serif',
  },
  otherView: {paddingTop: 10, borderTopWidth: 1, borderColor: '#BDC3C7'},
  otherTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'serif',
    color: '#5D1187',
  },
  doubleTextView: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 0.5,
    borderColor: '#BDC3C7',
  },
  otherListTitle: {fontWeight: '700', flex: 1, color: '#000'},
  info: {fontWeight: '700', textAlign: 'justify'},
  period: {fontWeight: '700', color: '#000'},
});
