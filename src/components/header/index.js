import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  PixelRatio,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import headerBgImage from '../../assets/images/nav_bar.png';
import LeftHeaderItem from './components/left-header-item';
import RightHeaderItem from './components/right-header-item';

import BackIcon from '../../assets/icons/Back.png';
import SearchIcon from '../../assets/icons/search.png';
import MiddleHeaderItem from './components/middle-header-item';
import SearchInputHeaderItem from './components/search-input-header-item';

const Header = ({
  headerTitle,
  showLeftItem,
  showRightItem,
  showSearchItem,
  loadingSearch,
  leftIcon,
  rightIcon,
  onLeftItemClicked,
  onRightItemClicked,
  onSearchChangeText,
  style,
}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <ImageBackground source={headerBgImage} style={[styles.headerStyle, style]}>
      <View style={styles.container}>
        {showLeftItem && (
          <LeftHeaderItem
            source={leftIcon || BackIcon}
            onLeftItemClicked={onLeftItemClicked}
          />
        )}
        {showSearchInput ? (
          <SearchInputHeaderItem
            onChangeText={onSearchChangeText}
            loadingSearch={loadingSearch}
          />
        ) : (
          <MiddleHeaderItem headerTitle={headerTitle} />
        )}
        {showRightItem && (
          <RightHeaderItem
            source={rightIcon}
            onRightItemClicked={onRightItemClicked}
          />
        )}
        {showSearchItem && (
          <RightHeaderItem
            source={SearchIcon}
            onRightItemClicked={() => setShowSearchInput(!showSearchInput)}
          />
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerStyle: {
    height: 90,
    width: '100%',
    zIndex: 1000,
  },
});
// TODO: All items
Header.prototype = {
  onLeftItemClicked: PropTypes.func,
  onRightItemClicked: PropTypes.func,
};

export default Header;
