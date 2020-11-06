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
            <Text style={styles.aboutTitle}>~ Islahatlar ~</Text>
            {aboutSultan.map((i) => (
              <Text style={styles.aboutText}>♦ {i}</Text>
            ))}
          </View>
          <View style={styles.otherView}>
            <Text style={styles.otherTitle}>~ Ekstra Bilgiler ~</Text>
            <View style={styles.doubleTextView}>
              <Text style={styles.infoTitle}>Tahtta kaldığı tarihler:</Text>
              <Text style={styles.info}>
                {sultanDetail.firstDate} - {sultanDetail.lastDate}
              </Text>
            </View>
            <View style={styles.doubleTextView}>
              <Text style={styles.infoTitle}>Dönemi: </Text>
              <Text style={styles.info}>{sultanDetail.period}</Text>
            </View>
            <View style={styles.doubleTextView}>
              <Text style={styles.infoTitle}>Babası:</Text>
              <Text style={styles.info}>{sultanDetail.father}</Text>
            </View>
            <View style={styles.doubleTextView}>
              <Text style={styles.infoTitle}>Annesi:</Text>
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
  container: {flex: 1, backgroundColor: 'orange'},
  header: {
    flex: 0.1,
    flexDirection: 'row',
  },
  body: {flex: 1, marginHorizontal: 10, marginBottom: 10},
  image: {
    borderWidth: 5,
    borderColor: '#922C2C',
    alignSelf: 'center',
    height: 250,
    width: 340,
    borderRadius: 10,
    marginVertical: 10,
  },
  aboutView: {
    marginTop: 10,
    backgroundColor: '#922C2C',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  aboutTitle: {
    fontWeight: '700',
    borderBottomWidth: 2,
    borderColor: 'orange',
    paddingBottom: 5,
    fontSize: 18,
    fontFamily: 'serif',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 5,
  },
  aboutText: {
    fontSize: 13.5,
    textAlign: 'left',
    fontWeight: '500',
    fontFamily: 'serif',
    color: '#fff',
    paddingVertical: 5,
  },
  otherView: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderColor: '#BDC3C7',
    backgroundColor: '#922C2C',
    borderRadius: 10,
  },
  otherTitle: {
    borderBottomWidth: 2,
    paddingBottom: 5,
    borderColor: 'orange',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'serif',
    color: '#FFF',
  },
  doubleTextView: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: 'pink',
  },
  infoTitle: {
    fontWeight: 'bold',
    flex: 1,
    color: '#EC9C07',
    fontFamily: 'serif',
  },
  info: {
    fontWeight: '700',
    fontFamily: 'serif',
    textAlign: 'left',
    color: '#fff',
  },
});
