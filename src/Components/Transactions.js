import React from 'react'
import "./Transactions.css"
import TransactionItem from './TransactionItem'
import { bankTransactions } from './Data'

function Transactions() {
    return (
        <div className='transactions-container'>
            <TransactionItem props ={bankTransactions}/>
        </div>
    )
}

export default Transactions
