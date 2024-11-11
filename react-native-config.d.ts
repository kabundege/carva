declare module 'react-native-config' {
  export interface NativeConfig {
    BASE_URL: string;
    NODE_ENV: string;
    GOOGLE_API_KEY: string;
    ENCRYPTION_KEY: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
