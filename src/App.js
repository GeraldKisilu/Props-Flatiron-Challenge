import './App.css';
import Navbar from './Components/Navbar'; 
import Searchbar from './Components/Searchbar';
import Entry from './Components/Entry';
// import TransactionItem from './Components/TransactionItem';
import Transactions from './Components/Transactions';
import {useState} from 'react';


function App() {
  const [data, setData] =useState({})
  return (
    <div className="App">
      <Navbar />
      <Searchbar/>
      <Entry/>
      {/* <TransactionItem/> */}
      <Transactions/>
      
    </div>
  );
}

export default App;
