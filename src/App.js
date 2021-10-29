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
    <div className='highest-div'>
      <PostExpenses
        toggleFetch={toggleFetch}
        setToggleFetch={setToggleFetch}
      />

      <hr />
      
        <div className='table-div'><table>
          <tbody>
         <tr>
          <th>Expense</th>
          <th>Price</th>
          <th>Seller</th>
            <th>Date</th>
            <th>Edit/Delete</th>
          </tr>
          </tbody>
          
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
      
      <div className='imgs'>
        <img className='img-1' alt='girl using cell phone'src='https://www20.wellsfargomedia.com/assets/images/contextual/banner/checking/1200x532/6825911_gettyimages-1153899955_img_hph_1200x532.jpg' />
        <img className='img-2' alt='budgeting graphic'src='https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/are-you-wasting-your-google-ads-budget_-11-lessons-learned-in-audits-1600x840-612e46c946598-sej-1520x800.jpeg' />
      </div>
        </div>
    
  );
}

export default App;
