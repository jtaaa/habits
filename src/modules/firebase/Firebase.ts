import app from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/storage';

export const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

class Firebase {
  auth: app.auth.Auth;
  analytics: app.analytics.Analytics;

  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.analytics = app.analytics();
  }
}

export default new Firebase();
