/* eslint-disable react/no-unstable-nested-components */
import RNErrorBoundary, {
  FallbackComponentProps,
} from 'react-native-error-boundary';
import {Colors, Dimensions, globalStyles} from '../../styles';
import {displayErrorMessage} from '../../utils/toast.util';
import ButtonType from '../../enums/button-type.enum';
import Icon from '../../../assets/svg/404.svg';
import {StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import React, {ReactNode} from 'react';
import Button from '../Button';
import Spacer from '../Spacer';
import Text from '../Text';

export interface ErrorBoundaryProps {
  children: Exclude<NonNullable<ReactNode>, string | number | boolean>;
}

const ErrorBoundary = ({children}: ErrorBoundaryProps) => {
  const {t} = useTranslation();

  const handleRestartApp = () => {
    console.log('======== Restarting the app +++++====');
  };

  const errorHandler = (error: Error) => {
    /* Log the error to an error reporting service */
    displayErrorMessage(t('error'), String(error));
  };

  const ErrorFallback = (props: FallbackComponentProps) => (
    <View style={[styles.container, globalStyles.centered]}>
      <Icon />
      <Spacer margin={Dimensions.SIZE_L} />
      <Text
        black
        center
        color={Colors.DEFAULT}
        size={Dimensions.FONT_SIZE_XL * 1.5}
        allowFontScaling>
        {t('Something went wrong')}
      </Text>
      <Spacer margin={Dimensions.SIZE_XS} />
      <Text
        size={Dimensions.FONT_SIZE_L}
        center
        color={Colors.DARK_SILVER}
        medium>
        {props.error.toString()}
      </Text>
      <Spacer margin={Dimensions.SIZE_L} />
      <Button
        label={t('restart')}
        onPress={handleRestartApp}
        style={{width: Dimensions.SCREEN_WIDTH * 0.7}}
        type={ButtonType.DARK}
      />
    </View>
  );

  return (
    <RNErrorBoundary onError={errorHandler} FallbackComponent={ErrorFallback}>
      {children}
    </RNErrorBoundary>
  );
};

export default ErrorBoundary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
});
