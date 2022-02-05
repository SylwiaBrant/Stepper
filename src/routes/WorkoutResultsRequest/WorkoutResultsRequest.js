import axios from 'axios'

const createWorkoutResultsEndpoint = 'http://localhost:8090/createWorkoutResults'
const getWorkoutResultsEndpoint = 'http://localhost:8090/getWorkoutResults/'

const getWorkoutResults = async (id) => {
  let result
  await axios
    .get(getWorkoutResultsEndpoint + id)
    .then((response) => {
      result = response.data
    })
    .catch((errors) => {
      result = handleErrors(errors)
    })
  return result
}

const createWorkoutResult = async (newWorkoutResult) => {
  let result
  await axios
    .post(createWorkoutResultsEndpoint, newWorkoutResult)
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

export { getWorkoutResults, createWorkoutResult }
