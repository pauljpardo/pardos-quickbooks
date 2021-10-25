import { useState } from 'react'

const PostExpenses = () => {

  
  return (
    <form >
        <label htmlFor='expense'>Expense: </label>
        <input type='text' id='expense' />
        
        <input type='submit' />
      </form>
  )
}

export default PostExpenses