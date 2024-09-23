import React from 'react'
import Item from './ExpenseItem'
const ExpenseList = ({expenses,handleDelete,handleEdit,clearItems}) => {
  return (
    <>
      <ul className='list'>
        {expenses.map((expense)=>{
          return <Item key={expense.id} expense={expense} handleDelete={handleDelete} handleEdit={handleEdit} />;
        })}
      </ul>
      {expenses.length > 0 && <button className='btn remove-btn' onClick={clearItems}>
        목록 지우기
      </button>}
    </>
  )
};

export default ExpenseList;