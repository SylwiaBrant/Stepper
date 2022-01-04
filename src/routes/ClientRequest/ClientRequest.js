import axios from 'axios'

const loginClientEndpoint = 'http://localhost:8090/loginClient'
const getClientByIdEndpoint = 'http://localhost:8090/getClientById/'
const addNewClientEndpoint = 'http://localhost:8090/addNewClient'
const updateClientEndpoint = 'http://localhost:8090/updateClient'

const LoginClient = (login, password) => {
  const body = {
    login,
    password,
  }
  axios
    .post(loginClientEndpoint, body)
    .then((response) => {
      console.log('response')
      console.log(response)
    })
    .catch((errors) => {
      console.log('errors')
      console.log(errors)
    })
}

const GetClientById = (id) => {
  axios
    .get(getClientByIdEndpoint + id)
    .then((response) => {
      console.log('response')
      console.log(response)
    })
    .catch((errors) => {
      console.log('errors')
      console.log(errors)
    })
}

const AddNewClient = (newClient) => {
  axios
    .post(addNewClientEndpoint, newClient)
    .then((response) => {
      console.log('response')
      console.log(response)
    })
    .catch((errors) => {
      console.log('errors')
      console.log(errors)
    })
}
const UpdateClient = (newClient) => {
  axios
    .post(updateClientEndpoint, newClient)
    .then((response) => {
      console.log('response')
      console.log(response)
    })
    .catch((errors) => {
      console.log('errors')
      console.log(errors)
    })
}

export {
  LoginClient, GetClientById, AddNewClient, UpdateClient,
}
