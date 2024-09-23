import React,{useState} from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';
import { v4 as uuid } from 'uuid';


const initialExpenses = [
];


function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const [charge, setCharge] = useState('');

  const [amount, setAmount] = useState('');

  const [alert, setAlert] = useState({show:false});

  const [edit, setEdit] = useState(false);

  const [id, setId] = useState(0);

  const handleCharge = (e) =>{
    setCharge(e.target.value);
  }
  const handleAmount = (e) =>{
    setAmount(e.target.value);
  };

  const handleAlert = ({type,text}) => {
    setAlert({show:true,type,text});
    setTimeout(() => {
      setAlert({show:false})
    },3000)
  }

  const handleSubmit = (e) =>{
    
    e.preventDefault();
    if(charge !== '' && amount>0){
      if(edit){ 
        let tempExpenses = expenses.map(item => {
          return item.id === id? {...item,charge,amount}:item;
        })
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({type:'edit',text:'지출 내역이 수정되었습니다.'});
      }else{ 
        const singleExpense = {id:uuid(),charge,amount};
        setExpenses([...expenses,singleExpense]);
       
        handleAlert({type:'success',text:'지출 내역이 추가되었습니다.'});
      }
      setCharge('');
      setAmount('');
    }else{

      handleAlert({type:'danger',text:'입력하지 않은 항목이 있거나 값이 잘못되었습니다.'})
    }
  }

  console.log(expenses);
  
  const clearItems = () => {

    setExpenses([]);
    handleAlert({type:'danger',text:'모든 지출 내역이 삭제되었습니다.'})
  };

  const handleDelete = (id) => {

    let tempExpenses = expenses.filter(item => 
      item.id !==id);
    setExpenses(tempExpenses);
    handleAlert({type:'danger',text:'지출 내역이 삭제되었습니다'})
  }

  const handleEdit = (id) => {
    let expense = expenses.find(item => item.id === id);
    let {charge,amount} = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  }

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1>예산 계산기</h1>
      <main className='App'>
        <ExpenseForm 
        charge={charge} amount={amount} handleCharge={handleCharge} handleAmount={handleAmount} handleSubmit={handleSubmit} edit={edit}
        />
        <ExpenseList expenses={expenses} handleDelete={handleDelete} handleEdit={handleEdit} clearItems={clearItems} />
      </main>
      <h1>총 지출 <span className='total'>
        {expenses.reduce((acc,curr)=>{
          return acc+=parseInt(curr.amount);
        },0)}
      </span>원</h1>
    </>
  );
}

export default App;
