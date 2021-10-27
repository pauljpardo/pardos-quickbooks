import axios from "axios"
import { useHistory } from "react-router"


const API_URL = 'https://api.airtable.com/v0/appIyBV0aECOah3WC/Table%201?api_key=keyp7EhQcdEAhoxyV'

const EditExpense = ({  expData, toggleFetch, setToggleFetch, putExpense, putPrice, putSeller, putDate , setPutDate, setPutExpense, setPutSeller, setPutPrice}) => {

 const history = useHistory()

  const handlePutReq = async (ev) => {
    ev.preventDefault();

    const updatedExpenseData = {
      records: [
        {
          id: expData.id,
          fields: {
            Expense: putExpense,
            Price: putPrice,
            seller: putSeller,
            date: putDate,
          }
        }
      ]

    }
    await axios.put(API_URL, updatedExpenseData);
    setToggleFetch(!toggleFetch)
    history.push('/');
  }
    return (
      //<button onClick={handlePutReq}>Edit</button>

      <form onSubmit={ handlePutReq } >
      <label htmlFor='Expense'>Expense: </label>
      <input type='text' id='Expense' value= {putExpense} onChange={(ev) => setPutExpense(ev.target.value)} />

      <label htmlFor='Price'>Price: </label>
      <input type='text' id='Price' value={putPrice} onChange={(ev) => setPutPrice(ev.target.value)} />

      <label htmlFor='seller'>Seller: </label>
      <input type='text' id='seller' value={putSeller} onChange={(ev) => setPutSeller(ev.target.value)} />

      <label htmlFor='date'>Date: </label>
      <input type='text' id='date' value={putDate} onChange={(ev) => setPutDate(ev.target.value)} />

      
      <input type='submit' />
      </form>
    )

  
}

export default EditExpense