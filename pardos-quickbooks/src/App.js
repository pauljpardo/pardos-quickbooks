import axios from 'axios'
import { useEffect, useState } from 'react'
import GetExpenses from './components/GETExpenses'
/*
Budget App
  What is needed:
    - input form to add expenses
    - useEffect to GET request our existing expenses and populate them onto the page
    - 

Components: Form, Nav, Resources, About us page, footer, ExpenseList (inside app)
State: 
App
  -GET 
    -Render expenses
ExpensePost
    -Delete
Form
    - POST
    - PMVP (PUT) request
    - 
 - 


 - get request will be inside the useEffect 
 
*/



function App() {
  const [expenseList, setExpenseList] = useState([])
  

  useEffect(() => {

    const getExpenses = async () => {
      const resp = await axios.get('https://api.airtable.com/v0/appIyBV0aECOah3WC/Table%201?api_key=keyp7EhQcdEAhoxyV');
      console.log(resp.data.records)
      setExpenseList(resp.data.records);
    }

    getExpenses();
    console.log('Expense list')
    
  }, []);



  return (
    <div>
      {expenseList.map((getExpenses) => (
      
        <GetExpenses
          key={getExpenses.id}
          expData={getExpenses}
        />
      ))}

    </div>
  );
}

export default App;
