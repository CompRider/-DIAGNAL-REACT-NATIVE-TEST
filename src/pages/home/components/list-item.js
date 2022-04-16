import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import {getLocalImage} from '../../../utils';

const imgBaseURL = '../../../assets/images/';

const ListItem = ({item}) => {
  return item.empty ? (
    <View style={styles.container} />
  ) : (
    <View style={styles.container}>
      <FastImage
        source={getLocalImage(item['poster-image'])}
        style={{width: '100%', height: '100%'}}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.text} numberOfLines={1}>
        {item.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    height: 200,
    marginBottom: 30,
  },
  text: {color: 'white'},
});

ListItem.prototype = {
  item: PropTypes.object,
};

export default ListItem;
