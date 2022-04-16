import {Alert} from 'react-native';
import page1data from '../data/API/CONTENTLISTINGPAGE-PAGE1.json';
import page2data from '../data/API/CONTENTLISTINGPAGE-PAGE2.json';
import page3data from '../data/API/CONTENTLISTINGPAGE-PAGE3.json';

export default class HomeService {
  static async getHomeData(page) {
    try {
      let response;
      // TODO: API call to server
      switch (page) {
        case 1:
          response = page1data;
          break;
        case 2:
          response = page2data;
          break;
        case 3:
          response = page3data;
          break;
      }

      await new Promise(resolve => setTimeout(resolve, 700));

      if (response?.page) {
        return response.page;
      } else {
        return null;
      }
    } catch (error) {
      error?.message && Alert.alert('Error', error.message);
      return null;
    }
  }

  static async searchItemsByName(name) {
    try {
      let response = [
        ...page1data.page['content-items'].content,
        ...page2data.page['content-items'].content,
        ...page3data.page['content-items'].content,
      ];

      const items = response.filter(item =>
        item.name?.toLowerCase().includes(name.toLowerCase()),
      );

      await new Promise(resolve => setTimeout(resolve, 700));

      return items;
    } catch (error) {
      error?.message && Alert.alert('Error', error.message);
      return null;
    }
  }
}
