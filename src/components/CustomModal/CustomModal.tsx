import React, {FC} from 'react';
import {Colors} from '../../styles';
import Modal from 'react-native-modal';
import styles from './CustomModal.styles';
import {toastConfig} from '../../../App';
import Toast from 'react-native-toast-message';
import {ModalProps, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export type Props = ModalProps & {
  visible: boolean;
  backdropColor?: string;
  backdropOpacity?: number;
  toggleModal?: () => void;
  containerStyles?: ViewStyle[] | ViewStyle;
};

const CustomModal: FC<Props> = ({
  backdropOpacity = 0.5,
  containerStyles,
  backdropColor,
  toggleModal,
  visible,
  ...rest
}) => (
  <Modal
    propagateSwipe
    isVisible={visible}
    swipeDirection={['down']}
    onSwipeComplete={toggleModal}
    onBackdropPress={toggleModal}
    onBackButtonPress={toggleModal}
    backdropOpacity={backdropOpacity}
    style={[styles.modal, containerStyles]}
    backdropColor={backdropColor || Colors.DEFAULT}>
    <SafeAreaView />
    {rest.children}
    <Toast config={toastConfig} />
  </Modal>
);

export default CustomModal;
