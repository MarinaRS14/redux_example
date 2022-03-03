const defaultState = {
    cash: 0
  };
  // const action = {
  //   type: 'ADD_CASH',
  //   payload: 1,
  // }

  export const ADD_CASH = "ADD_CASH";
  export const GET_CASH = "GET_CASH";

  const cashReducer = (state = defaultState, action) => {
    switch(action.type) {
      case ADD_CASH:
        return {...state, cash: state.cash+action.payload};
      case GET_CASH:
        return {...state, cash: state.cash-action.payload};
      default:
        return  state;
    }
  }
  
export default cashReducer;

export const addCashAction = (payload) => {
    return {type: ADD_CASH, payload}
};
export const getCashAction = (payload) => {
    return {type: GET_CASH, payload}
}