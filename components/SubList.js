import react from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SubList = ({item}) => {
  return (
    <>
      <Text style={styles.extraTitleTextRegular}>{item.name}</Text>

      <View style={styles.extraRowDataView}>
        <Text
          style={{
            flex: 1,
            textAlign: 'left',
            ...styles.extraTextRegular,
          }}>
          {item.qty}
        </Text>
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            ...styles.extraTextRegular,
          }}>
          {item.ltp}
        </Text>
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            ...styles.extraTextRegular,
          }}>
          {item.val}
        </Text>
        <Text
          style={
            (item.ltp * item.qty - item.val).toFixed(2) < 0
              ? {
                  flex: 1,
                  textAlign: 'right',
                  ...styles.listTextRed,
                }
              : {
                  flex: 1,
                  textAlign: 'right',
                  ...styles.listTextGreen,
                }
          }>
          {(item.ltp * item.qty - item.val).toFixed(2)}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
  extraTitleTextRegular: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Poppins-Regular',
    textDecorationLine: 'underline',
  },
  extraTextRegular: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Poppins-Regular',
    marginBottom: 5,
  },
});

export default SubList;
