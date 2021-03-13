import { Dimensions } from 'react-native';


const Constants = {
     windowWidth : Dimensions.get('window').width,
     windowHeight : Dimensions.get('window').height,
     headerHeight: 40,
     imageSize: "large"
}

const ImageConstants = {
     imageSize: (Constants.windowWidth / 3) - 20,
     fetchImageAmount: Constants.imagesPerRow * 6
}

export {Constants, ImageConstants};
