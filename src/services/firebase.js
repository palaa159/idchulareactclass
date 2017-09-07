import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBJc_bqk13PnAyx3wPTk3cyw-iOxc__ayI",
  authDomain: "namoproject-e5062.firebaseapp.com",
  databaseURL: "https://namoproject-e5062.firebaseio.com",
  projectId: "namoproject-e5062",
  storageBucket: "namoproject-e5062.appspot.com",
  messagingSenderId: "515394613668"
}

const auth = firebase.auth
const provider = new firebase.auth.FacebookAuthProvider()

function init () {
  return firebase.initializeApp(config);
}

async function login () {
  // login to facebook
  const result = await auth().signInWithPopup(provider)
  return result
}

async function logout () {
  // logout from facebook
  const result = await auth().signOut()
  return result
}

function autoLogin (callback) {
  auth().onAuthStateChanged((x) => callback(x))
}

// Export as object {}
export {
  init,
  login,
  logout,
  autoLogin
}