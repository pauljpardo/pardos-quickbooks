//Post Req

import axios from 'axios'
import { useState } from 'react'

const API_URL = 'https://api.airtable.com/v0/appIyBV0aECOah3WC/Table%201?api_key=keyp7EhQcdEAhoxyV'

const PostExpenses = ({Expense, Price, seller, date, toggleFetch, setToggleFetch}) => {
  const [postExpense, setPostExpense] = useState('')
  const [postPrice, setPostPrice] = useState('')
  const [postSeller, setPostSeller] = useState('')
  const [postDate, setPostDate] = useState('')


  const handleSubmit = async (ev) => {
    ev.preventDefault();
    //axios exporting info 
    // create new data object
    const newExpensePost = {
      records: [
        {
          fields: {
            Expense: postExpense,
            Price: postPrice,
            seller: postSeller,
            date: postDate,
          }
        }
      ]
    }
  
    await axios.post(API_URL, newExpensePost);
    setToggleFetch(!toggleFetch);


  //   const handlePutReq = async (ev) => {
  //     ev.preventDefault();
  //     const 
  // }
    // props.setToggleFetch((curr) => !curr);
    // setPostExpense('')
    // setPostPrice(0)
    // setPostSeller('')
    // setPostDate('')

  console.log('form submitted?')
}

  return (
    <form onSubmit={ handleSubmit } >
      <label htmlFor='Expense'>Expense: </label>
      <input type='text' id='Expense' value= {Expense} onChange={(ev) => setPostExpense(ev.target.value)} />

      <label htmlFor='Price'>Price: </label>
      <input type='text' id='Price' value={Price} onChange={(ev) => setPostPrice(ev.target.value)} />

      <label htmlFor='seller'>Seller: </label>
      <input type='text' id='seller' value={seller} onChange={(ev) => setPostSeller(ev.target.value)} />

      <label htmlFor='date'>Date: </label>
      <input type='text' id='date' value={date} onChange={(ev) => setPostDate(ev.target.value)} />

      
      <input type='submit' />
      </form>
  )
}

export default PostExpenses