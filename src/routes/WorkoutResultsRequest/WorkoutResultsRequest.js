import axios from 'axios'
import { useState, useEffect } from 'react'

const createWorkoutResultsEndpoint = 'http://localhost:8090/createWorkoutResults'
const getWorkoutResultsEndpoint = 'http://localhost:8090/getWorkoutResults/'
const GetWorkoutResults = (id) => {
  const [result, setResult] = useState(undefined)
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(getWorkoutResultsEndpoint + id)
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

const CreateWorkoutResult = (newWorkoutResult) => {
  const [result, setResult] = useState(undefined)
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .post(createWorkoutResultsEndpoint, newWorkoutResult)
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

export { GetWorkoutResults, CreateWorkoutResult }
