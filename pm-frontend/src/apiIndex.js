import { API } from "./config"

//to fetch all stocks
export const allStocks = () => {
    return fetch(`${API}/stocklists`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

//to add stock transaction

export const addStock = (stock) => {
    return fetch(`${API}/posttransaction`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(stock)
    }).then(response => {
        return response.json()
    })
        .catch(err => console.log(err))
}

//to get all transaction
export const allTransaction = () => {
    return fetch(`${API}/transactionlists`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}