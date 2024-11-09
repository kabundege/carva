import React from 'react';
import Text from '../Text';
import Spacer from '../Spacer';
import {useTranslation} from 'react-i18next';
import {Dropdown} from 'react-native-element-dropdown';
import {Colors, Dimensions, Fonts} from '../../styles';
import {StyleSheet, View, ViewStyle} from 'react-native';
import ChevronIcon from '../../../assets/svg/chevron-down.svg';
import Animated, {FadeInUp, FadeOutUp} from 'react-native-reanimated';

interface SelectBoxProps<T> {
  value: T;
  label?: string;
  search?: boolean;
  onFocus?: () => void;
  placeholder?: string;
  isDisabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onChange: (val: T) => void;
  style?: Array<ViewStyle> | ViewStyle;
  dropDownStyles?: Array<ViewStyle> | ViewStyle;
  onChangeText?: (val: string) => void;
  error?: string;
  selectedTextNumberOfLines?: number;
  data: any[];
  labelStyle?: ViewStyle;
  renderItem?:
    | ((
        item: any,
        selected?: boolean | undefined,
      ) => JSX.Element | null | undefined)
    | undefined;
  renderInputSearch?: (
    onSearch: (text: string) => void,
  ) => JSX.Element | null | undefined;
}

function SelectBox<T = string | number>({
  label,
  placeholder,
  leftIcon,
  rightIcon,
  error,
  data,
  style,
  onChange,
  value,
  onFocus,
  labelStyle,
  renderItem,
  onChangeText,
  search = true,
  dropDownStyles,
  renderInputSearch,
  isDisabled = false,
  selectedTextNumberOfLines = 2,
}: SelectBoxProps<T>) {
  const {t} = useTranslation();
  return (
    <View style={[styles.item, style]}>
      {label ? (
        <View style={styles.labelView}>
          <Text
            label
            bold
            capitalize
            size={Dimensions.FONT_SIZE_SM}
            color={Colors.DEFAULT}
            style={labelStyle}>
            {label}
          </Text>
        </View>
      ) : null}
      <Dropdown
        data={data}
        search={search}
        maxHeight={300}
        onFocus={onFocus}
        labelField="label"
        valueField="value"
        disable={isDisabled}
        onChangeText={onChangeText}
        iconStyle={styles.iconStyle}
        style={[styles.dropdown, dropDownStyles]}
        selectedTextProps={{numberOfLines: selectedTextNumberOfLines}}
        inputSearchStyle={styles.inputSearchStyle}
        placeholderStyle={styles.placeholderStyle}
        placeholder={placeholder || 'Select item'}
        selectedTextStyle={styles.selectedTextStyle}
        searchPlaceholder={t('search') + '...'}
        renderInputSearch={renderInputSearch}
        value={value}
        onChange={item => {
          if (value !== item.value) {
            onChange(item.value);
          }
        }}
        renderItem={renderItem}
        renderLeftIcon={() =>
          leftIcon ? (
            <>
              {leftIcon}
              <Spacer margin={Dimensions.SIZE_XS / 2} />
            </>
          ) : (
            <></>
          )
        }
        renderRightIcon={() => <>{rightIcon || <ChevronIcon />}</>}
      />
      {error ? (
        <Animated.View
          entering={FadeInUp}
          exiting={FadeOutUp}
          style={styles.error}>
          <Text caption color={Colors.DANGER}>
            {error}
          </Text>
        </Animated.View>
      ) : null}
    </View>
  );
}

export default SelectBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    backgroundColor: Colors.GRAY_BG,
    height: Dimensions.INPUT_HEIGHT,
    borderColor: Colors.BRIGHT_GRAY,
    borderWidth: Dimensions.INPUT_BORDER_SIZE,
    borderRadius: Dimensions.INPUT_BORDER_RADIUS,
    paddingVertical: Dimensions.INPUT_HORIZONTAL_SPACING,
    paddingHorizontal: Dimensions.INPUT_HORIZONTAL_SPACING,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: Colors.BACKGROUND,
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: Dimensions.SIZE_XS,
    fontSize: Dimensions.FONT_SIZE_M,
  },
  placeholderStyle: {
    color: Colors.PLACEHOLDER_TEXT,
    fontSize: Dimensions.FONT_SIZE_M,
    paddingHorizontal: Dimensions.SIZE_XS,
  },
  selectedTextStyle: {
    color: Colors.DEFAULT,
    fontSize: Dimensions.FONT_SIZE_M,
    paddingHorizontal: Dimensions.SIZE_XS,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    color: Colors.DEFAULT,
    fontSize: Dimensions.FONT_SIZE_L,
    height: Dimensions.INPUT_HEIGHT * 0.9,
  },
  item: {
    position: 'relative',
    marginBottom: Dimensions.SIZE_L,
  },
  labelView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Dimensions.SIZE_SM,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.INPUT_WIDTH,
    height: Dimensions.INPUT_HEIGHT,
    borderColor: Colors.BRIGHT_GRAY,
    backgroundColor: Colors.BACKGROUND,
    borderWidth: Dimensions.INPUT_BORDER_SIZE,
    borderRadius: Dimensions.INPUT_BORDER_RADIUS,
    overflow: 'hidden',
  },
  input: {
    paddingHorizontal: Dimensions.INPUT_HORIZONTAL_SPACING,
    paddingVertical: Dimensions.INPUT_HORIZONTAL_SPACING,
    fontSize: Dimensions.FONT_SIZE_L,
    textDecorationColor: 'transparent',
    textShadowColor: 'transparent',
    color: Colors.DEFAULT,
    ...Fonts.light,
    flex: 1,
  },
  rightIcon: {
    alignSelf: 'center',
    marginLeft: Dimensions.INPUT_HORIZONTAL_SPACING,
  },
  error: {
    alignItems: 'flex-end',
    width: '100%',
    marginTop: 4,
  },
});
