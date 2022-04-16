export const getLocalImage = name => {
  switch (name) {
    case 'poster1.jpg':
      return require('../assets/images/poster1.jpg');
    case 'poster2.jpg':
      return require('../assets/images/poster2.jpg');
    case 'poster3.jpg':
      return require('../assets/images/poster3.jpg');
    case 'poster4.jpg':
      return require('../assets/images/poster4.jpg');
    case 'poster5.jpg':
      return require('../assets/images/poster5.jpg');
    case 'poster6.jpg':
      return require('../assets/images/poster6.jpg');
    case 'poster7.jpg':
      return require('../assets/images/poster7.jpg');
    case 'poster8.jpg':
      return require('../assets/images/poster8.jpg');
    case 'poster9.jpg':
      return require('../assets/images/poster9.jpg');
    default:
      return require('../assets/images/placeholder_for_missing_posters.png');
  }
};
