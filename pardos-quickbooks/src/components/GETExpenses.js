
const GetExpenses = ({expData}) => {
  return (
    <div>
      <p>{expData.fields.Expense}</p>
      <p>${expData.fields.Price}</p>
    </div>
  )
}

export default GetExpenses