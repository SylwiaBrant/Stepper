import axios from 'axios'

const createWorkoutResultsEndpoint = 'http://localhost:8090/createWorkoutResults'
const getWorkoutResultsEndpoint = 'http://localhost:8090/getWorkoutResults/'

const GetWorkoutResults = (id) => {
  axios
    .get(getWorkoutResultsEndpoint + id)
    .then((response) => {
      console.log('response')
      console.log(response)
    })
    .catch((errors) => {
      console.log('errors')
      console.log(errors)
    })
}

const CreateWorkoutResult = (newWorkoutResult) => {
  console.log('newWorkoutResult')
  console.log(newWorkoutResult)
  axios
    .post(createWorkoutResultsEndpoint, newWorkoutResult)
    .then((response) => {
      console.log('response')
      console.log(response)
    })
    .catch((errors) => {
      console.log('errors')
      console.log(errors)
    })
}

export { GetWorkoutResults, CreateWorkoutResult }
