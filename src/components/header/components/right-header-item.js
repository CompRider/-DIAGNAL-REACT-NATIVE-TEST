import React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import PropTypes from 'prop-types';

const RightHeaderItem = ({
  onRightItemClicked,
  source,
  resizeMode,
  iconStyle,
}) => {
  return (
    <Pressable style={styles.container} onPress={onRightItemClicked}>
      <FastImage
        source={source}
        style={[styles.iconStyle, iconStyle]}
        resizeMode={resizeMode || FastImage.resizeMode.contain}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
  iconStyle: {width: 25, height: 25},
});

RightHeaderItem.prototype = {
  source: PropTypes.object,
};

export default RightHeaderItem;
