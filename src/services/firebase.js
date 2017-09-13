import firebase from 'firebase'
import config from './config'

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

function getData(path) {
  return firebase.database().ref(path)
}

function setData(path, data) {
  return firebase.database().ref(path).set(data)
}

// Export as object {}
export {
  init,
  login,
  logout,
  autoLogin,
  getData,
  setData
}