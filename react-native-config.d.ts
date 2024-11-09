declare module 'react-native-config' {
  export interface NativeConfig {
    BASE_URL: string;
    NODE_ENV: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
