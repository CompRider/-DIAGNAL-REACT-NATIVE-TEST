import React, {useEffect, useState} from 'react';
import {
  Alert,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Header from '../../components/header';
import HomeService from '../../services/home-service';
import ListItem from './components/list-item';

const Home = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [totalItems, setTotalItems] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);

  useEffect(() => {
    getData(page);
  }, [page]);

  useEffect(() => {
    if (searchText) {
      searchItemsByName(searchText);
    } else {
      setPage(1);
    }
  }, [searchText]);

  const getData = async _page => {
    try {
      if (_page === 1) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }
      const response = await HomeService.getHomeData(_page);
      if (response) {
        if (_page === 1) {
          setTitle(response.title);
          setTotalItems(parseInt(response['total-content-items']));
          setData(response['content-items'].content);
        } else {
          setData([...data, ...response['content-items'].content]);
        }
      }
    } catch (error) {
      error?.message && Alert.alert('Error', error.message);
    } finally {
      if (_page === 1) {
        setLoading(false);
      } else {
        setLoadingMore(false);
      }
    }
  };

  const searchItemsByName = async name => {
    try {
      setLoadingSearch(true);
      const response = await HomeService.searchItemsByName(name);
      setData(response);
    } catch (error) {
      error?.message && Alert.alert('Error', error.message);
    } finally {
      setLoadingSearch(false);
    }
  };

  const formatRow = (dataList, numColumns) => {
    const _dataList = [...dataList];
    const numberOfFullRows = Math.floor(_dataList.length / numColumns);
    let numberOfElementsLastRow =
      _dataList.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      _dataList.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
      numberOfElementsLastRow++;
    }
    return _dataList;
  };

  const onLeftItemClicked = () => {
    // TODO: action
  };

  const renderEmptyData = () => (
    <View style={{alignItems: 'center', marginTop: 30}}>
      <Text style={{fontSize: 24, color: '#ccc'}}>No Result Found</Text>
    </View>
  );

  return (
    <View style={styles.pageContainer}>
      <Header
        headerTitle={title}
        showLeftItem
        showSearchItem
        onLeftItemClicked={onLeftItemClicked}
        onSearchChangeText={setSearchText}
        loadingSearch={loadingSearch}
      />
      <View style={styles.contentContainer}>
        {loading ? (
          <ActivityIndicator size={'large'} style={{marginTop: 30}} />
        ) : (
          <FlatList
            data={(data && formatRow(data, 3)) || []}
            numColumns={3}
            contentContainerStyle={{paddingBottom: 10}}
            renderItem={({item}) => <ListItem item={item} />}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={renderEmptyData}
            ListFooterComponent={() =>
              loadingMore ? (
                <ActivityIndicator
                  size={'small'}
                  style={{padding: 20, alignSelf: 'center'}}
                />
              ) : null
            }
            onEndReachedThreshold={0.5}
            onEndReached={() =>
              !loadingMore &&
              !searchText &&
              data?.length < totalItems &&
              setPage(page + 1)
            }
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    marginTop: -30,
    paddingHorizontal: 5,
  },
});

Home.prototype = {};

export default Home;
