// Get req Html
import DeleteExpense from "./Delete"
import EditExpense from "./Put"
import { Link, Route } from 'react-router-dom'
import { useState } from "react"


const GetExpenses = ({ expData, toggleFetch, setToggleFetch }) => {
  const [putExpense, setPutExpense] = useState(expData.fields.Expense)
  const [putPrice, setPutPrice] = useState(expData.fields.Price)
  const [putSeller, setPutSeller] = useState(expData.fields.seller)
  const [putDate, setPutDate] = useState(expData.fields.date)

//.map 
  return (
    <div className='get-request-list'>
      <h3>{expData.fields.Expense}</h3>
      <p>${expData.fields.Price}</p>
      <p>{expData.fields.seller}</p>
      <p>{expData.fields.date}</p>

      <Link to='/EditExpense'>
         <button>Edit</button>
      </Link>

      <DeleteExpense
        expData={expData}
        toggleFetch={toggleFetch}
        setToggleFetch={setToggleFetch}
      />

      <Route path='/EditExpense' exact>
         <EditExpense
          expData={expData}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
          putExpense={putExpense}
          putPrice={putPrice}
          putSeller={putSeller}
          putDate={putDate}
          setPutExpense={setPutExpense}
          setPutDate={setPutDate}
          setPutSeller={setPutSeller}
          setPutPrice={setPutPrice}


            />
      </Route>


    </div>
  )
}

export default GetExpenses