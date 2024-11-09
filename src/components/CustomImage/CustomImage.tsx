import FastImage, {FastImageProps} from 'react-native-fast-image';
import React from 'react';

const CustomImage = ({...props}: FastImageProps) => {
  return <FastImage {...props} />;
};

export default CustomImage;
