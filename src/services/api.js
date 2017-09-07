import axios from 'axios' // a library to call API via URL

function getUser (number = 1) { // default to 1 if not provided
  return axios.get(`https://randomuser.me/api/?results=${number}`)
}

export {
  getUser
}