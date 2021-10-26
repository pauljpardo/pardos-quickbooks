/*
button
  -> make axios call
Need ID

*/

import axios from "axios"
const API_URL = 'https://api.airtable.com/v0/appIyBV0aECOah3WC/Table%201?api_key=keyp7EhQcdEAhoxyV'

const DeleteExpense = ({expData}) => {

console.log('delete expense')

    await axios.delete(API_URL)
  
  return (
  <button onClick={DeleteExpense}>Delete</button>
)

}

export default DeleteExpense