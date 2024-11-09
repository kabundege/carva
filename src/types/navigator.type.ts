import {NavigationProp, RouteProp} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

export type PublicRoutes = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  ResetPassword: {'reset-token': string};
};

export type PrivateRoutes = {
  Home: undefined;
  NewUBN: undefined;
  Splash: undefined;
  Camera: undefined;
  Profile: undefined;
  Gallery: undefined;
  Parcel: undefined;
  NewParcel: undefined;
  GetStarted: undefined;
  EditParcel: undefined;
  EditProfile: undefined;
  DrawBoundaries: undefined;
  Preview: {
    source: 'camera' | 'gallery';
    photoURI: string;
    takenOn: number;
  };
};

export type ScreenProps<T extends keyof RootStackParamsList> = {
  navigation: NavigationProp<RootStackParamsList, T>;
  route: RouteProp<RootStackParamsList, T>;
};

export type RootStackParamsList = PublicRoutes & PrivateRoutes;

export type RootStackScreenProps<T extends keyof RootStackParamsList> =
  StackScreenProps<RootStackParamsList, T>;
