import { useState } from 'react'

const PostExpenses = () => {
  const [postExpense, setPostExpense] = useState('')
  const [postPrice, setPostPrice] = useState(0)
  const [postSeller, setPostSeller] = useState('')
  const [postDate, setPostDate] = useState('')




  return (
    <form >
        <label htmlFor='expense'>Expense: </label>
        <input type='text' id='expense' />
        
        <input type='submit' />
      </form>
  )
}

export default PostExpenses