import React from 'react'
import './Entry.css'

function Transactionbtn() {
  const handleChange =(id)=>{
console.log(id);
  }
  return (
    <div class='container'>
      <div class='transaction'>
        <input
        type='date'
        id='handleChange'
        />
        <input
        type='text'
        id='description'
        placeholder='Description'
        value={FormData.description}
        />
        <input
        type='text'
        id='description'
        placeholder='Category'/>
        <input
        type='text'
        id='description'
        placeholder='Amount'/>
 
      </div>
      <div class='button'>
      <button>Add Transaction</button>
      </div>
    </div>
  )
}

export default Transactionbtn
