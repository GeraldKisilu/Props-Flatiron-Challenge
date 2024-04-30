import React, { useState } from 'react'
import './Entry.css'
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';



function Transactionbtn() {
  const [Formdata, setFormdata] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  })
  const [transactions, setTransactions] = useState(Formdata)
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormdata({
      ...FormData,
      [id]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setTransactions([...transactions, Formdata])
  }
  return (
    <div class='container'>
      <div class='transaction' onSubmit={handleSubmit}>
        <input
          type='date'
          id='date'
          onchange={handleChange}
          value={FormData.date}
        />
        <input
          type='text'
          id='description'
          placeholder='Description'
          onChange={handleChange}
          value={FormData.description}
        />
        <input
          type='text'
          id='description'
          placeholder='Category'
          onChange={handleChange}
          value={FormData.category}
        />
        <input
          type='text'
          id='description'
          placeholder='Amount'
          onChange={handleChange}
          value={FormData.amount}
        />

      </div>
      <div class='button'>
        <button>Add Transaction</button>
      </div>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Amount</th>
              {/* <th scope="col">Delete <br/>Transaction</th> */}
            </tr>
          </thead>
          <tbody>
            {transactions.map(({ id, date, description, category, amount, quantity }) => (
              <tr key={id}>
                <td>{date}</td>
                <td>{description}</td>
                <td>{category}</td>
                <td>${amount}</td>
                <td>{quantity}</td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Transactionbtn
