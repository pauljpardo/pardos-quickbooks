/*
button
  -> make axios call
Need ID

*/

import axios from "axios"


const API_URL = 'https://api.airtable.com/v0/appIyBV0aECOah3WC/Table%201?api_key=keyp7EhQcdEAhoxyV'

const DeleteExpense = ({ expData, toggleFetch, setToggleFetch }) => {
  

  const deleteAxios = async () => {
    console.log(expData)
    await axios.delete(API_URL + `&records[]=${expData.id}`)
    setToggleFetch(!toggleFetch)
  }
  //  await axios.delete()
  
  return (
  <button onClick={deleteAxios}>Delete</button>
)

}

export default DeleteExpense