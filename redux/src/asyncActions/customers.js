import { addManyCustomersAction } from "../store/customerReducer"

export const fetchCustomers = () => {
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => dispatch(addManyCustomersAction(json)))
    }
}

//функция возвращает функцию,чтобы мы могли прокидывать ее в диспатч (использовать как экшн)