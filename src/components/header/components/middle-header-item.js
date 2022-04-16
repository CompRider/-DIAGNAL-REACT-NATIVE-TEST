import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const MiddleHeaderItem = ({headerTitle}) => {
  return (
    <View style={styles.container}>
      {typeof headerTitle === 'function' ? (
        headerTitle()
      ) : (
        <Text style={styles.text}>{headerTitle}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

MiddleHeaderItem.prototype = {
  headerTitle: PropTypes.string || PropTypes.func,
};

export default MiddleHeaderItem;
