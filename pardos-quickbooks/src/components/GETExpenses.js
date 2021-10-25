
const GetExpenses = ({expData}) => {
  return (
    <div>
      <p>{expData.fields.Expense}</p>
      <p>${expData.fields.Price}</p>
      <p>{expData.fields.seller}</p>
      <p>{ expData.fields.date }</p>
    </div>
  )
}

export default GetExpenses