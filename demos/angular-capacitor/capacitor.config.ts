import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: "com.appauth.demo",
  appName: "Angular Demo",
  "webDir": "www",
  server: {
    // androidScheme: 'lifeline',
    iosScheme: 'lifeline',
    cleartext: true
  },
  plugins: {
    CapacitorHttp: {
      enabled: true
    }
  }
};

export default config;
