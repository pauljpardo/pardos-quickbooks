import axios from 'axios'
import { useEffect, useState } from 'react'
import GetExpenses from './components/GETExpenses'
import PostExpenses from './components/PostExpenses'
import './App.css'
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
const API_URL= 'https://api.airtable.com/v0/appIyBV0aECOah3WC/Table%201?api_key=keyp7EhQcdEAhoxyV'
                

function App() {
  const [expenseList, setExpenseList] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)
  

  useEffect(() => {

    const getExpenses = async () => {
      const resp = await axios.get(API_URL);
      console.log(resp.data.records)
      setExpenseList(resp.data.records);
    }

    getExpenses();
    console.log('Expense list')
    
  }, [toggleFetch]);

  return (
    <div>
      <PostExpenses
        toggleFetch={toggleFetch}
        setToggleFetch={setToggleFetch}
      />

      <hr />
      <table>
         <tr>
          <th>Expense</th>
          <th>Price</th>
          <th>Seller</th>
          <th>Date</th>
        </tr>
        
      {expenseList.map((getExpenses) => (
        
        
        <GetExpenses
          key={getExpenses.id}
          expData={getExpenses}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
          />
          
        
      )

)}
        </table>    
    </div>
  );
}

export default App;
