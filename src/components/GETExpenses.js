// Get req Html
import DeleteExpense from "./Delete"

const GetExpenses = ({ expData, toggleFetch, setToggleFetch }) => {
 

  return (
    <div className='get-request-list'>
      <h3>{expData.fields.Expense}</h3>
      <p>${expData.fields.Price}</p>
      <p>{expData.fields.seller}</p>
      <p>{expData.fields.date}</p>

      <DeleteExpense
        expData={expData}
        toggleFetch={toggleFetch}
        setToggleFetch={setToggleFetch}
      />

    </div>
  )
}

export default GetExpenses