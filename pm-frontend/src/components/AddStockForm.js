import React, { useState, useEffect } from 'react'
import { allStocks, addStock } from '../apiIndex'


const AddStockForm = () => {
    const [values, setValues] = useState({
        stocks: [],
        stock_name: '',
        transaction_type: '',
        quantity: '',
        price_per_unit: '',
        transaction_date: '',
        error: '',
        success: false,


    })

    const { stocks, stock_name, transaction_type, quantity, price_per_unit, transaction_date, error, success } = values

    //load stocks and set form data
    const init = () => {
        allStocks().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            }
            else {
                setValues({ ...values, stocks: data, formData: new FormData })
            }
        })
    }
    useEffect(() => {
        init()
    }, [])

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }


    const handleSubmit = e => {
        e.preventDefault()
        setValues({ ...values, error: false })

        //add stock function
        addStock({ stock_name, transaction_type, quantity, price_per_unit, transaction_date })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })

                }
                else {
                    setValues({ ...values, quantity: '', price_per_unit: '', transaction_date: '', success: true })
                }
            })
    }
    //show error msg
    const showError = () => (
        <div className='alert alert-danger' style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    )
    //to show success msg
    const showSuccess = () => (
        <div className='alert alert-info' style={{ display: success ? '' : 'none' }}>
            Stock Added
        </div>
    )
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-8 mx-auto mt-4'>
                    <form className='shadow-lg p-3'>
                        <h2 className='text-muted'>Add Stocks</h2>
                        {showError()}
                        {showSuccess()}
                        <div className='mb-3'>
                            <label htmlFor='stockName'>Stock Name</label>
                            <select className='form-control' onChange={handleChange('stock_name')}>
                                <option></option>
                                {
                                    stocks.map((s, i) => (
                                        <option key={i} value={s._id}>{s.stock_name}</option>
                                    ))
                                }

                            </select>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='transactionType'>Transaction Type</label>
                            <select className='form-control' onChange={handleChange('transaction_type')}>
                                <option></option>
                                <option value='buy'>Buy</option>
                                <option value='sell'>Sell</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='quantity'>Quantity</label>
                            <input type="number" name='quantity' id='quantity' className='form-control'
                                onChange={handleChange('quantity')} value={quantity}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='pricePerUnit'>Price per Unit</label>
                            <input type="number" id='pricePerUnit' className='form-control'
                                onChange={handleChange('price_per_unit')} value={price_per_unit}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='transactionDate'>Transaction Date</label>
                            <input type="date" name='transaction_date' id='transactionDate' className='form-control'
                                onChange={handleChange('transaction_date')} value={transaction_date}
                            />
                        </div>
                        <div className='mb-3'>
                            <button className='btn btn-primary' onClick={handleSubmit}>
                                AddStocks
                            </button>
                        </div>

                    </form>
                </div>
            </div >

        </div >
    )
}

export default AddStockForm