const defaultState = {
    customers: []
  };

export const ADD_CUSTOMER = "ADD_CUSTOMER";
export const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";
export const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";

const customerReducer = (state = defaultState, action) => {
    switch(action.type) {
      case ADD_CUSTOMER:
        return {...state, customers: [...state.customers, action.payload]};
      case REMOVE_CUSTOMER:
        return {...state, customers: state.customers.filter(customer => customer.id !== action.payload) };
      case ADD_MANY_CUSTOMERS:
          return {...state, customers: [...state.customers, ...action.payload]}
      default:
        return  state;
    }
  }

export default customerReducer;


//в диспатч мы передаем однотипные объект экшн - этот момент можно оптимизировать путем создания функции action creator. это простейшая функция, которая будет возвращать объект. т.е мы передаем в эту функцию какие-то данные, на основе которых функция возвращает объект

export const addCustomerAction = (payload) => {
    return {type: ADD_CUSTOMER, payload}
};
export const removeCustomerAction = (payload) => {
    return {type: REMOVE_CUSTOMER, payload}
}
export const addManyCustomersAction = (payload) => {
    return {type: ADD_MANY_CUSTOMERS, payload}
}