import React from 'react';
import {MdSend} from 'react-icons/md';

const ExpenseForm = ({
  charge,amount, handleCharge, handleAmount, handleSubmit, edit
}) => {
  return <form onSubmit={handleSubmit}>
    <div className='form-center'>
      <div className='form-group'>
        <input type='text' className='form-control' id='charge' name='charge' placeholder='지출항목' value={charge} onChange={handleCharge}/>
      </div>
      <div className='form-group'>
        <input type='text' className='form-control' id='amount' name='amout' placeholder='비용' value={amount} onChange={handleAmount}/>
      </div>
    </div>

    <button type='submit' className='btn'>
    {edit?'수정':'제출'}</button>
  </form>;
};

export default ExpenseForm