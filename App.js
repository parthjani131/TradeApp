import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  StatusBar,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import List from './components/List';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  const capital = 50000;
  const [extraDataVisible, setExtraDataVisible] = useState(0);
  const [listData, setListData] = useState([
    {
      id: 1,
      title: 'GSA BNF Directional',
      subtitle: 'Live-Entered',
      value: '2,502 (1.00 %)',
      options: [
        {
          id: 1,
          name: '1.OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
          qty: 100,
          ltp: 2.3,
          val: 100,
          pnl: 0,
        },
        {
          id: 2,
          name: '2.OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
          qty: 50,
          ltp: 4.5,
          val: 200,
          pnl: 0,
        },
        {
          id: 3,
          name: '3.OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
          qty: 30,
          ltp: 1.7,
          val: 150,
          pnl: 0,
        },
        {
          id: 4,
          name: '4.OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
          qty: 20,
          ltp: 3.1,
          val: 175,
          pnl: 0,
        },
      ],
    },
    {
      id: 2,
      title: 'GSA Nifty Directional',
      subtitle: 'Exited',
      value: '-1,037 (-0.10 %)',
      options: [
        {
          id: 1,
          name: '1.OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
          qty: 10,
          ltp: 3.2,
          val: 200,
          pnl: 0,
        },
        {
          id: 2,
          name: '2.OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
          qty: 80,
          ltp: 4.5,
          val: 150,
          pnl: 0,
        },
      ],
    },
    {
      id: 3,
      title: 'Banknifty Fighter Lite Positional',
      subtitle: 'Live-Entered',
      value: '2,502 (1.00 %)',
      options: [
        {
          id: 1,
          name: '1.OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
          qty: 120,
          ltp: 2.6,
          val: 120,
          pnl: 0,
        },
        {
          id: 2,
          name: '2.OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
          qty: 50,
          ltp: 4.2,
          val: 230,
          pnl: 0,
        },
        {
          id: 3,
          name: '3.OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
          qty: 50,
          ltp: 3.7,
          val: 150,
          pnl: 0,
        },
      ],
    },
    {
      id: 4,
      title: 'Banknift Fighter Positional',
      subtitle: 'Live-Entered',
      value: '11,264 (1.00 %)',
      options: [
        {
          id: 1,
          name: '1.OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
          qty: 30,
          ltp: 5.3,
          val: 300,
          pnl: 0,
        },
        {
          id: 2,
          name: '2.OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
          qty: 200,
          ltp: 4.9,
          val: 220,
          pnl: 0,
        },
      ],
    },
    {
      id: 5,
      title: 'Overnight Miner',
      subtitle: 'Exited',
      value: '-1,037 (-0.10 %)',
      options: [
        {
          id: 1,
          name: '1.OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
          qty: 125,
          ltp: 4.1,
          val: 125,
          pnl: 0,
        },
        {
          id: 2,
          name: '2.OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
          qty: 70,
          ltp: 3.5,
          val: 210,
          pnl: 0,
        },
        {
          id: 3,
          name: '3.OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
          qty: 75,
          ltp: 4.7,
          val: 200,
          pnl: 0,
        },
      ],
    },
    {
      id: 6,
      title: 'Overnight Miner Nifty',
      subtitle: 'Exited',
      value: '-2,337 (-0.10 %)',
      options: [
        {
          id: 1,
          name: '1.OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
          qty: 80,
          ltp: 5.1,
          val: 200,
          pnl: 0,
        },
        {
          id: 2,
          name: '2.OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
          qty: 60,
          ltp: 4.6,
          val: 150,
          pnl: 0,
        },
        {
          id: 3,
          name: '3.OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
          qty: 45,
          ltp: 1.3,
          val: 125,
          pnl: 0,
        },
        {
          id: 4,
          name: '4.OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
          qty: 25,
          ltp: 1.5,
          val: 175,
          pnl: 0,
        },
      ],
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setListData(list => {
        const newList = list.map(item => {
          const newOptions = item.options.map(option => {
            option.ltp = (Math.random() * 11).toFixed(2);
            return option;
          });
          item.options = newOptions;
          return item;
        });
        return newList;
      });
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const calculateSummaryPnl = () => {
    let totalPnl = 0;
    listData.forEach(element => {
      let totalItemPnl = 0;
      element.options.forEach(item => {
        totalItemPnl = totalItemPnl + (item.ltp * item.qty - item.val);
      });
      totalPnl = totalPnl + totalItemPnl;
    });
    return totalPnl;
  };

  const calculateSummaryValue = () => {
    let totalVal = 0;
    listData.forEach(element => {
      let totalItemVal = 0;
      element.options.forEach(item => {
        totalItemVal = totalItemVal + item.val;
      });
      totalVal = totalVal + totalItemVal;
    });
    return totalVal;
  };

  const calculateOptionsLength = () => {
    let optionsLength = 0;
    listData.forEach(element => {
      optionsLength = optionsLength + element.options.length;
    });
    return optionsLength;
  };

  const calculatePnlPercentage = () => {
    return ((calculateSummaryPnl() / capital) * 100).toFixed(4);
  };

  return (
    <View style={styles.root}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

      <View style={styles.headerView}>
        <View style={styles.headerIcon}>
          <FontAwesome name={'navicon'} color="black" size={25} />
        </View>
        <View style={styles.headerTitle}>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontFamily: 'Montserrat-Bold',
            }}>
            Strategies
          </Text>
        </View>
      </View>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryView}>
          <View style={styles.summaryHeaderView}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                fontFamily: 'Montserrat-Bold',
              }}>
              Summary
            </Text>
            <View style={styles.summaryDropdownView}>
              <Text
                style={{
                  fontSize: 14,
                  color: 'white',
                  fontFamily: 'Poppins-Regular',
                }}>
                Expiry
              </Text>
              <FontAwesome name={'angle-down'} color="white" size={18} />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: 70,
            }}>
            <View
              style={{
                width: '25%',
                height: 70,
                paddingVertical: 10,
              }}>
              <Text style={styles.summaryTextBold}>Capital:</Text>
              <Text style={styles.summaryTextRegular}>{`₹ ${capital}`}</Text>
            </View>
            <View
              style={{
                width: '45%',
                height: 70,
                paddingVertical: 10,
              }}>
              <Text style={styles.summaryTextBold}>P&L:</Text>
              <Text style={styles.summaryTextRegular}>
                {`₹ ${calculateSummaryPnl().toFixed(
                  2,
                )} (${calculatePnlPercentage()} %)`}
              </Text>
            </View>
            <View
              style={{
                width: '30%',
                height: 70,
                paddingVertical: 10,
              }}>
              <Text style={styles.summaryTextBold}>Value:</Text>
              <Text
                style={
                  styles.summaryTextRegular
                }>{`₹ ${calculateSummaryValue().toFixed(
                2,
              )} (${calculateOptionsLength()})`}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={listData}
          renderItem={({item, index}) => {
            return (
              <List
                item={item}
                extraDataVisible={extraDataVisible}
                setExtraDataVisible={setExtraDataVisible}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  headerView: {
    flexDirection: 'row',
    height: 50,
  },
  headerIcon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    width: windowWidth - 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 50,
  },
  summaryContainer: {
    width: windowWidth,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  summaryView: {
    width: windowWidth - 25,
    height: 130,
    borderRadius: 10,
    backgroundColor: '#6771E4',
    overflow: 'hidden',
  },
  summaryHeaderView: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  summaryDropdownView: {
    width: 135,
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderColor: '#989DDF',
    borderWidth: 1,
    borderRadius: 6,
  },
  summaryTextBold: {
    fontSize: 15,
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    marginBottom: 5,
  },
  summaryTextRegular: {
    fontSize: 12,
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  listContainer: {
    flex: 1,
    width: windowWidth,
    paddingHorizontal: 15,
  },
});

export default App;
