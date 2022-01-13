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
      result = errors.message
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
      result = errors.message
    })
  return result
}

export { getWorkoutResults, createWorkoutResult }
