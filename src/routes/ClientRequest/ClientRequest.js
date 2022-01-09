import axios from 'axios'
import { useEffect, useState } from 'react'

const loginClientEndpoint = 'http://localhost:8090/loginClient'
const getClientByIdEndpoint = 'http://localhost:8090/getClientById/'
const addNewClientEndpoint = 'http://localhost:8090/addNewClient'
const updateClientEndpoint = 'http://localhost:8090/updateClient'

const LoginClient = (login, password) => {
  const [result, setResult] = useState(undefined)
  const body = {
    login,
    password,
  }
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .post(loginClientEndpoint, body)
        .then((response) => {
          setResult(response.data)
        })
        .catch((errors) => {
          setResult(errors)
        })
    }
    fetchData()
  }, [])
  return result
}

const GetClientById = (id) => {
  const [result, setResult] = useState(undefined)
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(getClientByIdEndpoint + id)
        .then((response) => {
          setResult(response.data)
        })
        .catch((errors) => {
          setResult(errors)
        })
    }
    fetchData()
  }, [])
  return result
}

const AddNewClient = (newClient) => {
  const [result, setResult] = useState(undefined)
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .post(addNewClientEndpoint, newClient)
        .then((response) => {
          setResult(response.data)
        })
        .catch((errors) => {
          setResult(errors)
        })
    }
    fetchData()
  }, [])
  return result
}

const UpdateClient = (newClient) => {
  const [result, setResult] = useState(undefined)
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .post(updateClientEndpoint, newClient)
        .then((response) => {
          setResult(response.data)
        })
        .catch((errors) => {
          setResult(errors)
        })
    }
    fetchData()
  }, [])
  return result
}

export {
  LoginClient, GetClientById, AddNewClient, UpdateClient,
}
