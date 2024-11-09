import {View, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import {Colors, Dimensions} from '../../styles';

export type Props = {
  margin?: number | string;
  hasBorder?: boolean;
  style?: ViewStyle;
};

const Spacer: FC<Props> = ({margin, hasBorder, style}) => {
  return (
    <View
      style={[
        style,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          margin: (margin as any) || Dimensions.SPACING,
          borderTopWidth: hasBorder ? 1 : 0,
          borderColor: Colors.BRIGHT_GRAY,
        },
      ]}
    />
  );
};

export default Spacer;
