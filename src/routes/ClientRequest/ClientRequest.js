import axios from 'axios'

const loginClientEndpoint = 'http://localhost:8090/loginClient'
const getClientByIdEndpoint = 'http://localhost:8090/getClientById/'
const addNewClientEndpoint = 'http://localhost:8090/addNewClient'
const updateClientEndpoint = 'http://localhost:8090/updateClient'

const loginClient = async (login, password) => {
 const body = {
   login,
   password,
 }
 let result
 await axios
   .post(loginClientEndpoint, body)
   .then((response) => {
     result = response.data
   })
   .catch((errors) => {
     result = handleErrors(errors)
   })
 return result
}

const getClientById = async (id) => {
  let result
  await axios
    .get(getClientByIdEndpoint + id)
    .then((response) => {
      result = response.data
    })
    .catch((errors) => {
      result = handleErrors(errors)
    })
  return result
}

const addNewClient = async (newClient) => {
  let result
  await axios
    .post(addNewClientEndpoint, newClient)
    .then((response) => {
      result = response.data
    })
    .catch((errors) => {
      result = handleErrors(errors)
    })
  return result
}

const updateClient = async (newClient) => {
  let result
  await axios
    .post(updateClientEndpoint, newClient)
    .then((response) => {
      result = response.data
    })
    .catch((errors) => {
      result = handleErrors(errors)
    })
  return result
}

const handleErrors = (error) => {
  return {
    response: error.message,
    statusCode: 500
  }
}

export {
  loginClient, getClientById, addNewClient, updateClient,
}
