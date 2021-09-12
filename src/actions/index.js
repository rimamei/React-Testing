import axios from 'axios'

const getSecretWord = () => {
    // Write actual action in Redux / context section
  return axios.get('http://localhost:3030').then((response) => response.data)
}

export default getSecretWord
