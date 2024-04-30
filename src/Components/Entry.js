import React, { useState } from 'react';
import './Entry.css';

function Transactionbtn() {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  });
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransactions([...transactions, formData]);
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: ""
    }); // Reset form data after submission
  };

  return (
    <div className='container'>
      <form className='transaction' onSubmit={handleSubmit}>
        <input
          type='date'
          id='date'
          onChange={handleChange}
          value={formData.date}
        />
        <input
          type='text'
          id='description'
          placeholder='Description'
          onChange={handleChange}
          value={formData.description}
        />
        <input
          type='text'
          id='category'
          placeholder='Category'
          onChange={handleChange}
          value={formData.category}
        />
        <input
          type='number'
          id='amount'
          placeholder='Amount'
          onChange={handleChange}
          value={formData.amount}
        />
        <button type="submit">Add Transaction</button>
      </form>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>${transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactionbtn;




