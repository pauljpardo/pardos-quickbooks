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
 
  return (
    
    <tr className='get-request-list'>

    
        <td>{expData.fields.Expense}</td>
        <td>${expData.fields.Price}</td>
        <td>{expData.fields.seller}</td>
        <td>{expData.fields.date}</td>
      

      
<td>
      <Link to={`/EditExpense/${expData.id}`}>
        <button>Edit</button> 
      </Link>

      <DeleteExpense
        expData={expData}
        toggleFetch={toggleFetch}
        setToggleFetch={setToggleFetch}
      />

      <Route path={`/EditExpense/${expData.id}`} exact>
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
  </td>
</tr>
  )
}

export default GetExpenses