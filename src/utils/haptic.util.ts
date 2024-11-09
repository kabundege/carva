import {trigger} from 'react-native-haptic-feedback';

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

// Trigger haptic feedback
export const emitHapticFeedback = () => {
  trigger('impactLight', options);
};
