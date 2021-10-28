import axios from 'axios'
import { useEffect, useState } from 'react'
import GetExpenses from './components/GETExpenses'
import PostExpenses from './components/PostExpenses'
import './App.css'

const API_URL= 'https://api.airtable.com/v0/appIyBV0aECOah3WC/Table%201?api_key=keyp7EhQcdEAhoxyV'
                

function App() {
  const [expenseList, setExpenseList] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)
  

  useEffect(() => {

    const getExpenses = async () => {
      const resp = await axios.get(API_URL);
      setExpenseList(resp.data.records);
    }

    getExpenses();
    
  }, [toggleFetch]);

  return (
    <div>
      <PostExpenses
        toggleFetch={toggleFetch}
        setToggleFetch={setToggleFetch}
      />

      <hr />
      <div className='table-container'>
      <table>
         <tr>
          <th>Expense</th>
          <th>Price</th>
          <th>Seller</th>
            <th>Date</th>
            <th>Edit/Delete</th>
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
    </div>
  );
}

export default App;
