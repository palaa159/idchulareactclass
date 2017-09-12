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
  return auth().onAuthStateChanged((x) => callback(x))
}

function pushChat ({ sender, photoURL, message, sentAt }) { // Add chat
  /*
    chatlog: [
      {
        sender: String,
        photoURL: String,
        message: String,
        sentAt: Date
      },
      ...
    ]
  */
  const ref = firebase.database().ref('/chatlog')
  return ref.push({ sender, message, sentAt })
}

function getChatLog () {
  // Will pull data automatically
  return firebase.database().ref('/chatlog')
}

function clearChatLog () {

}

function user (userId, path = '') {
  return firebase.database().ref(`/user/${userId}/${path}`)
}

function getUsers () {
  return firebase.database().ref(`/user`)
}

// Export as object {}
export {
  init,
  login,
  logout,
  autoLogin,
  getChatLog,
  pushChat,
  user,
  getUsers
}