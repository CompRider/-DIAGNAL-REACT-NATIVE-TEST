import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import DelayInput from 'react-native-debounce-input';

const SearchInputHeaderItem = props => {
  return (
    <View style={styles.container}>
      <DelayInput
        style={styles.input}
        placeholder="Type to search"
        placeholderTextColor="#bbb"
        {...props}
      />
      {props.loadingSearch && (
        <ActivityIndicator size={'small'} style={styles.loader} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    padding: 0,
    paddingBottom: 5,
    marginBottom: 10,
    paddingRight: 25,
  },
  loader: {marginLeft: -20, marginBottom: 20},
});

SearchInputHeaderItem.prototype = {
  headerTitle: PropTypes.string || PropTypes.func,
};

export default SearchInputHeaderItem;
