import { useState } from 'react'

const PostExpenses = () => {
  const [postExpense, setPostExpense] = useState('')
  const [postPrice, setPostPrice] = useState(0)
  const [postSeller, setPostSeller] = useState('')
  const [postDate, setPostDate] = useState('')

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // To make a post req
    // write axios exporting info 
    // 
  console.log('form submitted?')
}

  return (
    <form onSubmit={ handleSubmit } >
      <label htmlFor='expense'>Expense: </label>
      <input type='text' id='expense' onChange={(ev) => setPostExpense(ev.target.value)} />

      <label htmlFor='price'>Price: </label>
      <input type='integer' id='price' onChange={(ev) => setPostPrice(ev.target.value)} />

      <label htmlFor='seller'>Seller: </label>
      <input type='text' id='seller' onChange={(ev) => setPostSeller(ev.target.value)} />

      <label htmlFor='date'>Date: </label>
      <input type='text' id='date' onChange={(ev) => setPostDate(ev.target.value)} />

      
      <input type='submit' />
      </form>
  )
}

export default PostExpenses