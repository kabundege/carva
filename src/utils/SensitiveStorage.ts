import SensitiveInfo, {
  RNSensitiveInfoOptions,
  SensitiveInfoEntry,
} from 'react-native-sensitive-info';

const extractKeys = (items: [SensitiveInfoEntry[]]) =>
  items[0].map(item => item.key);

export default (options: RNSensitiveInfoOptions) => {
  return {
    async getItem(key: string): Promise<string | null> {
      let result;
      result = await SensitiveInfo.getItem(key, options);

      if (typeof result === 'undefined') {
        result = null;
      }

      return result;
    },

    async setItem(key: string, value: string) {
      return await SensitiveInfo.setItem(key, value, options);
    },

    async removeItem(key: string) {
      return await SensitiveInfo.deleteItem(key, options);
    },

    async getAllKeys(): Promise<string[]> {
      const values = await SensitiveInfo.getAllItems(options);

      const result = extractKeys(values);

      return result;
    },
  };
};
