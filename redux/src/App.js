import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {ADD_CASH, GET_CASH} from './store/cashReducer';
import {ADD_CUSTOMER, REMOVE_CUSTOMER} from './store/customerReducer';
import {addCustomerAction, removeCustomerAction} from './store/customerReducer';
import {addCashAction, getCashAction} from './store/cashReducer';
import { fetchCustomers } from './asyncActions/customers';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);   //два раза кэш, тк обращаемся к стору, гдк лежит объект rootReducer, в нем есть cash, а в этом кэш еще один cash
  //диспатч это функция, которая принимает в качестве параметра action
  const customers = useSelector(state => state.customers.customers);

  let addMoney = (cash) => {
    return dispatch(addCashAction(cash))
  }

  let getMoney = (cash) => {
    return dispatch(getCashAction(cash))
  }

  let addUser = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    return dispatch(addCustomerAction(customer))
  }

  let removeUser = (customer) => {
    return dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <button onClick={() => addMoney(Number(prompt()))}>add money</button>
      <button onClick={() => getMoney(Number(prompt()))}>get money</button>
      <button onClick={() => addUser(prompt())}>добавить клиента</button>
      <button onClick={() => dispatch(fetchCustomers())}>get клиентов из базы</button>

      <div className='field'>{cash}</div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer => <div onClick={() => removeUser(customer)}>{customer.name}</div>)}
        </div>
        :
        <div>
          Клиенты отсутствуют
        </div>
      }
    </div>
  );
}

export default App;
