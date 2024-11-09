import {View} from 'react-native';
import React from 'react';
import Text from '../Text';
import {Colors, Dimensions, globalStyles} from '../../styles';

export interface TDropDownRenderItem {
  label: string | React.ReactNode;
  selected?: boolean;
}

const DropDownRenderItem = ({label, selected}: TDropDownRenderItem) => (
  <View
    style={[
      globalStyles.paddingHorizontal_L,
      {
        paddingVertical: Dimensions.SIZE_XS,
        backgroundColor: selected ? Colors.PRIMARY_VARIANT : Colors.TRANSPARENT,
      },
    ]}>
    <Text
      medium
      capitalize
      size={Dimensions.FONT_SIZE_M}
      color={selected ? Colors.WHITE : Colors.DARK_SILVER}>
      {label}
    </Text>
  </View>
);

export default DropDownRenderItem;
