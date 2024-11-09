import {Switch as RNSwitch} from 'react-native';
import {Colors} from '../../styles';
import React, {FC} from 'react';

export type Props = {
  onChange: (value: boolean) => void;
  value: boolean;
};

const CustomSwitch: FC<Props> = ({onChange, value}) => (
  <RNSwitch
    value={value}
    trackColor={{
      false: Colors.LIGHT_INDIGO,
      true: Colors.PRIMARY_VARIANT,
    }}
    ios_backgroundColor={Colors.BRIGHT_GRAY}
    onValueChange={value => onChange(value)}
    thumbColor={value ? Colors.PRIMARY : Colors.WILDBLUE}
  />
);

export default CustomSwitch;
