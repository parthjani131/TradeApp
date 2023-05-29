import react, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import SubList from './SubList';

const List = ({item, extraDataVisible, setExtraDataVisible}) => {
  const calculateTotalPnl = () => {
    let temp = 0;
    item.options.forEach(element => {
      temp = temp + (element.ltp * element.qty - element.val);
    });
    return temp;
  };

  const calculateTotalPnlPercentage = () => {
    let total = 0;
    let totalPnl = 0;
    item.options.forEach(element => {
      totalPnl = totalPnl + (element.ltp * element.qty - element.val);
      total = total + element.qty * element.val;
    });
    let percentage = (totalPnl / total) * 100;
    return percentage;
  };

  return (
    <TouchableOpacity
      onPress={() => {
        setExtraDataVisible(extraDataVisible === item.id ? 0 : item.id);
      }}
      style={styles.listView}
      activeOpacity={0.6}>
      <View style={{width: '100%'}}>
        <Text style={styles.listTextBold}>{item.title}</Text>
      </View>

      <View style={styles.listRowView}>
        <Text
          style={
            item.subtitle === 'Exited'
              ? styles.listTextGold
              : styles.listTextGrey
          }>
          {item.subtitle}
        </Text>
        <Text
          style={
            calculateTotalPnl().toFixed(2) < 0
              ? styles.listTextRed
              : styles.listTextGreen
          }>
          <Text style={{color: 'black'}}>₹</Text>{' '}
          {`${calculateTotalPnl().toFixed(
            2,
          )} (${calculateTotalPnlPercentage().toFixed(2)} %)`}
        </Text>
      </View>

      {extraDataVisible === item.id && (
        <View
          style={{
            width: '100%',
            marginTop: 10,
          }}>
          <View style={styles.extraRowDataView}>
            <Text style={{textAlign: 'left', ...styles.extraTextBold}}>
              QTY:
            </Text>
            <Text style={{textAlign: 'center', ...styles.extraTextBold}}>
              LTP:
            </Text>
            <Text style={{textAlign: 'center', ...styles.extraTextBold}}>
              Val:
            </Text>
            <Text style={{textAlign: 'right', ...styles.extraTextBold}}>
              PNL:
            </Text>
          </View>

          <View>
            <FlatList
              data={item.options}
              renderItem={({item, index}) => {
                return <SubList item={item} />;
              }}
            />
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listView: {
    width: '100%',
    borderBottomColor: '#E7E7E7',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  listRowView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listTextBold: {
    fontSize: 15,
    width: '100%',
    color: '#6771E4',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 5,
  },
  listTextGrey: {
    fontSize: 14,
    color: '#8B8B8B',
    fontFamily: 'Poppins-Regular',
  },
  listTextGold: {
    fontSize: 14,
    color: '#E7C158',
    fontFamily: 'Poppins-Regular',
  },
  listTextGreen: {
    fontSize: 14,
    color: '#4B994C',
    fontFamily: 'Poppins-Regular',
  },
  listTextRed: {
    fontSize: 14,
    color: '#D73842',
    fontFamily: 'Poppins-Regular',
  },
  extraRowDataView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    marginBottom: 5,
  },
  extraTextBold: {
    flex: 1,
    fontSize: 15,
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 5,
  },
});

export default List;
