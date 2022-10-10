import React from 'react'
import AddStockForm from '../components/AddStockForm'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const AddStock = () => {
    return (
        <>

            <div className='d-flex'>
                <Sidebar />
                <div style={{ width: '100%' }}>
                    <Navbar />
                    <AddStockForm />
                </div>

            </div>

        </>

    )
}

export default AddStock