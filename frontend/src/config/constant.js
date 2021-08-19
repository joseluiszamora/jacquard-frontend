export default {
  webBaseURL: process.env.MIX_APP_URL,
  firebaseConfig: {
    apiKey: 'AIzaSyDskBaULTSFGPRy3AvOpMxVlO6e6u2CFdE',
    authDomain: 'vito-dashboard-vue.firebaseapp.com',
    databaseURL: 'https://vito-dashboard-vue.firebaseio.com',
    projectId: 'vito-dashboard-vue',
    storageBucket: 'vito-dashboard-vue.appspot.com',
    messagingSenderId: '174815027215',
    appId: '1:174815027215:web:1ee7e52a527158bb35037a'
  },
  auth0Config: {
    domain: 'dev-6u-3fb22.auth0.com',
    clientID: 'MmsLOH7Ncrh7PKTcyHYKZggfH7RrxeL8',
    // make sure this line is contains the port: 8080
    redirectUri: 'http://localhost:8080/callback',
    // we will use the api/v2/ to access the user information as payload
    audience: 'https://dev-6u-3fb22.auth0.com/api/v2/',
    responseType: 'token id_token',
    scope: 'openid profile'
  }
}
